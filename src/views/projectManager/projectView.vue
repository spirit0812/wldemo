<template>
<div>
<div style="float:left;color:#FFFFFF;font-size:30px;margin-bottom:30px;">
  项目名称: 2019年昙石山博物馆建设
</div>
<br/><br/><br/><br/>
<div style="float:left;padding-left:10px;width:100%;background-color:#FFFFFF;">
  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="基础信息" name="first" style="padding-left:10px;">
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
    </el-tab-pane>
    <el-tab-pane label="资金情况" name="second">资金情况</el-tab-pane>
    <el-tab-pane label="建设情况" name="third">建设情况</el-tab-pane>
    <el-tab-pane label="相关文件" name="fourth">相关文件</el-tab-pane>
  </el-tabs>
</div>

</div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { type: '', label: '基础信息' },
        { type: '', label: '资金情况' },
        { type: '', label: '建设情况' },
        { type: '', label: '相关文件' }
      ],
      pickerOptions: {

      },
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
      },
      activeName: 'first'
    }
  }
}

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
