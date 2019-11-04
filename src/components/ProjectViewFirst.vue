<template>
<div class="pageMain">
<el-form ref="form" :model="form" label-width="100px" style="padding-top:20px;">
    <el-form-item>
        <el-col :span="7">
            <el-form-item label="预算单位: ">
              <div style="float:left;">
                <el-select v-model="form.ysdw" placeholder="选择预算单位">
                    <el-option
                    v-for="item in ysdwOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              </div>
            </el-form-item>
        </el-col>
        <el-col :span="9">
            <el-form-item label="业务处室: " style="margin-left:100px;">
              <div style="float:left;">
                <el-select v-model="form.ywcs" placeholder="选择业务处室">
                    <el-option
                    v-for="item in ywcsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              </div>
            </el-form-item>
        </el-col>
    </el-form-item>
    <el-form-item>
        <el-col :span="7">
            <el-form-item label="指标文号: ">
                <div style="float:left;">
                <el-input v-model="zbwh" placeholder="输入指标文号"></el-input>
                </div>
            </el-form-item>
        </el-col>
        <el-col :span="9">
            <el-form-item label="登记日期: " style="margin-left:100px;">
              <div style="float:left;">
                <el-date-picker
                v-model="date1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-form-item>
        </el-col>
    </el-form-item>
    <el-form-item>
        <el-col :span="7">
            <el-form-item label="项目立项编号: ">
              <div style="float:left;">
                <el-input v-model="lxbh" placeholder="输入项目立项编号"></el-input>
              </div>
            </el-form-item>
        </el-col>
        <el-col :span="9">
            <el-form-item label="项目年份: " style="margin-left:100px;">
                <div style="float:left;">
                <el-select v-model="form.xmnf" placeholder="选择项目年份">
                    <el-option
                    v-for="item in xmnfOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </div>
            </el-form-item>
        </el-col>
    </el-form-item>
    <el-form-item>
        <el-col :span="7">
            <el-form-item label="项目开始时间: ">
              <div style="float:left;">
                <el-date-picker
                    v-model="date2"
                    type="date"
                    placeholder="选择项目开始时间">
                </el-date-picker>
              </div>
            </el-form-item>
        </el-col>
        <el-col :span="9">
            <el-form-item label="项目结束时间: " style="margin-left:100px;">
              <div style="float:left;">
                <el-date-picker
                    v-model="date3"
                    type="date"
                    placeholder="选择项目结束时间">
                </el-date-picker>
              </div>
            </el-form-item>
        </el-col>
    </el-form-item>
    <el-form-item label="描述: " style="margin-left:100px;">
        <el-col :span="18">
        <el-input type="textarea" v-model="ms" :rows="5"></el-input>
        </el-col>
    </el-form-item>
    <el-form-item style="margin-left:100px;">
      <el-col :span="5">
        <el-button type="warning"> 取 消 </el-button>
        <el-button type="success"> 确 定 </el-button>
      </el-col>
    </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
  name: 'ProjectViewFirst',
  data() {
    return {
      date1: '',
      date2: '',
      date3: '',
      ysdw: '',
      ywcs: '',
      zbwh: '',
      lxbh: '',
      ms: '',
      ysdwOptions: [{
        value: '[33366076]景石山博物馆',
        label: '[33366076]景石山博物馆'
      },
      {
        value: '[33366066]石柱博物馆',
        label: '[33366066]石柱山博物馆'
      }],
      ywcsOptions: [{
        value: '教科文处',
        label: '教科文处'
      },
      {
        value: '文化部处',
        label: '文化部处'
      }],
      xmnf: '',
      xmnfOptions: [{
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
      }],
      form: {
        name: '',
        region: '',
      }
    }
  }
}
</script>
