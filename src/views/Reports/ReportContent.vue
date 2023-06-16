<template>
    <div class="xxbg"><van-collapse v-model="activeNames" v-for="data in datas" :key="data.id" >
  <van-collapse-item name="1"
    >
    <template #title>
      <div :class="{ ks:true,  active: isActive1 }" @click="toggleBackground1">外科</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">肺</div>
            <div class="content">{{data.fei}}</div></div>
            <div class="tt1">
            <div class="xiangmu">呼吸音</div>
            <div class="content">{{ data.huxiyin }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心率</div>
            <div class="content">{{data.xinshuai}}次</div></div>
            <div class="tt1">
            <div class="xiangmu">心律</div>
            <div class="content">{{ data.xinlv }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心音</div>
            <div class="content">{{ data.xinyin }}</div></div>
            <div class="tt1">
            <div class="xiangmu">杂音</div>
            <div class="content">{{ data.zayin }}</div></div>
            <div class="tt1">
            <div class="xiangmu">收缩压</div>
            <div class="content">{{ data.shousuoya }}mmHg</div></div>
            <div class="tt1">
            <div class="xiangmu">舒张压</div>
            <div class="content">{{ data.shuzhangya }}mmHg</div></div>
            <div class="tt1">
            <div class="xiangmu">内科病史</div>
            <div class="content">{{ data.neikebingshi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心脏视诊</div>
            <div class="content">{{ data.xinzangshizhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心脏听诊</div>
            <div class="content" :class="{completed:data.xinzangtingzhen === '未导入'}">{{ data.xinzangtingzhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">血管</div>
            <div class="content">{{ data.xueguan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">发育及营养状况</div>
            <div class="content">{{ data.fayu }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心血管</div>
            <div class="content">{{ data.jirou }}</div></div>
            <div class="tt1">
            <div class="xiangmu">神经及精神</div>
            <div class="content">{{ data.shenjing }}</div></div>
            <div class="tt1">
            <div class="xiangmu">肝</div>
            <div class="content">{{ data.gan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">脾</div>
            <div class="content">{{ data.pi }}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="2">
    <template #title>
      <div  :class="{ ks: true, active: isActive2 }" @click="toggleBackground2">眼科</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">左眼裸眼视力</div>
            <div class="content">{{data.zuoluo}}</div></div>
            <div class="tt1">
            <div class="xiangmu">右眼裸眼视力</div>
            <div class="content">{{ data.youluo }}</div></div>
            <div class="tt1">
            <div class="xiangmu">左眼正常视力</div>
            <div class="content">{{data.zuozheng}}</div></div>
            <div class="tt1">
            <div class="xiangmu">右眼正常视力</div>
            <div class="content">{{ data.youzheng }}</div></div>
            <div class="tt1">
            <div class="xiangmu">色觉</div>
            <div class="content">{{ data.sejue }}</div></div>
            <div class="tt1">
            <div class="xiangmu">晶体</div>
            <div class="content">{{ data.jingti }}</div></div>
            <div class="tt1">
            <div class="xiangmu">眼睑</div>
            <div class="content">{{ data.yanjian }}</div></div>
            <div class="tt1">
            <div class="xiangmu">球结膜</div>
            <div class="content">{{ data.qiujiemo }}</div></div>
            <div class="tt1">
            <div class="xiangmu">角膜</div>
            <div class="content">{{ data.jiaomo }}</div></div>
            <div class="tt1">
            <div class="xiangmu">虹膜</div>
            <div class="content">{{ data.hongmo }}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="3" >
    <template #title>
      <div  :class="{ ks: true, active: isActive3 }" @click="toggleBackground3">耳鼻喉科</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">左听力</div>
            <div class="content">{{data.zuotingli}}</div></div>
            <div class="tt1">
            <div class="xiangmu">右听力</div>
            <div class="content">{{ data.youtingli }}</div></div>
            <div class="tt1">
            <div class="xiangmu">耳疾</div>
            <div class="content">{{data.erji}}</div></div>
            <div class="tt1">
            <div class="xiangmu">嗅觉</div>
            <div class="content" :class="{completed:data.xiujue === '未导入'}">{{ data.xiujue }}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="4" >
    <template #title>
      <div :class="{ ks: true, active: isActive4 }" @click="toggleBackground4">内科</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">肺</div>
            <div class="content">{{data.fei}}</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>呼吸音</div>
            <div class="content">{{ data.huxiyin }}</div></div>
            <hr/>
            <div class="tt1">
            <div class="xiangmu xinlv"><span class="xing">*</span>心率<span class="dw">次/分</span></div>
            </div><span class="shuzhi1">96</span><van-progress :percentage="80" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hr" />
            <div class="biaozhun"><span class="dw biaozhun1">80</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">100</span></div><hr />
            <div class="tt1">
            <div class="xiangmu">心律</div>
            <div class="content">{{ data.xinlv }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心音</div>
            <div class="content">{{ data.xinyin }}</div></div>
            <div class="tt1">
            <div class="xiangmu">杂音</div>
            <div class="content">{{ data.zayin }}</div></div>
            <hr/>
            <div class="tt1">
            <div class="xiangmu xinlv">收缩压<span class="dw">mmHg</span></div>
            </div><span class="shuzhi2">132</span><van-progress :percentage="20" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hr" />
            <div class="biaozhun"><span class="dw biaozhun1">120</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">139</span></div><hr />
            <div class="tt1">
            <div class="xiangmu xinlv">舒张压<span class="dw">mmHg</span></div>
            </div><span class="shuzhi3">96</span><van-progress class="jindu" :percentage="96" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hr2" />
            <div class="biaozhun"><span class="dw biaozhun1">60</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">89</span></div><hr />
            <div class="tt1">
            <div class="xiangmu">内科病史</div>
            <div class="content">{{ data.neikebingshi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心脏视诊</div>
            <div class="content">{{ data.xinzangshizhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">心脏听诊</div>
            <div class="content" :class="{completed:data.xinzangtingzhen === '未导入'}">{{ data.xinzangtingzhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">血管</div>
            <div class="content">{{ data.xueguan }}</div></div>
            <div class="tt1 ffy">
            <div class="xiangmu fyqk">发育及营养状况</div>
            <div class="content fytxt">xxxxxxxxxx<br/>xxxxxxxxxx</div></div>
            <div class="tt1">
            <div class="xiangmu">心血管</div>
            <div class="content">{{ data.jirou }}</div></div>
            <div class="tt1">
            <div class="xiangmu">神经及精神</div>
            <div class="content">{{ data.shenjing }}</div></div>
            <div class="tt1">
            <div class="xiangmu">肝</div>
            <div class="content">{{ data.gan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">脾</div>
            <div class="content">{{ data.pi }}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="5">
    <template #title>
      <div  :class="{ ks: true, active: isActive5 }" @click="toggleBackground5">口腔科</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">龋齿</div>
            <div class="content">{{data.quchi}}</div></div>
            <div class="tt1">
            <div class="xiangmu">残根残冠</div>
            <div class="content">{{ data.cangen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">锲状缺损</div>
            <div class="content">{{data.xinshuai}}</div></div>
            <div class="tt1">
            <div class="xiangmu">活动义齿</div>
            <div class="content" :class="{completed:data.yichi === '未导入'}">{{ data.yichi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">牙缺失</div>
            <div class="content">{{ data.queya }}</div></div>
            <div class="tt1">
            <div class="xiangmu">牙结石</div>
            <div class="content">{{ data.yajieshi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">牙龈炎</div>
            <div class="content">{{ data.yayan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">牙周炎</div>
            <div class="content">{{ data.zhouyan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">牙齿松动</div>
            <div class="content">{{ data.yasong }}</div></div>
            <div class="tt1">
            <div class="xiangmu">阻生牙</div>
            <div class="content">{{ data.zusheng }}</div></div>
            <div class="tt1">
            <div class="xiangmu">口腔黏膜</div>
            <div class="content">{{ data.kouq }}</div></div>
            <div class="tt1">
            <div class="xiangmu">颞颌关节</div>
            <div class="content">{{ data.guanjie }}</div></div>
            <div class="tt1">
            <div class="xiangmu">腔颌面部</div>
            <div class="content">{{ data.qianghe }}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="6">
    <template #title>
      <div  :class="{ ks: true, active: isActive6 }" @click="toggleBackground6">肝功能</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>谷丙转氨酶</div>
            <div class="content">{{data.bingzhuan}}U/L</div></div>
            <div class="tt1">
            <div class="xiangmu">谷草转氨酶</div>
            <div class="content">{{ data.caozhuan }}U/L</div></div>
            <div class="tt1">
            <div class="xiangmu">AST:ALT</div>
            <div class="content">{{data.ast}}U/L</div></div>
            <div class="tt1">
            <div class="xiangmu">总胆红素</div>
            <div class="content">{{ data.zongdan }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">直接胆红素</div>
            <div class="content">{{ data.zhidan }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">间接胆红素</div>
            <div class="content">{{ data.jiandan }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">总胆固醇</div>
            <div class="content">{{ data.zongguc }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">甘油三酯</div>
            <div class="content">{{ data.gysz }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">高密度胆固醇</div>
            <div class="content">{{ data.gaogc }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">低密度胆固醇</div>
            <div class="content">{{ data.digc }}umol/L</div></div>
            <div class="tt1">
            <div class="xiangmu">葡萄糖</div>
            <div class="content">{{ data.ppt }}umol/L</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="7" >
    <template #title>
      <div  :class="{ ks: true, active: isActive7 }" @click="toggleBackground7">肾功能</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>肌酐</div>
            <div class="content">{{data.jigan}}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿素氮</div>
            <div class="content">{{ data.niaosudan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿酸</div>
            <div class="content" :class="{completed:data.niaosuan === '未导入'}">{{data.niaosuan}}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="8">
    <template #title>
      <div  :class="{ ks: true, active: isActive8 }" @click="toggleBackground8">血常规</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>红细胞计数</div>
            <div class="content">{{data.xuexibao}}10^12/L</div></div>
            <div class="tt1">
            <div class="xiangmu">血红蛋白</div>
            <div class="content" :class="{completed:data.xuehongdanbai === '未导入'}">{{ data.xuehongdanbai }}</div></div>
            <div class="tt1">
            <div class="xiangmu">红细胞分布宽度</div>
            <div class="content">{{data.hongkuandu}}fL</div></div>
            <div class="tt1">
            <div class="xiangmu">平均红细胞体积</div>
            <div class="content">{{ data.hongtiji }}fL</div></div>
            <div class="tt1">
            <div class="xiangmu">红细胞压积</div>
            <div class="content">{{ data.hongyaji }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">平均红细胞血红蛋白含量</div>
            <div class="content">{{ data.honghl }}Pg</div></div>
            <div class="tt1">
            <div class="xiangmu">平均红细胞血红蛋白浓度</div>
            <div class="content">{{ data.hongnd }}g/L</div></div>
            <div class="tt1">
            <div class="xiangmu">血小板计数</div>
            <div class="content">{{ data.xxb }}10ˆ9/L</div></div>
            <div class="tt1">
            <div class="xiangmu">血小板分布宽度</div>
            <div class="content">{{ data.xxbkd }}fL</div></div>
            <div class="tt1">
            <div class="xiangmu">平均血小板体积</div>
            <div class="content">{{ data.xxbtj }}fL</div></div>
            <div class="tt1">
            <div class="xiangmu">大血小板比率</div>
            <div class="content">{{ data.xxbbl }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">白细胞总数</div>
            <div class="content">{{ data.bxb }}10ˆ9/L</div></div>
            <div class="tt1">
            <div class="xiangmu">中性粒细胞比率</div>
            <div class="content">{{ data.lxbbl }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">淋巴细胞比率</div>
            <div class="content">{{ data.lbxbbl }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">单核细胞比率</div>
            <div class="content">{{ data.dhxbbl }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">嗜酸性粒细胞百分比</div>
            <div class="content">{{ data.slxbbl }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">嗜碱性粒细胞百分比</div>
            <div class="content">{{ data.jlxbbl }}%</div></div>
            <div class="tt1">
            <div class="xiangmu">中性粒细胞</div>
            <div class="content">{{ data.zlxb }}10ˆ9/L</div></div>
            <div class="tt1">
            <div class="xiangmu">淋巴细胞</div>
            <div class="content">{{ data.lbxb }}10ˆ9/L</div></div>
            <div class="tt1">
            <div class="xiangmu">单核细胞</div>
            <div class="content">{{ data.dhxb }}10ˆ9/L</div></div>
            <div class="tt1">
            <div class="xiangmu">嗜酸性粒细胞</div>
            <div class="content">{{ data.sslxb }}10ˆ9/L</div></div>
            <div class="tt1">
            <div class="xiangmu">嗜碱性粒细胞</div>
            <div class="content">{{ data.sjlxb }}10ˆ9/L</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="9">
    <template #title>
      <div  :class="{ ks: true, active: isActive9 }" @click="toggleBackground9">尿常规</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">尿潜血</div>
            <div class="content">{{data.niaoqianxue}}</div></div>
            <hr/>
            <div class="tt1">
            <div class="xiangmu xinlv">尿比重</div>
            </div><span class="shuzhi5">1.021</span><van-progress :percentage="70" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hr" />
            <div class="biaozhun"><span class="dw biaozhun1">1.015</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">1.030</span></div><hr />
            <div class="tt1">
            <div class="xiangmu">尿酮体</div>
            <div class="content">{{data.niaotongti}}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿胆原</div>
            <div class="content" :class="{completed:data.ndy === '未导入'}">{{ data.ndy }}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿葡萄糖</div>
            <div class="content">{{ data.nppt }}</div></div>
            <div class="tt1">
            <div class="xiangmu xinlv">尿比重</div>
            </div><span class="shuzhi6">5.8</span><van-progress :percentage="40" track-color="#1fd3b6" pivot-text=&nbsp; stroke-width='8px'/><hr class="hr" />
            <div class="biaozhun"><span class="dw biaozhun1">5.5</span><span class="dw biaozhun2" >正常</span><span class="dw biaozhun3">6.5</span></div><hr />
            <div class="tt1">
            <div class="xiangmu">ph值</div>
            <div class="content">{{ data.ph }}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿蛋白质</div>
            <div class="content">{{ data.ndbz }}</div></div>
            <div class="tt1">
            <div class="xiangmu">亚硝酸盐</div>
            <div class="content">{{ data.yxsy }}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿白细胞</div>
            <div class="content">{{ data.nbxb }}</div></div>
            <div class="tt1">
            <div class="xiangmu">抗坏血酸</div>
            <div class="content">{{ data.khxs }}</div></div>
            <div class="tt1">
            <div class="xiangmu">镜检红细胞</div>
            <div class="content">{{ data.jjhxb }}</div></div>
            <div class="tt1">
            <div class="xiangmu">镜检白细胞</div>
            <div class="content">{{ data.jjbxb }}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿胆红素</div>
            <div class="content">{{ data.ndhs }}</div></div>
            <div class="tt1">
            <div class="xiangmu">镜检上皮细胞</div>
            <div class="content">{{ data.jjspxb }}</div></div>
            <div class="tt1">
            <div class="xiangmu">透明管型</div>
            <div class="content">{{ data.tmgx }}</div></div>
            <div class="tt1">
            <div class="xiangmu">结晶</div>
            <div class="content">{{ data.jj }}</div></div>
        </div>
  </van-collapse-item>
   <van-collapse-item name="10">
    <template #title>
      <div  :class="{ ks: true, active: isActive10 }"  @click="toggleBackground10">TPSA</div>
    </template>
        <div>
            <div class="tt1">
            <div class="xiangmu">总前列腺特异性抗原测定</div>
            <div class="content">{{data.niaoqianxue}}</div></div>
        </div>
  </van-collapse-item>
  <van-collapse-item class="bc" name="11" >
    <template #title>
      <div  :class="{ ks: true, active: isActive11 }" @click="toggleBackground11">彩色B超</div>
    </template>
        <div>
            <div class="biaoti2"><div class="title2">循环系统</div>
            <div class="tt1">
            <div class="xiangmu">心脏</div>
            <div class="content" :class="{completed:data.xz === '未导入'}">{{data.xz}}</div></div>
            <div class="tt1">
            <div class="xiangmu">心包</div>
            <div class="content" :class="{completed:data.xb === '未导入'}">{{ data.xb }}</div></div>
            <div class="tt1">
            <div class="xiangmu">大血管</div>
            <div class="content" :class="{completed:data.dxg === '未导入'}">{{data.dxg}}</div></div>
            <div class="xiangmu">&nbsp;</div>
            <hr/>
            </div>
            <div class="biaoti2"><div class="title2">消化系统</div>
            <div class="tt1">
            <div class="xiangmu">肝脏</div>
            <div class="content" :class="{completed:data.gz === '未导入'}">{{data.gz}}</div></div>
            <div class="tt1">
            <div class="xiangmu">胆系</div>
            <div class="content" :class="{completed:data.dx === '未导入'}">{{ data.dx }}</div></div>
            <div class="tt1">
            <div class="xiangmu">胰腺</div>
            <div class="content" :class="{completed:data.yx === '未导入'}">{{data.yx}}</div></div> 
            <div class="tt1">
            <div class="xiangmu">脾脏</div>
            <div class="content" :class="{completed:data.pz === '未导入'}">{{data.pz}}</div></div>   
            <div class="tt1">
            <div class="xiangmu">胃肠道</div>
            <div class="content" :class="{completed:data.wcd === '未导入'}">{{data.wcd}}</div></div>     
            <div class="xiangmu">&nbsp;</div>
            <hr/>
            </div>
            <div class="biaoti2"><div class="title2">泌尿系统</div>
           <div class="miniaotxt">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br/>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
           </div>
            <hr/>
            </div>
            <div class="biaoti2"><div class="title2">男性生殖系统</div>
            <div class="tt1">
            <div class="xiangmu">睾丸</div>
            <div class="content" :class="{completed:data.gw === '未导入'}">{{data.gw}}</div></div>
            <div class="tt1">
            <div class="xiangmu">附睾</div>
            <div class="content" :class="{completed:data.fg === '未导入'}">{{ data.fg }}</div></div>
            <div class="tt1">
            <div class="xiangmu">精索静脉</div>
            <div class="content" :class="{completed:data.jsjm === '未导入'}">{{data.jsjm}}</div></div>
            <div class="tt1">
            <div class="xiangmu">输精管</div>
            <div class="content" :class="{completed:data.sjg === '未导入'}">{{data.sjg}}</div></div>
            <div class="tt1">
            <div class="xiangmu">阴茎</div>
            <div class="content" :class="{completed:data.yj === '未导入'}">{{data.yj}}</div></div>
            <div class="xiangmu">&nbsp;</div>
            <hr/>
            </div>
            <div class="biaoti2"><div class="title2">女性生殖系统</div>
            <div class="tt1">
            <div class="xiangmu">甲状腺</div>
            <div class="content" :class="{completed:data.jzx === '未导入'}">{{data.jzx}}</div></div>
            <div class="tt1">
            <div class="xiangmu">乳腺</div>
            <div class="content" :class="{completed:data.rx === '未导入'}">{{ data.rx }}</div></div>
            <div class="tt1">
            <div class="xiangmu">颌下腺</div>
            <div class="content" :class="{completed:data.hxx === '未导入'}">{{data.hxx}}</div></div>
            <div class="tt1">
            <div class="xiangmu">腮腺</div>
            <div class="content" :class="{completed:data.sx === '未导入'}">{{data.sx}}</div></div>
            <div class="tt1">
            <div class="xiangmu">眼球</div>
            <div class="content" :class="{completed:data.yq === '未导入'}">{{data.yq}}</div></div>
            <div class="tt1">
            <div class="xiangmu">表浅软组织</div>
            <div class="content" :class="{completed:data.brqzz === '未导入'}">{{data.brqzz}}</div></div>
            <div class="tt1">
            <div class="xiangmu">腹壁</div>
            <div class="content" :class="{completed:data.fb === '未导入'}">{{data.fb}}</div></div>
            <div class="tt1">
            <div class="xiangmu">胸壁</div>
            <div class="content" :class="{completed:data.xiongb === '未导入'}">{{data.xiongb}}</div></div>
            <div class="tt1">
            <div class="xiangmu">颈部动静脉</div>
            <div class="content" :class="{completed:data.jbdjm === '未导入'}">{{data.jbdjm}}</div></div>
            <div class="tt1">
            <div class="xiangmu">四肢动静脉</div>
            <div class="content" :class="{completed:data.szjdm === '未导入'}">{{data.szjdm}}</div></div>
            <div class="tt1">
            <div class="xiangmu">腹部大血管</div>
            <div class="content" :class="{completed:data.fbdxg === '未导入'}">{{data.fbdxg}}</div></div>
            <div class="xiangmu">&nbsp;</div>
            <hr/>
            </div>
            <div class="biaoti2"><div class="title2">淋巴系统</div>
            <div class="tt1">
            <div class="xiangmu">深部淋巴结</div>
            <div class="content" :class="{completed:data.sblbj === '未导入'}">{{data.sblbj}}</div></div>
            <div class="tt1">
            <div class="xiangmu">浅表淋巴结</div>
            <div class="content" :class="{completed:data.qblbj === '未导入'}">{{ data.qblbj }}</div></div>
            <div class="xiangmu">&nbsp;</div>
            <hr />
            </div>
            <div class="tt1">
            <div class="xiangmu">肌骨、关节及周围神经</div>
            <div class="content" :class="{completed:data.zwsj === '未导入'}">{{ data.zwsj }}</div></div>
        </div>
  </van-collapse-item>
</van-collapse>
<div class="tips">注：*为手动修改数据</div>
</div>
</template>


<script lang="ts">
import axios from 'axios';
import './detailed.css'
import {defineComponent, ref } from 'vue';
const datas = ref<any>([])

export default {
    data(){
        return{
            isActive1: false,
            isActive3:false,
            isActive2:false,
            isActive4:false,
            isActive5:false,
            isActive6:false,
            isActive7:false,
            isActive8:false,
            isActive9:false,
            isActive10:false,
            isActive11:false
        }
    },
    methods:{
        toggleBackground1() {
      this.isActive1 = !this.isActive1;
    },
    toggleBackground3() {
      this.isActive3 = !this.isActive3;
    },
    toggleBackground2() {
      this.isActive2 = !this.isActive2;
    },
    toggleBackground4() {
      this.isActive4 = !this.isActive4;
    },
    toggleBackground5() {
      this.isActive5 = !this.isActive5;
    },
    toggleBackground6() {
      this.isActive6 = !this.isActive6;
    },
    toggleBackground7() {
      this.isActive7 = !this.isActive7;
    },
    toggleBackground8() {
      this.isActive8 = !this.isActive8;
    },
    toggleBackground9() {
      this.isActive9 = !this.isActive9;
    },
    toggleBackground10() {
      this.isActive10 = !this.isActive10;
    },
    toggleBackground11() {
      this.isActive11 = !this.isActive11;
    },
  },
  setup() {
    axios.get("https://www.fastmock.site/mock/ea58da145cfe8c6131de9de13bc7665a/health/api/data")
        .then((response) => {
            datas.value = response.data
            console.log("chufa");
        })
    const activeNames = ref(['0']);
    return { 
        activeNames ,
        datas
        };
  },
};

</script>
<style scoped>
.ks{
    font-size: 2.125rem;
    height: 6.8rem;
    line-height:7rem;
    padding-left: 1.5rem;
}

.active{
    color: #fff;
}
.van-icon:after{
    color: #fff;
}

.xxbg .xiangmu{
    color: #000;
}
.xxbg .title2{
    color: #000;
}
.bc{
  margin-bottom: 5rem;
}
.tijiao{
  margin: 1rem 0 2rem 0;
}
</style>