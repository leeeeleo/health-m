<template>
    <div class="page">
        <div>
            <van-nav-bar
            title="体检报告"
            left-arrow
            @click-left="onClickLeft"
            />
        </div>
            <div class="carousel">
            <transition name="carousel">
            <component :is="currentComponent"></component>
            </transition>
  </div>    
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';


import echarts from 'echarts';
import { init } from 'echarts';

export default defineComponent({
    setup(){
        const onClickLeft = () => history.back();

        return {
            onClickLeft
        }
    },
   components:{
    ChartOne:{
      template:'<div ref="chart"></div>',
      mounted() {
  const chart = {
    title: {
        text: [
      '{a|历史健康数据图表_甘油三酯} {b|(单位：mmol/L)}',
    ].join('\n'),
    textStyle: {
      rich: {
        a: {
          color: '#333',
          fontSize: 30,
          fontWeight: 'bold'
        },
        b: {
          color: '#999',
          fontSize: 20,
          
        },
      }
    }
    },
    tooltip: {},
    xAxis: {
      type:'category',
      data: ['2019.01.04', '2020.03.16', '2021.03.06', '2022.05.04']
    },
    yAxis: {
        interval: 0.5,
        type:'value',
        splitArea:   
      {
        show:true,
        interval: 1, // 设置分割区间的间隔为1
        areaStyle: {
          color: 'rgba(0, 128, 255, 0.3)' // 将0.45-1.69区间的背景颜色设置为蓝色半透明
        }
      },
        max:2,
    },
    series: [{
      type: 'line',
      data:  [{value: 0.3, label: {show: true, color: 'red', fontSize: 30}}, 1.6, 0.6, {value: 1.84, label: {show: true, color: 'red', fontSize: 30}}],
      silent:true,
      smooth:true,
      symbolSize: 10,
      lineStyle: {
      width: 5 // 设置线条宽度为2
    }
    }]
  }
  const echarts = init(this.$refs.chart);
        echarts.setOption(chart);
  // 使用刚指定的配置项和数据显示图表。
}
    },
    ChartTwo:{
      template:'<div ref="chart"></div>',
      mounted() {
  const chart = {
    title: {
        text: [
      '{a|历史健康数据图表_甘油三酯} {b|(单位：mmol/L)}',
    ].join('\n'),
    textStyle: {
      rich: {
        a: {
          color: '#333',
          fontSize: 30,
          fontWeight: 'bold'
        },
        b: {
          color: '#999',
          fontSize: 20,
          
        },
      }
    }
    },
    tooltip: {},
    xAxis: {
      type:'category',
      data: ['2019.01.04', '2020.03.16', '2021.03.06', '2022.05.04']
    },
    yAxis: {
        interval: 0.5,
        type:'value',
        splitArea:   
      {
        show:true,
        interval: 1, // 设置分割区间的间隔为1
        areaStyle: {
          color: 'rgba(0, 128, 255, 0.3)' // 将0.45-1.69区间的背景颜色设置为蓝色半透明
        }
      },
        max:2,
    },
    series: [{
      type: 'line',
      data:  [{value: 0.3, label: {show: true, color: 'red', fontSize: 30}}, 1.6, 0.6, {value: 1.84, label: {show: true, color: 'red', fontSize: 30}}],
      silent:true,
      smooth:true,
      symbolSize: 10,
      lineStyle: {
      width: 5 // 设置线条宽度为2
    }
    }]
  }
  const echarts = init(this.$refs.chart);
        echarts.setOption(chart);
  // 使用刚指定的配置项和数据显示图表。
}
    },
    ChartThree:{
      template:'<div ref="chart"></div>',
      mounted() {
  const chart = {
    title: {
        text: [
      '{a|历史健康数据图表_甘油三酯} {b|(单位：mmol/L)}',
    ].join('\n'),
    textStyle: {
      rich: {
        a: {
          color: '#333',
          fontSize: 30,
          fontWeight: 'bold'
        },
        b: {
          color: '#999',
          fontSize: 20,
          
        },
      }
    }
    },
    tooltip: {},
    xAxis: {
      type:'category',
      data: ['2019.01.04', '2020.03.16', '2021.03.06', '2022.05.04']
    },
    yAxis: {
        interval: 0.5,
        type:'value',
        splitArea:   
      {
        show:true,
        interval: 1, // 设置分割区间的间隔为1
        areaStyle: {
          color: 'rgba(0, 128, 255, 0.3)' // 将0.45-1.69区间的背景颜色设置为蓝色半透明
        }
      },
        max:2,
    },
    series: [{
      type: 'line',
      data:  [{value: 0.3, label: {show: true, color: 'red', fontSize: 30}}, 1.6, 0.6, {value: 1.84, label: {show: true, color: 'red', fontSize: 30}}],
      silent:true,
      smooth:true,
      symbolSize: 10,
      lineStyle: {
      width: 5 // 设置线条宽度为2
    }
    }]
  }
  const echarts = init(this.$refs.chart);
        echarts.setOption(chart);
  // 使用刚指定的配置项和数据显示图表。
}
    }
   },
   data() {
    return {
      currentComponent: 'ChartOne',
      components: ['ChartOne', 'ChartTwo', 'ChartThree'],
      currentIndex: 0
    };
  },
  mounted() {
    
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.components.length;
      this.currentComponent = this.components[this.currentIndex];
    }, 3000);
  }

})
</script>

<style scoped>
.historydata{
    margin: 2.5rem auto;
    height: 43.25rem;
    width: 43.125rem;
    background-color: #fff;
    border-radius: 10px;
}
.carousel {
  height: 300px;
  overflow: hidden;
}
.carousel-enter,
.carousel-leave-to {
  transform: translateX(100%);
}
.carousel-enter-active,
.carousel-leave-active {
  transition: transform 0.5s;
}
</style>