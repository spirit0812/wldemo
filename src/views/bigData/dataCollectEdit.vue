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
        <div style="display:inline-block;float:left;margin-top:5px;">数据采集规则名称:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-input v-model="gzmc" placeholder="输入数据采集规则名称" style="width:450px;">
        </el-input>
        </div>
    </el-col>
</el-row>
<el-row style="padding-top:15px;">
    <el-col :span="20" >
        <div style="display:inline-block;float:left;margin-top:5px;">数据采集规则类型:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-select v-model="gzlx" placeholder="选择数据采集规则类型" style="width:450px;">
        <el-option
            v-for="item in gzlxOptions"
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
        <div style="display:inline-block;float:left;margin-top:5px;">数据采集执行规则:</div>
        <div style="display:inline-block;margin-left:30px;float:left;">
        <el-select v-model="zxgz" placeholder="选择数据采集执行规则" style="width:450px;">
        <el-option
            v-for="item in zxgzOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
        </el-select>
        <el-button @click.native="dialogFormVisible=true" type="primary" style="margin-left:15px;" plain>规则设置</el-button>
        </div>
    </el-col>
</el-row>
</div>
<div style="padding:30px;" class="myTab">
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="基本设置" name="first" style="padding-left:10px;">
      <div>
            <el-row style="padding-top:15px;">
                <el-col :span="15" >
                    <div style="display:inline-block;float:left;margin-top:5px;">数据源:</div>
                    <div style="display:inline-block;margin-left:30px;float:left;">
                    <el-select v-model="sjy" placeholder="选择数据源" style="width:450px;">
                    <el-option
                        v-for="item in sjyOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>

                    </div>
                </el-col>
                 <el-button type="primary" style="float:right;" plain>保存基本设置</el-button>
                <el-button type="primary" style="float:right; margin-right:15px;" plain>新增字段</el-button>
            </el-row>
            <el-row style="padding-top:15px;margin-bottom:30px;">
                <el-col :span="15" >
                    <div style="display:inline-block;float:left;margin-top:5px;">目标表:</div>
                    <div style="display:inline-block;margin-left:30px;float:left;">
                    <el-select v-model="mbb" placeholder="选择目标表" style="width:450px;">
                    <el-option
                        v-for="item in mbbOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>

                    </div>
                </el-col>
            </el-row>
             <el-table  :data="tableData1" style="width:100%;" >
                <el-table-column prop="zdmc" label="字段名称" style="width:15%;"></el-table-column>
                <el-table-column prop="mbbzdmc" label="目标表字段名称" style="width:15%;"></el-table-column>
                <el-table-column prop="zdlx" label="字段类型" style="width:15%;"></el-table-column>
                <el-table-column prop="zdcd" label="字段长度" style="width:15%;"></el-table-column>
                <el-table-column prop="zdms" label="字段描述" style="width:15%;"></el-table-column>
                <el-table-column prop="cz" label="操作" style="width:10%;">
                <template slot-scope="scope">
                    <router-link to=''>
                    <el-button  @click="edit" type="primary" plain size="small">编辑 </el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="primary" plain size="small">删除</el-button>
                    </router-link>
                </template>
                </el-table-column>
            </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="数据清洗规则" name="second">
         <el-row style="padding-top:15px;  text-align: right; margin-bottom:30px;">
            <el-button type="primary"  style="float:right; " plain>保存清洗规则</el-button>
            <el-button type="primary"  style="float:right; margin-right:15px;" plain>新增清洗规则</el-button>
        </el-row>
        <el-table  :data="tableData2" style="width:100%;" >
                <el-table-column prop="gzmc" label="规则名称" style="width:20%;"></el-table-column>
                <el-table-column prop="gzlx" label="规则类型" style="width:20%;"></el-table-column>
                <el-table-column prop="zdms" label="字段描述" style="width:40%;"></el-table-column>
                <el-table-column prop="cz" label="操作" style="width:20%;">
                <template slot-scope="scope">
                    <router-link to=''>
                    <el-button  @click="edit" type="primary" plain size="small">编辑 </el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="primary" plain size="small">删除</el-button>
                    </router-link>
                </template>

                </el-table-column>
            </el-table>
      <div>

      </div>
    </el-tab-pane>
  </el-tabs>
   <div class="mydialog">
        <el-dialog title="任务定时规则" :visible.sync="dialogFormVisible" >
            <el-form :model="form"  ref="form"  >
                <el-form-item label="定时类型" :label-width="formLabelWidth"  >
                    <el-radio-group v-model="form.dslx" >
                        <el-radio-button label="每月执行">每月执行</el-radio-button>
                        <el-radio-button label="每周执行">每周执行</el-radio-button>
                        <el-radio-button label="每天执行">每天执行</el-radio-button>
                        <el-radio-button label="指定时间">指定时间</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="每天" :label-width="formLabelWidth" >
                    <el-time-picker
                        v-model="form.mt"
                        :picker-options="{
                        selectableRange: '00:00:00 - 23:59:59'
                        }"
                        placeholder="请选择时间">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="开始日期" :label-width="formLabelWidth">
                    <el-date-picker
                        v-model="form.ksrq"
                        type="date"
                        placeholder="请选择开始日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束日期" :label-width="formLabelWidth">
                    <el-date-picker
                        v-model="form.jsrq"
                        type="date"
                        placeholder="请选择结束日期">
                    </el-date-picker>
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
<el-row style="margin-top:15px;">
      <el-col style="float:center;">
        <el-button type="primary"> 保存规则 </el-button>
        <el-button type="warning"> 取消 </el-button>
      </el-col>
