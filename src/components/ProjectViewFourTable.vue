<template>
<div>
<el-table :data="tableData" style="width:100%;">
    <el-table-column prop="xh" label="序号" width="50"></el-table-column>
    <el-table-column prop="wjmc" label="文件名称" style="width:20%;"></el-table-column>
    <el-table-column prop="wh" label="文号" style="width:20%;"></el-table-column>
    <el-table-column prop="scsj" label="上传时间" width="100"></el-table-column>
    <el-table-column prop="cjr" label="创建人" width="100"></el-table-column>
    <el-table-column prop="jysm" label="文件简要说明" width="100"></el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'ProjectViewFourTable',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          wjmc: '福建省昙山博物馆工程招标书',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '王希',
          jysm: '项目招标文件'
        },
        {
          xh: '2',
          wjmc: '关于福建省昙石山文化保护的报告',
          wh: '闽文人[2018]002号',
          scsj: '2019-10-11',
          cjr: '张坤龙',
          jysm: '政府报告'
        },
        {
          xh: '3',
          wjmc: '福建省昙山博物馆工程招标书',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '王希',
          jysm: '项目招标文件'
        },
        {
          xh: '4',
          wjmc: '关于福建省昙山文化保护的报告',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '李振',
          jysm: '政府报告'
        },
        {
          xh: '5',
          wjmc: '福建省昙山博物馆工程招标书',
          wh: '闽文人[2018]18号',
          scsj: '2018-10-01',
          cjr: '张三',
          jysm: '项目招标文件'
        },
        {
          xh: '6',
          wjmc: '关于福建省昙山文化保护的报告',
          wh: '闽文人[2018]18号',
          scsj: '2019-10-11',
          cjr: '张文博',
          jysm: '政府报告'
        }]
    };
  }
};
</script>
