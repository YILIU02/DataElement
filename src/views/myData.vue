<template>
  <el-row :gutter="20">
    <el-col :span="11" style="margin-top: 20px;">
      <el-card class="left">
        <div>
          <form action="">
            <input id="area" type="text" list="arealist" style="padding: 0.5em;" placeholder="请输入您想查询的地区"
              v-model="FromData.area" @change="areaChange()" />
            <datalist id="arealist">
              <option v-for="(item, index) in areaList" :key="index" :value="item"></option>
            </datalist>
            <input id="staryear" type="text" list="yearlist" style="padding: 0.5em;" placeholder="请输入查询起始年份"
              v-model="FromData.startYear" @change="c = yearChange()" />
            <datalist id="yearlist">
              <option v-for="item in 35" :key="item" :value="item+1989"></option>
            </datalist>
            <input id="endyear" type="text" list="yearList" style="padding: 0.5em;" placeholder="请输入查询截止年份"
              v-model="FromData.endyear" :disabled="!disab" />
            <datalist id="yearList">
              <option v-for="item in yearnum" :key="item" :value="item+year"></option>
            </datalist>
            <el-button type='primary' @click="submit()">查询</el-button>
          </form>
        </div>
      
        <el-checkbox-group v-model="checkedTypes" :min="1" :max="2">
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
        <div>
          <p>
            {{ result }}
          </p>
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
import api from '@/utils/api/course'
import { ElMessage } from 'element-plus';
const store = useAllDataStore()
const { change } = store
const checkedTypes = ref(['柱状图', '折线图'])
const result = ref('')
onMounted(() => {
  
  api.getReport().then((data) => {
    result.value = data.result.name
  });
})
const data = 1//测试数据
const FromData = reactive({
  area: '',
  startYear: '',
  endyear: '',
})
const disab = ref(false)
const yearnum=ref(35)
const year=ref(1989)
const areaList = ["中国", "北京市", "上海市", "天津市", "重庆市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "江苏省",
  "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "四川省",
  "贵省", "云南省", "西藏自治区", "陕西省", "甘肃省", "宁夏回族自治区", "青海省", "新疆维吾尔族自治区", "香港特别行政区", "澳门特别行政区",
  "台湾省",
]
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
  margin: 3px;
 }
  }

}

.right {
  height: 90vh;
  margin-left: 5vw;
  opacity: 0.8;
}

// .input-with-select .el-input-group__prepend {
//   background-color: var(--el-fill-color-blank);
// }</style>