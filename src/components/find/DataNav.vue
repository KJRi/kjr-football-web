<template>
  <div class="dataNav">
      <panel :header="header" :list="list" @on-img-error="onImgError"></panel>
  </div>
</template>
<script>
import { Panel } from "vux";
export default {
  components: {
    Panel
  },
  data() {
    return {
      header: "赛事详情",
      list: []
    };
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    isImgHash(imgHash) {
      if (!imgHash) return "";
      var s1 = imgHash.substr(0, 1);
      var s2 = imgHash.substr(1, 2);
      var s3 = imgHash.substr(3);
      var s4 = imgHash.substr(32);
      return (
        "http://fuss10.elemecdn.com" + "/" + s1 + "/" + s2 + "/" + s3 + "." + s4
      );
    },
    getData: function() {
      this.$ajax
        .get(
          "/api/combat?key=APPKEY&hteam=%E7%9A%87%E9%A9%AC&vteam=%E9%98%BF%E5%B0%94%E6%A2%85%E9%87%8C%E4%BA%9A"
        )
        .then(res => {
          console.log(res.data);
          this.data = res.data;
          for (var i = 0; i < this.data.length; i++) {
            function obj(src, title, desc,id) {
              this.src = src;
              this.title = title;
              this.desc = desc;
              this.id = id;
            }
            this.list.push(
              new obj(
                this.isImgHash(this.data[i].image_path),
                this.data[i].name,
                this.data[i].address,
                this.data[i].id,
              )
            );
          }
          console.log(this.list);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
