<template>
<div>
<div style="text-align:left;">
  <el-divider direction="vertical"></el-divider><span>资金概况</span>
</div>
  <el-table :data="tableData1" style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="zbly1" label="指标来源" style="width:20%;"></el-table-column>
    <el-table-column prop="zbje1" label="指标金额(元)" style="width:20%;"></el-table-column>
    <el-table-column prop="tfje1" label="确认提付金额" style="width:20%;"></el-table-column>
    <el-table-column prop="tfl1" label="提付率" style="width:20%;"></el-table-column>
  </el-table>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>资金明细(流水)</span>
</div>
  <el-table :data="tableData2" style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="xh2" label="序号" width="50"></el-table-column>
    <el-table-column prop="zbly2" label="指标来源" width="200"></el-table-column>
    <el-table-column prop="zbje2" label="指标金额(元)" width="150"></el-table-column>
    <el-table-column prop="zjzt2" label="资金状态" width="100"></el-table-column>
    <el-table-column prop="tfrq2" label="提付日期" width="100"></el-table-column>
    <el-table-column prop="gnfl2" label="功能分类" style="width:20%;"></el-table-column>
    <el-table-column prop="jjfl2" label="政治经济分类" style="width:20%;"></el-table-column>
    <el-table-column prop="zjxz2" label="资金性质" style="width:20%;"></el-table-column>
  </el-table>
  <div><PageNavigation/></div>
</div>
</template>
<script>
import PageNavigation from './PageNavigation.vue'

export default {
  name: 'ProjectViewSecond',
  components: {
    PageNavigation
  },
  data() {
    return {
      tableData1: [{
        zbly1: '一般公共预算拨款',
        zbje1: '¥0.00',
        tfje1: '-',
        tfl1: '-'
      },
      {
        zbly1: '基金预算拨款',
        zbje1: '¥250000.00',
        tfje1: '¥125000.00',
        tfl1: '50%'
      },
      {
        zbly1: '财政专户拨款',
        zbje1: '¥100000.00',
        tfje1: '¥100000.00',
        tfl1: '100%'
      },
      {
        zbly1: '结余结转资金',
        zbje1: '¥0.00',
        tfje1: '-',
        tfl1: '-'
      },
      {
        zbly1: '资金总额',
        zbje1: '¥1250000.00',
        tfje1: '¥1125000.00',
        tfl1: '90%'
      }],
      tableData2: [{
        xh2: '1',
        zbly2: '财政专户拨款',
        zbje2: '¥600000.00',
        zjzt2: '确认提付',
        tfrq2: '2019-01-01',
        gnfl2: '',
        jjfl2: '',
        zjxz2: ''
      },
      {
        xh2: '2',
        zbly2: '基金预算拨款',
        zbje2: '¥250000.00',
        zjzt2: '在途',
        tfrq2: '2019-05-11',
        gnfl2: '',
        jjfl2: '',
        zjxz2: ''
      },
      {
        xh2: '3',
        zbly2: '财政专户拨款',
        zbje2: '¥10000.00',
        zjzt2: '确认提付',
        tfrq2: '2019-09-11',
        gnfl2: '',
        jjfl2: '',
        zjxz2: ''
      },
      {
        xh2: '4',
        zbly2: '财政专户拨款',
        zbje2: '¥120000.00',
        zjzt2: '确认提付',
        tfrq2: '2019-09-30',
        gnfl2: '',
        jjfl2: '',
        zjxz2: ''
      }]
    }
  }
}
</script>
