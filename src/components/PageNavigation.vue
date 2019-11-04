<template>
<div class="block" style="margin-bottom:15px;">
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="800"
    ></el-pagination>
</div>
</template>
<script>
export default {
  name: 'PageNavigation'
}
</script>
