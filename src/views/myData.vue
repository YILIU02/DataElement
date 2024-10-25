<template>
  <el-row :gutter="20">
    <el-col :span="11" style="margin-top: 20px;">
      <el-card class="left">
        <div v-if="store.find">
          <form action="">
            <input id="area" type="text" list="arealist" style="padding: 0.3vw;" placeholder="请输入您想查询的地区"
              v-model="FromData.area" @change="areaChange()" />
            <datalist id="arealist">
              <option v-for="(item, index) in areaList" :key="index" :value="item"></option>
            </datalist>
            <input id="staryear" type="text" list="yearlist" style="padding: 0.3vw" placeholder="请输入查询起始年份"
              v-model="FromData.startYear" @change="c = yearChange()" />
            <datalist id="yearlist">
              <option v-for="item in 35" :key="item" :value="item+1989"></option>
            </datalist>
            <input id="endyear" type="text" list="yearList" style="padding: 0.3vw;" placeholder="请输入查询截止年份"
              v-model="FromData.endyear" :disabled="!disab" />
            <datalist id="yearList">
              <option v-for="item in yearnum" :key="item" :value="item+year"></option>
            </datalist>
            <el-button type='primary' @click="submit()">查询</el-button>
          </form>
        </div>
      
        <el-checkbox-group v-model="store.checkedTypes" :min="1" :max="2" style="width: 40vw;">
          <el-checkbox v-for="(type, index) in store.types" :key="type.label" :label="type.label" :value="type.label"
            :checked="type.status" @change="change(type.status, index)">
            {{ type.label }}
          </el-checkbox>
        </el-checkbox-group>
        <Columnar v-if="store.Columnar_show" :data="data" />
        <lineChart v-if="store.lineChart_show" />
        <Gradient v-if="store.Gradient_show" />
        <pieCharm v-if="store.pieCharm_show" />
        <horColumnar v-if="store.horColumnar_show" />
        <div> 
          <el-button type='primary'>导出excel</el-button>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10" style="margin-top: 20px;">
      <el-card class="right">
        <template #header>
          <h1>智能分析报告</h1>
        </template>
        <div id="p">

         
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script setup>
import Columnar from '@/pages/myColumnar.vue';
import lineChart from '@/pages/lineChart.vue'
import pieCharm from '@/pages/pieCharm.vue'
import Gradient from '@/pages/myGradient.vue'
import horColumnar from '@/pages/horColumnar.vue'
import { onMounted, reactive, ref } from 'vue';
import { useAllDataStore } from '@/stores';
// import api from '@/utils/api/course'
import { ElMessage } from 'element-plus';
import conster from '@/conster';

const store = useAllDataStore()
const { change } = store

