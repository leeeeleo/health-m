<template>
    <div>
        
      <div class="loadingbox flex-col">
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="../../assets/images/loading_1.png"
        />
        <div class="shibiezhong">正在生成</div>
        <div class="healthtxt">健康提示文字XXXXXXXXX</div>
      </div>
    
    </div>
</template>

<script lang="ts">
import './Identify.css'
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    // Wait for three seconds before redirecting
    setTimeout(() => {
      // Navigate to the new page
      this.$router.push('/DetailedReports');
    }, 3000);
  },
})

</script>