<script>
import { onMount } from 'svelte'
import * as topojson from 'topojson-client'
import { geoMercator, geoPath } from 'd3-geo'

export let data
export let weatherData

const width = 960
const height = 1160

const projection = geoMercator()
                    .center([100, 50])
                    .scale(240)
                    .rotate([-180, 0])

const path = geoPath().projection(projection)
const countries = topojson.feature(data, data.objects.subunits)
const places = topojson.feature(data, data.objects.places)

let boundaries = topojson.mesh(data, data.objects.subunits, (a, b) => { return a !== b })

let seasonMap
let wrapper
let keyHandler
let mouseHandler
let focusHandler
let blurHandler

$: pathBtnCoords = []
$: currentCityName = ''
$: currentBtnIndex = 0
$: currentCityPosition = {bottom:0, left: 0, right: 0, top: 0}

const DIRECTION = {
    UP: 'ArrowUp', RIGHT: 'ArrowRight', DOWN: 'ArrowDown', LEFT: 'ArrowLeft'
}

onMount(() => {
    let mapRect = seasonMap.getBoundingClientRect()
    let mapWidth = mapRect.width
    let mapHeight = mapRect.height

    // collect rendered interactive path nodes
    const pathBtns = Array.from(seasonMap.querySelectorAll('path[tabindex]'))
    // make first button focusable

    // create array of DOMRects
    pathBtnCoords = pathBtns.map((btn, i) => {
        // set a data attr with a numerical id for fast lookup
        btn.setAttribute('data-placeId', i)
        // store nodes with DOMRect coordinates
        return btn.getBoundingClientRect()
    })

    const getPlaceLabel = (pathEl) => {
        if (!pathEl) {
            return
        }
        let idRef = pathEl.getAttribute('aria-labelledby')
        return document.getElementById(idRef).textContent
    }
    const getCityPosition = (index) => {
        const currentCoord = pathBtnCoords[index]
        const margin = 8
        return {
            bottom: currentCoord.bottom + margin,
            left: (currentCoord.left - wrapper.offsetLeft) + margin,
            right: currentCoord.right + margin,
            top: (currentCoord.top - wrapper.offsetTop) + margin
        }
    }
    const initialize = (node) => {
        node.setAttribute('tabindex', '0')
        node.setAttribute('aria-checked', 'true')
    }
    const activateBtn = (node, index) => {
        // let button index come from mouse or keyboard events
        let btnIndex = index ? index : currentBtnIndex
        initialize(node)
        currentCityName = getPlaceLabel(node)
        currentCityPosition = getCityPosition(btnIndex)
        console.log('active:', currentCityName)
    }
    const distance = (target, rect) => {
        let result = Math.sqrt(Math.pow(target.x - rect.x, 2) + Math.pow(target.y - rect.y, 2))
        // console.log('distance', result)
        return result
    }
    const outOfBounds = (direction, targetRect, rect) => {
        let excluded = false
        switch (direction) {
            // bail out if el is clearly out of bounds
            case DIRECTION.LEFT:
                if (rect.x > targetRect.x) excluded = true
            break
            case DIRECTION.UP:
                if (rect.y > targetRect.y) excluded = true
            break
            case DIRECTION.RIGHT:
                if (rect.x < targetRect.x) excluded = true
            break
            case DIRECTION.DOWN:
                if(rect.y < targetRect.y) excluded = true
            break
        }
        return excluded
    }
    const resetLastBtn = () => {
        let lastBtn = seasonMap.querySelector('path[tabindex="0"]')
        lastBtn.setAttribute('tabindex', '-1')
        lastBtn.setAttribute('aria-checked', 'false')
    }
    const findClosestNeighbor = (target, direction) => {
        const targetIndex = Number(target.dataset.placeId)
        // grab computed boundingClientRect for event.target
        const targetRect = pathBtnCoords[targetIndex]
        let closestRect
        let minDistance = 10000000
        console.log('---target:---', getPlaceLabel(target))
        for (var i = 0; i < pathBtnCoords.length; i++) {
            let rect = pathBtnCoords[i]
            let excluded = outOfBounds(direction, targetRect, rect) || i === targetIndex
            let d = distance(targetRect, rect)
            if (!excluded) {
                if (d < minDistance) {
                    minDistance = d
                    currentBtnIndex = i
                    closestRect = rect
                }
            }
        }
        resetLastBtn()
        let closest = pathBtns[currentBtnIndex]
        activateBtn(closest)
        closest.focus()
    }
    keyHandler = (event) => {
        if (pathBtns.includes(event.target)) {
            if (event.key === DIRECTION.UP || event.key === DIRECTION.DOWN) {
                event.preventDefault()
            }
            switch (event.key) {
                // idea: pre-compute closest points for faster interactions
                case DIRECTION.LEFT:
                case DIRECTION.RIGHT:
                case DIRECTION.UP:
                case DIRECTION.DOWN:
                    findClosestNeighbor(event.target, event.key)
                break
            }
        }
    }
    focusHandler = (event) => {
        if(event.target.dataset.placeId) {
            activateBtn(pathBtns[event.target.dataset.placeId])
        }
    }
    blurHandler = (event) => {
        currentCityName = null
    }
    mouseHandler = (event) => {
        let btnIndex = event.target.dataset.placeId
        activateBtn(pathBtns[btnIndex], btnIndex)
        console.log(currentCityPosition)
    }
    initialize(pathBtns[0])
})
</script>
<style>
.season-map {
    position: relative;
}
.season-map svg {
    outline: none;
}
.subunit {
    fill: #cccccc;
}
.subunit-boundary {
    fill: none;
    stroke: #fff;
    stroke-width: 1;
    stroke-linejoin: round;
}
.subunit-label {
    fill: #404040;
    fill-opacity: 1;
    font-size: 20px;
    font-weight: 600;
    text-anchor: middle;
}
.place {
    cursor: pointer;
    fill: none;
    stroke: #484848;
    stroke-width: 1;
}
.place-label {
    font-size: 0.85rem;
}
.place-popup {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 5px;
    min-height: 260px;
    padding: 0.5em;
    position: absolute;
    width: 180px;
    z-index: 1;
}
.place-popup h2 {
    font-size: 0.95rem;
    text-align: center;
}
.place-popup ul {
    font-size: 0.85rem;
}
</style>

