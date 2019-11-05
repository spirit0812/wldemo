<template>
<div>
<el-table :data="tableData" style="width:100%;">
    <el-table-column prop="xh" label="序号" width="100"></el-table-column>
    <el-table-column prop="kpmc" label="考评名称" style="width:20%;"></el-table-column>
    <el-table-column prop="bzgs" label="考评标准个数" style="width:20%;"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" style="width:20%;"></el-table-column>
    <el-table-column prop="oper" label="操作" style="width:5%;">
    <template slot-scope="">
        <router-link to='/evaluateEdit'>
        <el-button type="primary" plain> 详 情 </el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'EvaluateListTable',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '2',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '3',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '4',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '5',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '6',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '7',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '8',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '9',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        },
        {
          xh: '10',
          kpmc: '昙石山文号博物馆建设项目考评',
          bzgs: '8',
          createTime: '2019-01-01'
        }]
    };
  }
};
</script>
