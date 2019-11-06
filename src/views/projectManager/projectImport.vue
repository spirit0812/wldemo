<template>
<div class="pageMain">
  <div style="text-align:left;padding-top:20px;">
    <el-divider direction="vertical"></el-divider><span>数据导入模板</span>
  </div>
  <br/>
  <div style="text-align:left;margin-left:30px;font-size:14px;">项目导入模板 :
    <a style="margin-left:15px;text-decoration:underline;">项目导入模板.xlsx</a>
  </div>
  <br/>
  <div style="text-align:left;margin-left:30px;font-size:14px;">资金导入模板 :
    <a style="margin-left:15px;text-decoration:underline;">资金导入模板.xlsx</a>
  </div>
  <div style="text-align:left;margin-top:15px;">
    <el-divider direction="vertical"></el-divider><span>数据导入说明</span>
  </div>
<div style="text-align:left;margin-left:30px;font-size:14px;">
<p>1. 根据所要导入数据的类型下载对应数据导入模板</p>
<p>2. 严格按照模板中字段,字段说明格式填写要导入数据的信息</p>
<p>3. 点击下方"上传"按钮上传导入数据</p>
<p>4. 点击下方"导入"按钮导入对应数据</p>
</div>
<div style="text-align:left;">
    <el-divider direction="vertical"></el-divider><span>数据导入记录</span>
  </div>
  <br/>
  <div style="text-align:left;margin-left:30px;font-size:14px;">
    <a style="margin-left:15px;">2017年项目数据.xlsx
      <span><i class="el-icon-error"></i></span>
    </a>
  </div>
<el-row>
<el-col :span="3" style="margin-top:10px;">
    <el-button type="primary" plain> 导 入 </el-button>
</el-col>
</el-row>
<ProjectImportTable/>
<PageNavigation/>
</div>
</template>
<script>
import ProjectImportTable from '../../components/ProjectImportTable.vue'
import PageNavigation from '../../components/PageNavigation.vue'

export default {
  name: 'projectImport',
  components: {
    ProjectImportTable,
    PageNavigation
  }
};
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
.el-divider--vertical{
  background-color:#5B9EF3;
  width:10px;
  margin-bottom:3px;
}
</style>