const result = '中国作为世界第二大经济体，其GDP数据一直是全球关注的焦点。从2015年到2022年，中国的GDP增长经历了不同的阶段，受到多种因素的影响。以下是对这一时期中国GDP数据的分析，以及经济增长的原因、政策和未来趋势的探讨。\n\n### 2015-2022年中国GDP数据概览\n\n1. **2015年**：中国GDP增长率约为6.9%，GDP总量达到67.67万亿元人民币。\n2. **2016年**：GDP增长率约为6.7%，GDP总量达到74.41万亿元人民币。\n3. **2017年**：GDP增长率约为6.8%，GDP总量达到82.71万亿元人民币。\n4. **2018年**：GDP增长率约为6.6%，GDP总量达到90.03万亿元人民币。\n5. **2019年**：GDP增长率约为6.1%，GDP总量达到99.09万亿元人民币。\n6. **2020年**：受到新冠疫情影响，GDP增长率约为2.3%，GDP总量达到101.6万亿元人民币。\n7. **2021年**：经济复苏，GDP增长率约为8.1%，GDP总量达到114.37万亿元人民币。\n8. **2022年**：GDP增长率约为3%，GDP总量达到121.02万亿元人民币。\n\n### 经济增长的原因\n\n1. **结构性改革**：中国政府推动了一系列结构性改革，包括供给侧结构性改革，以提高经济效率和质量。\n2. **创新驱动**：科技创新成为经济增长的新引擎，特别是在数字经济、人工智能、5G等领域。\n3. **消费升级**：随着居民收入的提高，消费结构不断升级，服务业和高端制造业成为新的增长点。\n4. **对外开放**：中国进一步扩大对外开放，吸引外资，推动自由贸易区和“一带一路”倡议。\n5. **基础设施投资**：政府加大基础设施建设投资，促进了经济增长和区域平衡发展。\n\n### 政策影响\n\n1. **财政政策**：政府通过减税降费、增加公共支出等手段刺激经济增长。\n2. **货币政策**：中国人民银行通过调整利率和存款准备金率等工具，保持流动性合理充裕。\n3. **产业政策**：政府支持高新技术产业和战略性新兴产业发展，推动产业结构优化升级。\n4. **环保政策**：实施绿色发展战略，推动经济可持续发展。\n\n### 未来趋势\n\n1. **数字化转型**：随着5G、云计算、大数据等技术的发展，数字化转型将继续推动经济增长。\n2. **内需驱动**：随着消费升级和服务业的发展，内需将成为经济增长的主要动力。\n3. **绿色发展**：环保政策将继续推动绿色经济和循环经济的发展。\n4. **区域协调发展**：通过区域发展战略，如京津冀协同发展、长江经济带发展等，实现区域经济均衡发展。\n5. **国际合作**：在全球经济一体化的背景下，中国将继续推动国际合作，参与全球经济治理。\n\n需要注意的是，这些分析是基于历史数据和当前政策环境的，未来的发展可能会受到国内外经济环境变化、政策调整、技术进步等多种因素的影响。因此，对于未来的预测需要持续关注和适时调整。'

onMounted(() => {
let a=store.markdownToHtml(result)
document.getElementById('p').innerHTML=a
   
  // api.getReport().then((data) => {
  //   result.value = data.result.name
  // });
})
// onUpdated(() => {

//   api.getReport().then((data) => {
//     result.value = data.result.name
//   });
  
// })
const data = 1//测试数据
const FromData = reactive({
  area: '',
  startYear: '',
  endyear: '',
})
const disab = ref(false)
const yearnum=ref(35)
const year=ref(1989)
const areaList =conster.arealist
const yearChange = () => {
  let r = /^\+?[1-9][0-9]*$/;
  if (r.test(FromData.startYear)) {
    if(FromData.startYear>1989&&FromData.startYear<2025){
  let num=FromData.startYear-1990
  yearnum.value-=num
  year.value+=num
  disab.value = true
    } else {
    ElMessage({
      message: '无该年份记录',
      type: 'warning',
    })
  }
  }
  else {
    disab.value = false
    ElMessage({
      message: '请输入数字',
      type: 'warning',
    })
  }

}
const areaChange = () => {
  let r = /^[a-zA-Z]+$|^[\u4e00-\u9fa5]+$/;
  if (r.test(FromData.area)) {
console.log(true);
  }else{
    ElMessage({
      message: '只能输入纯中文或者纯英文',
      type: 'warning',
    })
  
  }
}
const submit = () => {
  disab.value = false
}

</script>

<style lang="less" scoped>
.el-col {
  margin-left: 4vw;
}

.left {
  height: 90vh;
  margin-left: 3vw;
  opacity: 0.8;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

 input{
  width:10vw;
  margin: 0.5vw;
 }
 button{
  width:3.5vw;
 }
  }

}

.right {
  height: 90vh;
  margin-left: 5vw;
  opacity: 0.8;
  overflow-y: scroll;
}

// .input-with-select .el-input-group__prepend {
//   background-color: var(--el-fill-color-blank);
// }</style>