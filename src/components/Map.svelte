<script>
// import { onMount } from 'svelte';
import * as topojson from 'topojson-client';
import { geoMercator, geoPath } from 'd3-geo';
import { draw } from 'svelte/transition';

export let data;
export let weatherData;

const width = 960;
const height = 1160;

const projection = geoMercator()
                    .center([100, 50])
                    .scale(240)
                    .rotate([-180, 0])

const path = geoPath().projection(projection)
const countries = topojson.feature(data, data.objects.subunits)
const places = topojson.feature(data, data.objects.places)
const weatherPlaces = weatherData

let boundaries = topojson.mesh(data, data.objects.subunits, (a, b) => { return a !== b; })
const transform = data.transform

const transformPoint = (transform, position) => {
    position = position.slice();
    position[0] = position[0] * transform.scale[0] 
        + transform.translate[0],
    position[1] = position[1] * transform.scale[1] 
        + transform.translate[1]
    return position;
}
</script>
<style>
.subunit { fill: #cccccc; }

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
.place-label {
    font-size: 0.85rem;
}
</style>

<svg {height} {width}>
    {#each countries.features as country}
        <path class={`subunit ${country.id}`} d={path(country)}></path>
    {/each}
    <path class="subunit-boundary" d={path(boundaries)}></path>
    {#each places.features as place, i}
        <!-- <path d={path(place)} class="place"></path> -->
        {#if place.properties.name in weatherData}
            <!-- exclude Vancouver, WA. early return would be easier! -->
            {#if place.properties.name !== 'Vancouver'}
            <text
                class="place-label"
                transform={`translate(${path.centroid(place)})`}
            >
                {place.properties.name}
            </text>
            {:else if Math.floor(place.geometry.coordinates[1]) !== 45}
            <text
                class="place-label"
                transform={`translate(${path.centroid(place)})`}
            >
                {place.properties.name}
            </text>
            {/if}
        {/if}
    {/each}
</svg>
