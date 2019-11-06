<template>
    <div >
    <el-row style="padding:30px 0px">
        <el-col :span="12" style="margin-top:10px;float:left;text-align: left;">
            <el-button type="primary" @click.native="dialogFormVisible = true" > 添加角色</el-button>
            <el-button type="warning" @click="del" style="margin-left:30px;"> 删除角色 </el-button>
         </el-col>
         <el-col :span="5" style="margin-top:10px;float:right;">
            <el-input  v-model="search" placeholder="请输入手机号/姓名" prefix-icon="el-icon-search" suffix-icon ="el-icon-position" >
            </el-input>

        </el-col>
        </el-row>
        <div class="mydialog">
        <el-dialog title="新增角色" :visible.sync="dialogFormVisible" >
            <el-form :model="form"  ref="form"  >
                <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name"
                :rules="[
                    { required: true, message: '角色名称不能为空'}
                ]">
                <el-input v-model="form.name" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="角色描述" :label-width="formLabelWidth" >
                    <el-input v-model="form.email" autocomplete="off" ></el-input>
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
  name: 'roleManageHead',
  data() {
    return {
      search: '',
      radio1: '1',
      activeName: 'first',
      dialogFormVisible: false,
      form: {
        name: '',
        account: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        dept: '',
        nickName: '',
        sex: '男',
        email: '',
        phone: '',
      },
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
      },
      formLabelWidth: '120px'

    };
  },
  methods: {
    del() {
      this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>
<style lang="scss" >
 .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
    text-align: left;
}
.el-dialog__header {
    padding: 20px 20px 10px;
    text-align: left;
}
 .el-dialog__body .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 300px !important;
}
.el-dialog__body .el-textarea__inner {
    width: 300px;
}
// .el-dialog {
//        width: 960px ;
//    }

 .mydialog .el-dialog {
       width: 560px !important;
   }

</style>
