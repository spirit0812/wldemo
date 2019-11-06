<template>
<div>
<el-table ref="multipleTable" :data="tableData" style="width:100%;" :header-cell-style="{background:'rgb(232, 241, 251)',color:'#606266'}">
    <el-table-column type="selection" style="width:5%;"></el-table-column>
    <el-table-column prop="xh" style="width:5%;" label="序号"></el-table-column>
    <el-table-column prop="ssdw" label="所属单位" style="width:8%;" ></el-table-column>
    <el-table-column prop="bm" label="部门" style="width:8%;" ></el-table-column>
    <el-table-column prop="xm" label="姓名/账号" style="width:8%;" ></el-table-column>
    <el-table-column prop="sjh" label="手机号" style="width:8%;" ></el-table-column>
    <el-table-column prop="zw" label="职务" style="width:8%;" ></el-table-column>
    <el-table-column prop="yx" label="邮箱" style="width:8%;" ></el-table-column>
    <el-table-column prop="sjsb" label="手机设备" style="width:8%;" ></el-table-column>
    <el-table-column prop="cjsj" label="创建时间" style="width:8%;" ></el-table-column>
    <el-table-column prop="zt" label="状态" style="width:8%;" ></el-table-column>
    <el-table-column prop="cz" label="操作" width="150">
    <template slot-scope="">
        <router-link to=''>
        <el-button type="text" size="small">编辑 </el-button>
        <span style="color:#409EFF;margin:0px 2px;">|</span>
        <el-button type="text" size="small">删除</el-button>
        <span style="color:#409EFF;margin:0px 2px;">|</span>
        <el-button type="text" size="small">详情</el-button>
        <span style="color:#409EFF;margin:0px 2px;">|</span>
        <el-button type="text" size="small">停用</el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'personManageTable',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '2',
          ssdw: '福建省文旅厅',
          bm: '资源开发处',
          xm: '张强/zhangqiang',
          sjh: '13061545412',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '3',
          ssdw: '福建省文旅厅',
          bm: '市场管理处',
          xm: '王小房/wangxiaofang',
          sjh: '15622143821',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '4',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '5',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '6',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '7',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '8',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '9',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '10',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        }]
    };
  }
};
</script>
