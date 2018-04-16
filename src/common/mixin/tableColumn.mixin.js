import Format from "@common/util/format";


/**
 * 对表格的字段一些过滤
 * @type {{methods: {mixin_format_getDate: (function(*, *))}}}
 */
const mixin = {
  methods: {

    mixin_table_formatDate : (row,splitStr)=>{
      let createDate = row.createDate;
      return Format.getDate(createDate,splitStr);
    }
  }
}


export default  mixin;
