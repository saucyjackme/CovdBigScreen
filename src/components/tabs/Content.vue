<script>
export default {
  name: 'Content',
  props:{
    pans:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  render() {
    //ele ---> tab
    //ele.isActive
    return(
      <div>
          { this.pans.map((ele,index) =>{
            // return ele.isActive? ele.$slots.default : ""
            return <div style={{display:ele.isActive ? "block" : "none"}}>{ ele.$slots.default }</div>
          })}
      </div>
    )                                                                                                                                                                                                                                                                                              
  },
  methods: {}
};
</script>
<style scoped></style>

