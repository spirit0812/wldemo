<template>
<div>
<el-row>
    <div style="margin-top:30px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">考评名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="kpmc" placeholder="输入考评名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="xmmc" placeholder="输入项目名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目编码:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="xmbm" placeholder="输入项目编码">
        </el-input>
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
      <router-link to='/evaluateEdit'>
    <el-button type="primary" plain> 添 加 </el-button>
      </router-link>
    </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'EvaluateListHead',
  data() {
    return {
      kpmc: '',
      xmmc: '',
      xmbm: ''
    };
  }
};
</script>
