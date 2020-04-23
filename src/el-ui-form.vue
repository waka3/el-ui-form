<!--
 * @description: element-ui form 二次封装
 * @author: wangyajing
 * @LastEditors: wangyajing
 * @email: 420926205@qq.com
 * @Date: 2020-04-20 14:55:48
 * @LastEditTime: 2020-04-21 14:55:48
 -->
<template>
  <div>
    <el-form ref="form" :model="innerForm" v-bind="$attrs" v-on="$listeners">
      <template v-for="item in formItems">
        <el-form-item :key="item.prop" :prop="item.prop" :label="item.label + colon" :rules="item.rules" :style="style">
          <template v-if="item.dom==='slot'">
            <div :style="{width: (item.width || width) + 'px'}">
              <item-render v-if="item.render"  :render="item.render" :item="item" />
              <slot v-else :name="item.prop"></slot>
            </div>
          </template>
          <component
            :is="item.dom"
            v-else
            v-model="innerForm[item.prop]"
            v-bind="item.attr"
            :clearable="true"
            :style="{width: (item.width || width) + 'px'}"
            :unique="item.dom === 'el-radio-group' || item.dom === 'el-checkbox-group'? item.prop : null"
            :placeholder="item.placeholder"
            v-on="$listeners"
          >
            <item-render v-if="item.render" :render="item.render" :item="item" />
          </component>
        </el-form-item>
      </template>
      <el-form-item v-if="includeFooter" label=" " class="footer">
        <slot name="footerBtn"></slot>
        <el-button :type="submit.type[0]" @click="submitForm">{{ submit.text[0] }}</el-button>
        <el-button :type="submit.type[1]" @click="resetForm">{{ submit.text[1] }}</el-button>
      </el-form-item>
    </el-form>
    <div v-if="!includeFooter" class="footer">
      <slot name="footerBtn"></slot>
      <el-button :type="submit.type[0]" @click="submitForm">{{ submit.text[0] }}</el-button>
      <el-button :type="submit.type[1]" @click="resetForm">{{ submit.text[1] }}</el-button>
    </div>
  </div>
</template>
<script>
import { elSelect, elRadioGroup, elCheckboxGroup } from './components'
import itemRender from './item-render'
export default {
  name: 'el-ui-form',
  components: {
    elSelect,
    elRadioGroup,
    elCheckboxGroup,
    itemRender
  },
  props: {
    /** 输入内容部分的宽度 */
    width: {
      type: String,
      default: '350'
    },
    col: {
      type: Number,
      default: 0
    },
    /** lable文字后跟：还是无 */
    colon: {
      type: String,
      default: '：'
    },
    outerForm: {
      type: Object,
      default: null
    },
    /**
     * 底部按钮的结构是否包含在表单内
     */
    includeFooter: {
      type: Boolean,
      default: true
    },
    /**
     * 默认表单按钮文本
     * 如：基础表单： 提交取消,
     * 如：列表搜索： 搜索重置
     */
    submit: {
      type: Object,
      default: () => {
        return {
          type: ['primary', ''],
          text: ['提交', '取消']
        }
      }
    },
    formItems: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      innerForm: {},
      style: ''
    }
  },
  watch: {
    outerForm: {
      handler(val) {
        this.innerForm = Object.assign({}, val)
      },
      deep: true
    },
    col: {
      handler(val){
        if(val){
          this.style = `width: ${1/val*100}%; margin-right: 0;`
        } else {
          this.style = ''
        }
      },
      immediate: true
    }
  },
  created() {
    if (!this.outerForm) {
      this.formItems.forEach(item => {
        this.$set(this.innerForm, item.prop, '')
      })
    }
  },
  methods: {
    resetForm() {
      this.$refs['form'].resetFields()
    },
    submitForm() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$emit('submitForm', this.innerForm)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
::v-deep .el-input .el-select .el-input{
  width: 110px;
}
</style>