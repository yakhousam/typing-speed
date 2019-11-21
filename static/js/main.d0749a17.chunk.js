(this["webpackJsonptaping-speed-test"]=this["webpackJsonptaping-speed-test"]||[]).push([[0],{21:function(t,e,r){t.exports=r(31)},31:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(14),o=r.n(i),c=r(8),l=r(1),u=r(2),s=r(6);function d(){var t=Object(l.a)(["\n  font-size: 24px;\n  padding: .2em .5em;\n  border-radius: 5px;\n  color: #fff;\n  background: #6148ff;\n  border: thin solid #6148ff;\n\n  &:hover{    \n    cursor: pointer;\n   background: transparent;\n    color: #6148ff;\n  }\n"]);return d=function(){return t},t}function p(){var t=Object(l.a)(["\n height: 100%;  \n  background: #6148ff;\n  border-bottom-right-radius: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n\n  & p{\n    margin: 0;\n    text-align: center;\n    color: #6de576;\n  }\n"]);return p=function(){return t},t}function f(){var t=Object(l.a)(["\n  grid-row: 2;\n  grid-column: 1 / span 2;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  background: #6148ff;\n  border-top-left-radius: 200px;\n  padding-left: 100px\n\n"]);return f=function(){return t},t}function h(){var t=Object(l.a)(["\n\n"]);return h=function(){return t},t}function g(){var t=Object(l.a)(["\n  font-weight: bold;\n  text-decoration: underline;\n  color: ",";\n"]);return g=function(){return t},t}function m(){var t=Object(l.a)(["\n  padding: 0 .2em;\n  background-color: ",";\n  color: ",";\n"]);return m=function(){return t},t}function b(){var t=Object(l.a)(["\n  font-size: 22px;\n  margin-left: 1em;\n"]);return b=function(){return t},t}function y(){var t=Object(l.a)(["\n  font-size: 36px;\n  font-family: monospace;\n  display: flex;\n  flex-wrap: wrap;\n  height: "," ;\n\n  overflow: auto;\n  background: #eeeff8;\n border:  solid thin black;\n align-content: start;\n  \n"]);return y=function(){return t},t}function v(){var t=Object(l.a)(["\n  grid-column: 2;\n  grid-row: 1;\n"]);return v=function(){return t},t}function O(){var t=Object(l.a)(["\n  grid-column: 1;\n  grid-row: 1 ;\n  \n"]);return O=function(){return t},t}function E(){var t=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 300px minmax(0, 1fr);\n  grid-template-rows: 1.5fr 1fr;\n  height: 100vh;\n  background: #f6f7ff;\n"]);return E=function(){return t},t}var T=u.b.div(E()),x=u.b.aside(O()),w=(u.b.header(v()),u.b.div(y(),(function(t){return t.height||"auto"}))),j=(u.b.span(b()),u.b.span(m(),(function(t){return t.selected?"rgba(0,0,0,0.1)":"unset"}),(function(t){return t.errStyle?"red":t.isCorrect?"green":"inherit"}))),A=u.b.span(g(),(function(t){return t.errStyle?"red":""})),k=u.b.div(h()),S=u.b.section(f()),D=u.b.div(p()),R=u.b.div(d()),P=r(3),_=function(t){return t.map((function(t,e){return 0===e?a.a.createElement(j,{id:e,selected:!0,key:e},a.a.createElement(A,null,t.charAt(0)),t.slice(1)):a.a.createElement(j,{id:e,key:e},t)}))},C=function(t){var e=t.score,r=t.errorArr,n=100-100*r.length/(r.length+e);return n?n.toFixed(0):100},I=function(t){var e=t.score,r=t.accuracy,n=t.type,a=window.localStorage.getItem("tapingSpeedData")?JSON.parse(window.localStorage.getItem("tapingSpeedData")):[],i={date:Date.now(),accuracy:r,score:e,type:n};return a.push(i),console.log({tapingSpeedData:a}),window.localStorage.setItem("tapingSpeedData",JSON.stringify(a)),i},N=function(t){var e=t.current.querySelector(".last");return e?e.offsetTop:t.current.querySelector("span").offsetTop},U="about|above|add|after|again|air|all|almost|along|also|always|America|an|and|animal|another|answer|any|are|around|as|ask|at|away|back|be|because|been|before|began|begin|being|below|between|big|book|both|boy|but|by|call|came|can|car|carry|change|children|city|close|come|could|country|cut|day|did|different|do|does|don't|down|each|earth|eat|end|enough|even|every|example|eye|face|family|far|father|feet|few|find|first|follow|food|for|form|found|four|from|get|girl|give|go|good|got|great|group|grow|had|hand|hard|has|have|he|head|hear|help|her|here|high|him|his|home|house|how|idea|if|important|in|Indian|into|is|it|its|it's|just|keep|kind|know|land|large|last|later|learn|leave|left|let|letter|life|light|like|line|list|little|live|long|look|made|make|man|many|may|me|mean|men|might|mile|miss|more|most|mother|mountain|move|much|must|my|name|near|need|never|new|next|night|no|not|now|number|of|off|often|oil|old|on|once|one|only|open|or|other|our|out|over|own|page|paper|part|people|picture|place|plant|play|point|put|question|quick|quickly|quite|read|really|right|river|run|said|same|saw|say|school|sea|second|see|seem|sentence|set|she|should|show|side|small|so|some|something|sometimes|song|soon|sound|spell|start|state|still|stop|story|study|such|take|talk|tell|than|that|the|their|them|then|there|these|they|thing|think|this|those|thought|three|through|time|to|together|too|took|tree|try|turn|two|under|until|up|us|use|very|walk|want|was|watch|water|way|we|well|went|were|what|when|where|which|while|white|who|why|will|with|without|word|work|world|would|write|year|you|young|your".split("|"),M=function(t){return Array(t).fill(0).map((function(t){var e=Math.floor(Math.random()*U.length);return U[e]}))},W="DEC_TIMER",G=function(t){var e=t.dispatch,r=t.state,n=function(t){console.log("format text ----");var e,r=t.cursor,n=t.errorArr,i=t.input,o=t.textArr;return r>o.length-1?[].concat(Object(P.a)(t.displayText.slice(0,-1)),[a.a.createElement(j,{errStyle:n.includes(o.length-1),isCorrect:!n.includes(o.length-1),key:o.length-1,id:o.length-1,className:"last"},o[o.length-1])]):(i?e=a.a.createElement(j,{errStyle:n.includes(r),selected:!0,key:r,id:r,className:"last"},a.a.createElement("span",{style:{color:n.includes(r)?"":"green"}},o[r].slice(0,i.length)),a.a.createElement(A,null,o[r].charAt(i.length)),o[r].slice(i.length+1)):(console.log("input is empty",r),e=a.a.createElement(j,{errStyle:n.includes(r),selected:!0,key:r,id:r,className:"last"},a.a.createElement(A,null,o[r].charAt(0)),o[r].slice(1))),0===r?[e].concat(Object(P.a)(t.displayText.slice(1))):1===r?[a.a.createElement(j,{errStyle:n.includes(0),isCorrect:!n.includes(0),id:0,key:0},t.textArr[0]),e].concat(Object(P.a)(t.displayText.slice(2))):r<o.length?[].concat(Object(P.a)(t.displayText.slice(0,r-1)),[a.a.createElement(j,{errStyle:n.includes(r-1),isCorrect:!n.includes(r-1),key:r-1,id:r-1},t.textArr[r-1]),e],Object(P.a)(t.displayText.slice(r+1))):[].concat(Object(P.a)(t.displayText.slice(0,r-1)),[a.a.createElement(j,{errStyle:n.includes(r-1),isCorrect:!n.includes(r-1),key:r-1,id:r-1},t.textArr[r-1])]))}(r);e({type:"UPDATE_DISPLAY_TXT",update:{errorArr:r.errorArr,displayText:n}})},z=function(t){var e=t.dispatch,r=t.state;e({type:"RELOAD",displayText:_(r.textArr)})},F=function(t){var e=t.start;(0,t.dispatch)({type:"START_TIMER",start:e})},L=function(t){(0,t.dispatch)({type:W})},X=function(t){(0,t.dispatch)({type:"INC_TIMER"})},q=function(t){var e=t.dispatch,r=t.state,n=r.cursor-r.errorArr.filter((function(t){return t!==r.cursor})).length,a=n>0?n:0,i=r.errorArr.filter((function(t){return t!==r.cursor})),o=C({score:a,errorArr:i});e({type:"GAME_OVER",update:{isTimerStarted:!1,currentWordOffsetTop:0,input:"",displayText:[].concat(Object(P.a)(r.displayText.slice(0,r.cursor)),Object(P.a)(_(r.textArr).slice(r.cursor))),timer:r.training?r.timer:0,score:r.training?r.score:a,errorArr:i,accuracy:o}})},V=function(t){var e=t.data;(0,t.dispatch)({type:"UPDATE_DATA_CHART",data:e})},J=function(t){(0,t.dispatch)({type:"UPDATE_CURRENT_WORD_OFFSET",offset:t.offset})},B=function(t){(0,t.dispatch)({type:"UPDATE_TOOLTIP",toolTip:t.toolTip})},Y=function(t){(0,t.dispatch)({type:"UPDATE_SCORE",accuracy:t.accuracy,score:t.score})},H=function(t){(0,t.dispatch)({type:"UPDATE_INTERVAL",interval:t.interval})};function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(r,!0).forEach((function(e){Object(s.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Q=function(t){var e=t.state,r=e.toolTip,i=e.errorArrTxt,o=e.errorArr,c=e.input,l=e.currentWordOffsetTop,u=e.cursor,s=e.displayText,d=t.dispatch,p=Object(n.useRef)();return Object(n.useEffect)((function(){0===u&&p.current.scroll(0,0)}),[u]),Object(n.useEffect)((function(){if(""===c){var t=N(p);t>l&&(l>0&&p.current.scroll({top:p.current.scrollTop+(t-l),behavior:"smooth"}),J({dispatch:d,offset:t}))}}),[c,l,d]),a.a.createElement(w,{id:"textBox",ref:p,height:"5em",onMouseOut:function(){r.visible&&B({dispatch:d,toolTip:K({},r,{txt:"",visible:!1})})},onMouseOver:function(t){var e=t.target.id,n=i.find((function(t){return t.id===+e}));n?B({dispatch:d,toolTip:K({},r,{visible:!0,txt:n.input})}):o.includes(+e)&&B({dispatch:d,toolTip:K({},r,{visible:!0,txt:""})})},onMouseMove:function(t){var e=t.clientX,n=t.clientY;r.visible&&B({dispatch:d,toolTip:K({},r,{left:e,top:n})})}},s)};function Z(){var t=Object(l.a)(["\n  width: 400px;\n  margin: auto;\n  background: transparent;\n  text-align: center;\n  font-size: 24px;\n  padding: .2em .5em;\n\n  ","\n"]);return Z=function(){return t},t}function tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function et(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?tt(r,!0).forEach((function(e){Object(s.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var rt=u.b.input(Z(),(function(t){return t.isFocus?"\n    border: thin solid transparent;\n    border-bottom: thin solid #6148ff;\n  ":"\n    border: thin dashed #6148ff;\n  "})),nt=function(t){var e=t.dispatch,r=t.state,i=r.textArr,o=r.isTimerStarted,l=r.timer,u=r.cursor,s=r.input,d=r.errorArr,p=r.training,f=Object(n.useState)(!1),h=Object(c.a)(f,2),g=h[0],m=h[1];return a.a.createElement(rt,{type:"text",placeholder:!g&&l>0?"Type your text here...!":"",autoFocus:!0,value:s,onChange:function(r){var n=Object(P.a)(d),a=u;if(!(!p&&l<1||u>i.length-1)){!p&&!o&&l>0&&F({start:!0,dispatch:e}),p&&!o&&F({start:!0,dispatch:e});var c,s=r.target.value;console.log("input =",s),!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.trim()===e.slice(0,t.length)}(s,i[u])?d.includes(u)||n.push(u):d.includes(u)&&(n=n.filter((function(t){return t!==u}))),s.endsWith(" ")&&(n.includes(u)&&(0,(c={dispatch:e,error:{id:u,input:s}}).dispatch)({type:"ADD_ERROR_TXT",error:c.error}),(0,{dispatch:e}.dispatch)({type:"INC_CURSOR"}),s="",a++),function(t){var e=t.input;(0,t.dispatch)({type:"SET_INPUT",input:e})}({input:s,dispatch:e}),G({dispatch:e,state:et({},t.state,{input:s,errorArr:Object(P.a)(n),cursor:a})})}},onFocus:function(){m(!0)},onBlur:function(){m(!1)},isFocus:g})};function at(){var t=Object(l.a)(["\n  width: 150px;\n  height: 2em;\n  font-size: 16px;\n  margin: 0 20px 0 auto;\n  border: solid thin black;\n  display: flex;\n  align-items: center;\n  background: ",";\n  color: white;\n  cursor: pointer;\n  \n\n  .toggle-test {\n    background: white;\n    color: #f2395a;\n    padding: 0.2em 0.5em;\n  }\n  .toogle-training {\n    margin-left: auto;\n    background: white;\n    color: #00b3b4;\n    padding: 0.2em 0.5em;\n  }\n"]);return at=function(){return t},t}function it(){var t=Object(l.a)(["\n  text-transform: uppercase;\n  margin: auto;\n"]);return it=function(){return t},t}function ot(){var t=Object(l.a)(["\n  padding: 20px;\n  margin: 30px 0;\n  display: flex;\n  align-items: center;\n  flex-direction: ","\n  justify-content: "," ;\n  overflow: auto;\n  background: #eeeff8;\n border:  solid thin black;\n\n"]);return ot=function(){return t},t}var ct=u.b.section(ot(),(function(t){return t.flexDirection||"row"}),(function(t){return t.justify||"center"})),lt=Object(u.b)(R)(it()),ut=u.b.div(at(),(function(t){return t.training?"#00b3b4":"#f2395a"})),st=function(t){var e=t.state,r=t.dispatch;return a.a.createElement(ct,null,!e.training&&e.timer>0&&a.a.createElement(nt,{state:e,dispatch:r}),e.training&&e.cursor<=e.textArr.length-1&&a.a.createElement(nt,{state:e,dispatch:r}),!e.training&&e.timer<1&&a.a.createElement(lt,{onClick:function(){z({dispatch:r,state:e})}},"reload"),e.training&&!e.interval&&e.timer>0&&a.a.createElement(lt,{onClick:function(){z({dispatch:r,state:e})}},"reload"),a.a.createElement(ut,{training:e.training,onClick:function(){!function(t){var e=t.dispatch,r=t.state;e({type:"TOGGLE_TRAINING",displayText:_(r.textArr)})}({dispatch:r,state:e})}},e.training?a.a.createElement("div",{className:"toogle-training"},"Training"):a.a.createElement("div",{className:"toggle-test"},"Test")))};function dt(){var t=Object(l.a)(["\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n"]);return dt=function(){return t},t}function pt(){var t=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return pt=function(){return t},t}function ft(){var t=Object(l.a)(["\n  grid-column: 2;\n  grid-row: 1;\n  padding: 20px;\n"]);return ft=function(){return t},t}var ht=u.b.main(ft()),gt=u.b.div(pt()),mt=Object(u.b)(R)(dt()),bt=function(t){var e=t.state,r=t.dispatch;return a.a.createElement(ht,null,a.a.createElement(gt,null,a.a.createElement(mt,{onClick:function(){clearInterval(e.interval),function(t){var e=t.dispatch,r=M(200);e({type:"GET_NEW_TXT",displayText:_(r),textArr:r})}({dispatch:r,state:e})}},"Get random text")),a.a.createElement(Q,{state:e,dispatch:r}),a.a.createElement(st,{state:e,dispatch:r}))},yt=function(t){var e=t.score,r=t.accuracy,n=t.timer;return a.a.createElement(x,null,a.a.createElement(D,null,a.a.createElement("div",{style:{fontSize:"72px"}},a.a.createElement("p",null,"WPM"),a.a.createElement("p",null,e)),a.a.createElement("div",{style:{fontSize:"24px",color:"orange"}},"Accuracy: ",a.a.createElement("span",null,r),"%"),a.a.createElement("div",{style:{fontSize:"72px"}},a.a.createElement("p",null,"Timer"),a.a.createElement("p",{style:{color:n<11?"red":""}},n))))},vt=r(4),Ot=function(t){var e=t.data,r=t.title,i=Object(n.useRef)();return Object(n.useEffect)((function(){vt.f(i.current).select("svg").remove();var t=20,n=30,a=30,o=60,c=600-o-n,l=200-t-a,u=vt.f(i.current).append("svg").attr("width",c+o+n).attr("height",l+t+a).append("g").attr("transform","translate("+o+","+t+")"),s=vt.e().domain([0,e.length]).range([0,c]);u.append("g").style("stroke","orange").attr("transform","translate(0,"+l+")").call(vt.a(s));var d=vt.e().domain([0,vt.d(e,(function(t){return+t.value}))]).range([l,0]);u.append("g").attr("stroke","orange").call(vt.b(d)),u.append("path").datum(e).attr("fill","none").attr("stroke","#6de576").attr("stroke-width",1.5).attr("d",vt.c().x((function(t,e){return s(e)})).y((function(t){return d(t.value)}))),u.append("text").attr("x",-l/2).attr("y",-30).attr("transform","rotate(-90)").style("font-size","16px").style("text-anchor","middle").style("stroke","orange").style("fill","orange").text(r),u.selectAll("circle").data(e).enter().append("circle").attr("stroke","#6de576").attr("fill","#6de576").attr("cx",(function(t,e){return s(e)})).attr("cy",(function(t){return d(t.value)})).attr("r",3).append("title").text((function(t){return"".concat(t.value).concat("Accuracy"!==r?" "+r:"%"," on ").concat(new Date(t.date).toLocaleString())}))}),[e,r]),a.a.createElement(k,{ref:i})};function Et(){var t=Object(l.a)(["\n  padding: .2em .5em;\n  font-size: 36px;\n  background: white;\n  border: solid thin black;\n  visibility: ","\n\n  position: absolute;\n  top: ","\n  left: ","\n"]);return Et=function(){return t},t}var Tt=u.b.div(Et(),(function(t){return t.visible?"visible":"hidden"}),(function(t){return t.top+10+"px"}),(function(t){return t.left+10+"px"})),xt=function(t){return a.a.createElement(Tt,t," "!==t.txt?t.txt:'" "')},wt=M(200),jt={displayText:_(wt),textArr:wt,input:"",errorArr:[],errorArrTxt:[],cursor:0,timer:60,isTimerStarted:!1,score:0,dataChart:Object(P.a)(window.localStorage.getItem("tapingSpeedData")?JSON.parse(window.localStorage.getItem("tapingSpeedData")):[]),accuracy:100,currentWordOffsetTop:0,toolTip:{visible:!1,top:0,left:0,txt:""},interval:void 0,training:!1};function At(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function kt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?At(r,!0).forEach((function(e){Object(s.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):At(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var St=function(t,e){switch("GAME_OVER"===e.type&&console.log(t),[W].includes(e.type)||console.log(e.type),e.type){case"SET_INPUT":return kt({},t,{input:e.input});case"UPDATE_DISPLAY_TXT":return kt({},t,{},e.update);case"ADD_ERROR":return kt({},t,{errorArr:[].concat(Object(P.a)(t.errorArr),[e.error])});case"REMOVE_ERROR":return kt({},t,{errorArr:Object(P.a)(e.newErrorArr)});case"ADD_ERROR_TXT":return kt({},t,{errorArrTxt:[].concat(Object(P.a)(t.errorArrTxt),[e.error])});case"INC_CURSOR":return kt({},t,{cursor:t.cursor+1});case"RELOAD":return kt({},jt,{displayText:e.displayText,textArr:Object(P.a)(t.textArr),dataChart:Object(P.a)(t.dataChart),training:t.training,timer:t.training?0:jt.timer});case W:return kt({},t,{timer:t.timer-1});case"INC_TIMER":return kt({},t,{timer:t.timer+1});case"START_TIMER":return kt({},t,{isTimerStarted:!0});case"GAME_OVER":return kt({},t,{},e.update);case"UPDATE_DATA_CHART":return kt({},t,{dataChart:[].concat(Object(P.a)(t.dataChart),[e.data])});case"GET_NEW_TXT":return kt({},jt,{displayText:e.displayText,textArr:e.textArr,dataChart:Object(P.a)(t.dataChart),training:t.training,timer:t.training?0:jt.timer});case"UPDATE_CURRENT_WORD_OFFSET":return kt({},t,{currentWordOffsetTop:e.offset});case"UPDATE_TOOLTIP":return kt({},t,{toolTip:kt({},t.toolTip,{},e.toolTip)});case"UPDATE_SCORE":return kt({},t,{score:e.score,accuracy:e.accuracy});case"UPDATE_INTERVAL":return kt({},t,{interval:e.interval});case"TOGGLE_TRAINING":return kt({},jt,{displayText:e.displayText,textArr:Object(P.a)(t.textArr),dataChart:Object(P.a)(t.dataChart),training:!t.training,timer:t.training?jt.timer:0});default:return t}};function Dt(){var t=Object(l.a)(["\n  *{\n    box-sizing: border-box;\n  }\n  html, body{\n    margin: 0;\n    padding: 0;\n  }\n"]);return Dt=function(){return t},t}var Rt=Object(u.a)(Dt());var Pt=function(){var t=Object(n.useReducer)(St,jt),e=Object(c.a)(t,2),r=e[0],i=e[1],o=r.timer,l=r.isTimerStarted,u=r.score,s=r.dataChart,d=r.accuracy,p=r.cursor,f=r.errorArr,h=r.interval,g=r.training,m=r.textArr;Object(n.useEffect)((function(){if(!g&&o>0&&l&&!h){var t=setInterval((function(){L({dispatch:i})}),1e3);H({dispatch:i,interval:t})}!g&&o<1&&l&&(clearInterval(h),H({dispatch:i,interval:void 0}),q({dispatch:i,state:r}))}),[o,l,h,r,g]),Object(n.useEffect)((function(){if(!g&&o>0||g&&l){var t,e=p-f.filter((function(t){return t!==p})).length;t=g?e>0&&o>0?60*e/o:0:e>0&&o<jt.timer?e*jt.timer/(jt.timer-o):0;var r=C({score:e,errorArr:f});Y({dispatch:i,accuracy:r,score:t.toFixed(0)})}}),[p,f,o,g,l]),Object(n.useEffect)((function(){if(!g&&o<1&&u>0&&!l){var t=I({score:u,accuracy:d,type:"test"});console.log("data =",t),V({data:t,dispatch:i})}if(g&&u>0&&!l){var e=I({score:u,accuracy:d,type:"training"});console.log("data =",e),V({data:e,dispatch:i})}}),[u,d,o,l,g]),Object(n.useEffect)((function(){if(g&&!h&&l){var t=setInterval((function(){X({dispatch:i})}),1e3);H({dispatch:i,interval:t,training:g})}})),Object(n.useEffect)((function(){g&&p>m.length-1&&h&&(clearInterval(h),H({dispatch:i,interval:void 0}),q({dispatch:i,state:r}),G({dispatch:i,state:r}))}));var b=g?s.filter((function(t){return"training"===t.type})):s.filter((function(t){return"test"===t.type}));return window.console.log=function(){},a.a.createElement(a.a.Fragment,null,a.a.createElement(Rt,null),a.a.createElement(T,null,a.a.createElement(yt,{score:u,accuracy:d,timer:o}),a.a.createElement(bt,{state:r,dispatch:i}),a.a.createElement(S,null,a.a.createElement(Ot,{title:"WPM",data:b.map((function(t){return{date:t.date,value:t.score}}))}),a.a.createElement(Ot,{title:"Accuracy",data:b.map((function(t){return{date:t.date,value:t.accuracy}}))})),a.a.createElement(xt,r.toolTip)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d0749a17.chunk.js.map