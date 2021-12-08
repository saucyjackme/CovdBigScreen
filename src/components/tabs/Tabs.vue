<script>
import Content from "./Content.vue"

export default {
  name: 'Tabs',
  props:{
    currentIndex: {
      type: [String, Number],
      default: "1"
    },
  },
  render() {
    //pans = [<div>内容1</div>,<div>内容2</div>,<div>内容3</div>] this.$slots.default
    //pnas =[tab,tab,tab] this
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content pans={ this.pans }></Content>
      </div>
    )
  },
  data() {
    return {
      pans:[]
    };
  },
  methods: {
    getIndex(index) {
      this.$emit("onIndex",index)
    }
  }
};
</script>
<style scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>