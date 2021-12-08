<script>
export default {
  props:{
    label:{
      type:String,
      default:"tab"
    },
    index: {
      type: [String, Number],
      default: "1"
    }
  },
  name: 'Tab',
  mounted() {
    //读取App.vue中的插槽内容,读的是div eg:<div>内容1</div>
    //这里this是当前组件
    this.$parent.pans.push(this)
  },
  computed: {
    isActive() {
      return this.$parent.currentIndex === this.index
    }
  },
  render() {
    let classNames = {
      tab: true,
      active: this.isActive
    }
    return (
      <li onClick={this.clickItemHandle} class={ classNames }>{ this.label }</li>
    )
  },  
  data() {
    return {};
  },
  methods: {
    clickItemHandle() {
      this.$parent.getIndex(this.index)
    }
  }
};
</script>
<style scoped>
  .tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}
 
.tab.active {
    border-bottom: 2px solid blue;
}
</style>
