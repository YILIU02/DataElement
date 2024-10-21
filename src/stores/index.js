import { defineStore } from "pinia";
import { ref } from 'vue';
export const useAllDataStore = defineStore('allData', () => {
    const Columnar_show = ref(true)
    const lineChart_show = ref(true)
    const pieCharm_show = ref(false)
    const Gradient_show = ref(false)
    const horColumnar_show = ref(false)
    const echart = [
        Columnar_show,
        lineChart_show,
        pieCharm_show,
        Gradient_show,
        horColumnar_show
    ]
    const types = ref([{
        label: '柱状图',
        status: Columnar_show.value
    }, {
        label: '折线图',
        status: lineChart_show.value
    }, {
        label: '饼图',
        status: pieCharm_show.value
    }, {
        label: '渐变折线图',
        status: Gradient_show.value
    }, {
        label: '横向折线图',
        status: horColumnar_show.value
    }])
    const change = (item, index) => {
        types.value[index].status = !item
        echart[index].value = !item

    }
    
    return {
        Columnar_show,
        lineChart_show,
        pieCharm_show,
        Gradient_show,
        horColumnar_show, echart, types, change
    }
})