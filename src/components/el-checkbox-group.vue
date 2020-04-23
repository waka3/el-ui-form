<template>
  <el-checkbox-group v-model="value" v-bind="$attrs" v-on="$listeners">
    <template v-for="item in code">
      <el-checkbox :key="unique + '_' + item.key" :label="item[opsKey]">{{ item[opsValue] }}</el-checkbox>
    </template>
  </el-checkbox-group>
</template>

<script>
export default {
  model: {
    prop: 'inputVal',
    event: 'change'
  },
  props: {
    inputVal: {
      type: [Array],
      default: () => {
        return []
      }
    },
    /** 循环项的唯一key */
    unique: {
      type: String,
      default: ''
    },
    code: {
      type: [String, Array, Object],
      default: () => {}
    },
    opsKey: {
      type: String,
      default: 'key'
    },
    opsValue: {
      type: String,
      default: 'value'
    },
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
