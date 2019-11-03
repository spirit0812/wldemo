<template>
  <el-row class="tac" style="text-align:left">
    <el-col :span="4">
      <h5>图片</h5>
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#ffffff"
        text-color="#5C648B"
        active-text-color="#ffd04b"
        unique-opened="true"
      >
      <el-menu-item index="0">
          <i class="el-icon-discount"></i>
          <span slot="title">首  页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-data-analysis"></i>
            <span>项目管理</span>
          </template>
          <el-menu-item index="1-1">专项管理</el-menu-item>
          <el-menu-item index="1-2">项目列表</el-menu-item>
          <el-menu-item index="1-3">项目查重</el-menu-item>
          <el-menu-item index="1-4">项目导入</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-data-line"></i>
            <span slot="title">绩效管理</span>
          </template>
          <el-menu-item index="2-1">专项管理</el-menu-item>
          <el-menu-item index="2-2">项目列表</el-menu-item>
          <el-menu-item index="2-3">项目查重</el-menu-item>
          <el-menu-item index="2-4">项目导入</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">大数据分析</span>
          </template>
          <el-menu-item index="3-1">决策分析</el-menu-item>
          <el-menu-item index="3-2">应用接入</el-menu-item>
          <el-menu-item index="3-3">数据源管理</el-menu-item>
          <el-menu-item index="3-4">数据抓取配置</el-menu-item>
          <el-menu-item index="3-5">数据抓日志</el-menu-item>
          <el-menu-item index="3-6">自定义报表</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
          </template>
          <el-menu-item index="4-1">人员管理</el-menu-item>
          <el-menu-item index="4-2">组织机构管理</el-menu-item>
          <el-menu-item index="4-3">权限管理</el-menu-item>
          <el-menu-item index="4-4">角色管理</el-menu-item>
          <el-menu-item index="4-5">系统接口管理</el-menu-item>
          <el-menu-item index="4-6">日志管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
