import { defineStore } from "pinia";
import { ref } from 'vue';
export const useAllDataStore = defineStore('allData', () => {
    const Columnar_show = ref(true)
    const lineChart_show = ref(true)
    const pieCharm_show = ref(false)
    const Gradient_show = ref(false)
    const horColumnar_show = ref(false)
    const checkedTypes = ref(['柱状图', '折线图'])
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
        checkedTypes.value=[]
        types.value.forEach((item) => {
            if(item.status){
                checkedTypes.value.push(item.label)
            }
        })
    }
const markdownToHtml=(markdown) =>{
        // 替换标题
        markdown = markdown.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
        markdown = markdown.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
        markdown = markdown.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
        // 替换加粗文本
        markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // 替换斜体文本
        markdown = markdown.replace(/__(.*?)__/g, '<em>$1</em>');
        // 替换列表
        markdown = markdown.replace(/^\*(.*?)$/gm, '<li>$1</li>');
        markdown = markdown.replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>');
        // 替换换行
        markdown = markdown.replace(/\n/g, '<br>');
      
        return markdown;
      }
    const find=ref(false)
    const pathname=ref('')
    return {
        Columnar_show,
        lineChart_show,
        pieCharm_show,
        Gradient_show,
        horColumnar_show, echart, types,
        find,
        pathname,
        checkedTypes,
         change,
         markdownToHtml
    }
})