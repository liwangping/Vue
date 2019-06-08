<template>
    <div class="Chart_list">
        <Col :span="spanLeft"  >
        <div id="myChart" :style="{width:'',height:'300px'}"></div>
        </Col>
    </div>
</template>
<script>

export default {
    name: 'eCharts',
    data () {
        return {
            spanLeft: 12
        }
    },
    mounted(){
        this.drawLine();
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: 'Column Chart' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}
</script>
<style scoped>
    .Chart_list{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 30px;
    }
</style>
