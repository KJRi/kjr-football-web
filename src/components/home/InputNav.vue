<template>
    <div class="input">
        <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top
            top="46px" @on-submit="onSubmit" ref="search"></search>
    </div>
</template>
<script>
    import { Search,} from 'vux'
    export default {
        components: {
            Search,
        },
        methods: {
            setFocus() {
                this.$refs.search.setFocus()
            },
            resultClick(item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult(val) {
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            onSubmit() {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'test',
                    position: 'top',
                    text: 'on submit'
                })
            }
        },
        data() {
            return {
                results: [],
                value: '请输入关键词'
            }
        }
    }

    function getResult(val) {
        let rs = []
        for (let i = 0; i < 20; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }
</script>
<style scoped>
    .input {
        width: 100%;
        height: 55px;
        /* margin-bottom: 5px; */
    }
</style>