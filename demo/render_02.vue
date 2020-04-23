<template>
  <div>
    <el-ui-form :formItems="formItems" label-width="150px" @submitForm="submitForm"></el-ui-form>
  </div>
</template>
<script>
import elUiForm from '../src/el-ui-form'
export default {
  name: 'Render02',
  components: { elUiForm },
  data() {
    return {
      formItems: [
        { dom: 'el-input', label: 'input自定义项slot：prepend内容', prop: 'prepend',
          render: () =>{
            return (
              <el-select v-model={this.select} slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
            )
          } 
        }
      ],
      select: '1'
    }
  },
  methods: {
    submitForm(form) {
      console.log(form)
    }
  }
}
</script>
