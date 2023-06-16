<template>
    <div class="ycbg"><span class="ycsl">4项</span><span class="yc">异常</span></div>
    <div class="gangn">
        <div class="gangntxt">肝功能</div><hr />
        <div class="tt1">
            <div class="xiangmu xinlv">总胆固醇<span class="dw">umol</span></div>
            </div><span class="shuzhi3">3.2</span><van-progress class="jindu" :percentage="96" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hrx hr2" />
            <div class="biaozhun"><span class="dw biaozhun1">0.4</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">1.71</span></div><hr />
            <div class="tt1">
            <div class="xiangmu xinlv">甘油三酯<span class="dw">umol</span></div>
            </div><span class="shuzhi3">6.81</span><van-progress class="jindu" :percentage="96" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hrx hr2" />
            <div class="biaozhun"><span class="dw biaozhun1">3.12</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">6.24</span></div>
    </div>
    <div class="caib">
        <div class="gangntxt">彩色B超</div>
        <div class="caibtxt" >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxxxxxxx</div>
    </div>
    <div class="niaocg">
        <div class="gangntxt">尿常规</div>
        <div class="niaody"><span>尿胆原</span><span class="ndyyx">阳性</span></div>
    </div>
    <div class="tips">注：*为手动修改数据</div>
</template>

<script lang="ts">
import './detailed.css'
import { defineComponent } from 'vue';
export default defineComponent({

})
</script>
<style scoped>

.hrx{
    margin-left: 8rem;
}
.van-progress__portion{
    background: none !important;
}
</style>