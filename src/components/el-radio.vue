<template>
  <el-radio-group v-model="value">
    <template v-for="item in code">
      <el-radio :key="unique + '_' + item.key" :label="item.key">{{ item.value }}</el-radio>
    </template>
  </el-radio-group>
</template>

<script>
export default {
  model: {
    prop: 'inputVal',
    event: 'change'
  },
  props: {
    inputVal: {
      type: [String, Array, Object, Number],
      default: () => {}
    },
    /** 循环项的唯一key */
    unique: {
      type: String,
      default: ''
    },
    code: {
      type: [String, Array, Object],
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  computed: {
    value: {
      get() {
        return this.inputVal
      },
      set(val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>
<style scoped>
.el-select{
  width: 100%;
}
</style>
