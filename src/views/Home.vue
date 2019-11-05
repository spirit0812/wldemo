<template>
  <el-container style="height：100%" direction="vertical">
    <el-container style="height：100%">
      <el-aside width="250px" style="background-color: #FFFFFF;text-align:left;height:100%;">
        <div class="main_logo_div">
          <img src="../assets/main_logo.png" style="width:63%" />
        </div>
        <el-menu
          default-active="/indexPage"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#ffffff"
          text-color="#5C648B"
          active-text-color="#039849"
          :unique-opened="uniqueOpened"
          :router="isUseRounter"
        >
          <el-menu-item index="/indexPage">
            <i class="el-icon-discount"></i>
            <span slot="title">首 页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-data-analysis"></i>
              <span>项目管理</span>
            </template>
            <el-menu-item index="/specialManage">专项管理</el-menu-item>
            <el-menu-item index="/projectList">项目列表</el-menu-item>
            <el-menu-item index="/projectView">项目查重</el-menu-item>
            <el-menu-item index="/projectImport">项目导入</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-data-line"></i>
              <span slot="title">绩效管理</span>
            </template>
            <el-menu-item index="/evaluateList">考评列表</el-menu-item>
            <el-menu-item index="/selfList">自评报告</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">大数据分析</span>
            </template>
            <el-menu-item index="/analysis">决策分析</el-menu-item>
            <el-menu-item index="3-2">应用接入</el-menu-item>
            <el-menu-item index="3-3">数据源管理</el-menu-item>
            <el-menu-item index="3-4">数据抓取配置</el-menu-item>
            <el-menu-item index="3-5">数据抓日志</el-menu-item>
            <el-submenu index="31">
              <template slot="title">
                <span slot="title">自定义报表</span>
              </template>
              <el-menu-item index="/commonReport">普通报表配置</el-menu-item>
              <el-menu-item index="31-4">规则报表配置</el-menu-item>
              <el-menu-item index="31-5">不规则报表配置</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">系统管理</span>
            </template>
            <!-- <el-menu-item index="/personManage">人员管理</el-menu-item> -->
            <el-menu-item index="/organizationManage">组织机构管理</el-menu-item>
            <el-menu-item index="/roleManage">角色管理</el-menu-item>
            <el-menu-item index="4-3">权限管理</el-menu-item>
            <el-menu-item index="4-6">日志管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="main_container">
        <el-header style="text-align: left; font-size: 12px" class="main_head"></el-header>
        <el-main class="main_page">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
  <!-- <el-row class="menu_row" style="text-align:left">
    <el-col :span="3"></el-col>
  </el-row>-->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      uniqueOpened: true,
      isUseRounter: true
    };
  },
  methods: {
    handleOpen: (key, keyPath) => {
      console.log(key, keyPath);
      console.log(key);
    },
    handleClose: (key, keyPath) => {
      // console.log(key, keyPath);
    },
    handleSelect: (index, indexPath) => {
      console.log(index);
      console.log(indexPath);
    }
  }
};
</script>
<style lang="scss">
.menu_row {
  padding-left: 10px;
}
.main_logo_div {
  width: 100%;
  text-align: center;
  padding-top: 20px;
}
.main_container {
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-position: left top;
}
.main_head {
  border-bottom: 1px solid;
border-bottom-color: #979797;
}
.main_page {
  margin: 20px 20px 20px 20px;
}
</style>
