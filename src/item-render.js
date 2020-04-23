// import Vue from 'vue'
export default {
  functional: true,
  props: {
    item: Object,
    render: [Function, String]
  },
  render(h, content) {
    const r = content.props.render
    const item = content.props.item
    const type = typeof r
    if (type === 'function') {
      return r({ h, item })
    }
  }
}
