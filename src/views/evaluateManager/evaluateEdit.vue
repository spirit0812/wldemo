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
        <div style="display:inline-block;float:left;margin-top:5px;">考评名称:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-input v-model="kpmc" placeholder="输入考评名称" style="width:450px;">
        </el-input>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目名称:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-select v-model="xmmc" placeholder="选择项目名称" style="width:450px;">
        <el-option
            v-for="item in xmmcOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">考评时间:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-date-picker style="width:450px;"
        v-model="date1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
        </div>
    </el-col>
</el-row>
</div>
<div>
<el-button type="primary" style="margin:10px 15px;float:right;" plain
 @click="edit">添加考评内容</el-button>
</div>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>投入指标</span>
</div>
  <el-table :data="tableData1" :header-cell-style="{background:'#E8F1FB'}"
  style="width:100%;padding:5px 10px 0 10px;">
    <el-table-column prop="yjfl1" label="考评标准一级分类" min-width="20%"></el-table-column>
    <el-table-column prop="ejfl1" label="考评标准二级分类" min-width="20%"></el-table-column>
    <el-table-column prop="bznr1" label="考评标准内容" min-width="15%"></el-table-column>
    <el-table-column prop="dbbz1" label="考评达标标准" min-width="15%"></el-table-column>
    <el-table-column prop="bzqz1" label="考评标准权重" min-width="15%;"></el-table-column>
    <el-table-column prop="createTime1" label="创建时间" min-width="15%"></el-table-column>
    <el-table-column prop="oper" label="操作" min-width="25%">
        <template slot-scope="scope">
            <router-link to=''>
            <el-button type="primary" plain> 编 辑 </el-button>
            </router-link>
            &nbsp;
            <el-button type="primary" plain
            @click.native.prevent="deleteRow(scope.$index, tableData1)"> 删 除 </el-button>
        </template>
    </el-table-column>
  </el-table>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>产出成本</span>
</div>
  <el-table :data="tableData2" :header-cell-style="{background:'#E8F1FB'}"
  style="width:100%;padding:5px 10px 0 10px;">
    <el-table-column prop="yjfl2" label="考评标准一级分类" min-width="20%"></el-table-column>
    <el-table-column prop="ejfl2" label="考评标准二级分类" min-width="20%"></el-table-column>
    <el-table-column prop="bznr2" label="考评标准内容" min-width="15%"></el-table-column>
    <el-table-column prop="dbbz2" label="考评达标标准" min-width="15%"></el-table-column>
    <el-table-column prop="bzqz2" label="考评标准权重" min-width="15%"></el-table-column>
    <el-table-column prop="createTime2" label="创建时间" min-width="15%"></el-table-column>
    <el-table-column prop="oper" label="操作" min-width="25%">
        <template slot-scope="scope">
            <router-link to=''>
            <el-button type="primary" plain> 编 辑 </el-button>
            </router-link>
            &nbsp;
            <el-button type="primary" plain
            @click.native.prevent="deleteRow(scope.$index, tableData2)"> 删 除 </el-button>
        </template>
    </el-table-column>
  </el-table>
<div style="text-align:left;margin-top:50px;">
  <el-divider direction="vertical"></el-divider><span>效益指标</span>
</div>
  <el-table :data="tableData3" :header-cell-style="{background:'#E8F1FB'}"
  style="width:100%;padding:5px 10px 0 10px;">
    <el-table-column prop="yjfl3" label="考评标准一级分类" min-width="20%"></el-table-column>
    <el-table-column prop="ejfl3" label="考评标准二级分类" min-width="20%"></el-table-column>
    <el-table-column prop="bznr3" label="考评标准内容" min-width="15%"></el-table-column>
    <el-table-column prop="dbbz3" label="考评达标标准" min-width="15%"></el-table-column>
    <el-table-column prop="bzqz3" label="考评标准权重" min-width="15%"></el-table-column>
    <el-table-column prop="createTime3" label="创建时间" min-width="15%"></el-table-column>
    <el-table-column prop="oper" label="操作" min-width="25%">
        <template slot-scope="scope">
            <router-link to=''>
            <el-button type="primary" plain> 编 辑 </el-button>
            </router-link>
            &nbsp;
            <el-button type="primary" plain
            @click.native.prevent="deleteRow(scope.$index, tableData3)"> 删 除 </el-button>
        </template>
    </el-table-column>
  </el-table>
<el-row style="margin-top:15px;">
      <el-col style="float:center;">
        <el-button type="warning"> 预 览 </el-button>
        <el-button type="primary"> 发 布 </el-button>
      </el-col>
</el-row>
<div class="mydialog">
  <el-dialog :title="title" :visible.sync="dialogFormVisible" >
      <el-form :model="form"  ref="form"  >
         <el-form-item label="考评类型 " :label-width="formLabelWidth">
          <el-select v-model="form.lx" placeholder="请选择类型">
              <el-option label="投入指标" value="投入指标"></el-option>
              <el-option label="产出成本" value="产出成本"></el-option>
              <el-option label="效益指标" value="效益指标"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="考评标准一级分类 " :label-width="formLabelWidth">
            <el-input v-model="form.yjfl" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="考评标准二级分类 " :label-width="formLabelWidth">
            <el-input v-model="form.ejfl" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="考评标准内容 " :label-width="formLabelWidth" >
              <el-input v-model="form.bzrn" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="考评达标标准 " :label-width="formLabelWidth" >
              <el-input v-model="form.dbbz" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="考评标准权重 " :label-width="formLabelWidth" >
              <el-input v-model="form.bzqz" autocomplete="off" ></el-input>
          </el-form-item>
      </el-form>
      <el-form>
          <el-form-item label="" :label-width="formLabelWidth" >
              <el-button type="warning" @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="success" @click="dialogFormVisible = false">保 存</el-button>
          </el-form-item>
      </el-form>
  </el-dialog>
</div>
</div>
</template>
<script>
export default {
  name: 'evaluateEdit',
  methods: {
    goback() {
      this.$router.go(-1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    edit() {
      this.title = '新增考评内容';
      this.form.name = '';
      this.form.wh = '';
      this.form.nf = '';
      this.form.file = '';
      this.dialogFormVisible = true;
    }
  },
  data() {
    return {
      kpmc: '',
      xmmc: '',
      date1: '',
      xmmcOptions: [{
        value: '昙石山博物馆建设项目',
        label: '昙石山博物馆建设项目'
      },
      {
        value: '石柱山博物馆',
        label: '石柱山博物馆'
      }],
      tableData1: [],
      tableData2: [],
      tableData3: [],
      dialogFormVisible: false,
      form: {
        yjfl: '',
        ejfl: '',
        bznr: '',
        dbbz: '',
        bzqz: ''
      },
      formLabelWidth: '150px'
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

