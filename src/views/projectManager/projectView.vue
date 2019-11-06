<template>
<div>
  <div>
<div style="float:left;color:#FFFFFF;font-size:30px;margin-bottom:30px;">
  项目名称: 2019年昙石山博物馆建设
</div>
<div style="float:right;">
  <el-button size="medium" round  @click="goback();">
<span>
<i class="el-icon-back" style="font-weight:bold;padding-right:5px;"></i>
</span>返回</el-button>
</div>
</div>
<br/><br/><br/><br/>
<div style="float:left;padding:15px 0 50px 30px;width:98%;background-color:#FFFFFF;">
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="基础信息" name="first" style="padding-left:10px;">
      <div><PorjectViewFirst/></div>
    </el-tab-pane>
    <el-tab-pane label="资金情况" name="second">
      <div><PorjectViewSecond/></div>
    </el-tab-pane>
    <el-tab-pane label="建设情况" name="third">建设情况</el-tab-pane>
    <el-tab-pane label="相关文件" name="fourth">
      <div><PorjectViewFour/></div>
    </el-tab-pane>
  </el-tabs>
</div>

</div>
</template>
<script>
import PorjectViewFirst from '../../components/ProjectViewFirst.vue'
import PorjectViewSecond from '../../components/PorjectViewSecond.vue'
import PorjectViewFour from '../../components/ProjectViewFour.vue'

export default {
  name: 'projectView',
  components: {
    PorjectViewFirst,
    PorjectViewSecond,
    PorjectViewFour
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      items: [
        { type: '', label: '基础信息' },
        { type: '', label: '资金情况' },
        { type: '', label: '建设情况' },
        { type: '', label: '相关文件' }
      ],
      activeName: 'first'
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
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.pageMain {
  background-color: #FFFFFF;
}
</style>
