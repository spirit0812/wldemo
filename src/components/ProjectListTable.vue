<template>
<div>
<el-table :data="tableData" style="width:100%;">
    <el-table-column prop="name" label="项目名称" style="width:20%;"></el-table-column>
    <el-table-column prop="ysdw" label="预算单位" style="width:20%;"></el-table-column>
    <el-table-column prop="ywcs" label="业务处室" style="width:20%;"></el-table-column>
    <el-table-column prop="zbwh" label="指标文号" style="width:20%;"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" style="width:20%;"></el-table-column>
    <el-table-column prop="oper" label="操作" style="width:5%;">
    <template slot-scope="">
        <router-link to='/projectView'>
        <el-button type="text" size="small">查看</el-button>
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
