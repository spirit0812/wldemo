<template>
    <div>
    <el-row style="padding:30px 0px">
        <p style="padding:20px; text-align:left;" >
            <el-button @click.native="addDept" round style=" color: rgb(3, 152, 73);border: 1px solid rgb(3, 152, 73);">新建部门</el-button>
        </p>
        <p style="padding:20px;text-align:left;">
            <el-button @click.native="updDept" round style=" color: rgb(3, 152, 73);border: 1px solid rgb(3, 152, 73);">修改部门</el-button>
        </p>
        <p style="padding:20px;text-align:left;" >
            <el-button @click.native="del" round style=" color: #E6A23C;border: 1px solid #E6A23C;">删除部门</el-button>
        </p>
         <p style="padding:20px;text-align:left;" >
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </p>
    </el-row>
    <div class="mydialog">
    <el-dialog title="新增部门" :visible.sync="dialogFormVisible" >
            <el-form :model="form"  ref="form"  >
                <el-form-item label="上级部门" :label-width="formLabelWidth"  prop="u"
                :rules="[
                    { required: true, message: '上级部门不能为空'}
                ]">
               
                <el-input v-model="form.upDept" autocomplete="off" placeholder="请选择上级部门"></el-input>
                </el-form-item>
                <el-form-item label="部门名称" :label-width="formLabelWidth"  prop="u"
                :rules="[
                    { required: true, message: '部门不能为空'}
                ]">
                <el-input v-model="form.dept" autocomplete="off"  placeholder="请输入部门名称"></el-input>
                </el-form-item>
                <el-form-item label="部门序号" :label-width="formLabelWidth"  prop="sort">
                <el-input v-model="form.sort" autocomplete="off"  placeholder="请输入部门序号"></el-input>
                </el-form-item>
                 <el-form-item label="部门描述" :label-width="formLabelWidth" prop="desc">
                <el-input type="textarea" v-model="form.desc" :rows="4"  autocomplete="off"  placeholder="请输入部门描述"></el-input>
                </el-form-item>
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
  name: 'organizationManageBanner',
  data() {
      return {
        data: [{
          label: '福建省',
          children: [{
            label: '福建省文旅厅',
            
          },{
            label: '福州市',
            
          },{
            label: '厦门市',
            
          },{
            label: '漳州市',
            
          },{
            label: '宁德市',
            
          },{
            label: '三明市',
            
          },{
            label: '泉州市',
            
          },{
            label: '莆田市',
            
          },{
            label: '龙岩市',
            
          },{
            label: '南平市',
            
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
         dialogFormVisible: false,
        form: {
          upDept: '',
          dept: '',
          sort: '',
          desc:'',
          u:'1',
          
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
       addDept(){
        this.dialogFormVisible = true;
        this.form.upDept="";
        this.form.dept="";
        this.form.sort="";
        this.form.desc="";
      },
      updDept(){
        this.dialogFormVisible = true;
        this.form.upDept="资源部";
        this.form.dept="资源开发处";
        this.form.sort="2";
        this.form.desc="资源开发";
      },
      del() {
        this.$confirm('此操作将永久删除该部门, 是否继续?', '提示', {
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
<style >
 .mydialog .el-dialog {
       width: 30% ;
   }
</style>