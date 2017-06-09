# vue2_dragula_demo

* 步骤：
1. 安装：npm install vue2-dragula --save-dev
2. main.js 引入：
```
import Vue from 'vue'
import { Vue2Dragula } from 'vue2-dragula'

Vue.use(Vue2Dragula, {
  logging: {
    service: true
  }
});
```
3. 编辑组件

* 实现功能：
1. 鼠标移动到图片上，图片下面才显示图片说明；
1. 拖拽时，图片被拖动起来，原来图片的位置变为空白虚线框；图片说明隐藏；

> A Vue.js project

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
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
