/**
 * 辅助函数
 */
export  default  {


  /**
   * input: {key1: null, key2: null}
   * Output: {key1: key1, key2: key2}
   * @param obj
   * @returns {*}
   */
  keyMirror (obj) {
    if (obj instanceof Object) {
      var _obj = Object.assign({}, obj)
      var _keyArray = Object.keys(obj)
      _keyArray.forEach(key => _obj[key] = key)
      return _obj
    }
  }

}

