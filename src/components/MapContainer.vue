<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import Bus from "../bus/bus";

window._AMapSecurityConfig = {
  securityJsCode: "bafbfa1c58d13a310d00ca6773f0f53e",
};
export default {
  name: "MapContainer",
  data() {
    return {
      map: null,
      placeSearch: null,
      autoOptions: {
        input: "",
      },
      auto: null,
      searchPlaceInput: "",
    };
  },
  created() {
    Bus.$on("share_id", (val) => {
      this.autoOptions.input = val;
    }),
      Bus.$on("share", (val) => {
        this.searchPlaceInput = val;
      });
  },

  methods: {
    select(e) {
      this.placeSearch.setCity(e.poi.adcode);
      this.placeSearch.search(e.poi.name); //关键字查询查询
    },
    initMap() {
      AMapLoader.load({
        key: "f8f79565f776e6c09b5c683fa0c053f8", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.ToolBar",
          "AMap.Scale",
          // "AMap.HawkEye",
          // "AMap.MapType",
          "AMap.Geolocation",
          "AMap.PlaceSearch",
          "AMap.AutoComplete",
        ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            resizeEnable: true,
            enableHighAccuracy: true,
            zoom: 10, //初始化地图级别
            center: [119.45099, 26], //初始化地图中心点位置
          });
          this.map.addControl(new AMap.Scale());
          this.map.addControl(new AMap.ToolBar());
          // this.map.addControl(new AMap.HawkEye());
          // this.map.addControl(new AMap.MapType());
          // this.map.addControl(new AMap.Geolocation());
          this.auto = new AMap.AutoComplete(this.autoOptions);

          this.placeSearch = new AMap.PlaceSearch({
            map: this.map,
          }); //构造地点查询类
          this.auto.on("select", this.select);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
  watch: {
    searchPlaceInput(newValue) {
      if (newValue != null) {
        this.placeSearch.search(newValue);
      }
    },
  },
};
</script>

<style lang="scss" scpoed>
#container {
  padding: Opx;
  margin: Opx;
  width: 500px;
  height: 300px;
  background-color: antiquewhite;
  margin: auto;
}
</style>
