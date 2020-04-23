<template>
  <div>
    <el-ui-form :formItems="formItems" :outerForm="form" label-width="150px" @submitForm="submitForm"></el-ui-form>
  </div>
</template>
<script>
import elUiForm from '../src/el-ui-form'
const list = [
  {name: '苹果', id: 1},
  {name: '草莓', id: 2},
  {name: '芒果', id: 3},
]
const data = [
  {value: '是', key: 1},
  {value: '否', key: 2},
]
export default {
  name: 'Base',
  components: { elUiForm },
  data() {
    return {
      formItems: [
        { dom: 'el-input', label: 'input组件', prop: 'ipt',  attr: { placeholder: '请输入input内容', type: 'password', 'prefix-icon': 'el-icon-search' }},
        { dom: 'el-select', label: '下拉框组件', prop: 'sel', attr: { placeholder: '请输入input内容', code: list, opsKey: 'id',  opsValue: 'name'}},
        { dom: 'el-radio-group', label: '单选组件', prop: 'radio', attr: { code: data}},
        { dom: 'el-checkbox-group', label: '复选框组件', prop: 'check', attr: { code: data}},
        { dom: 'el-switch', label: '开关', prop: 'switch' }
      ],
      form: {}
    }
  },
  mounted() {
    this.formItems.forEach(item => {
      this.$set(this.form, item.prop, 'ceshi')
    })
    this.$set(this.form, 'check', [1])
  },
  methods: {
    submitForm(form) {
      console.log(form)
    }
  }
}
</script>
