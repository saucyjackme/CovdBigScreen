<template>
    <div>
        <div class="from">
            <h3>{{ fromInfo.city_name }}</h3>
            <p>{{ fromInfo.high_in_desc }}</p>
            <p>{{ fromInfo.low_in_desc }}</p>
            <p>{{ fromInfo.out_desc }}</p>
        </div>
        <hr>
        <div class="to">
            <h3>{{ toInfo.city_name }}</h3>
            <p>{{ toInfo.high_in_desc }}</p>
            <p>{{ toInfo.low_in_desc }}</p>
            <p>{{ toInfo.out_desc }}</p>
        </div>
    </div>
</template>
 
<script>
import api from "../api";
 
export default {
    data() {
        return {
            fromInfo: {},
            toInfo: {},
        };
    },
    props: {
        citys: {
            type: Array,
            default: function () {
                return [];
            },
        },
    },
    mounted() {
      //带参请求
        api.springTravelQuery({
            key: "171e165a7d991c5f6ecd5194c54778ef",
            from: this.citys[0].value,
            to: this.citys[1].value,
        }).then((res) => {
            if (res.status === 200) {
                this.fromInfo = res.data.result.from_info;
                this.toInfo = res.data.result.to_info;
            }
        });
    },
};
</script>
 
<style>
</style>
