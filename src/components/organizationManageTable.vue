<template>
<div>
<el-table ref="multipleTable" :data="tableData" style="width:100%;" :header-cell-style="{background:'rgb(232, 241, 251)',color:'#606266'}">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="xh" width="55" style="width:5%;" label="序号"></el-table-column>
    <el-table-column prop="ssdw" label="所属单位"  style="width:8%;" ></el-table-column>
    <el-table-column prop="bm" label="部门"  style="width:8%;" ></el-table-column>
    <el-table-column prop="xm" label="姓名/账号"  style="width:8%;" ></el-table-column>
    <el-table-column prop="sjh" label="手机号"  style="width:5%;" ></el-table-column>
    <el-table-column prop="zw" label="职务"  style="width:5%;" ></el-table-column>
    <el-table-column prop="yx" label="邮箱"  style="width:5%;"></el-table-column>
    <el-table-column prop="sjsb" label="手机设备" style="width:8%;" ></el-table-column>
    <el-table-column prop="cjsj" label="创建时间"  style="width:8%;" ></el-table-column>
    <el-table-column prop="zt" label="状态"  style="width:8%;" ></el-table-column>
    <el-table-column prop="cz" label="操作" width="200" >
    <template slot-scope="">
        <router-link to=''>
        <el-button @click.native="edit" type="text" size="small">编辑</el-button>
        <span style="color:blue;margin:0px 1px;">|</span>
        <el-button  @click.native="del" type="text" size="small">删除</el-button>
        <span style="color:blue; margin:0px 1px;">|</span>
        <el-button  @click.native="detail" type="text" size="small">详情</el-button>
        <span style="color:blue; margin:0px 1px;">|</span>
        <el-button v-if="statu=='ty'" @click.native="status('ty')" type="text" size="small">停用</el-button>
        <el-button v-if="statu=='qy'" @click.native="status('qy')" type="text" size="small">启用</el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
<el-dialog :title="title" :visible.sync="dialogFormVisible" >
            <el-form :model="form" :inline="true" ref="form"  >
                <el-form-item label="姓名" :label-width="formLabelWidth"  prop="name"
                :rules="[
                    { required: true, message: '姓名不能为空'}
                ]">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="昵称" :label-width="formLabelWidth"  >
                    <el-input v-model="form.nickName" autocomplete="off" ></el-input>
                </el-form-item>
                 <el-form-item label="账号" :label-width="formLabelWidth"  prop="account"
                 :rules="[
                    { required: true, message: '账号不能为空'}
                 ]">
                <el-input v-model="form.account" autocomplete="off" ></el-input>
                </el-form-item>
                 <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.sex" >
                    <el-option label="男" value="b"></el-option>
                    <el-option label="女" value="n"></el-option>
                </el-select>
                </el-form-item>
                 <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone"
                  :rules="[
                    { required: true, message: '账号不能为空'}
                 ]">
                <el-input v-model="form.phone" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" >
                    <el-input v-model="form.email" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="所属部门" :label-width="formLabelWidth">
                <el-select v-model="form.dept" placeholder="请选择部门" >
                    <el-option label="产业发展处" value="cyfz"></el-option>
                    <el-option label="市场管理处" value="scgl"></el-option>
                     <el-option label="资源开发处" value="zykf"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <el-form>
                <el-form-item label="" :label-width="formLabelWidth"  >
                    <el-button v-if="title =='编辑成员'" type="warning" @click="dialogFormVisible = false">取 消</el-button>
                    <el-button v-if="title =='编辑成员'" type="success" @click="dialogFormVisible = false">保 存</el-button>
                </el-form-item>
            </el-form>
     </el-dialog>
</div>
</template>
<script>
export default {
  name: 'organizationManageTable',
  data() {
    return {
      statu: 'ty',
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
      formLabelWidth: '120px',
      tableData: [
        {
          xh: '1',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '2',
          ssdw: '福建省文旅厅',
          bm: '资源开发处',
          xm: '张强/zhangqiang',
          sjh: '13061545412',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '3',
          ssdw: '福建省文旅厅',
          bm: '市场管理处',
          xm: '王小房/wangxiaofang',
          sjh: '15622143821',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '4',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '5',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '6',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '7',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '8',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '9',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        },
        {
          xh: '10',
          ssdw: '福建省文旅厅',
          bm: '产业发展处',
          xm: '王小房/wangxiaofang',
          sjh: '13062143145',
          zw: '-',
          yx: '-',
          sjsb: '-',
          cjsj: '2019-07-16',
          zt: '正常'
        }],
      title: '',
    };
  },
  methods: {
    edit() {
      this.title = '编辑成员';
      this.dialogFormVisible = true;
      this.form.name = '王小房';
      this.form.nickName = '王小房';
      this.form.account = 'wangxiaofang';
      this.form.sex = '男';
      this.form.phone = '13062143145';
      this.form.email = '358889885@qq.com';
      this.form.dept = 'cyfz';
    },
    detail() {
      this.title = '成员详情';
      this.dialogFormVisible = true;
      this.form.name = '王小房';
      this.form.nickName = '王小房';
      this.form.account = 'wangxiaofang';
      this.form.sex = '男';
      this.form.phone = '13062143145';
      this.form.email = '358889885@qq.com';
      this.form.dept = 'cyfz';
    },
    del() {
      this.$confirm('此操作将永久删除该成员, 是否继续?', '提示', {
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
    },
    status(a) {
      if (a == 'ty') {
        this.statu == 'qy';
      }
      if (a == 'qy') {
        this.statu == 'ty';
      }
      this.$message.success('状态更改成功')
    }
  }
};
</script>
