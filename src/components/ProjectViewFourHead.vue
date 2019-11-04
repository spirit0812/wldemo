<template>
<div>
<el-row>
    <div style="margin-top:30px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;">文件名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="wjmc" placeholder="输入文件名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="11" >
        <div style="display:inline-block;">项目时间:</div>
        <div style="display:inline-block;margin-left:5px;">
        <el-time-picker
        is-range
        v-model="date1"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围">
        </el-time-picker>
        </div>
    </el-col>
    </div>
</el-row>
<el-row>
<el-col :span="5" style="margin-top:10px;float:left;">
    <el-button type="success" style="margin-left:30px;"> 搜 索 </el-button>
    <el-button type=""> 添 加 </el-button>
    </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'ProjectViewFourHead',
  data() {
    return {
      wjmc: '',
      date1: ''
    };
  }
};
</script>
