<template>
    <div>
      <div class="success">
        <img
          class="icon_1"
          referrerpolicy="no-referrer"
          src="../../assets/images/icon_1.png"
        />
        <div class="tjsuccess">提交成功</div>
      </div>
    </div>
</template>


<script lang="ts">
import './UpSuccess.css'
import { defineComponent } from 'vue';
export default defineComponent({
    mounted() {
    // Wait for three seconds before redirecting
    setTimeout(() => {
      // Navigate to the new page
      this.$router.push('/Loading');
    }, 3000);
  },
})

</script>