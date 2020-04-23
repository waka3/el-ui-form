<template>
  <div>
    <el-ui-form :formItems="formItems" label-width="150px" @submitForm="submitForm"></el-ui-form>
  </div>
</template>
<script>
import elUiForm from '../src/el-ui-form'
export default {
  name: 'Render01',
  components: { elUiForm },
  data() {
    return {
      formItems: [
        { dom: 'slot', label: '树形菜单', prop: 'tree',
          render: ()=>{
            return (
                <el-tree
                  data={this.data}
                  show-checkbox
                  node-key="id"
                  default-expanded-keys={[2, 3]}
                  default-checked-keys={[5]}>
                </el-tree>
              )
            } 
        }
      ],
      data: [{
        id: 1,
        label: '一级 2',
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1'
          }, {
            id: 5,
            label: '三级 3-1-2',
            disabled: true
          }]
        }, {
          id: 2,
          label: '二级 2-2',
          disabled: true,
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
            disabled: true
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    submitForm(form) {
      console.log(form)
    }
  }
}
</script>
