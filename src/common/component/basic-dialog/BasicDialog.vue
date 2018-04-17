<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    @close="handleCloseDialogCallback"
    :custom-class="customClass">
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'basic-dialog',

    data() {
      return {
        visible: this.dialogVisible
      }
    },

    props: {
      title: {
        type: String,
        default: '极速校园'
      },
      customClass: {
        type: String,
        default: 'small-dialog'
      },
      dialogVisible: {
        type: Boolean,
        default: false
      },
      handleCloseCallback: Function,
      handleSubmitCallback: Function
    },

    methods: {
      //取消事件
      handleCancel() {
        this.visible = false;
        if ('function' === typeof this.handleCloseCallback) {
          this.handleCloseCallback();
        }
      },
      //确定事件
      handleSubmit() {
        let closeDialogFlag = true;
        if ('function' === typeof this.handleSubmitCallback) {
          closeDialogFlag = this.handleSubmitCallback();
        }
        if (closeDialogFlag) {
          this.visible = false;
        }
      },
      //关闭dialog的回调函数
      handleCloseDialogCallback() {
        this.updateDialogVisible();
      },
      //更新父组件的值
      updateDialogVisible() {
        this.$emit('update:dialogVisible', false);
      }
    },

    watch: {
      dialogVisible() {
        this.visible = this.dialogVisible;
      }
    }
  }
</script>
