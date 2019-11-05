<template>
<div class="pageMain" style="padding-bottom:100px;">
<div><el-row>
<el-button size="medium" round  @click="goback();" style="margin:10px 15px;float:right;">
<span>
<i class="el-icon-back" style="font-weight:bold;padding-right:5px;"></i>
</span>返回</el-button>
</el-row>
</div>
<div style="padding-left:30px;">
<el-row>
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目名称:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-input v-model="xmmc" placeholder="输入项目名称" style="width:450px;">
        </el-input>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">考评内容:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-input v-model="kpnr" placeholder="输入考评内容" style="width:450px;">
        </el-input>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">考评类型:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-select v-model="kplx" placeholder="选择项目名称" style="width:450px;">
        <el-option
            v-for="item in kplxOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
        </div>
    </el-col>
</el-row>
</div>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>投入指标评分</span>
</div>
  <el-table :data="tableData1" style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="yjfl1" label="考评标准一级分类" style="width:20%;"></el-table-column>
    <el-table-column prop="ejfl1" label="考评标准二级分类" style="width:20%;"></el-table-column>
    <el-table-column prop="bznr1" label="考评标准内容" style="width:20%;"></el-table-column>
    <el-table-column prop="dbbz1" label="考评达标标准" style="width:20%;"></el-table-column>
    <el-table-column prop="bzqz1" label="考评标准权重" style="width:20%;"></el-table-column>
    <el-table-column label="实际完成情况" style="width:20%;">
     <template slot-scope="scope">
     <el-input v-model="scope.row.qk1" placeholder=""></el-input>
     </template>
    </el-table-column>
    <el-table-column prop="oper" label="操作" style="width:5%;">
        <template slot-scope="">
            <el-checkbox v-model="checked">达成目标</el-checkbox>
        </template>
    </el-table-column>
  </el-table>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>产出指标评分</span>
</div>
  <el-table :data="tableData2" style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="yjfl2" label="考评标准一级分类" style="width:20%;"></el-table-column>
    <el-table-column prop="ejfl2" label="考评标准二级分类" style="width:20%;"></el-table-column>
    <el-table-column prop="bznr2" label="考评标准内容" style="width:20%;"></el-table-column>
    <el-table-column prop="dbbz2" label="考评达标标准" style="width:20%;"></el-table-column>
    <el-table-column prop="bzqz2" label="考评标准权重" style="width:20%;"></el-table-column>
    <el-table-column label="实际完成情况" style="width:20%;">
        <template slot-scope="scope">
     <el-input v-model="scope.row.qk1" placeholder=""></el-input>
     </template>
    </el-table-column>
    <el-table-column prop="oper" label="操作" style="width:5%;">
        <template slot-scope="">
            <el-checkbox v-model="checked">达成目标</el-checkbox>
        </template>
    </el-table-column>
  </el-table>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>效益指标评分</span>
</div>
  <el-table :data="tableData3" style="width:100%;padding-left:10px;padding-right:10px;">
    <el-table-column prop="yjfl3" label="考评标准一级分类" style="width:20%;"></el-table-column>
    <el-table-column prop="ejfl3" label="考评标准二级分类" style="width:20%;"></el-table-column>
    <el-table-column prop="bznr3" label="考评标准内容" style="width:20%;"></el-table-column>
    <el-table-column prop="dbbz3" label="考评达标标准" style="width:20%;"></el-table-column>
    <el-table-column prop="bzqz3" label="考评标准权重" style="width:20%;"></el-table-column>
    <el-table-column prop="qk3" label="实际完成情况" style="width:20%;">
     <template slot-scope="scope">
     <el-input v-model="scope.row.qk1" placeholder=""></el-input>
     </template>
    </el-table-column>
    <el-table-column prop="oper" label="操作" style="width:5%;">
        <template slot-scope="">
            <el-checkbox v-model="checked">达成目标</el-checkbox>
        </template>
    </el-table-column>
  </el-table>
<el-row style="margin-top:15px;">
      <el-col>
        <div>
        <el-button type="primary" style="float:right;margin-right:50px;"> 提 交 </el-button>
        </div>
        <div style="display:inline-block;float:right;margin:8px 30px 0 0;">总分:80 </div>
      </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'selfEdit',
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      xmmc: '',
      kplx: '',
      kpnr: '',
      kplxOptions: [{
        value: '自评',
        label: '自评'
      },
      {
        value: '众评',
        label: '众评'
      }],
      tableData1: [{
        yjfl1: '投入成本',
        ejfl1: '-',
        bznr1: '2019年度总计投入达200万',
        dbbz1: '200万',
        bzqz1: '40',
        qk1: ''
      }],
      tableData2: [{
        yjfl2: '工程建设',
        ejfl2: '-',
        bznr2: '完成昙石山博物馆建设',
        dbbz2: '完成项目验收',
        bzqz2: '40'
      }],
      tableData3: [{
        yjfl3: '服务对象满意度',
        ejfl3: '-',
        bznr3: '群众满意度达85%',
        dbbz3: '85%',
        bzqz3: '20'
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

