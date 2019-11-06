<template>
  <div class="pageMain">
      <div>
      <el-row style="padding:30px 0px">
        <el-col :span="12" style="margin-top:10px;float:left;text-align: left;">
            <el-button type="primary" plain  @click.native="add" > 新建</el-button>
         </el-col>
         <el-col :span="5" style="margin-top:10px;float:right;">
            <el-input  v-model="search" placeholder="" prefix-icon="el-icon-search" suffix-icon ="el-icon-position" >
            </el-input>

        </el-col>
        </el-row>
    </div>
    <div>
        <div>
        <el-table  :data="tableData" style="width:100%;" :header-cell-style="{background:'#b3d8ff',color:'#606266'}">
            <el-table-column prop="sjymc" label="数据源名称" style="width:15%;"></el-table-column>
            <el-table-column prop="ms" label="描述" style="width:15%;"></el-table-column>
            <el-table-column prop="jkdz" label="接口地址" style="width:15%;"></el-table-column>
            <el-table-column prop="cs" label="参数" style="width:40%;"></el-table-column>
            <el-table-column prop="cz" label="操作" style="width:10%;">
            <template slot-scope="scope">
                <router-link to=''>
                <el-button  @click="edit" type="primary" plain size="small">编辑 </el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="primary" plain size="small">删除</el-button>

                </router-link>
            </template>
            </el-table-column>

        </el-table>
                <el-dialog :title="title" :visible.sync="dialogFormVisible" >
                 <el-divider content-position="left">基础信息设置</el-divider>
                <el-form :model="form" :inline="true" ref="form"  >
                        <el-form-item label="数据源名称" :label-width="formLabelWidth"  prop="sjymc"
                        :rules="[
                            { required: true, message: '数据源名称不能为空'}
                        ]">
                            <el-input v-model="form.sjymc" autocomplete="off" >

                            </el-input>
                        </el-form-item>
                        <el-form-item label="接口地址" :label-width="formLabelWidth" prop="jkdz"
                        :rules="[
                            { required: true, message: '接口不能为空'}
                        ]">
                            <el-input v-model="form.jkdz" autocomplete="off" ></el-input>
                        </el-form-item>
                        <el-form-item label="用户名" :label-width="formLabelWidth"  >
                            <el-input v-model="form.yhm" autocomplete="off" ></el-input>
                        </el-form-item>
                        <el-form-item label="密码" :label-width="formLabelWidth"  >
                            <el-input v-model="form.mm" autocomplete="off" ></el-input>
                        </el-form-item>
                        <el-form-item label="请求类型" :label-width="formLabelWidth">
                            <el-select v-model="form.qqlx" >
                                <el-option label="Post" value="b"></el-option>
                                <el-option label="Get" value="n"></el-option>
                            </el-select>
                        </el-form-item>
                         <el-form-item label="原始编码" :label-width="formLabelWidth">
                            <el-select v-model="form.ysbm" >
                                <el-option label="UTF-8" value="b"></el-option>
                                <el-option label="Gbk" value="n"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="目标编码" :label-width="formLabelWidth">
                            <el-select v-model="form.mbbm" >
                                <el-option label="UTF-8" value="b"></el-option>
                                <el-option label="Gbk" value="n"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="格式" :label-width="formLabelWidth">
                            <el-select v-model="form.gs" >
                                <el-option label="JSON" value="b"></el-option>
                                <el-option label="XML" value="n"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="描述" :label-width="formLabelWidth" >
                            <el-input v-model="form.ms" autocomplete="off" type="textarea" style="width:300px;" ></el-input>
                        </el-form-item>

                    </el-form>
                    <el-divider content-position="left">参数设置</el-divider>
                    <el-row style="padding: 0px 0px 20px 0px;">
                        <el-col :span="8" style="margin-top:10px;float:left;text-align: left;">
                            <el-button type="primary" @click.native="dialogFormVisible = true" plain > 新增</el-button>
                            <el-button type="primary" @click.native="dialogFormVisible2 = true" plain style="margin-left:30px;"> 删除 </el-button>
                        </el-col>
                    </el-row>
                    <el-table  ref="multipleTable"  :data="childTableData" style="width:100%;" :header-cell-style="{background:'#b3d8ff',color:'#606266'}">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column prop="csmc" label="参数名称" style="width:15%;"></el-table-column>
                        <el-table-column prop="csms" label="参数描述" style="width:15%;"></el-table-column>
                        <el-table-column prop="csmrz" label="参数默认值" style="width:15%;"></el-table-column>
                    </el-table>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>

        </div>

        </div>
    <PageNavigation/>
  </div>
</template>


<script>
import PageNavigation from '../../components/PageNavigation.vue'

export default {
  name: 'dataSetting',
  components: {
    PageNavigation
  },
  data() {
    return {
      radio1: '1',
      activeName: 'first',
      dialogFormVisible: false,
      title:'',
      form: {
        sjymc: '',
        ms: '',
        jkdz: '',
        cs: '',
        yhm: '',
        mm: '',
        qqlx: '',
        ysbm: '',
        mbbm: '',
        gs: '',

      },
      formLabelWidth: '120px',
      tableData: [
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        },
        {
          sjymc: '财政一体化平台',
          ms: '财政一体化平台资金数据对接',
          jkdz: '192.168.1.30',
          cs: 'id=admin;pw=123456'
        }],
      data: [{
        label: '项目管理',
        children: [{
          label: '项目列表',
        },
        {
          label: '项目查重',
        },
        {
          label: '项目导入',
        },
        {
          label: '资金管理',
        }]
      }, {
        label: '绩效管理',
        children: [{
          label: '考评列表',

        }, {
          label: '自评报告',
        }]
      }, {
        label: '大数据分析',
        children: [{
          label: '决策分析',

        }, {
          label: '数据源管理',
        }]
      }, {
        label: '系统管理',
        children: [{
          label: '人员管理',
        }, {
          label: '组织机构管理',
        }, {
          label: '角色管理',
        }]
      }],
      childTableData: [
        {
          csmc: 'id',
          csms: '登录用户名',
          csmrz: '$fm_userid',
        },
        {
          csmc: 'pw',
          csms: '登录密码',
          csmrz: '$fm_userid',
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }

    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    edit() {
      this.title='编辑接口数据源';
      this.dialogFormVisible = true;
      this.form.sjymc = '财政一体化平台';
      this.form.ms = '13ddfs';
      this.form.jkdz = '192.168.1.30';
      this.form.cs = '';
      this.form.yhm = 'admin';
      this.form.mm = '32156sd';
      this.form.qqlx = 'Post';
      this.form.ysbm = 'UTF-8';
      this.form.mbbm = 'GBK';
      this.form.gs = 'JSON';
    },
    add() {
      this.title='新建接口数据源';
      this.dialogFormVisible = true;
      this.form.sjymc = '';
      this.form.ms = '';
      this.form.jkdz = '';
      this.form.cs = '';
      this.form.yhm = '';
      this.form.mm = '';
      this.form.qqlx = '';
      this.form.ysbm = '';
      this.form.mbbm = '';
      this.form.gs = '';
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
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
  height: 800px;
}

/* thead,th{background-color:#E6F1FC;} */
</style>
<style lang="scss" >

.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    text-align: right !important;
    padding: 20px !important;
}
/* thead,th{background-color:#E6F1FC;} */
</style>
<style >
    .el-dialog {
       width: 960px ;
   }
   .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin-bottom: 40px !important;
 }
 .el-divider {
    position: unset !important;
}
.el-divider__text {
    font-size: large !important;
}
</style>
