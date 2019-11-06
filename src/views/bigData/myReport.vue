<template>
<div class="pageMain">
         <el-row>
                <div style="margin-top:30px;">
                <el-col :span="8" >
                    <div style="display:inline-block;float:left;margin-top:5px;">报表名称:</div>
                    <div style="display:inline-block;margin-left:5px;float:left;">
                      <el-select v-model="xmlb" placeholder="请选择" >
                        <el-option label="项目列表(含自评)" value="项目列表(含自评)"></el-option>
                        <el-option label="项目列表(资金)" value="项目列表(资金)"></el-option>
                    </el-select>
                    
                    </div>
                </el-col>
                </div>
            </el-row>
          <el-divider></el-divider>
        <div v-if="xmlb=='项目列表(含自评)'">
            <el-row>
                <div style="margin-top:30px;">
                <el-col :span="8" >
                    <div style="display:inline-block;float:left;margin-top:5px;">项目名称:</div>
                    <div style="display:inline-block;margin-left:5px;float:left;">
                    <el-input v-model="xmmc" placeholder="输入项目名称">
                    </el-input>
                    </div>
                </el-col>
                <el-col :span="8" >
                    <div style="display:inline-block;float:left;margin-top:5px;">项目编码:</div>
                    <div style="display:inline-block;margin-left:5px;float:left;">
                    <el-input v-model="xmbm" placeholder="输入项目编码">
                    </el-input>
                    </div>
                </el-col>
                <el-col :span="8" >
                    <div style="display:inline-block;float:left;margin-top:5px;">自评分数:</div>
                    <div style="display:inline-block;margin-left:5px;float:left;">
                    <el-input v-model="zpfs" placeholder="输入自评分数">
                    </el-input>
                    </div>
                </el-col>
                </div>
            </el-row>
            <el-row style=" padding: 20px 0px;">
            <el-col :span="6" style="margin-top:10px;float:left;">
                <el-button type="warning"> 清 空 </el-button>
                <el-button type="success" style="margin-left:30px;"> 查 阅 </el-button>
                <el-button type="primary" style="margin-left:30px;"> 导 出 </el-button>
            </el-col>
            </el-row>
            <div style="margin-top:5px;">
            <el-table :data="tableData" :header-cell-style="{background:'#E8F1FB'}"
            style="width:100%;">
                <el-table-column prop="xh" label="序号" min-width="5%"></el-table-column>
                <el-table-column prop="xmmc" label="项目名称" min-width="40%"></el-table-column>
                <el-table-column prop="xmbm" label="项目编码" min-width="20%"></el-table-column>
                <el-table-column prop="zpfs" label="自评分数" min-width="10%"></el-table-column>
            </el-table>

            </div>
        </div>

        <div v-if="xmlb=='项目列表(资金)'">
            <el-row>
                <div style="margin-top:30px;">
                <el-col :span="8" >
                    <div style="display:inline-block;float:left;margin-top:5px;">项目名称:</div>
                    <div style="display:inline-block;margin-left:5px;float:left;">
                    <el-input v-model="xmmc" placeholder="输入项目名称">
                    </el-input>
                    </div>
                </el-col>
                <el-col :span="8" >
                    <div style="display:inline-block;float:left;margin-top:5px;">项目编码:</div>
                    <div style="display:inline-block;margin-left:5px;float:left;">
                    <el-input v-model="xmbm" placeholder="输入项目编码">
                    </el-input>
                    </div>
                </el-col>
                </div>
            </el-row>
            <el-row style=" padding: 20px 0px;">
            <el-col :span="6" style="margin-top:10px;float:left;">
                <el-button type="warning"> 清 空 </el-button>
                <el-button type="success" style="margin-left:30px;"> 查 阅 </el-button>
                <el-button type="primary" style="margin-left:30px;"> 导 出 </el-button>
            </el-col>
            </el-row>
            <div style="margin-top:5px;">
            <el-table :data="tableData2" :header-cell-style="{background:'#E8F1FB'}"
            style="width:100%;">
                <el-table-column prop="xh2" label="序号" min-width="5%"></el-table-column>
                <el-table-column prop="xmmc2" label="项目名称" min-width="40%"></el-table-column>
                <el-table-column prop="xmbm2" label="项目编码" min-width="20%"></el-table-column>
                <el-table-column prop="zjze2" label="资金总额" min-width="10%"></el-table-column>
            </el-table>

            </div>
        </div>
<PageNavigation/>
</div>
</template>
<script>
import PageNavigation from '../../components/PageNavigation.vue'
export default {
  name: 'myReport',
   components: {
    PageNavigation
  },
  data() {
    return {
      zxmc: '',
      zxwh: '',
      zxnf: '',
      xmmc:'',
      xmbm:'',
      zpfs:'',
      xmlb:'项目列表(含自评)',
      xmmc2:'',
      xbbm2:'',
      zjze2:'',
      xh2:'',
       tableData: [
        {
          xh: '1',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '85'
        },
        {
          xh: '2',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '95'
        },
        {
          xh: '3',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '85'
        },
        {
          xh: '4',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '89'
        },
        {
          xh: '5',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '83'
        },
        {
          xh: '6',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '85'
        },
        {
          xh: '7',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '95'
        },
        {
          xh: '8',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '85'
        },
        {
         xh: '9',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '96'
        },
        {
          xh: '10',
          xmmc: '昙石山文号博物馆建设项目',
          xmbm: '闽财指[2019]0125号',
          zpfs: '98'
        }],
        tableData2: [
        {
          xh2: '1',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '8000'
        },
        {
           xh2: '2',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '10000'
        },
        {
           xh2: '3',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '9000'
        },
        {
           xh2: '4',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '7000'
        },
        {
           xh2: '5',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '8000'
        },
        {
           xh2: '6',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '8000'
        },
        {
           xh2: '7',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '8000'
        },
        {
           xh2: '8',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '8000'
        },
        {
          xh2: '9',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '6000'
        },
        {
           xh2: '10',
          xmmc2: '福建省非物质文化遗产保护传承专项资金项目',
          xmbm2: '闽财指[2019]0125号',
          zjze2: '8000'
        }],
      zxnfOptions: [{
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
      }],
      dialogFormVisible: false,
      form: {
        name: '',
        wh: '',
        nf: ''
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    detail() {
      this.title = '专项详情';
      this.form.name = '2020年福建省非物质文化遗产保护传承专项资金';
      this.form.wh = '闽财指[2019]0125号';
      this.form.nf = '2018';
      this.form.file = '申报指南下载';
      this.dialogFormVisible = true;
    },
    edit() {
      this.title = '新增专项';
      this.form.name = '';
      this.form.wh = '';
      this.form.nf = '';
      this.form.file = '';
      this.dialogFormVisible = true;
    }
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
  //height: 800px;
}

/* thead,th{background-color:#E6F1FC;} */
</style>
<style lang="scss" >
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
     margin-bottom: 5px !important; 
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 50px 0 !important;
}
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
<style >
    .el-dialog {
       width: 960px ;
   }
   .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin-bottom: 40px !important;
 }
 .el-divider {
    position: unset !important;
}
.el-divider__text {
    font-size: large !important;
}
</style>
