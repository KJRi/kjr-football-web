<template>
  <div class="register">
      <Header :title="title"></Header>
      <div class="group">
          <group>
            <x-input title="姓名" placeholder="必填" v-model="name"></x-input>
            <x-input title="密码" type="password" placeholder="必填" v-model="password"></x-input>
            <x-input title="再次输入" type="password" placeholder="必填" v-model="psw"></x-input>
            <x-input title="邮箱" type="email" placeholder="必填" v-model="email"></x-input>
            <x-button type="primary" text="注册" action-type='button' @click.native="goRegister"></x-button>
         </group>
      </div>
      <div class="div"></div>
  </div>    
</template>
<script>
import Header from "../../components/Header.vue";
import { Group, XInput, XButton, Alert, AlertModule } from "vux";
export default {
  methods: {
    goRegister: function() {
      if (!this.name.length) {
        AlertModule.show({
          content: "您还未填写名字!"
        });
      }
      if (this.psw != this.password) {
        AlertModule.show({
          content: "两次密码不一致!"
        });
      }
      var userInfo = {
        name: this.name,
        password: this.password,
        psw: this.psw,
        email: this.email
      };
      //   console.log(userInfo);
      axios
        .post("/user/regist", userInfo, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function(response) {
          console.log(response);
        });
    }
  },
  components: {
    Header,
    Group,
    XInput,
    XButton,
    Alert,
    AlertModule
  },
  data() {
    return {
      title: "注册页面",
      name: "",
      psw: "",
      password: "",
      email: ""
    };
  }
};
</script>
<style scoped>
.group {
  margin-top: -10px;
  border-bottom: 1px solid #ececec;
}
</style>
