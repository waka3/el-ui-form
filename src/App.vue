<template>
  <div id="dynamic-component-demo" class="demo">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component v-bind:is="current" class="tab"></component>
  </div>
</template>
<script>
import {Base, SlotDom, Render01, Render02} from '../demo/index'
export default {
  name: 'App',
  components: { Base, SlotDom , Render01, Render02},
  data() {
    return {
      currentTab: "Base",
      tabs: ["Base", "Render01", 'Render02', "SlotDom"]
    }
  },
  computed: {
    current: function() {
      return this.currentTab
    }
  }
}
</script>
<style>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    width: 600px;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>