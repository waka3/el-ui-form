# el-ui-form

## Introduction
### NPM安装
```
npm install el-ui-form
```
### CDN使用
```
<script src="https://unpkg.com/el-ui-form.min.js"></script>
```

## 快速上手 
### 按需引入
```
import elUIForm form 'el-ui-form'
```
### 全局引入
在 main.js 中写入以下内容：(因为以element-ui的组件为基础，所以需要引入element-ui)
```
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import elUIForm form 'el-ui-form'
Vue.use(Element, {
  size: 'small' // set element-ui default size
})
Vue.use(elUIForm)
```

## 使用方法
### Template
```HTML
<el-ui-form :formItems="formItems" @submitForm="submitForm"></el-ui-form>
``` 
```JS
  data() {
    return {
      formItems: []
    }
  }
``` 

## 属性

### 表单属性说明
属性 | 类型 | 说明 | 可选值 | 默认值
-------- | --- | --- | ---
formItems | Object | 表单内容 | - | - 
width | String | 表单项宽度 | - | '350'
colon | String | 表单项lable文字后跟符号 | - | '：'
outerForm | Object | 表单值绑定对象 | - | null
includeFooter | String | 底部按钮的结构是否包含在表单内 | - | true
submit | Object | 默认表单按钮配置 | - | {type: ['primary', ''], text: ['提交', '取消']}
其他 | - | 主要属性查看element-ui 表单属性 https://element.eleme.cn/#/zh-CN/component/form | - | - 

### formItems属性说明
属性 | 类型 | 说明 | 可选值
-------- | --- | --- | ---
dom | String | 表单项要渲染的组件类型 | slot/element-ui 表单组件
label | String | 表单项提示label | - 
prop | String | 表单项值绑定的参数名称 |　- 
width | String/Number | 表单项组件宽度 |　- 
rules | Array | 单个表单项值绑定的校验规则 |　- 
attr | Object | 具体表单项对应的属性对象，具体属性参照dom的组件类型 | - 
render | Function | dom为slot时有效, 自定义表单项内容(推荐表单项非表单组件时使用) | - 

## 事件
### 表单事件
方法名 | 说明 | 回调参数
-------- | --- | ---
submitForm | 表单提交方法 | 表单model绑定参数值
其他 | 查看element-ui 表单属性 https://element.eleme.cn/#/zh-CN/component/form | - 

> 基于element-ui form二次封装, 组件主要属性请参见[element-ui文档说明](https://element.eleme.cn/#/zh-CN/component/form)