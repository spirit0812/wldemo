<template>
<div>
<el-row>
    <div style="margin-top:30px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="xmmc" placeholder="输入查询项目名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">预算单位:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-select v-model="ysdw" placeholder="选择预算单位">
        <el-option
            v-for="item in ysdwOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
        </div>
    </el-col>
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">业务处室:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-select v-model="ywcs" placeholder="选择业务处室">
        <el-option
            v-for="item in ywcsOptions"
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
    <div style="margin-top:10px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">指标文号:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="zbwh" placeholder="输入指标文号">
        </el-input>
        </div>
    </el-col>
    <el-col :span="13" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目时间:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-date-picker style="width:450px;"
        v-model="date1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
        </div>
    </el-col>
    </div>
</el-row>
<el-row>
    <div style="margin-top:10px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目年度:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-select v-model="xmnd" placeholder="选择项目年度">
        <el-option
            v-for="item in xmndOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
        </div>
    </el-col>
    <el-col :span="13" >
        <div style="display:inline-block;float:left;margin-top:5px;">项目时间:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-date-picker style="width:450px;"
        v-model="date2"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
        </el-date-picker>
        </div>
    </el-col>
    </div>
</el-row>
<el-row>
<el-col :span="5" style="margin-top:10px;">
    <el-button type="warning"> 清 空 </el-button>
    <el-button type="success"> 查 询 </el-button>
    </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'ProjectListHead',
  data() {
    return {
      xmmc: '',
      ysdw: '',
      ysdwOptions: [{
        value: '[33366076]景石山博物馆',
        label: '[33366076]景石山博物馆'
      },
      {
        value: '[33366066]石柱博物馆',
        label: '[33366066]石柱山博物馆'
      }],
      ywcs: '',
      ywcsOptions: [{
        value: '教科文处',
        label: '教科文处'
      },
      {
        value: '文化部处',
        label: '文化部处'
      }],
      zbwh: '',
      date1: '',
      date2: '',
      xmnd: '',
      xmndOptions: [{
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
