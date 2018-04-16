
export  default  {
    /**
     * 判断是否为手机
     * @param str 手机号
     * @returns {boolean}    true:是 ,false :不是
     */
    isPhone: function (str) {
        var reg = /^0?1[7358]\d{9}$/;
        return reg.test(str);
    },

    /**
     * 检测空对象
     * @param value
     * @returns {boolean}
     */
    isEmptyObject(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    }

}