</el-row>
</div>
</template>
<script>
export default {
  name: 'dataCollectEdit',
  methods: {
    goback() {
      this.$router.go(-1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        dslx: '每天执行',
        mt: '',
        ksrq: '',
        jsrq: '',
      },
      items: [
        { type: '', label: '基础设置' },
        { type: '', label: '数据清洗规则' }

      ],
      activeName: 'first',
      gzmc: '',
      gzlx: '',
      zxgz: '',
      date1: '',
      sjy: '',
      mbb: '',
      gzlxOptions: [{
        value: '接口数据采集',
        label: '接口数据采集'
      },
      {
        value: '其他数据采集',
        label: '其他数据采集'
      }],
      zxgzOptions: [{
        value: '定时执行',
        label: '定时执行'
      },
      {
        value: '自动执行',
        label: '自动执行'
      },
      {
        value: '手动执行',
        label: '手动执行'
      }],
      sjyOptions: [{
        value: '财政一体化平台专项接口',
        label: '财政一体化平台专项接口'
      },
      {
        value: '其他平台专项接口',
        label: '其他平台专项接口'
      }],
      mbbOptions: [{
        value: '专项表【tf_specifiy_fund】',
        label: '专项表【tf_specifiy_fund】'
      },
      {
        value: '专项表【tf_user_fund】',
        label: '专项表【tf_user_fund】'
      }],
      tableData1: [{
        zdmc: 'spe_name',
        mbbzdmc: 'spe_name',
        zdlx: '文本型',
        zdcd: '30',
        zdms: '专项名称',
      }, {
        zdmc: 'doc_no',
        mbbzdmc: 'doc_no',
        zdlx: '文本型',
        zdcd: '30',
        zdms: '文号',
      }, {
        zdmc: 'year',
        mbbzdmc: 'year',
        zdlx: '文本型',
        zdcd: '10',
        zdms: '年份',
      }, {
        zdmc: 'create_time',
        mbbzdmc: 'create_time',
        zdlx: '时间型',
        zdcd: '-',
        zdms: '创建时间',
      }
      ],
      tableData2: [{
        gzmc: '专项唯一性规则',
        gzlx: '专项唯一性规则',
        zdms: '用于过滤重复选项，保证专项数据被重复录入',
      }, {
        gzmc: '创建时间格式转换',
        gzlx: '转换规则',
        zdms: '用于将创建日期格式转换为："YYYY-MM-DD"',
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
.el-divider--vertical{
  background-color:#5B9EF3;
  width:10px;
  margin-bottom:3px;
}

</style>
<style >
   .myTab .el-tabs__item {
    font-size:18px !important;
    }

</style>

