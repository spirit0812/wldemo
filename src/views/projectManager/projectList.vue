<template>
  <div class="pageMain">
    <ProjectListHead/>
    <ProjectListTable/>
    <PageNavigation/>
  </div>
</template>


<script>
import ProjectListHead from '../../components/ProjectListHead.vue'
import ProjectListTable from '../../components/ProjectListTable.vue'
import PageNavigation from '../../components/PageNavigation.vue'

export default {
  name: 'projectList',
  components: {
    ProjectListHead,
    ProjectListTable,
    PageNavigation
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
  height: auto;
}
.pageMain {
  background-color: #FFFFFF;
}
/* thead,th{background-color:#E6F1FC;} */
</style>
