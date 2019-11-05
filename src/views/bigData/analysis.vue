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
<div class="pageMain" style="margin-top:30px;">
<div>
<div style="width:100%;height:360px">
  <div style="width:50%;height:100%;display:inline-block;">
    <div>
    <el-select v-model="nf" placeholder=""
    style="z-index:999;width:100px;float:right;postion:absolute;top:35px;right:80px;">
        <el-option
            v-for="item in nfOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
  </div>
    <div id="chart5" style="width:100%;height:100%;"></div>
  </div>
  <div style="width:50%;height:100%;display:inline-block;">
    <div id="chart6" style="width:100%;height:100%;"></div>
  </div>
</div>
<div style="width:100%;height:300px;margin-top:30px;padding-bottom:30px;">
  <div style="width:33%;height:100%;display:inline-block;">
    <div id="chart7" style="width:100%;height:100%;"></div>
  </div>
  <div style="width:33%;height:100%;display:inline-block;">
    <div>
    <el-select v-model="nf2" placeholder=""
    style="z-index:999;width:100px;float:right;postion:absolute;top:35px;right:10px;">
        <el-option
            v-for="item in nf2Options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
  </div>
    <div id="chart8" style="width:100%;height:100%;"></div>
  </div>
  <div style="width:33%;height:100%;display:inline-block;">
    <div>
    <el-select v-model="nf3" placeholder=""
    style="z-index:999;width:100px;float:right;postion:absolute;top:35px;right:0px;">
        <el-option
            v-for="item in nf3Options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
  </div>
    <div id="chart9" style="width:100%;height:100%;"></div>
  </div>
</div>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'analysisChart',
  data() {
    return {
      rmac: '',
      nf: '',
      nfOptions: [{
        value: '2018',
        label: '2018'
      },
      {
        value: '2019',
        label: '2019'
      }],
      nf2: '',
      nf2Options: [{
        value: '2018',
        label: '2018'
      },
      {
        value: '2019',
        label: '2019'
      }],
      nf3: '',
      nf3Options: [{
        value: '2018',
        label: '2018'
      },
      {
        value: '2019',
        label: '2019'
      }]
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
      const chart5 = this.$echarts.init(document.getElementById('chart5'))
      chart5.setOption({
        title: {
          text: '文旅专项各市分布(单位: 万元)'
        },
        tooltip: {
          trigger: 'axis'
        },
        itemStyle: {
          color: 'green'
        },
        xAxis: {
          type: 'category',
          data: ['福州市350100', '厦门市350100', '莆田市350100', '三明市350100', '泉州市350100', '漳州市350100', '南平市350100', '龙岩市350100']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [1600, 1300, 1800, 1900, 1200, 1100, 800, 900],
          type: 'line',
          smooth: true
        }]
      });
      const chart6 = this.$echarts.init(document.getElementById('chart6'))
      chart6.setOption({
        title: {
          text: '文旅专项各市分布(单位: 万元)'
        },
        color: ['#0E9345', '#13ACE5'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          data: ['2017', '2018']
        },
        xAxis: {
          type: 'category',
          data: ['福州市350100', '厦门市350100', '莆田市350100', '三明市350100', '泉州市350100', '漳州市350100', '南平市350100', '龙岩市350100']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '2017',
          type: 'bar',
          barGap: 0,
          data: [1300, 1600, 1500, 1200, 1100, 2000, 2000, 1000]
        },
        {
          name: '2018',
          type: 'bar',
          data: [1600, 1300, 1800, 1900, 1200, 1100, 800, 900]
        }]
      });
      const chart7 = this.$echarts.init(document.getElementById('chart7'))
      chart7.setOption({
        title: {
          text: '旅游宣传经费(单位: 万元)'
        },
        color: ['#13ACE5'],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['2015', '2016', '2017', '2018', '2019']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [2900, 3900, 4500, 6200, 7500],
          type: 'bar'
        }]
      });
      const chart8 = this.$echarts.init(document.getElementById('chart8'))
      chart8.setOption({
        title: {
          text: '文旅专项绩效评分分布'
        },
        tooltip: {
          trigger: 'axis'
        },
        itemStyle: {
          color: 'green'
        },
        xAxis: {
          type: 'category',
          data: ['90-100', '80-89', '30-79', '不合格']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [152, 136, 235, 0],
          type: 'line',
          smooth: true
        }]
      });
      const chart9 = this.$echarts.init(document.getElementById('chart9'))
      chart9.setOption({
        title: {
          text: '文旅专项评分到位情况'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        color: ['#0E9345', '#13ACE5', '#FF7D4B'],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          x: 'right',
          top: 100,
          right: -10,
          data: ['拨付中资金总额 100万元', '已确认到位资金总额59000万元', '未发放资金总额 900万元']
        },
        series: [{
          type: 'pie',
          center: ['30%', '50%'],
          radius: ['30%', '50%'],
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
            value: 100, name: '拨付中资金总额 100万元'
          },
          {
            value: 59000, name: '已确认到位资金总额59000万元'
          },
          {
            value: 900, name: '未发放资金总额 900万元'
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
