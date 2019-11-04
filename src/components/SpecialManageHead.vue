<template>
<div>
<el-row>
    <div style="margin-top:30px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">专项名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="zxmc" placeholder="输入专项名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">专项文号:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="zxwh" placeholder="输入专项文号">
        </el-input>
        </div>
    </el-col>
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">专项年份:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-select v-model="zxnf" placeholder="选择专项年份">
        <el-option
            v-for="item in zxnfOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
        </div>
    </el-col>
    </div>
</el-row>
<el-row>
<el-col :span="5" style="margin-top:10px;float:left;">
    <el-button type="warning"> 清 空 </el-button>
    <el-button type="success" style="margin-left:30px;"> 查 阅 </el-button>
    </el-col>
    <el-col :span="5" style="margin-top:10px;float:right;">
    <el-button type="primary" plain> 添 加 </el-button>
    </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'SpecialManageHead',
  data() {
    return {
      zxmc: '',
      zxwh: '',
      zxnf: '',
      zxnfOptions: [{
        value: '2018',
        label: '2018'
      },
      {
        value: '2019',
        label: '2019'
      },
      {
        value: '2020',
        label: '2020'
      }]
    };
  }
};
</script>
