<template>
<div>
<el-table :data="tableData" style="width:100%;">
    <el-table-column prop="kpmc" label="考评名称" style="width:20%;"></el-table-column>
    <el-table-column prop="bzgs" label="考评标准个数" width="110"></el-table-column>
    <el-table-column prop="df" label="得分" width="60"></el-table-column>
    <el-table-column prop="kplx" label="考评类型" width="90"></el-table-column>
    <el-table-column prop="kpr" label="考评人" width="90"></el-table-column>
    <el-table-column prop="kpsj" label="考评时间" width="100"></el-table-column>
    <el-table-column prop="oper" label="操作" style="width:20%;">
    <template slot-scope="">
        <router-link to=''>
        <el-button type="primary" plain> 详 情 </el-button>
        </router-link>
        &nbsp;
        <router-link to=''>
        <el-button type="primary" plain> 生成报告 </el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'SelfListTable',
  data() {
    return {
      tableData: [
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        },
        {
          kpmc: '昙石山文号博物馆建设项目2019年考评',
          bzgs: '3',
          df: '80',
          kplx: '自评',
          kpr: '张文远',
          kpsj: '2019-01-01'
        }]
    };
  }
};
</script>
