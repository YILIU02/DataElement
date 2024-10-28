import { defineStore } from "pinia";
import { reactive, ref } from 'vue';
// import api from '@/utils/api/course'
export const useAllDataStore = defineStore('allData', () => {
    const Columnar_show = ref(true)
    const lineChart_show = ref(true)
    const Gradient_show = ref(false)
    const horColumnar_show = ref(false)
    const token=ref('')//保存token
    const report=reactive({
        china:'',
        city:'',
    })//保存报告
    const result=ref('')//获取数据
    const checkedTypes = ref(['柱状图', '折线图'])
    const echart = [
        Columnar_show,
        lineChart_show,
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
    // const update=(item) => {
        
    //     if(item=='china'){
    //         api.getTimeChina({
    //         beginYear: "2010",
    //         endYear: "2024"
    //     }).then(({data}) => {
    //     result.value=data.sort((a,b) => {
    //       return a.year-b.year
    //     })
    //     }).catch((err) => {
    //       console.log(err);
          
    //     })
    //       }
    //       if(item=='city'){
    //         api.getCity( {
    //           "province": "",
    //           "beginYear": "2023",
    //           "endYear": "2023"
    //          }).then(({data}) => {
    //           data=data.map((item) => {
    //             return {
    //               province:item.province,
    //               gdp:item.gdp.replace(/[^\d.]/g,'')
    //             }
    //           })
    //           result.value=data.sort((a,b) => {
    //       return b.gdp-a.gdp
    //     })
        
        
    //     }).catch((err) => {
    //       console.log(err);
          
    //     })
    //       }
       
    // }
    const click=ref(false)
    const delay=() => {
        localStorage.setItem('delayedFunction', 'true');
        setTimeout(() => {
            if (localStorage.getItem('delayedFunction') === 'true') {
                click.value=false
                // 执行后清除状态
                localStorage.removeItem('delayedFunction');
              }   
        },10000)
    }
    return {
        result,
        token,
        report,
        Columnar_show,
        lineChart_show,
        Gradient_show,
        horColumnar_show, echart, types,
        find,
        pathname,
        checkedTypes,
        click,
        delay,
         change,
         markdownToHtml,
        //  update
    }
},{
    persist:true
})