<div class="season-map" bind:this={wrapper}>
    <svg {height} {width}
        on:keydown={keyHandler}
        on:focusin={focusHandler}
        on:focusout={blurHandler}
        bind:this={seasonMap}
        tabIndex="-1"
    >
        <title>Map of locations with temperature data</title>
        {#each countries.features as country}
            <path class={`subunit ${country.id}`} d={path(country)}></path>
        {/each}
        <path class="subunit-boundary" d={path(boundaries)}></path>
        {#each places.features as place, i}
            {#if place.properties.name in weatherData}
                <path
                    aria-checked="false"
                    aria-labelledby={`place-label-${i}`}
                    class="place"
                    d={path(place)}
                    on:mouseover={mouseHandler}
                    role="checkbox"
                    tabindex="-1"
                >
                </path>
                <text
                    class="place-label"
                    id={`place-label-${i}`}
                    transform={`translate(${path.centroid(place)})`}
                >
                    {place.properties.name}
                </text>
            {/if}
        {/each}
    </svg>
    {#if currentCityName}
        <div class="place-popup" style:left={currentCityPosition.left + 'px'} style:top={currentCityPosition.top + 'px'}>
            <h2>{currentCityName} spring equinox temperatures</h2>
            <ul>
                <li>2023 high: <strong>{weatherData[currentCityName].springequinox2023_high}</strong></li>
                <li>2023 low: <strong>{weatherData[currentCityName].springequinox2023_low}</strong></li>
                <li>2013 high: <strong>{weatherData[currentCityName].springequinox2013_high}</strong></li>
                <li>2013 low: <strong>{weatherData[currentCityName].springequinox2013_low}</strong></li>
                <li>1973 high: <strong>{weatherData[currentCityName].springequinox1973_high}</strong></li>
                <li>1973 low: <strong>{weatherData[currentCityName].springequinox1973_low}</strong></li>
                <li>1948 high: <strong>{weatherData[currentCityName].springequinox1948_high}</strong></li>
                <li>1948 low: <strong>{weatherData[currentCityName].springequinox1948_low}</strong></li>
            </ul>
        </div>
    {/if}
</div>