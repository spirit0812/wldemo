<template>
<div class="bg" style="overflow-y:hidden;">
<div id="app">
<div class="formMain">
<div class="logo"></div>
<div class="Tcenter">
<h2>福建省文旅专项资金</h2>
<p>数据综合管理平台</p>
</div>
<el-form :model="ruleForm" status-icon ref="ruleForm" class="demo-ruleForm ">
<el-form-item label="" prop="user" class="user"
 :rules="{ required: true, message: '用户名不能为空', trigger: 'blur' }">
<el-input type="user" v-model="ruleForm.user" prefix-icon="el-icon-user"
 placeholder="用户名" autocomplete="off">
</el-input>
</el-form-item>
<el-form-item label="" prop="pass" class="key"
:rules="{required: true, message: '密码不能为空', trigger: 'blur'}">
<el-input type="password" v-model="ruleForm.pass"
 prefix-icon="el-icon-lock" placeholder="密码" autocomplete="off"></el-input>
</el-form-item>
<el-checkbox style="float:left;">记住密码</el-checkbox>
<el-form-item>
    <router-link to="/home">
<el-button type="">登&nbsp;&nbsp;录<i class=""></i></el-button>
    </router-link>
</el-form-item>
</el-form>
</div>
</div>
</div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      ruleForm: {
        pass: '',
        user: '',
        checked: false
      },
    };
  }
}
</script>
<style lang="scss" scoped>
div.bg{padding: 0; margin: 0;}
.bg:after{
  content: '';
  position: fixed;
  height:50%;
  width: 100%;
  top: 0;
  left: 0%;
  background: url(../assets/login_bg.png) no-repeat center;
  z-index:-1;
}
.formMain{
  width: 50%;
  max-width:26rem;
  padding: 3rem 4rem 3.5rem 4rem;
  box-shadow: 0 .2rem .5rem rgba(0,0,0,.1);
  margin: 0 auto;
  margin-top: 15vh;
  background: #fff;
}

.logo{
  background: url(../assets/login_logo.png) no-repeat center;
  background-size:contain;
  width: auto;
  height:8rem;
}
.Tcenter{text-align: center; width: 100%;}
.Tcenter h2{margin-bottom:0; margin-top: .5rem; font-weight: 500; font-size: 2rem;}
.Tcenter p{margin-top: 0; margin-bottom: 1.5rem; color: rgba(0,0,0, .5);}

.el-form-item.is-success .el-input__inner,
.el-form-item.is-success .el-input__inner:focus,
.el-form-item.is-success .el-textarea__inner,
.el-form-item.is-success.el-textarea__inner:focus {
  border-color: #67C23A;
}

.el-button{
  width: 100%;
  background: linear-gradient(to left, #039849, rgba(31, 131, 208, 0.8));
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  box-shadow: 0 .3rem .5rem rgba(6, 80, 41, 0.24);
  height: 3.5rem;
  border: none;
}
.el-button:hover,
.el-button:focus{
  background: linear-gradient(to left, #039849, #18b0d1);
  color: #fff;
}
.el-button:active{
  background: linear-gradient(to left, #039849, #18b0d1);
  box-shadow: none;
}
.el-input__inner{height: 3rem; line-height:1;}
.el-checkbox__input.is-checked+.el-checkbox__label{color:  #039849;}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #039849;
    border-color: #039849;
}
.el-checkbox{margin-bottom:1rem;}
.key.el-form-item{margin-bottom: 1rem;}
@media only screen and (max-width:1440px ) {
  .formMain{
    width: 50%;
    max-width:20rem;
    padding: 2.5rem 4rem;
    box-shadow: 0 .2rem .5rem rgba(0,0,0,.1);
    margin: 0 auto;
    margin-top: 12vh;
    background: #fff;
  }
  .el-input__inner{height:2.5rem; line-height:1;}
  .el-button{height: 2.8rem;}
  .logo{height:6.8rem;}
}
</style>
