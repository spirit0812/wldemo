<template>

  <div class="pageMain">
      <el-container >
            <el-aside  style="border-right:1px solid #eee; width:15%;">
                <div >
                    <organizationManageBanner/>
                </div>
            </el-aside>
            <el-main style="width:85%;">
                <div >
                    <roleManageHead/>
                    <organizationManageTable/>
                    <PageNavigation/>
                </div>
            </el-main>
     </el-container>
  </div>
</template>

<script>
import roleManageHead from '../../components/roleManageHead.vue'
import organizationManageTable from '../../components/organizationManageTable.vue'
import PageNavigation from '../../components/PageNavigation.vue'
import organizationManageBanner from '../../components/organizationManageBanner.vue'
export default {
  name: 'organizationManage',
  components: {
    roleManageHead,
    organizationManageTable,
    PageNavigation,
    organizationManageBanner
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