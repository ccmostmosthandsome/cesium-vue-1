<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div id="cesiumContainer">
    </div>
  </div>
</template>

<script>
import Cesium from "cesium/Cesium";
require("cesium/Widgets/widgets.css");
export default {
  data() {
    return {
      msg: "Hello Cesium!"
    };
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
