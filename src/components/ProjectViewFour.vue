<template>
  <div class="pageMain">
    <div>
<el-row>
    <div style="margin:10px 0 0 10px;">
    <el-col :span="7" >
        <div style="display:inline-block;float:left;margin-top:5px;">文件名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="wjmc" placeholder="输入文件名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="14" >
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
<el-col :span="4" style="margin-top:10px;float:left;">
    <el-button type="success" style="margin-left:30px;"> 搜 索 </el-button>
    <el-button type="primary" plain @click="edit"> 添 加 </el-button>
    </el-col>
</el-row>
</div>
<div>
  <el-table :data="tableData" :header-cell-style="{background:'#E8F1FB'}"
  style="width:100%;padding:5px 10px 0 10px;">
      <el-table-column prop="xh" label="序号" min-width="5%"></el-table-column>
      <el-table-column prop="wjmc" label="文件名称" min-width="30%"></el-table-column>
      <el-table-column prop="wjlx" label="文件类型" min-width="15%"></el-table-column>
      <el-table-column prop="wh" label="文号" min-width="20%"></el-table-column>
      <el-table-column prop="scsj" label="上传时间" min-width="15%"></el-table-column>
      <el-table-column prop="cjr" label="创建人" min-width="10%"></el-table-column>
      <el-table-column prop="jysm" label="文件简要说明" min-width="20%"></el-table-column>
  </el-table>
</div>
<div class="block" style="margin-bottom:15px;">
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[10, 20]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="50"
    ></el-pagination>
</div>

<div class="mydialog">
  <el-dialog :title="title" :visible.sync="dialogFormVisible" >
      <el-form :model="form"  ref="form"  >
          <el-form-item label="文件名称 " :label-width="formLabelWidth" prop="name"
          :rules="[
              { required: true, message: '文件名称不能为空'}
          ]">
          <el-input v-model="form.name" autocomplete="off" ></el-input>
          </el-form-item>
          <el-form-item label="文件类型 " :label-width="formLabelWidth">
          <el-select v-model="form.nf" placeholder="请选择文件类型" >
              <el-option label="招标文件" value="招标文件"></el-option>
              <el-option label="政府报告" value="政府报告"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="文号 " :label-width="formLabelWidth" >
              <el-input v-model="form.wh" autocomplete="off" ></el-input>
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
  name: 'ProjectViewFour',
  data() {
    return {
      wjmc: '',
      date1: '',
      tableData: [
        {
          xh: '1',
          wjmc: '福建省昙山博物馆工程招标书',
          wjlx: '招标文件',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '王希',
          jysm: '项目招标文件'
        },
        {
          xh: '2',
          wjmc: '关于福建省昙石山文化保护的报告',
          wjlx: '政府报告',
          wh: '闽文人[2018]002号',
          scsj: '2019-10-11',
          cjr: '张坤龙',
          jysm: '政府报告'
        },
        {
          xh: '3',
          wjmc: '福建省昙山博物馆工程招标书',
          wjlx: '招标文件',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '王希',
          jysm: '项目招标文件'
        },
        {
          xh: '4',
          wjmc: '关于福建省昙山文化保护的报告',
          wjlx: '政府报告',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '李振',
          jysm: '政府报告'
        },
        {
          xh: '5',
          wjmc: '福建省昙山博物馆工程招标书',
          wjlx: '招标文件',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '张三',
          jysm: '项目招标文件'
        },
        {
          xh: '6',
          wjmc: '关于福建省昙山文化保护的报告',
          wjlx: '政府报告',
          wh: '闽文人[2018]18号',
          scsj: '2019-10-11',
          cjr: '张文博',
          jysm: '政府报告'
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
    edit() {
      this.title = '新增相关文件';
      this.form.name = '';
      this.form.wh = '';
      this.form.nf = '';
      this.form.file = '';
      this.dialogFormVisible = true;
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
  padding-left: 20px;
  padding-right: 20px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.pageMain {
  background-color: #FFFFFF;
}
/* thead,th{background-color:#E6F1FC;} */
</style>
