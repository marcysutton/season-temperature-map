<script>
    import d3 from 'd3';
    import 'topojson-client';

    import data from '../../data/nam.js';
    import weatherData from '../../data/weathermap.js';
    import Map from './Map.svelte';
    export let name;
</script>

<h1>{name}</h1>

<Map {data} {weatherData} />
