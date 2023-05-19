(function(){"use strict";var t={2486:function(t,e,n){var o=n(7195),a=n(8315),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},r=[],s={name:"app",mounted(){const t=document.querySelector("#app"),e=[[62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]];let n=0;const o=[0,1,2,3],a=5e-4;function i(){const i=e[o[0]],r=e[o[1]],s=e[o[2]],l=e[o[3]],c=1-n,u=Math.round(c*i[0]+n*r[0]),d=Math.round(c*i[1]+n*r[1]),p=Math.round(c*i[2]+n*r[2]),f=`rgb(${u}, ${d}, ${p})`,v=Math.round(c*s[0]+n*l[0]),h=Math.round(c*s[1]+n*l[1]),g=Math.round(c*s[2]+n*l[2]),m=`rgb(${v}, ${h}, ${g})`;t.style.background=`linear-gradient(to bottom, ${f}, ${m})`,n+=a,n>=1&&(n%=1,o[0]=o[1],o[2]=o[3],o[1]=(o[1]+Math.floor(1+Math.random()*(e.length-1)))%e.length,o[3]=(o[3]+Math.floor(1+Math.random()*(e.length-1)))%e.length)}setInterval(i,10)}},l=s,c=n(1001),u=(0,c.Z)(l,i,r,!1,null,null,null),d=u.exports,p=n(2241),f=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("div",{staticClass:"homepage"},[t._l(t.sections,(function(n,o){return e("div",{key:o,staticClass:"section"},[e("h2",[t._v(t._s(n.title))]),e("p",[t._v(t._s(n.description))]),e("div",[e("svg",{staticClass:"arrows"},[e("path",{staticClass:"a1",attrs:{d:"M0 0 L30 32 L60 0"}}),e("path",{staticClass:"a2",attrs:{d:"M0 20 L30 52 L60 20"}}),e("path",{staticClass:"a3",attrs:{d:"M0 40 L30 72 L60 40"}})])])])})),e("div",{staticClass:"section center"},[e("h1",[t._v("《写给你的信》")]),e("br"),e("p",{staticStyle:{"text-align":"left","padding-left":"5px"}},[t._v("至：最爱的 "),e("span",{staticStyle:{color:"aqua"}},[t._v("Ivy")])]),e("br"),e("p",[t._v("想起我们的回忆，真的觉得很幸福。每一天睡觉前，我都会幻想着，如果我们在一起会是怎样的每一天。每一天当我看到Instagram的notification， 我都默默希望是你的信息，当我看到是你的信息的时候，我发现我都情不自禁的笑了。等待你的信息已经成为了我每一天的动力，每一天的额外的快乐。每一天我都幻想着牵起你的手的那一刻，牵着你的手逛街的时候。每一天都在向上帝祷告，向他祈求给我爱你的机会，让我成为你的男人。我一直祈求上帝改变我，让我能够配得上你，提升我的耐心，给我爱你的力量。")]),e("br"),e("p",[t._v("虽然现在的我还在努力的打拼着，因为经历了一段很毒的过去，失去了全部，但是我会很努力的给你幸福，很努力的提升我自己。我会用"),e("span",{staticStyle:{color:"gold"}},[t._v("102%")]),t._v("去爱你，希望你不会嫌弃我。我只想说，可以让我有这个荣幸去爱你一生，可以让我继续的和你一起创造回忆，"),e("br"),e("span",{staticStyle:{color:"gold","font-size":"30px"}},[t._v("我可以当你的男朋友吗？")])]),e("br"),e("p",{staticStyle:{"text-align":"right","padding-right":"5px"}},[e("span",{staticStyle:{color:"red"}},[t._v("爱你的")]),e("br"),e("span",{staticStyle:{color:"gold"}},[t._v("Isaac")])])])],2)])},v=[],h=(n(7658),{name:"HomePage",props:["isLogedIn"],data(){return{sections:[{title:"《我们的故事》",description:""},{title:"我们匹配到了！",description:"我们匹配到了！！当时，我抱着寻找伴侣的心情去认识你。一开始跟你聊天的时候，感觉有点僵硬，不懂要聊什么。上来问东问西，担心会像政府一样做身家调查，所以好像变到尬聊。那时我还记得，我处在工作紧急状态， 然后吃回复了，然后你就冷漠了。。。但是幸好你还肯继续跟我聊天。真的谢谢你。我们就继续的聊天，了解彼此。。。"},{title:"社交媒体",description:"终于得到你的许可，拿到了你的insta和Facebook。其实我们配到后当天，我就找到你的insta和Facebook了，但是为了你的隐私，我没追踪你直到拿到你的许可。然后，看到你那么可爱的照片，真的觉得你很可爱。然后我们就开始在Instagram聊天了。"},{title:"第一次见面",description:"我们聊到很多事情，我记得聊到了过去。当时你要睡觉了，但是突然你就对我的过去很感兴趣。我们就约了见面的时候在告诉你。之后我们就去了Ground Eatery吃晚餐，那时我已经到了，但是你还在路上，当时我有点小期待看到你。还记得当天我背着门口，突然有一个很可爱身高的女生从我旁边经过然后坐在我面前。终于看到你了！！！当时的你，流着汗，然后还很自然的坐着，就在那一刻我的心被你偷走了。之后，我们就聊着聊着，看着你那么认真的听我讲我的故事，我心里就想着了，这个女孩我爱定了，我准备用我101%的心去爱你，保护你。。。"},{title:"第二次见面",description:"那时是复活节，我还记得你告诉我教会有复活节崇拜，然后我就问了我可以去吗，你说可以呀。那时你应该是觉得我随口说说而已，但是我是认真的，因为我自从搬到KL就没有去教会了，所以我就去了。从office出来前，我也拿了我老板台湾拿来的饼干，一心只想分享给你。崇拜后，很庆幸的是你竟然能够等我，然后我就冲冲的拿给你，因为我知道你还回到家，所以就不耽误你的时间了。虽然我们见面就那么几分钟，我真的很开心，所有的压力都不见了。谢谢你哦。。。"},{title:"第三次见面",description:"还记得你有company dinner 在klcc附近然后你突然问我，放工后晚上9～10点lrt会多人吗。然后就一起讨论了当时你的行程，你坚持要踏lrt说有同事陪你，当时我还觉得应该可以，但是心里慌的一批，很担心你会有什么事，那时你叫我不要去载你，其实当天我就驾车去上班了，为了在你需要的时候能够及时去到你身边帮到你。然后我就在公司陪我的同事加班，值得你告诉我你朋友要载你到我家的lrt然后叫你坐grab回去，当时我背后就冒冷汗了， 害怕你的安危。一时就不多想了，就驾车去载你。虽然有点吓到你，但是我真的很担心你，毕竟你偷了我的心，哪里可以让你受到危险。也没想通要图你什么，就图你要安全回家而已。就这样我们第三次见面，有点突然，但是我还是很开心能够看到你，也能够安全的把你送回家。"},{title:"对你的感觉",description:"还记得当时我在和我的同事们唱k，那时我发现我已经开始对你上头了。然后我们就聊着，然后我的告诉了你我的心里话。当时我真的很害怕，你会被我的真心话吓跑。但是最终我还是选择了告诉你，因为对我来说，生命真的太短了，我的人生信条就是，”不怕走错，只怕错过“。所以就决定把我的心里话告诉你。让我最没想到的是，到现在你依然还在这里陪着我。真的真的越来越喜欢你了。。。"},{title:"第四次见面",description:"我们就约了一起吃你生日的晚餐。那天我真的觉得很幸福，看着你直接用手拿起那个鸡翅膀，我的心彻底的被你征服了，看着你打扮的那么漂亮坐在我面前吃着鸡翅膀，当下我真心的觉得我很幸福。慢慢的聆听你的故事，你逃课的故事，你的人生的成长，真的觉得很幸福很幸福。看到你喜欢我送你的礼物，我送你的花，我真的很开心。"},{title:"你第一次生气了。。。",description:"我们聊着聊着就聊到了孩子的事情，因为过去的经历让我更加的握紧我人生的底线就是生命，我就好奇的问你有没有孩子，如果有，我真的会帮你养大他的，当时你开玩笑的跟我说你有一个孩子，然后问我能不能接受，我当时头脑就出现好多好多问题，我还在公司突然我就想的很入神，我同事们纷纷的察觉到了我的安静。但是我就一直想着怎么帮你，怎么计划接下来要怎么走，所以就一时没回答你的问题。然后就不小心惹你生气了，当我慢慢回过神的时候，你已经很生气了，我当下就蒙了一批，用尽了我的经历去哄你，最后很感谢你，还是在这里陪着我，原谅了我的错。真的很谢谢你。"},{title:"你去了泰国+你得了covid",description:"你在泰国的时间，我还以为我会有孤单的时间，但是你还是回了我的信息，真的谢谢你的陪伴。你回来过后，你得了covid，当时我真的吓坏了，因为你告诉过我，你之前中covid的时候有多痛苦，所以我真的真的很担心你， 这一段时间，除了陪伴你，我什么都做不到，对不起。"},{title:"豆腐花+mamak的约会",description:"这两个晚上的约会，让我看到了最真实的你。其实我没告诉你，我很压力，但是有了你陪伴，压力都不见了。很感谢你为了我去吃宵夜，陪我和奶茶。有你的陪伴真的真的觉得太幸福了。对不起，让你肥了，我还是会一直陪伴着你的。"},{title:"酸菜鱼+shopping约会",description:"默默等待中"},{title:"创造新的回忆中。。。",description:""}]}},mounted(){this.isLogedIn||this.$router.push({name:"LoginPage"});const t=document.querySelectorAll(".section");t.forEach(((t,e)=>{e%2===0?t.classList.add("left"):t.classList.add("right")}))}}),g=h,m=(0,c.Z)(g,f,v,!1,null,"4c8ffba4",null),b=m.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-page"},[e("div",{staticClass:"vh-100 d-flex justify-content-center align-items-center"},[e("canvas",{attrs:{id:"background-canvas"}}),e("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showLoginForm?e("div",{key:"login-form"},[e("div",{staticClass:"login-form-container text-center"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.checkPasscode.apply(null,arguments)}}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.checkPasscode.apply(null,arguments)}}},[e("b-form-group",{staticClass:"input-group-append",attrs:{id:"input-group-1",label:"","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"password",required:"",placeholder:"Enter passcode",pattern:"[0-9]*",inputmode:"numeric"},model:{value:t.passcode,callback:function(e){t.passcode=e},expression:"passcode"}})],1),e("div",{staticClass:"mb-2"}),e("b-button",{staticClass:"neon-button",attrs:{type:"submit"}},[t._v("Enter")])],1),t.showAlert?e("b-alert",{attrs:{variant:"danger",dismissible:""}},[t._v(" Wrong passcode. Try again! ")]):t._e()],1)],1)]):e("div",{key:"countdown"},[e("div",{staticClass:"flip-clock"},[e("div",{staticClass:"flip-clock__piece"},[e("span",{staticClass:"flip-clock__slot"},t._l(t.countdown,(function(n){return e("div",{key:n.label,staticClass:"time-component"},[e("div",{staticClass:"label"},[t._v(t._s(n.label))]),e("div",{staticClass:"value"},[t._v(t._s(n.value))])])})),0)])])])])],1)])},w=[],_={name:"LoginPage",data(){return{passcode:"",showAlert:!1,countdownDate:new Date("2023-05-20T00:00:00").getTime(),now:(new Date).getTime(),interval:null,showLoginForm:!1}},computed:{countdown(){const t=this.countdownDate-this.now;if(t<=0)return[{label:"Days",value:0},{label:"Hours",value:0},{label:"Minutes",value:0},{label:"Seconds",value:0}];const e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);return[{label:"Days",value:e},{label:"Hours",value:n},{label:"Minutes",value:o},{label:"Seconds",value:a}]}},created(){this.interval=setInterval((()=>{this.now=(new Date).getTime()}),100)},beforeDestroy(){clearInterval(this.interval)},methods:{checkPasscode(){"20230226"===this.passcode?this.$router.push({name:"HomePage",params:{isLogedIn:!0}}):window.alert("Please contact Isaac.")}},mounted(){const t=document.getElementById("background-canvas"),e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight,e.fillStyle="rgba(134, 189, 255, 0.35)",e.fillRect(0,0,t.width,t.height)},watch:{now(t){t>=this.countdownDate&&setTimeout((()=>{this.showLoginForm=!0}),100)}}},k=_,C=(0,c.Z)(k,y,w,!1,null,"292f031f",null),M=C.exports;o["default"].use(p.ZP);var L=new p.ZP({routes:[{path:"/",name:"LoginPage",component:M,props:!0},{path:"/home",name:"HomePage",component:b,props:!0}]});n(7024);o["default"].use(a.ZPm),new o["default"]({router:L,render:t=>t(d)}).$mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(e&&e(o);c<r.length;c++)i=r[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkIvy_Letter"]=self["webpackChunkIvy_Letter"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2486)}));o=n.O(o)})();
//# sourceMappingURL=app.3457dc45.js.map