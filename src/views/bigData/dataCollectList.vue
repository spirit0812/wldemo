<template>
  <div class="pageMain">
      <div>
      <el-row style="padding:30px 0px">
        <el-col :span="12" style="margin-top:10px;float:left;text-align: left;">
            <template slot-scope="">
                 <router-link to='/dataCollectEdit'>
                    <el-button type="primary" plain  @click.native="add" > 新建</el-button>
                </router-link>
            </template>
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
            <el-table-column prop="gzmc" label="数据采集规则名称" style="width:15%;"></el-table-column>
            <el-table-column prop="gzlx" label="数据采集规则类型" style="width:15%;"></el-table-column>
            <el-table-column prop="cz" label="操作" style="width:55%;">
            <template slot-scope="scope">
                <el-button   @click.native="copy" type="primary" plain size="small">克隆</el-button>
                <router-link to='/dataCollectEdit'>
                    <el-button   type="primary" plain size="small" style="margin-left:20px;">编辑</el-button>
                </router-link>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" style="margin-left:20px;" type="primary" plain size="small">删除</el-button>
            </template>
            </el-table-column>

        </el-table>


        </div>

        </div>
    <PageNavigation/>
  </div>
</template>


<script>
import PageNavigation from '../../components/PageNavigation.vue'

export default {
  name: 'dataCollectList',
  components: {
    PageNavigation
  },
  data() {
    return {
      radio1: '1',
      activeName: 'first',
      dialogFormVisible: false,
      title: '',
      form: {
        sjymc: '',
        gzmc: '',
        gzlx: '',
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
          gzmc: '财政一体化平台资金数据采集规则A',
          gzlx: '接口采集',
        },
        {
          sjymc: '财政一体化平台',
          gzmc: '财政一体化平台资金数据采集规则B',
          gzlx: '接口采集',
        },
        {
          sjymc: '财政一体化平台',
          gzmc: '财政一体化平台资金数据采集规则C',
          gzlx: '接口采集',
        },
        {
          sjymc: '财政一体化平台',
          gzmc: '财政一体化平台资金数据采集规则D',
          gzlx: '接口采集',
        },
        {
          sjymc: '财政一体化平台',
          gzmc: '财政一体化平台资金数据采集规则C',
          gzlx: '接口采集',
        },
        {
          sjymc: '财政一体化平台',
          gzmc: '财政一体化平台资金数据采集规则A',
          gzlx: '接口采集',
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
    copy() {
      const arr = {};
      arr.sjymc = '财政一体化平台';
      arr.gzmc = '财政一体化平台资金数据采集规则A';
      arr.gzlx = '接口采集';
      this.tableData.push(arr);
    },
    edit() {
      this.title = '编辑接口数据源';
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
      this.title = '新建接口数据源';
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
