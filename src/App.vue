<template>
  <div>
    <gForm :formItems="formItems" :outerForm="form" @submitForm="submitForm"></gForm>
  </div>
</template>
<script>
import gForm from './el-ui-form'
const list = [
  {name: '', id: 0},
  {name: 'ceshi', id: 1},
  {name: 'ceshiceshi', id: 2},
  {name: 'ceshiceshiceshi', id: 3},
]
export default {
  name: 'Form',
  components: { gForm },
  data() {
    return {
      formItems: [
        { dom: 'el-input', label: 'el-input', prop: 'test',  attr: { placeholder: '请输入input内容', type: 'password', 'prefix-icon': 'el-icon-search' }, rules: [{ required: true, message: '请输入邮箱地址', trigger: 'none' }]},
        { dom: 'el-select', label: 'el-select', prop: 'se', attr: { placeholder: '请输入input内容', code: list, opsKey: 'id',  opsValue: 'name'}},
        { dom: 'el-radio-group', label: 'el-radio-group', prop: 'radio1', attr: { code: [{ key: '1', value: '测试' }, { key: '2', value: 'dsgfdgd' }] }},
        { dom: 'el-checkbox-group', label: 'el-checkbox-group', prop: 'check', attr: { code: [{ key: '1', value: '测试' }, { key: '2', value: 'dsgfdgd' }] }},
        { dom: 'el-date-picker', label: '日期选择', prop: 'date', attr: { type: 'week', format: 'yyyy 第 WW 周' }},
        { dom: 'el-switch', label: '开关', prop: 'switch' },
        { dom: 'el-input', label: '测试插槽', prop: 'slotTest',
          render: () =>{
            return (
              <el-select v-model={this.select} slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
            )
          } 
        },
      ],
      rules: {
        test: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        se: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      form: {},
      select: '1'
    }
  },
  mounted() {
    this.formItems.forEach(item => {
      if (item.dom === 'el-checkbox-group') {
        this.$set(this.form, item.prop, ['1'])
      } else {
        this.$set(this.form, item.prop, 'ceshi')
      }
    })
  },
  methods: {
    submitForm(form) {
      console.log(form)
    }
  }
}
</script>

<style>

</style>
