<template>
<div>
<el-table :data="tableData" style="width:100%;padding-left:20px;padding-right:15px;">
    <el-table-column prop="xh" label="序号" width="50"></el-table-column>
    <el-table-column prop="drry" label="导入人员" style="width:20%;"></el-table-column>
    <el-table-column prop="drlx" label="导入类型" style="width:20%;"></el-table-column>
    <el-table-column prop="drrq" label="导入日期" style="width:20%;"></el-table-column>
    <el-table-column prop="drts" label="导入条数" style="width:20%;"></el-table-column>
    <el-table-column prop="sbts" label="失败条数" style="width:20%;"></el-table-column>
    <el-table-column prop="cz" label="操作" style="width:20%;">
    <template slot-scope="">
        <router-link to=''>
        <el-button type="primary" plain> 详 情 </el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'ProjectImportTable',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          drry: '李白',
          drlx: '项目导入',
          drrq: '2019-01-20',
          drts: '100',
          sbts: '13'
        },
        {
          xh: '2',
          drry: '杜甫',
          drlx: '项目资金导入',
          drrq: '2019-03-20',
          drts: '30',
          sbts: '12'
        },
        {
          xh: '3',
          drry: '赵信',
          drlx: '项目导入',
          drrq: '2019-05-01',
          drts: '20',
          sbts: '0'
        },
        {
          xh: '4',
          drry: '李青',
          drlx: '项目资金导入',
          drrq: '2019-09-06',
          drts: '55',
          sbts: '16'
        }]
    };
  }
};
</script>
