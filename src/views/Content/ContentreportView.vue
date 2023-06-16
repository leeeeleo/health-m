<template>
    <div class="page">
    <div class="bt">
        <van-nav-bar
            title="导入报告"
            left-arrow
            @click-left="onClickLeft"
            />
    </div>
    <div>
        <div class="shibietxt">
            识别体检报告内容如下
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">{{ data.waike }}</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>{{ xiangmu }}</div>
            <div class="content" @click="showModal">{{shengao}}cm</div> <Modal v-if="modalVisible" :xiangmu="xiangmu" :tizhong="tizhong" :shengao="shengao" @confirm="updateNumber" @cancel="closeModal" /></div>
            <div class="tt1">
            <div class="xiangmu">体重</div>
            <div class="content" @click="showModal">{{ tizhong }}kg</div> <Modal v-if="modalVisible" :xiangmu="xiangmu" :shengao="shengao" :tizhong="tizhong" @confirm="updatetizhong" @cancel="closeModal" /></div>
            <div class="tt1">
            <div class="xiangmu">腰围</div>
            <div class="content" @click="showModal" >{{data.yaowei}}cm</div></div>
            <div class="tt1">
            <div class="xiangmu">臀围</div>
            <div class="content" @click="showModal">{{ data.tunwei }}cm</div></div>
            <div class="tt1">
            <div class="xiangmu">胸廓外形</div>
            <div class="content" @click="showModal">{{ data.lunkuowaixing }}</div></div>
            <div class="tt1">
            <div class="xiangmu">胸部视诊</div>
            <div class="content" @click="showModal">{{ data.xiongbuzhenshi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">胸部听诊</div>
            <div class="content" @click="showModal">{{ data.xiongbutingzhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">腹部视诊</div>
            <div class="content" @click="showModal">{{ data.fubuzhenshi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">腹部听诊</div>
            <div class="content" @click="showModal">{{ data.fubutingzhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">腹部触诊</div>
            <div class="content" @click="showModal">{{ data.fubuchuzhen }}</div></div>
            <div class="tt1">
            <div class="xiangmu">一般症状</div>
            <div class="content" @click="showModal">{{ data.yibanzhengzhuang }}</div></div>
            <div class="tt1">
            <div class="xiangmu">意识状态</div>
            <div class="content" @click="showModal">{{ data.yishizhuangtai }}</div></div>
            <div class="tt1">
            <div class="xiangmu">颅神经</div>
            <div class="content" @click="showModal">{{ data.lushenjing }}</div></div>
            <div class="tt1">
            <div class="xiangmu">肌肉</div>
            <div class="content" @click="showModal">{{ data.jirou }}</div></div>
            <div class="tt1">
            <div class="xiangmu">运动功能</div>
            <div class="content" @click="showModal">{{ data.yundonggongneng }}</div></div>
            <div class="tt1">
            <div class="xiangmu">外科病史</div>
            <div class="content" @click="showModal">{{ data.waikebingshi }}</div></div>
            <div class="tt1">
            <div class="xiangmu">颈部</div>
            <div class="content" @click="showModal">{{ data.jingbu }}</div></div>
            <div class="tt1">
            <div class="xiangmu">甲状腺</div>
            <div class="content" @click="showModal">{{ data.jiazhuangxian }}</div></div>
            <div class="tt1">
            <div class="xiangmu">浅表淋巴结</div>
            <div class="content" @click="showModal">{{ data.qianbiaolinbajie }}</div></div>
            <div class="tt1">
            <div class="xiangmu">皮肤</div>
            <div class="content" @click="showModal">{{ data.pifu }}</div></div>
            <div class="tt1">
            <div class="xiangmu">脊柱</div>
            <div class="content" @click="showModal">{{ data.jizhu }}</div></div>
            <div class="tt1">
            <div class="xiangmu">四肢关节</div>
            <div class="content" @click="showModal">{{ data.sizhiguanjie }}</div></div>
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">眼科</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>左眼裸眼视力</div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">耳鼻喉科</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>左听力</div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">内科</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>肺</div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">口腔科</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>龋齿</div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">肝功能</div></div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">肾功能</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>肌酐</div>
            <div class="content">{{data.jigan}}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿素氮</div>
            <div class="content">{{ data.niaosudan }}</div></div>
            <div class="tt1">
            <div class="xiangmu">尿酸</div>
            <div class="content" :class="{completed:data.niaosuan === '未导入'}">{{data.niaosuan}}</div></div>
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">血常规</div></div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">尿常规</div></div>
            <div class="tt1">
            <div class="xiangmu">尿潜血</div>
            <div class="content">{{data.niaoqianxue}}</div></div>
            <div class="tt1">
            <div class="xiangmu"><span class="xing">*</span>尿比重</div>
            <div class="content">{{ data.niaobizhong }}</div></div>
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
            <div class="tt1">
            <div class="xiangmu">&nbsp;</div></div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">TPSA</div></div>
            <div class="tt1">
            <div class="xiangmu">总前列腺特异性抗原测定</div>
            <div class="content">{{data.niaoqianxue}}</div></div>
            <div class="xiangmu">&nbsp;</div>
        </div>
        <div class="keshu" v-for="data in datas" :key="data.id">
            <div class="waike"><div class="waiketxt">彩色B超</div></div>
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
            <div class="tt1">
            <div class="xiangmu">肾脏</div>
            <div class="content" :class="{completed:data.sz === '未导入'}">{{data.sz}}</div></div>
            <div class="tt1">
            <div class="xiangmu">输尿管</div>
            <div class="content" :class="{completed:data.sng === '未导入'}">{{ data.sng }}</div></div>
            <div class="tt1">
            <div class="xiangmu">膀胱</div>
            <div class="content" :class="{completed:data.pg === '未导入'}">{{data.pg}}</div></div>
            <div class="tt1">
            <div class="xiangmu">前列腺</div>
            <div class="content" :class="{completed:data.qlx === '未导入'}">{{data.qlx}}</div></div>
            <div class="tt1">
            <div class="xiangmu">精囊腺</div>
            <div class="content" :class="{completed:data.jnx === '未导入'}">{{data.jnx}}</div></div>
            <div class="tt1">
            <div class="xiangmu">肾上腺</div>
            <div class="content" :class="{completed:data.ssx === '未导入'}">{{data.ssx}}</div></div>
            <div class="xiangmu">&nbsp;</div>
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
            <div class="xiangmu">&nbsp;</div>
    </div>
    <div class="tips">注：点击具体项目可进行修改，*为手动修改数据</div>
    <RouterLink to="/identify">
    <el-button class="tijiao">确认提交</el-button>
    </RouterLink>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import { RouterLink } from 'vue-router';
import 'element-plus/dist/index.css'  
import axios from 'axios'
import Modal from'./ModalView.vue'
import './Contentreport.css'


const datas = ref<any>([]);
export default {

    data(){
        return {
            shengao: 180,
            xiangmu:"身高",
            tizhong:70,
            modalVisible: false
        }
    },
    methods:{
        showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    updateNumber(newNumber: number) {
        
      this.shengao = newNumber;
      this.modalVisible = false;
    },
    updatetizhong(newtizhong:number) {
        this.tizhong= newtizhong;
        this.modalVisible = false;
    }
  },
    setup(){
        axios.get("https://www.fastmock.site/mock/ea58da145cfe8c6131de9de13bc7665a/health/api/data")
        .then((response) => {
            datas.value = response.data
            console.log("chufa");
        })

        const onClickLeft = () => history.back();
        return{
            onClickLeft,
            datas
        }
    
        },
        components:{
            Modal
        }
   
}

</script>
<style scoped>
.page{
    height:100% ;
    background: url(../../assets/images/report_bg.png)  100% no-repeat;
    background-size: 100% 100%;
}
.shibietxt{
    font-size:2.1rem;
    color: #000;
    text-align: center;
    font-weight: bold;
    margin-top: 2.1rem;
    margin-bottom: 2.1rem;
}
.keshu{
    margin: 2rem auto;
    background-color: #fff;
    display: block;
    border-radius: 10px;
    width: 43rem;
}
.waike{
    background-color: #99c9fe;
    height: 6.8rem;
    font-size: 2.1rem;
    display: block;

    color: #fff;
    border-radius: 10px 10px 0 0 ;
}
.completed{
    color: #f00 !important;
}
.title2{
    font-size: 2.12rem;
    font-weight: bold;
    margin-left: 1.875rem;
    margin-top: 1rem;
}
hr {
    height: 2px;
    border: none;
    border-top: 2px solid #f9f9f9;
    width: 40rem;
    margin: 0 auto;
  }
.waiketxt{
    margin-left: 2rem;
    line-height: 6.8rem;
}
.van-nav-bar__title{
    color: #fff;
    font-size: 2.25rem;
    margin: 0 auto;
    line-height: 2.25rem;
    font-weight: normal;
}
.tt1{
    display: flex;
    justify-content: space-between;
    margin: 1rem 2.5rem 0.3rem 3rem;
    font-size: 1.875rem;
}
.content{
    color: #999;
}
.xing{
    margin-left: -0.7rem;
    color: #3493fd;
}
.tips{
    color: #666;
    font-size: 1.875rem;
    margin-left: 1.875rem;
}
.tijiao {
    width: 43rem;
    margin: 1rem 0 2rem  2rem;
    height: 5.8rem;
    line-height: 1.8rem;
    font-size: 1.875rem;
    background-color: #3496fd;
    border-radius: 10px;
    color: #fff;
}

</style>