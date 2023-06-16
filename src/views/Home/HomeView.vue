<template>
    <div class="page flex-col">
      <div class="box_1 flex-col">
        <div class="box_2 flex-col">
          <div class="nav-bar_1 flex-col">
            <div class="text_1">健康档案管理</div>
          </div>
          <div class="group_1 flex-col">
            <div class="text-wrapper_1 flex-col">
              <div class="text_2">欢迎来到健康档案管理</div>
            </div>
            <div class="group_2 flex-col">
              <div class="group_3 flex-col">
                <div class="section_1 flex-row">
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item><img src="../../assets/images/swiper1.png" /></van-swipe-item>
                        <van-swipe-item><img src="../../assets/images/swiper1.png" /></van-swipe-item>
                        <van-swipe-item><img src="../../assets/images/swiper1.png" /></van-swipe-item>
                        <van-swipe-item><img src="../../assets/images/swiper1.png" /></van-swipe-item>
                    </van-swipe>
                </div>
              </div>
            </div>
            <div class="text-wrapper_2 flex-col">
              <span class="text_3"
                >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span
              >
            </div>
            <div class="group_4 flex-col">
              <div class="group_5 flex-col">
                <div class="box_7 flex-row">
                  <div class="group_6 flex-col">
                    <div class="text_4">暂无体检报告</div>
                    <div class="text_5">您可以导入体检报告</div>
                    <img class="home1" src="../../assets/images/home_1.png" />
                    <button class="button_1 flex-col">
                        <RouterLink to="/UPload">
                    <div  @click="takePicture"  class="text_6">导入报告</div>
                        </RouterLink>
                    <input type="file" ref="fileInput" style="display:none;" accept="image/*">
                    </button>
                  </div>
                  <div class="group_7 flex-col">
                    <div class="box_8 flex-col"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent,ref,type Ref } from 'vue';
    import './HomeView.css'
    import {RouterLink} from 'vue-router'
    import 'vant/lib/index.css';

    export default defineComponent({
        setup() {
    const fileInputRef: Ref<HTMLInputElement | null> = ref(null);

    const takePicture = () => {
      fileInputRef.value?.click();
      console.log("dianji");
    };

    return {
      fileInputRef,
      takePicture,
    };
  },
    })

    
   
</script>