<template>
  <div class="page-layer" >


    <el-table
      :data="planList"
      height="250">
      <el-table-column
        fixed
        prop="plaChargeMainNum"
        label="单号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="chaStuName"
        label="学生"
        >
      </el-table-column>
      <el-table-column
        prop="chaClaName"
        label="班级"
       >
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="日期"
        :formatter="(r,b) => mixin_table_formatDate(r,'&')"
        width="120">
      </el-table-column>
      <el-table-column
        prop="chaMoney"
        label="金额"
        >
      </el-table-column>
    </el-table>


    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tbInfo.pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="tbInfo.pageSize"
      layout="total, prev, pager, next"
      :total="tbInfo.pageTotal">
    </el-pagination>


  </div>
</template>

<script type="text/javascript"  charset="utf-8" src="../assets/js/chargeView.js"></script>

<style scoped lang="scss" type="text/css">
  @import "../assets/scss/chargeView.scss";
</style>


