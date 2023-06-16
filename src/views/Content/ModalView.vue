<template>
    <div class="modal">
      <div class="modal-content">
        <div class="xiugaitt">修改项目</div>
        <div class="waike">外科</div>
        <div class="shengao">{{ xiangmu }}
        <div class="input-wrapper">
          <input type="number" v-model="newShengao" placeholder="请输入" />
        </div>
    </div>
        <div class="button-wrapper">
            <button @click="onCancel">取消</button>
          <button @click="onConfirm">确定</button>
          
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      xiangmu:{
        type:String,
        required:true
      },
      shengao: {
        type: Number,
        required: true
      },
      tizhong:{
        type:Number,
        required:true
      }
      
    },
    data() {
      return {
        newShengao: this.shengao,
        newtizhong:this.tizhong
      };
    },
    methods: {
      onConfirm() {
        this.$emit('update:shengao', this.newShengao);
        this.$emit('confirm', this.newShengao);
      },
      onCancel() {
        this.$emit('cancel');
      }
    }
  });
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xiugaitt{
    display: block;
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
  }
  .waike{
    font-size: 2rem;
    background: none;
    color: black;
  }
  .modal-content {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    width: 43rem;
    height: 35rem;
  }
  
  .input-wrapper {
    margin-bottom: 1rem;
  }
  
  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }
  </style>