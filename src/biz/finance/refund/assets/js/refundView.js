import {mapActions, mapGetters,mapState} from "vuex";
import FinanceSev from "@api/finance";
import mixinTableColumn from "@common/mixin/tableColumn.mixin";

export default {

  mixins : [mixinTableColumn],

  data: function(){
    return {
      planList : [],
      tbInfo : {
        pageIndex: 1,
        pageSize: 10,
      },
      visible: false
    }
  },

  created(){



    this.getList();

  },





  methods : {

    getList (){

      //模拟接口
      let params  = Object.assign({
        schoolId :6101130295,
        code : 10006
      },this.tbInfo);

      let data ={
        schoolId :6101130295
      }

      FinanceSev.getUserPlanList(params,data)
        .then(res=>{
          this.planList = res.bizData.rows;
          this.tbInfo.pageTotal = res.bizData.records;
          this.tbInfo.pageSize = res.bizData.pagesize;
          this.tbInfo.pageIndex = res.bizData.page;


        })
    },
    handleSizeChange (){

    },
    handleCurrentChange(currentRow){
      this.tbInfo.pageIndex = currentRow;
      this.getList();
    }

  }

}
