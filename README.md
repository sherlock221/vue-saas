#中型SaaS项目业务架构(Vue)

一个完整的中型前端saas系统应该包括不少于以下列出的功能:

* 分层模式开发
* 模块分割 懒加载路由
* 路由管理
* 权限控制
* 状态管理
* 状态持久化
* 通信解决方案
* request/response拦截器
* util 工具类
* UI框架与主题
* 工程化
* 组件/代码规范



### 分层模式开发

* api 网络层
* biz 业务层   
* common  业务公共层
* lib  第三方依赖
* store 共享状态


##### 业务层

通过将业务模块分割,备多人协作能力，多模块能够并行开.
一个独立的业务模块,例如 auth :

login 登录业务
* assets
  * js  
  * scss
  * 其他当前业务模块需要的资源
* component
* view 
    * LoginView
* auth.router
    

一个页面(view)其实是由多个component组成的。
比较简单界面推荐写在view中就行, 当页面比较复杂 就需要进行拆分成组件。
每个模块 下有独立的router文件 进行当前模块下 路由配置  这些router最终会合并的 根上面。




##### 网络层
这块其实就是对数据来源 指的的接口一层抽象.按照业务模块 平铺在api文件夹下。


##### common
在config 中进行整个网站的 配置化.
配置后台微服务 当前调试接口的环境等等。




### 状态管理

使用vuex可以帮助我们解决  *多个组件之间共享状态* 表现在2个地方

* 多个组件依赖同一状态   
* 来自不同的视图的行为需要变更同一状态)


使用vuex前 区分清楚 组件的局部状态(local)和共享状态(share)

组件应该保留自己的local state, 只有组件间需要共享状态，才将这些状态放在组件外部(vuex中)进行管理。

vuex官网对状态管理的态度

> 使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。

https://vuex.vuejs.org/zh-cn/state.html

项目实际的使用场景以下:
* 用户信息userInfo token
* 左侧menu菜单
* 通知列表
* 页面一些其他全局状态

其他场景需要完善...

vuex一些使用原则(官网建议)
> 
1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的
3. 异步逻辑都应该封装到 action 里面

* Getters : store的计算属性   
* Action用 dispatch触发
* mutation commit触发



为了简化代码结构 可以使用map辅助函数去代替 this.$store.xxx
例如:
登录后获得用户信息和token 存储在vue中
![image.png](https://upload-images.jianshu.io/upload_images/326507-a403c7d4fb8e1bf2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 状态持久化
页面刷新后 导致全局状态丢失, 需要对vuex状态进行持久化 一般是存在localstorage中
在store.js 中对需要持久化的vuex 进行配置
![image.png](https://upload-images.jianshu.io/upload_images/326507-ee5fa781568ed70e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 通信解决方案
* 父子关系组件通信  解决: 用emit/on去做
* 跨组件通信  解决: eventbus
* 全局通信  影响到多个组件页面展示的 不仅当前页面用到 未来页面或组件也会用到  解决 : vuex中共享state



其他模块完善中....


### 代码相关规范
参考官方最佳实践
https://cn.vuejs.org/v2/style-guide/



> speedCampus

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
