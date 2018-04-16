import { Message } from 'element-ui';
export  default  class  UI {



  static toastBase(type,content,setting){
    if(!content) return;
    let option = {
      message: content,
      type: type
    };
    Message(Object.assign(option,setting));
  }


  /**
   * 消息提示成功
   * @param content
   * @param setting
   */
  static toastSuccess(content,setting){
    UI.toastBase("success",content,setting);
  }

  /**
   * 消息提示错误
   * @param content
   * @param setting
   */
  static toastError(content,setting){
    UI.toastBase("error",content,setting);
  }

  /**
   * 消息提示信息
   * @param content
   * @param setting
   */
  static toastInfo(content,setting){
    UI.toastBase("info",content,setting);
  }

  /**
   * 消息提示警告
   * @param content
   * @param setting
   */
  static toastWarning(content,setting){
    UI.toastBase("warning",content,setting);
  }



}
