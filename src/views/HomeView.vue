<template>
  <div class="map-wrapper">
    <SearchContainer />
    <MapContainer />
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer.vue";
import SearchContainer from "@/components/SearchContainer.vue";

export default {
  name: "HomeView",
  props: {},
  components: {
    MapContainer,
    SearchContainer,
  },
};
</script>

<style scoped lang="scss">
.map-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
