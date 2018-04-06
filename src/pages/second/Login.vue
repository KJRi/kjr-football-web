<template>
    <div class="login">
        <Header :title="title"></Header>
        <form action="/api/login" method="post">
            <group>
                <x-input title="姓名" placeholder="必填" v-model="name"></x-input>
                <x-input title="密码" type="password" placeholder="必填" v-model="password"></x-input>
            </group>
            <x-button type="primary" link="#" @click="goLogin">登录</x-button>
        </form>
        <br>
        <x-button type="primary" link="/my/register">没有账号,去注册!</x-button>
        <div class="div"></div>
    </div>
</template>
<script>
    import Header from '../../components/Header.vue';
    import { Group, XInput, XButton, } from 'vux'
    export default {
        components: {
            Header,
            Group,
            XInput,
            XButton,
        },
        data() {
            return {
                title: "登录页面",
                name: '',
                password: '',
            }
        },
        methods: {
            goLogin: function () {
                console.log('---');
            },
        }
    }
</script>