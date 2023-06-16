<template>
    <div class="page">
        <div>
        <van-nav-bar
            title="体检报告"
            left-arrow
            @click-left="onClickLeft"
            right-text="导出"
            />
    </div>
    <div class="info" v-for="data in datas" :key="data.id">
        <div class="xinxi">{{ data.name }}&nbsp;&nbsp;{{data.gender}}&nbsp;&nbsp;&nbsp;&nbsp;{{ data.age }}岁</div>
        <div class="tijian">
        <span>体检时间：{{ data.date }}<br /></span>
        <span>体检机构：{{ data.hosp }}<br /></span>
        <span>体检类型：{{ data.type }}</span>
        </div>
    </div>
    <el-button color="f4f9ff" type="primary" class="ckbg">查看原报告原图</el-button>
    <div class="zhzs" v-for="data in datas" :key="data.id">
        <div class="zstitle">身体综合展示</div>
        <div class="body">
            <img class="body_1" src="../../assets/images/body_4.png" />
            <div class="shengao">{{ data.shengao }}cm</div>
            <div class="tizhong">{{ data.tizhong }}kg</div>
            <div class="bmi">BMI:{{ (data.tizhong / ((data.shengao / 100) ** 2)).toFixed(1) }}</div>
        </div>
        <div class="information">
            <div>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.sinshuai < 60 || data.sinshuai > 110 ? 'red' : 'green')">•</span>{{ data.sinshuai }}</span>次/分<br>心率<br></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.ssy < 120 || data.ssy > 139 ? 'red' : 'green')">•</span>{{ data.ssy }}</span>mmhg<br />收缩压<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.szy < 60 || data.szy > 89 ? 'red' : 'green')">•</span>{{ data.szy }}</span>mmhg<br />舒张压<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.kfxt < 7.0 || data.kfxt > 9.0 ? 'red' : 'green')">•</span>{{ data.kfxt }}</span>mmol/L<br />空腹血糖<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.zdgcnum < 0 || data.zdgcnum > 5.18 ? 'red' : 'green')">•</span>{{ data.zdgcnum }}</span>mmol/L<br />总胆固醇<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.gysznum < 0.45 || data.gysznum > 1.71 ? 'red' : 'green')">•</span>{{ data.gysznum }}</span>mmol/L<br />甘油三酯<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.gmddgc < 1.02 || data.gmddgc > 3 ? 'red' : 'green')">•</span>{{ data.gmddgc }}</span>mmol/L<br />高密度胆固醇<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.dmddgc < 0 || data.dmddgc > 3.4 ? 'red' : 'green')">•</span>{{ data.dmddgc }}</span>mmol/L<br />低密度胆固醇<br /></span>
                <span class="danwei"><span class="shuju"><span :class="'dot ' + (data.ns < 150 || data.ns > 440 ? 'red' : 'green')">•</span>{{ data.ns }}</span>umol/L<br />尿酸</span>
            </div>
        </div>
        
    </div>
    <div>
        <el-tabs v-model="activeName"  class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="详细报告" name="first"><ReportContent></ReportContent></el-tab-pane>
        <el-tab-pane label="异常汇总" name="second"><ReportProblem></ReportProblem></el-tab-pane>
        <el-tab-pane label="医生建议" name="third"><DoctorAdvice></DoctorAdvice></el-tab-pane>
  </el-tabs>
    </div>
    
    <RouterLink to="/identify">
    <el-button class="tijiao">导入新报告</el-button>
    </RouterLink>
    </div>
</template>

<script lang="ts">
    const datas = ref<any>([]);
    const activeName = ref('first')

import {defineComponent , ref} from 'vue'
import axios from 'axios';

import './detailed.css';
import ReportContent from  './ReportContent.vue'
import ReportProblem from  './ReportProblem.vue'
import DoctorAdvice from './DoctorAdvice.vue';


export default defineComponent({
   
    setup(){
        axios.get("https://www.fastmock.site/mock/ea58da145cfe8c6131de9de13bc7665a/health/api/data")
        .then((response) => {
            datas.value = response.data
            console.log("chufa");
        })
        const onClickLeft = () => history.back();
        

        const handleClick = () => {
        console.log()
}
        return{
            onClickLeft,
            datas,
            activeName,

            handleClick
        }
    },
    components:{
    ReportContent,
    ReportProblem,
    DoctorAdvice
}

})
</script>

<style scoped>
.tab-label {
    font-size: 2.125rem !important;
  }
  
.active-tab-label {
    font-size: 2.125rem !important;
  }
/* .page{
    height:100% ;
    background: url(../../assets/images/report_bg.png)  100% no-repeat;
    background-size: 100% 100%;
}
.van-nav-bar__text{
    color: #fff;
    font-size: 2.25rem;
    line-height: 2.25rem;
    font-weight: normal;
    margin-right: 0.1rem;
}
.info{
    height: 16.25rem;
    width: 43rem;
    display: block;
    background-color: #fff;
    border-radius: 10px;
    margin: 2.2rem auto 0;

}
.xinxi {
    position: absolute;
    font-size: 2.25rem;
    color: #000;
    margin-left: 1.8rem;
    margin-top: 1.8rem;
    font-weight: 546;
}
.tijian{
    position: absolute;
    margin-top: 6.25rem;
    margin-left: 1.8rem;
    font-size: 1.75rem;
    color: #999;
}
.ckbg{
    width: 43.125rem;
    height: 5.875rem;
    margin:2.5rem 2rem;
    border-color: #90c4fe;
    border-width: 2px;
    border-radius: 10px;
    color: #3493fd;
    font-size: 2.125rem;
}
.zhzs{
    
    height: 66.8rem;
    width: 43.125rem;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 auto 2.5rem;
}
.zstitle{
    position: absolute;
    font-size: 2.25rem;
    margin: 2.25rem auto;
    text-align: center;
    height: 4rem;
    width:43.125rem ;
}
.body .body_1{
    margin-top: 3.4rem;
}
.shengao {
    position: relative;
    font-size: 1.75rem;
    margin-top: -32.5rem;
    margin-left: 16.5rem;
}
.tizhong{
    position: relative;
    font-size: 1.75rem;
    margin-top: 19rem;
    margin-left: 7rem;
}
.information {
    margin-top: 8rem;
    margin-left: 6rem;
    width: 16rem;
}
.danwei{
    font-size: 1.5rem;
    color: #999;
    line-height: 2.7rem;
}
.shuju{
    font-size: 2rem;
    color: #000;
}
.bmi{
    font-size: 1.75rem;
    margin-left: 5.5rem;
}
.point{
    
    width: 1.375rem;
}
.dot{
    font-size: 3.5rem !important;
    display: block;
    position: absolute;
    margin-top: -0.3rem;
    margin-left: -2rem;
  text-align: center;
  line-height: 1em;
  border-radius: 50%;
}
.red {
  color: red !important;
}

.green {
  color:#87c764;
}
.el-tabs{
    width: 30rem;
   
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2){
    font-size: 2rem;
}
.el-tabs--top .el-tabs__item.is-top:nth-child{
    font-size: 2rem;
}
.el-tabs__nav-scroll{
    margin: 0 auto;
    background-color: #fff !important;
    border-radius: 10xp !important;
} */
</style>