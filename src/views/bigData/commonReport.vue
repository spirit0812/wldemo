<template>
<div class="pageMain" style="padding-bottom:100px;">
<div style="text-align:left;padding:30px 0 0 0;">
  <el-divider direction="vertical"></el-divider><span>报表基础信息</span>
</div>
<div style="padding-left:30px;margin-top:5px;">
<el-row>
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">报表名称:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-input v-model="bbmc" placeholder="输入报表名称" style="width:450px;">
        </el-input>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">报表URL:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-input v-model="bburl" placeholder="输入报表URL" style="width:450px;">
        </el-input>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">展示类型:</div>
        <div style="display:inline-block;margin:10px 0 0 30px;float:left;">
        <el-radio v-model="radio" label="1">列表</el-radio>
        <el-radio v-model="radio" label="2">表单</el-radio>
        </div>
    </el-col>
</el-row>
<div style="width:30px;">
<el-button type="primary" style="margin:10px 15px;" plain>保存基础信息</el-button>
</div>
</div>
<div>
<div style="float:left;text-align:left;margin-top:50px;display:inline-block;">
  <el-divider direction="vertical"></el-divider><span>查询条件配置</span>
</div>
<div>
    <el-button type="primary" style="float:right;margin:50px 15px 5px 0;" plain>
        新增查询条件
    </el-button>
 </div>
</div>
  <el-table :data="tableData1" :header-cell-style="{background:'#E8F1FB'}"
  style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="tjmc1" label="条件名称" min-width="20%"></el-table-column>
    <el-table-column prop="tjbm1" label="条件编码" min-width="20%"></el-table-column>
    <el-table-column prop="tjlx1" label="条件类型" min-width="20%"></el-table-column>
    <el-table-column prop="sfbt1" label="是否必填" min-width="20%"></el-table-column>
    <el-table-column prop="mrz1" label="默认值" min-width="10%"></el-table-column>
    <el-table-column prop="px" label="排序" min-width="10%"></el-table-column>
    <el-table-column prop="oper" label="操作" min-width="25%">
        <template slot-scope="">
            <router-link to=''>
            <el-button type="primary" plain> 编 辑 </el-button>
            </router-link>
            &nbsp;
            <router-link to=''>
            <el-button type="primary" plain> 删 除 </el-button>
            </router-link>
        </template>
    </el-table-column>
  </el-table>
<div>
<div style="float:left;text-align:left;margin-top:50px;display:inline-block;">
  <el-divider direction="vertical"></el-divider><span>展示要素</span>
</div>
<div>
    <el-button type="primary" style="float:right;margin:50px 15px 5px 0;" plain>
        新增展现要素
    </el-button>
 </div>
</div>
  <el-table :data="tableData2" :header-cell-style="{background:'#E8F1FB'}"
 style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="ysmc2" label="要素名称" min-width="20%"></el-table-column>
    <el-table-column prop="ysbm2" label="要素编码" min-width="20%"></el-table-column>
    <el-table-column prop="sql2" label="SQL表达式" min-width="35%"></el-table-column>
    <el-table-column prop="px2" label="排序" min-width="10%"></el-table-column>
    <el-table-column prop="sfzs2" label="是否展示" min-width="10%"></el-table-column>
    <el-table-column prop="oper" label="操作" min-width="25%">
        <template slot-scope="">
            <router-link to=''>
            <el-button type="primary" plain> 编 辑 </el-button>
            </router-link>
            &nbsp;
            <router-link to=''>
            <el-button type="primary" plain> 删 除 </el-button>
            </router-link>
        </template>
    </el-table-column>
  </el-table>

<div style="text-align:left;margin-top:50px">
  <el-divider direction="vertical"></el-divider><span>SQL配置</span>
</div>
<el-row style="margin:15px 30px 0 30px;">
    <el-col style="width:100%;">
    <el-input type="textarea" v-model="ms" :rows="5"></el-input>
    </el-col>
</el-row>
<el-row style="margin-top:15px;">
      <el-col style="float:center;">
        <el-button type="warning"> 模块预览 </el-button>
        <el-button type="primary"> 发 布 </el-button>
      </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'commonReport',
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      bbmc: '',
      bburl: '',
      radio: '',
      tableData1: [{
        tjmc1: '项目名称',
        tjbm1: 'PROJECT_NAME',
        tjlx1: '文本',
        sfbt1: '否',
        mrz1: '-',
        px: '1'
      },
      {
        tjmc1: '自评分数',
        tjbm1: 'COUNT',
        tjlx1: '值范围空间',
        sfbt1: '否',
        mrz1: '-',
        px: '2'
      }],
      tableData2: [{
        ysmc2: '项目名称',
        ysbm2: 'RPOJECT_NAME',
        sql2: '-',
        px2: '1',
        sfzs2: '是'
      },
      {
        ysmc2: '项目编码',
        ysbm2: 'RPOJECT_NO',
        sql2: '-',
        px2: '2',
        sfzs2: '是'
      },
      {
        ysmc2: '自评分数',
        ysbm2: 'PROJECT_SCORE',
        sql2: '-',
        px2: '3',
        sfzs2: '是'
      }]
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
  height: 100%;
}
.pageMain {
  background-color: #FFFFFF;
}
</style>
