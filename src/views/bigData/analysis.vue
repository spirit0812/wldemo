<template>
<div>
<div>
  <el-row style="width:100%;">
<el-col style="width:22%;">
<div class="grid-content bg-white">
  <div style="float:left;margin:10px 0 0 20px;height:20%;">旅游宣传经费</div>
  <div style="width:100%;height:80%;">
  <div id="chart1" style="height:100%;"></div>
  </div>
</div>
</el-col>
<el-col style="width:22%;margin-left:30px;">
<div class="grid-content bg-white">
  <div style="float:left;margin:10px 0 0 20px;height:20%;">专项资金审批情况</div>
  <div style="width:100%;height:80%;">
  <div id="chart2" style="height:100%;"></div>
  </div>
</div>
</el-col>
<el-col style="width:22%;margin-left:30px;">
<div class="grid-content bg-white">
  <div style="float:left;margin:10px 0 0 20px;height:20%;">能源领域(经建处、发改委)</div>
  <div style="width:100%;height:80%;">
  <div id="chart3" style="height:100%;"></div>
  </div>
</div>
</el-col>
<el-col style="width:22%;margin-left:30px;">
<div class="grid-content bg-white">
  <div style="float:left;margin:10px 0 0 20px;height:20%;">机场领域(经建处、交通局)</div>
  <div style="width:100%;height:80%;">
  <div id="chart4" style="height:100%;"></div>
  </div>
</div>
</el-col>
</el-row>
</div>
<div class="pageMain">

</div>
</div>
</template>
<script>
export default {
  name: 'analysisChart',
  data() {
    return {
      rmac: ''
    }
  },
  mounted() {
    this.drawPie1();
  },
  methods: {
    drawPie1() {
      const chart1 = this.$echarts.init(document.getElementById('chart1'))
      chart1.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          x: 'right',
          top: 10,
          data: ['已申请 5项', '核准中 0项', '已核准 5项']
        },
        series: [{
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{
            value: 5, name: '已申请 5项'
          },
          {
            value: 3, name: '核准中 0项'
          },
          {
            value: 5, name: '已核准 5项'
          }]
        }]
      });
      const chart2 = this.$echarts.init(document.getElementById('chart2'))
      chart2.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          x: 'right',
          top: 10,
          data: ['已申请 6项', '核准中 0项', '已核准 6项']
        },
        series: [{
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{
            value: 6, name: '已申请 6项'
          },
          {
            value: 0, name: '核准中 0项'
          },
          {
            value: 6, name: '已核准 6项'
          }]
        }]
      });
      const chart3 = this.$echarts.init(document.getElementById('chart3'))
      chart3.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          x: 'right',
          top: 10,
          data: ['已申请 3项', '核准中 0项', '已核准 3项']
        },
        series: [{
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{
            value: 3, name: '已申请 3项'
          },
          {
            value: 0, name: '核准中 0项'
          },
          {
            value: 3, name: '已核准 3项'
          }]
        }]
      });
      const chart4 = this.$echarts.init(document.getElementById('chart4'))
      chart4.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          x: 'right',
          top: 10,
          data: ['已申请 0项', '核准中 0项', '已核准 0项']
        },
        series: [{
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [{
            value: 0, name: '已申请 0项'
          },
          {
            value: 0, name: '核准中 0项'
          },
          {
            value: 0, name: '已核准 0项'
          }]
        }]
      });
    }
  }
}
</script>
<style lang="scss" scoped>
html,
body,
#app,
.el-container,
.pageMain {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.pageMain {
  background-color: #FFFFFF;
}
  .bg-white {
    background: #FFFFFF;
  }
  .grid-content {
    border-radius: 8px;
    min-height: 120px;
    height: auto;
  }
</style>
