import Form from './el-ui-form.vue';

/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Form)
}

export default Form;