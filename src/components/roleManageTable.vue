<template>
<div>
    <div>
<el-table ref="multipleTable" :data="tableData" style="width:100%;" :header-cell-style="{background:'rgb(232, 241, 251)',color:'#606266'}">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="jsmc" label="角色名称" style="width:15%;"></el-table-column>
    <el-table-column prop="ckfw" label="查看范围" style="width:15%;"></el-table-column>
    <el-table-column prop="jsms" label="角色描述" style="width:15%;"></el-table-column>
    <el-table-column prop="yh" label="用户" style="width:40%;"></el-table-column>
    <el-table-column prop="cz" label="操作" style="width:10%;">
    <template slot-scope="">
        <router-link to=''>
        <el-button  @click="detail" type="text" size="small">查看详情 </el-button>
         <span style="color:blue;">|</span>
        <el-button @click="edit" type="text" size="small">分配用户</el-button>
        </router-link>
    </template>
    </el-table-column>

    </el-table>
    <div class="mydialog">
        <el-dialog :title="title" :visible.sync="dialogFormVisible" >
            <el-form :model="form"  ref="form"  >

                <el-form-item label="角色名称" :label-width="formLabelWidth"  prop="u"
                :rules="[
                    { required: true, message: '角色不能为空'}
                ]">
                <el-input v-model="form.dept" autocomplete="off"  placeholder="请输入角色名称"></el-input>
                </el-form-item>

                 <el-form-item label="角色描述" :label-width="formLabelWidth" prop="u">
                <el-input type="textarea" v-model="form.desc" :rows="4"  autocomplete="off"  placeholder="请输入角色描述"></el-input>
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth" >
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane label="功能权限" name="first">
                            <el-tree show-checkbox :data="data" :props="defaultProps" ></el-tree>
                        </el-tab-pane>
                        <el-tab-pane label="数据权限" name="second">
                            <p style=" padding: 0px;margin: 0px 10px;">
                                <el-radio v-model="radio1" label="1" >默认</el-radio>
                            </p>
                            <p style=" padding: 0px;margin: 0px 10px;">
                                <el-radio v-model="radio1" label="2" >全部</el-radio>
                            </p>
                            <p style=" padding: 0px;margin: 0px 10px;">
                                <el-radio v-model="radio1" label="3" >指定部门</el-radio>
                            </p>

                        </el-tab-pane>
                    </el-tabs>
                 </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth" >
                    <el-button v-if="title=='用户分配'" type="warning" @click="dialogFormVisible = false">取 消</el-button>
                    <el-button v-if="title=='用户分配'" type="success" @click="dialogFormVisible = false">保 存</el-button>
                </el-form-item>
            </el-form>

        </el-dialog>

    </div>
</div>

</div>


</template>
<script>
export default {
  name: 'roleManageTable',
  data() {
    return {
      title: '',
      radio1: '1',
      activeName: 'first',
      dialogFormVisible: false,
      form: {
        upDept: '',
        dept: '',
        sort: '',
        desc: '',
        u: '1',

      },
      formLabelWidth: '120px',
      tableData: [
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[1]王小房'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[1]王小房'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[1]方杰[fangjie]'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[2]王小房[wangxiaofang],张扬[zhangyang]'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[0]'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[0]'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[2]王强[wangqiang],李勇[liyong]'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[3]王小房[wangxiaofang],周文杰[zhouwenjie],李依鹏[liyipeng]'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[1]王小房'
        },
        {
          jsmc: '华中HR',
          ckfw: '指定部门',
          jsms: '通讯录管理',
          yh: '[1]王小房'
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
    detail(){
      this.title="角色详情";
      this.form.dept="华中HR";
      this.form.desc="通讯录管理";
      this.dialogFormVisible=true;
    },
    edit(){
      this.title="用户分配";
      this.form.dept="";
      this.form.desc="";
      this.dialogFormVisible=true;
    }
  }
};
</script>
<style >
 .mydialog .el-dialog {
       width: 560px !important;
   }
</style>
