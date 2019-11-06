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
    <el-button type="success" style="margin-left:30px;"
     @click="detail"> 查 阅 </el-button>
    </el-col>
    <el-col :span="5" style="margin-top:10px;float:right;">
    <el-button type="primary" plain @click="edit"> 添 加 </el-button>
    </el-col>
</el-row>

<div class="mydialog">
  <el-dialog :title="title" :visible.sync="dialogFormVisible" >
      <el-form :model="form"  ref="form"  >
          <el-form-item label="专项名称: " :label-width="formLabelWidth" prop="name"
          :rules="[
              { required: true, message: '专项名称不能为空'}
          ]">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="专项文号: " :label-width="formLabelWidth" >
              <el-input v-model="form.wh" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="年份: " :label-width="formLabelWidth">
          <el-select v-model="form.nf" placeholder="请选择年份" >
              <el-option label="2018" value="2018"></el-option>
              <el-option label="2019" value="2019"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="申报指南: " :label-width="formLabelWidth" >
              <div style="display:inline-block;">
                  <el-input v-model="form.file" :disabled="true" :size="medium"></el-input>
              </div>
              <div style="display:inline-block;">
              <el-button type="primary" plain style="margin-left:5px;"> 上 传 </el-button>
              </div>
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
      }],
      dialogFormVisible: false,
      form: {
        name: '',
        wh: '',
        nf: ''
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    detail() {
      this.title = '专项详情';
      this.form.name = '2020年福建省非物质文化遗产保护传承专项资金';
      this.form.wh = '闽财指[2019]0125号';
      this.form.nf = '2018';
      this.form.file = '申报指南下载';
      this.dialogFormVisible = true;
    },
    edit() {
      this.title = '新增专项';
      this.form.name = '';
      this.form.wh = '';
      this.form.nf = '';
      this.form.file = '';
      this.dialogFormVisible = true;
    }
  }
};
</script>
