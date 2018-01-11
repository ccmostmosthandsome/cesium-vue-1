<template>
  <div id="app">
    <div id="cesiumContainer"> 
    </div>
  </div>
</template>

<script>
import Cesium from "cesium/Cesium";
require("cesium/Widgets/widgets.css");
export default {
  data() {
    return {};
  },
  mounted() {
    const viewer = new Cesium.Viewer("cesiumContainer");
  }
};
</script>

<style>
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
