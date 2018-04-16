

var  Storage = {
    /**
     * 获得sessionStorage 对象
     * @param key
     */
    getSgObj: function (key) {
        var obj = window.sessionStorage.getItem(key);
        return JSON.parse(obj);
    },

    /**
     * 设置sessionStorage 对象
     * @param key
     */
    setSgObj: function (key, value) {
        return window.sessionStorage.setItem(key, JSON.stringify(value));
    },
    getSg: function (key) {
        return window.sessionStorage.getItem(key);
    },
    setSg: function (key, value) {
        window.sessionStorage.setItem(key, value);
    },
    removeSg: function (key) {
        window.sessionStorage.removeItem(key);
    },

    getLgObj: function (key) {
        var obj = window.localStorage.getItem(key);
        return JSON.parse(obj);
    },
    setLgObj: function (key, value) {
        return window.localStorage.setItem(key, JSON.stringify(value));
    },

    getLg: function (key) {
        return window.localStorage.getItem(key);
    },
    setLg: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    removeLg: function (key) {
        window.localStorage.removeItem(key);
    }
}

export  default  Storage;
