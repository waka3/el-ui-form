<template>
  <el-select
    v-model="value"
    v-bind="$attrs"
    :disabled="disabled"
    :filterable="filterable"
    :remote="remote"
    :multiple="multiple"
    :reserve-keyword="reserve"
    :remote-method="remoteMethod"
    :clearable="clearable"
    :placeholder="placeholder"
    :loading="loading"
  >
    <div v-if="remote === true">
      <el-option
        v-for="(item,index) in showArray"
        :key="index"
        :label="item.value.key"
        :value="item[opsKey]"
      ></el-option>
    </div>
    <div v-else>
      <el-option
        v-for="(item,index) in options"
        :key="index"
        :label="item[opsValue]"
        :value="item[opsKey]"
      ></el-option>
    </div>
  </el-select>
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
    // option选中值绑定的id
    opsKey: {
      type: String,
      default: 'key'
    },
    // option显示的文本内容
    opsValue: {
      type: String,
      default: 'value'
    },
    // 是否为远程搜索
    remote: {
      type: Boolean,
      default: false
    },
    // 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词
    reserve: {
      type: Boolean,
      default: false
    },
    code: {
      type: [String, Array, Object],
      default: () => {}
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default: false
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      allArray: [],
      showArray: [],
      options: [],
      loading: false,
      arrCode: []
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
  },
  watch: {
    code: {
      handler(newValue) {
        this.arrCode = newValue
        this.updata()
      },
      deep: true
    }
  },
  mounted() {
    try {
      if (this.remote === true) {
        const yljgmc = this.arrCode
        this.allArray = Object.keys(yljgmc).map(item => ({
          key: item,
          value: yljgmc[item]
        }))
      } else {
        this.options = this.code
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    updata() {
      try {
        if (this.remote === true) {
          const yljgmc = this.arrCode
          this.allArray = Object.keys(yljgmc).map(item => ({
            key: item,
            value: yljgmc[item]
          }))
        } else {
          this.options = this.convertKey(this.arrCode, [
            this.opsKey,
            this.opsValue
          ])
        }
      } catch (err) {
        console.log(err)
      }
    },
    convertKey(arr, key) {
      const newArr = []
      arr.forEach((item) => {
        const newObj = {}
        const itemKey = Object.keys(item)
        for (var i = 0; i < key.length; i++) {
          const temp = itemKey.indexOf(key[i])
          if (temp > -1) {
            newObj[key[i]] = item[itemKey[temp]]
          }
        }
        newArr.push(newObj)
      })
      return newArr
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.showArray = this.allArray.filter(item => {
            return item.value.key.indexOf(query) > -1
            // return item.value.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.showArray = []
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
