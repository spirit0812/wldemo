<template>
<div style="margin-top:5px;">
<el-table :data="tableData" :header-cell-style="{background:'#E8F1FB'}"
 style="width:100%;">
    <el-table-column prop="name" label="项目名称" min-width="30%"></el-table-column>
    <el-table-column prop="ysdw" label="预算单位" min-width="30%"></el-table-column>
    <el-table-column prop="ywcs" label="业务处室" min-width="20%"></el-table-column>
    <el-table-column prop="zbwh" label="指标文号" min-width="20%"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" min-width="15%"></el-table-column>
    <el-table-column prop="oper" label="操作" min-width="15%;">
    <template slot-scope="">
        <router-link to='/projectView'>
        <el-button type="primary" plain>查看</el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'ProjectListTable',
  data() {
    return {
      tableData: [
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        }]
    };
  }
};
</script>
