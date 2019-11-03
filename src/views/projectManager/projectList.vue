<template>
  <div class="pageMain">
    <el-row>
      <div style="margin-top:30px;">
        <el-col :span="8" >
          <div style="display:inline-block;">项目名称:</div>
          <div style="display:inline-block;margin-left:5px;">
          <el-input v-model="xmmc" placeholder="输入查询项目名称">
          </el-input>
          </div>
        </el-col>
        <el-col :span="8" >
          <div style="display:inline-block;">预算单位:</div>
          <div style="display:inline-block;margin-left:5px;">
          <el-select v-model="ysdw" placeholder="选择预算单位">
            <el-option
              v-for="item in ysdwOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </el-col>
        <el-col :span="8" >
          <div style="display:inline-block;">业务处室:</div>
          <div style="display:inline-block;margin-left:5px;">
          <el-select v-model="ywcs" placeholder="选择业务处室">
            <el-option
              v-for="item in ywcsOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <div style="margin-top:10px;">
        <el-col :span="8" >
          <div style="display:inline-block;">指标文号:</div>
          <div style="display:inline-block;margin-left:5px;">
          <el-input v-model="zbwh" placeholder="输入指标文号">
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
      <div style="margin-top:10px;">
        <el-col :span="8" >
          <div style="display:inline-block;">项目年度:</div>
          <div style="display:inline-block;margin-left:5px;">
          <el-select v-model="xmnd" placeholder="选择项目年度">
            <el-option
              v-for="item in xmndOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </div>
        </el-col>
        <el-col :span="11" >
          <div style="display:inline-block;">项目时间:</div>
          <div style="display:inline-block;margin-left:5px;">
          <el-time-picker
            is-range
            v-model="date2"
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
      <el-col :span="8" style="margin-top:10px;">
      <el-button type="warning"> 清 空 </el-button>
      <el-button type="success"> 查 询 </el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width:100%;">
      <el-table-column prop="name" label="项目名称" style="width:20%;"></el-table-column>
      <el-table-column prop="ysdw" label="预算单位" style="width:20%;"></el-table-column>
      <el-table-column prop="ywcs" label="业务处室" style="width:20%;"></el-table-column>
      <el-table-column prop="zbwh" label="指标文号" style="width:20%;"></el-table-column>
      <el-table-column prop="createTime" label="创建时间" style="width:20%;"></el-table-column>
      <el-table-column prop="oper" label="操作" style="width:5%;">
        <template slot-scope="">
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

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
  data() {
    return {
      tableData: [
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        },
        {
          name: '2019年福建省与台湾交流',
          ysdw: '福建省闽台文化交流中心',
          ywcs: '教科文处',
          zbwh: '闽财指[2019]0123号',
          createTime: '2019-01-22'
        }
      ],
      xmmc: '',
      ysdw: '',
      ysdwOptions: [{
        value: '[33366076]景石山博物馆',
        label: '[33366076]景石山博物馆'
      },
      {
        value: '[33366066]石柱博物馆',
        label: '[33366066]石柱山博物馆'
      }],
      ywcs: '',
      ywcsOptions: [{
        value: '教科文处',
        label: '教科文处'
      },
      {
        value: '文化部处',
        label: '文化部处'
      }],
      zbwh: '',
      date1: '',
      date2: '',
      xmnd: '',
      xmndOptions: [{
        value: '2018',
        label: '2018'
      },
      {
        value: '2019',
        label: '2019'
      },
      {
        value: '2020',
        label: '2020'
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
