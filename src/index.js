// 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')
import './banner.js'
import './tabs.js'
import $ from 'jquery'
import '../src/styles/index.css'
import './styles/index.less'
import './assets/assets/fonts/iconfont.css'
import './app.vue'
$('#swiper').css('background' , 'red')

import imgUrl from '../src/assets/assets/1.gif';
const img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

class App {
    static a = 123
  }
  const fn = ()=>{
    console.log(123);
  }
  console.log(App.a)