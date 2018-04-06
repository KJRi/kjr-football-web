<template>
  <div class="list">
    <group>
      <cell link="/my/shoppingCart" inline-desc='个人简介'></cell>
      <popup-radio title="我的提醒" :options="options2" v-model="option2" placeholder="" class="pop"></popup-radio>
      <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" placeholder="请订阅比赛或球队" inline-desc="我的订阅" :show.sync="showAddress"></x-address>
      <popup-radio title="客服" :options="options5" v-model="option5" class="pop">
      </popup-radio>
      <cell link="/my/member" inline-desc='会员中心'></cell>
      <popup-radio title="关于" :options="options7" v-model="option7" placeholder="" class="pop">
      </popup-radio>
    </group>
  </div>
</template>
<script>
import {
  Group,
  Popup,
  PopupRadio,
  TransferDom,
  XAddress,
  ChinaAddressData,
  Cell
} from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Popup,
    PopupRadio,
    TransferDom,
    XAddress,
    ChinaAddressData,
    Cell
  },
  data() {
    return {
      radio001: [
        "满100减10",
        "满300减50",
        "满500减120",
        "满800减200",
        "满1000减300"
      ],
      addressData: ChinaAddressData,
      option2: "",
      value: [],
      showAddress: false,
      options2: [
        {
          key: "A",
          value: "label A"
        },
        {
          key: "B",
          value: "label B"
        }
      ],
      show6: false,
      title6: "选择地址",
      title: "",
      value6: [],
      show9: false,
      option5: "",
      options5: ["客服1", "客服2", "客服3"],
      option7: "",
      options7: ["相关信息"]
    };
  },
  methods: {
    change(value, label) {
      console.log("change:", value, label);
    },
    logHide(str) {
      console.log("on-hide", str);
    },
    logShow(str) {
      console.log("on-show");
    }
  }
};
</script>
<style scoped>
.popup1 {
  width: 100%;
  height: 100%;
}
.pop {
  color: #666666;
  font-size: 14px;
}
.list {
  margin-top: -20px;
  border-bottom: 1px solid gainsboro;
}
</style>
