<template>
<div>
<el-table :data="tableData" style="width:100%;">
    <el-table-column prop="xh" label="序号" width="50"></el-table-column>
    <el-table-column prop="zxmc" label="专项名称" style="width:20%;"></el-table-column>
    <el-table-column prop="zjwh" label="专项资金文号" style="width:20%;"></el-table-column>
    <el-table-column prop="nf" label="年份" width="100"></el-table-column>
    <el-table-column prop="sbzn" label="专项资金申报指南" style="width:5%;">
    <template slot-scope="">
        <router-link to=''>
        <el-button type="text" size="small">申报指南下载</el-button>
        </router-link>
    </template>
    </el-table-column>
</el-table>
</div>
</template>
<script>
export default {
  name: 'SpecialManageTable',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '2',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '3',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '4',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '5',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '6',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '7',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '8',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '9',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        },
        {
          xh: '10',
          zxmc: '2020年福建省非物质文化遗产保护传承专项资金',
          zjwh: '闽财指[2019]0125号',
          nf: '2019'
        }]
    };
  }
};
</script>
