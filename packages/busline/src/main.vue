<template>
    <div>
        <ul>
            <li v-for="item in dataSource">
                <span></span>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BusLine",
        data: function () {
            return {
                dataSource: [
                    {
                        img: '',
                        name: '城北换乘中心'
                    }, {
                        img: '',
                        name: '合肥火车站'
                    }, {
                        img: '',
                        name: '包公园'
                    }, {
                        img: '',
                        name: '曙光新村'
                    }, {
                        img: '',
                        name: '省人大'
                    }, {
                        img: '',
                        name: '南七里站'
                    }, {
                        img: '',
                        name: '姚公庙'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
