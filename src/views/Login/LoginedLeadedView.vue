<template>
    <div class="page flex-col">
          <div class="nav-bar_1 flex-col">
            <div class="text_1">健康档案管理</div>
          </div>
          <div class="group_1 flex-col">
            <div class="text-wrapper_1 flex-col">
              <div class="text_2">{{ hiddenphonenumber }}</div>
              <div class="exit">退出</div>
            </div>
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
       
          </div>
          <RouterLink to="/Examreport">
          <el-button  color="f4f9ff" type="primary" class="ckbg">查询体检报告</el-button>
          </RouterLink>
        <div class="ysjy">
            <div class="ysjytxt">医生建议<span class="gdtxt">更多</span></div>
            <div class="advicetxt">一、合理膳食、食饮有节。<br />
            二、减少食用高盐、高油、高糖食品。<br />
            三、倡导家庭、社会使用公用餐具和分餐制。<br />
            四、新时代，倡导健康新食尚。<br />
            建议大家学习营养保健知识，培养良好饮食习惯，传承优良饮食文化，倡导在家吃饭，不浪费食物，讲究餐桌礼仪等；重视自己和家庭日常膳食管理，把食物多样、清淡、平衡膳食落实到生活实践……
            </div>
        </div>
            
        <div class="ycxm">
            <div class="gangn">
            <div class="gangntxt">异常项目 <span class="ycsl">4项<span class="yc">异常</span></span></div><hr class="hr4" />
            <div class="tt1">
            <div class="xiangmu xinlv gangongneng">肝功能 </div></div><hr/>
            <div class="tt1">
            <div class="xiangmu xinlv">总胆固醇<span class="dw">mmol</span></div>
            </div><span class="shuzhi3">3.2</span><van-progress class="jindu" :percentage="96" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hrx hr2" />
            <div class="biaozhun"><span class="dw biaozhun1">0.4</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">1.71</span></div><hr />
            <div class="tt1">
            <div class="xiangmu xinlv">甘油三酯<span class="dw">mmol</span></div>
            </div><span class="shuzhi3">6.81</span><van-progress class="jindu" :percentage="96" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hrx hr2" />
            <div class="biaozhun"><span class="dw biaozhun1">3.12</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">6.24</span></div>
            </div>
        </div>

    <div class="caib">
        <div class="gangntxt">彩色B超</div>
        <div class="caibtxt" >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxxxxxxx</div>
    </div>
    <div class="niaocg">
        <div class="gangntxt">尿常规</div>
        <div class="niaody"><span>尿胆原</span><span class="ndyyx">阳性</span></div>
    </div>

    <el-button class="tijiao">查看报告详情</el-button>
    </div>
</template>
<script lang="ts">
    import { defineComponent,ref,type Ref } from 'vue';
    import '../Home/HomeView.css'
    import {RouterLink} from 'vue-router'
    import 'vant/lib/index.css';
    import axios from 'axios';


     const datas = ref<any>([]);
    export default defineComponent({
        data (){
            return{
                phonenumber:'13180599448',
            }
        },
        setup() {
            
        const fileInputRef: Ref<HTMLInputElement | null> = ref(null);
         axios.get("https://www.fastmock.site/mock/ea58da145cfe8c6131de9de13bc7665a/health/api/data")
        .then((response) => {
            datas.value = response.data
            console.log("chufa");
        })


    const takePicture = () => {
      fileInputRef.value?.click();
      console.log("dianji");
    };

    return {
      fileInputRef,
      takePicture,
      datas
    };
  },
  computed:{
    hiddenphonenumber(){
        return this.phonenumber.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
    }
  }
    })

    
   
</script>
<style scoped>
.flexcol{
    height: 100%;
}
.page{
    height: 100%;
    background: url(../../assets/images/home_bg1.png);
}
.zhzs{
    margin-top: 2rem;
}
.ysjy{
    margin: 0 auto;
    width: 43.125rem;
    height: 28.125rem;
    background-color: #fff;
    border-radius: 10px;
}
.ysjytxt{
    display: block;
    font-size: 2.25rem;
    margin: 0 1.875rem;
    padding-top: 2.1875rem;
}
.gdtxt{
    font-size: 1.625rem;
    color: #36a5ff;
    float: right;
}
.advicetxt{
    font-size: 1.75rem;
    margin: 0 1.875rem;
}
.ycxm{
    display: block;
    margin: 2.5rem auto;
}
.gangn{
     margin: 2.5rem auto;
}
.gangntxt{
    font-weight: bold;
}
.ycsl{
    float: right;
    margin-right: 1.875rem;
    
}
.yc{
    color: #999;
}
 .gangongneng{
font-weight: bold;
}
.hr4{
    border-color: #dedede;
}
.caib{
    display: block;
    margin: 0 auto;
}
.niaocg{
    margin-top: 2.5rem !important;
    display: block;
    margin: 0 auto;
}
.ckxq{
    margin: 2.5rem auto;
}
</style>