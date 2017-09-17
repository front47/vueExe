# VUE2 教学项目

从开放接口接入电影资源数据,使用vue-router、vue-resource、vuex等官方推荐插件全面讲解vue思想

## 运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8047
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 项目特点：

- 遵循VUE开放规范

- 使用vue-router管理路由跳转，并传参

- 使用vuex进行全局状态机管理，并使用模块化结构，使业务更加清晰

- 使用vue-resource进行请求管理

- 组件全局注入

- 使用fastclick优化移动端体验

- ......

  ------

  ### 项目说明:

  1. 环境搭建

     安装nodeJs

     安装git工具

  2. 创建项目

     ```javascript
     #  全局安装webpack
     npm install webpack -g
     # 全局安装vue官方脚手架
     npm install vue-cli -g
     # 初始化项目
     vue init webapck vueExe
     # 进入目录并安装依赖
     cd vueExe && npm install
     # 启动
     npm start
     ```

  3. 关键代码

     将自己的组件进行全局注入:

     ```javascript
     Object.keys(components).forEach((key) => {
     	var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
     	Vue.component(`v${name}`, components[key])
     })
     ```

     兼容移动端事件:

     ```javascript
     window.addEventListener('load', () =>  FastClick.attach(document.body))
     ```

     状态模块化管理:

     ```javascript
     export default new Vuex.Store({
       modules: {
         film,
         app
       },
       strict: debug
     })
     ```

     ?

### Something   Missing

希望北邮在线前端47班所有同学前程似锦,万事大吉!