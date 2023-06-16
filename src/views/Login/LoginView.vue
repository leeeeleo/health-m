<template>
    <div class="login_main">
        <div class="title">
            <div class="titletxt">欢迎登陆<br />健康档案管理</div>
            <img src="../../assets/images/login_background.png" />
        </div>
    </div>
    <div class="login_box">
            <div class="login_xx login_x1">
            <el-form    label-width="80px" class="login__form txt">
            <el-form-item label="+86" prop="username">
              <el-input class="input" type="number"  v-model="username" placeholder="请输入手机号"></el-input>
            </el-form-item>
        </el-form>
        </div>  
        <el-form > 
        <div class="login_xx login_x2" >
            <el-input v-model="yzm" type="text" class="txt3" placeholder="请输入短信验证码" />
            <el-button :disabled="disabled" @click="startTimer" class="hq_btn">{{ buttonText }}</el-button>
        </div>
      </el-form>   
        <div class="radio">
        <el-checkbox v-model="radio" label="1">阅读并同意《用户协议》、《隐私政策》</el-checkbox>
        </div> 
        <el-form >
        <div class="login_btn">
            <RouterLink to="/Logined">
            <button type="submit"  class="login_sub">登录</button>
        </RouterLink>
        </div>
     </el-form>
    </div>
</template>

<script lang="ts">
import  { defineComponent,ref } from 'vue';
import './LoginView.css'
import { RouterLink } from 'vue-router';
export default defineComponent({
    data (){
        const username = ref('');
        const yzm = ref('');
        const radio = ref('')
        return {
            disabled:false,
            buttonText:'获取验证码',
            timer:0,
            count:60,
            username,
            yzm,
            radio
        }
    },
    methods:{
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
    }
)


</script>   
