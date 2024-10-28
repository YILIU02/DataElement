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
              v-model="FromData.startYear" @change="syearChange()" />
            <datalist id="yearlist">
              <option v-for="item in 34" :key="item" :value="item + 1989" @change="eyearChange()"></option>
            </datalist>
            <input id="endyear" type="text" list="yearList" style="padding: 0.3vw;" placeholder="请输入查询截止年份"
              v-model="FromData.endyear" :disabled="!disab" />
            <datalist id="yearList">
              <option v-for="item in yearnum" :key="item" :value="item + year"></option>
            </datalist>
            <el-button type='primary' @click="submit()" :disabled="store.click">查询</el-button>
          </form>

        </div>

        <el-checkbox-group v-model="store.checkedTypes" :min="1" :max="2" style="width: 40vw;">
          <el-checkbox v-for="(type, index) in store.types" :key="type.label" :label="type.label" :value="type.label"
            :checked="type.status" @change="change(type.status, index)">
            {{ type.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div id="title"></div>
        <Columnar v-if="store.Columnar_show" :data="data" />
        <lineChart v-if="store.lineChart_show" />
        <Gradient v-if="store.Gradient_show" />
        <horColumnar v-if="store.horColumnar_show" :data="data" />
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

import Gradient from '@/pages/myGradient.vue'
import horColumnar from '@/pages/horColumnar.vue'
import { onMounted, onUpdated, reactive, ref } from 'vue';
import { useAllDataStore } from '@/stores';
import api from '@/utils/api/course'
import { ElMessage } from 'element-plus';
import conster from '@/conster';
const store = useAllDataStore()
const { change } = store
const data = ref('')
const update = () => {
  if (store.pathname == 'compare') {
    areaList.value = conster.countrylist

  } else {
    areaList.value = conster.arealist

  }
  if (store.pathname == 'china') {
    document.getElementById('title').innerHTML = `<h2>中国2013年-2023年GDP</h2>`
    api.getTimeChina({
      beginYear: "2013",
      endYear: "2023"
    }).then(({ data }) => {
      store.result = data.sort((a, b) => {
        return a.year - b.year
      })
    }).catch((err) => {
      ElMessage({
        message: err,
        type: 'warnning'
      })

    })
    document.getElementById('p').innerHTML = store.markdownToHtml(conster.china)
  }
  else if (store.pathname == 'city') {
    document.getElementById('title').innerHTML = `<h2>中国2021年全省市GDP</h2>`
    api.getCity({
      province: "",
      beginYear: "2021",
      endYear: "2021"
    }).then(({ data }) => {


      data = data.map((item) => {
        return {
          province: item.province,
          gdp: item.gdp.replace(/[^\d.]/g, '')
        }
      })
      store.result = data.sort((a, b) => {
        return b.gdp - a.gdp
      })

    }).catch((err) => {
      ElMessage({
        message: err,
        type: 'warnning'
      })
    })
    document.getElementById('p').innerHTML = store.markdownToHtml(conster.city)
  }
  else if (store.pathname == 'compare') {
    document.getElementById('title').innerHTML = '<h2>美国2010-2023年GDP</h2>'
    document.getElementById('p').innerHTML = store.markdownToHtml(conster.compare)
  } else if (store.pathname == 'find') {
    document.getElementById('title').innerHTML = '<h2>北京2010-2023年GDP</h2>'
    document.getElementById('p').innerHTML = store.markdownToHtml(conster.find)
  }
}
onMounted(() => {
  update()
  if (localStorage.getItem('delayedFunction') === 'true') {
    store.delay()
  }
})

onUpdated(() => {

  update()

})
const FromData = reactive({
  area: '',
  startYear: '',
  endyear: '',
})
const disab = ref(false)
const yearnum = ref(34)
const year = ref(1989)
const areaList = ref(conster.arealist)
const areaflag = ref(false)
const syearChange = () => {
  let r = /^\+?[1-9][0-9]*$/;
  if (r.test(FromData.startYear)) {
    if (FromData.startYear > 1989 && FromData.startYear < 2024) {
      let num = FromData.startYear - 1990
      yearnum.value -= num
      year.value += num
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
const eyearChange = () => {
  let r = /^\+?[1-9][0-9]*$/;
  if (r.test(FromData.endYear)) {
    if (!(FromData.endYear > 1989 && FromData.endYear < 2024)) {
      if (FromData.endyear > FromData.startYear) {
        ElMessage({
          message: '截止年份应小于开始年份',
          type: 'warning',
        })
      }
      else {
        ElMessage({
          message: '无该年份记录',
          type: 'warning',
        })
      }
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
  } else {
    ElMessage({
      message: '只能输入纯中文或者纯英文',
      type: 'warning',
    })

  }
}
const submit = () => {
  disab.value = false
  // api.getReport(data).then((data) => {
  //   let content=store.markdownToHtml(data.content)
  //document.getElementById('p').innerHTML=content
  // });
  if (FromData.area && FromData.startYear && FromData.endyear) {
    areaList.value.forEach((item) => {
      if (FromData.area == item) {
        areaflag.value = true
      }
    })
    if (areaflag.value) {
      store.click = true
      ElMessage({
        message: '经费有限，请等待一分钟后再次查询'
      })
      store.delay()
      if (store.pathname == 'compare') {
        document.getElementById('title').innerHTML = `<h2>${FromData.area}${FromData.startYear}-${FromData.endyear}年GDP</h2>`
        document.getElementById('p').innerHTML = '经费有限，报告生成较慢，请耐心等待...'
        api.getCountry({
          country: FromData.area,
          beginYear: FromData.startYear,
          endYear: FromData.endyear
        }).then(({ data }) => {
          data = data.map((item) => {
            return {
              year: item.year,
              gdp: item.gdp.replace(/[^\d.]/g, '')
            }
          })
          store.result = data.sort((a, b) => {
            return a.year - b.year
          })
        })
        api.getReport({
          location: FromData.area,
          beginYear: FromData.startYear,
          endYear: FromData.endyear
        }).then(({ data }) => {
          document.getElementById('p').innerHTML = store.markdownToHtml(data.content)
        })
      } else if (store.pathname == 'find') {
        document.getElementById('title').innerHTML = `<h2>${FromData.area}${FromData.startYear}-${FromData.endyear}年GDP</h2>`
        document.getElementById('p').innerHTML = '经费有限，报告生成较慢，请耐心等待...'
        api.getCity({
          province: FromData.area,
          beginYear: FromData.startYear,
          endYear: FromData.endyear
        }
        ).then(({ data }) => {
          data = data.map((item) => {
            return {
              year: item.year,
              gdp: item.gdp.replace(/[^\d.]/g, '')
            }
          })
          store.result = data.sort((a, b) => {
            return a.year - b.year
          })
        })
        api.getReport({
          location: FromData.area,
          beginYear: FromData.startYear,
          endYear: FromData.endyear
        }).then(({ data }) => {
          document.getElementById('p').innerHTML = store.markdownToHtml(data.content)
        })
      }
    }
    else {
      ElMessage({
        message: '该地区不在范围内',
        type: 'warning'
      })
    }
  }
  else {
    ElMessage({
      message: '请输入有效查询信息',
      type: 'warning'
    })
  }
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

    input {
      width: 10vw;
      margin: 0.5vw;
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