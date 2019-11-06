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
  <div style="margin-left: 30px;">
    <el-row>
        <el-col :span="8" >
         <div style="display:inline-block;float:left;margin-top:8px;font-size:14px;">导入类型:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-select v-model="drlx" placeholder="选择导入类型">
          <el-option label="项目导入" value="项目导入"></el-option>
          <el-option label="资金导入" value="资金导入"></el-option>
        </el-select>
        </div>
    </el-col>
    </el-row>
  </div>
  <div style="margin-top:15px;">
  <div style="text-align:left;margin:8px 0 0 30px;font-size:14px;display:inline-block;float:left;">
    <a>2017年项目数据.xlsx
     <!--  <span><i class="el-icon-error"></i></span> -->
    </a>
    <div style="display:inline-block;">
    <img src="../../assets/del.png"
    style="width:14px;heigh:14px;float:left;"/></div>
  </div>
  <div style="display:inline-block;float:left;">
    <el-row>
    <el-col :span="3" style="margin-left:10px;">
        <el-button type="primary" plain> 导 入 </el-button>
    </el-col>
    </el-row>
  </div>
  </div>
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
  },
  data() {
    return {
      drlx: ''
    }
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
  height: auto;
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
