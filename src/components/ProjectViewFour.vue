<template>
  <div class="pageMain">
    <div>
<el-row>
    <div style="margin-top:30px;">
    <el-col :span="8" >
        <div style="display:inline-block;float:left;">文件名称:</div>
        <div style="display:inline-block;margin-left:5px;float:left;">
        <el-input v-model="wjmc" placeholder="输入文件名称">
        </el-input>
        </div>
    </el-col>
    <el-col :span="11" >
        <div style="display:inline-block;">项目时间:</div>
        <div style="display:inline-block;margin-left:5px;">
        <el-time-picker
        is-range
        v-model="date1"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围">
        </el-time-picker>
        </div>
    </el-col>
    </div>
</el-row>
<el-row>
<el-col :span="5" style="margin-top:10px;float:left;">
    <el-button type="success" style="margin-left:30px;"> 搜 索 </el-button>
    <el-button type=""> 添 加 </el-button>
    </el-col>
</el-row>
</div>
<div>
  <el-table :data="tableData" style="width:100%;">
      <el-table-column prop="xh" label="序号" width="50"></el-table-column>
      <el-table-column prop="wjmc" label="文件名称" style="width:20%;"></el-table-column>
      <el-table-column prop="wjlx" label="文件类型" style="width:20%;"></el-table-column>
      <el-table-column prop="wh" label="文号" width="200"></el-table-column>
      <el-table-column prop="scsj" label="上传时间" width="100"></el-table-column>
      <el-table-column prop="cjr" label="创建人" width="100"></el-table-column>
      <el-table-column prop="jysm" label="文件简要说明" style="width:20%;"></el-table-column>
  </el-table>
</div>
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
  </div>
</template>


<script>
export default {
  name: 'ProjectViewFour',
  data() {
    return {
      wjmc: '',
      date1: '',
      tableData: [
        {
          xh: '1',
          wjmc: '福建省昙山博物馆工程招标书',
          wjlx: '招标文件',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '王希',
          jysm: '项目招标文件'
        },
        {
          xh: '2',
          wjmc: '关于福建省昙石山文化保护的报告',
          wjlx: '政府报告',
          wh: '闽文人[2018]002号',
          scsj: '2019-10-11',
          cjr: '张坤龙',
          jysm: '政府报告'
        },
        {
          xh: '3',
          wjmc: '福建省昙山博物馆工程招标书',
          wjlx: '招标文件',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '王希',
          jysm: '项目招标文件'
        },
        {
          xh: '4',
          wjmc: '关于福建省昙山文化保护的报告',
          wjlx: '政府报告',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '李振',
          jysm: '政府报告'
        },
        {
          xh: '5',
          wjmc: '福建省昙山博物馆工程招标书',
          wjlx: '招标文件',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '张三',
          jysm: '项目招标文件'
        },
        {
          xh: '6',
          wjmc: '关于福建省昙山文化保护的报告',
          wjlx: '政府报告',
          wh: '闽文人[2018]18号',
          scsj: '2019-10-11',
          cjr: '张文博',
          jysm: '政府报告'
        }]
    };
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
}
/* thead,th{background-color:#E6F1FC;} */
</style>
