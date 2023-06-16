<template>
  <div class="overplay" v-if="show" ></div>
    <div class="page">
        <div class="box1">
    <div>
        <van-nav-bar
            title=""
            left-arrow
            @click-left="onClickLeft"
            />
    </div>
    <div>
        <van-uploader v-model="fileList" :preview-full-image="true" :preview-size="[210, 210]" multiple :max-count="5"/>
    </div>
    
    <div class="dialog flex-col"  v-if="dialogVisible">
            <div class="tsbt">提示标题</div>
            <div class="wrapper1">
              <div class="zc1"
                >根据隐私保护政策，您只能查询与手机号实名相符的体检报告<br /><br />请进行短信校验<br
              /></div>
                  <div class="login_xx login_x1">
            <el-form    label-width="80px" class="login__form txt">
            <el-form-item label="+86" prop="username">
              <el-input class="input" type="number"  v-model="username" placeholder="请输入手机号"></el-input>
            </el-form-item>
        </el-form>
        </div>  
        <el-form > 
        <div class="login_xx login_x2 yzmbox" >
            <el-input v-model="yzm" type="text" class="txt3" placeholder="请输入短信验证码" />
            <el-button :disabled="disabled" @click="startTimer" class="hq_btn">{{ buttonText }}</el-button>
        </div>
      </el-form>  
            <div class="tjbutton flex-col">
              <router-link to="/Upsuccess">
              <button class="submit">提交</button>
            </router-link>
            </div>
          </div>
          </div>
    
    
  </div>
    <div class="upload" @click="onsubmit" ><span class="tjtxt">确认提交</span></div>
   
    <!-- <van-dialog
    v-model:visible="dialogVisible"
    title="提示标题"
    message="根据隐私保护政策。您只能查询与手机号实名相符的提价报告 请进行短信校验  "
    >
 

    </van-dialog> -->
    </div>
</template>
<script lang="ts">
    import './UpLoad.css'
    import { defineComponent,ref} from 'vue';
    import {RouterLink} from 'vue-router'
    // import { showConfirmDialog, showDialog,Dialog } from 'vant';
    export default defineComponent({
        data (){
        const username = ref('');
        const yzm = ref('');
        const radio = ref('')
        const show = ref(false)
        return {
            disabled:false,
            buttonText:'获取验证码',
            timer:0,
            count:60,
            username,
            yzm,
            radio,
            show,
            dialogVisible: false,
        }
    },
    methods:{
  //       showDialog() {
  //           Dialog.alert({
  //           title: '提示标题',
  //           message: '根据隐私保护政策，您只能查询与手机号实名相符的提价报告，请进行短信校验。',
  //   });
  // },
  onsubmit() {
    // 将 dialogVisible 变量设置为 true，以显示弹窗 
    
    this.dialogVisible = true;
    this.show = true
    console.log("chufa")
    // 处理提交逻辑
    // ...
  },
 
        startTimer() {
      // 禁用按钮
      this.disabled = true;

      // 开始倒计时
      this.timer = setInterval(() => {
        this.count--;
        this.buttonText = `请等待 ${this.count} 秒`;
        if (this.count == 0) {
          clearInterval(this.timer);
          this.disabled = false;
          this.buttonText = '获取验证码';
          this.count = 60;
        }
      }, 1000);
    }
  },
  beforeUnmount() {
    // 清空计时器
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  },
        setup() {
            
//             const openDialog = () => {
//         showConfirmDialog({
//             showCancelButton:false,
//         title: '指示标题',
//         message:
//             '根据隐私保护政策，您只能查询与手机号实名相符的体检报告                                                                                                                请进行短信校验     ',
//         confirmButtonColor: '#007bff',
//     })
//         .then(() => {
//             // on confirm
//         })
//         .catch(() => {
//             // on cancel
//         });
// };
       
        const onClickLeft = () => history.back();
        const fileList = ref([
            { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
            // Uploader 根据文件后缀来判断是否为图片文件
            // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg'},
            {url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg'},
            
        ]);
        
        return {
            fileList,
            onClickLeft,
          
        };
    },
    })
</script>