(function(e){function t(t){for(var o,r,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-349905a6":"68b1d71d","chunk-517a948c":"8c292a10"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-349905a6":1,"chunk-517a948c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-349905a6":"6a86dad0","chunk-517a948c":"5b349975"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0104":function(e,t,n){},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"41cb":function(e,t,n){"use strict";n("d3b7");var o=n("8c4f"),r=n("2b0e"),a=function(){return n.e("chunk-517a948c").then(n.bind(null,"c3b0"))},i=function(){return n.e("chunk-349905a6").then(n.bind(null,"8048"))};r["a"].use(o["a"]),t["a"]=new o["a"]({routes:[{path:"",component:a},{name:"terminal",path:"/terminal",component:i},{path:"*",component:a}]})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("96cf"),n("1da1")),c=n("7dc5"),s={name:"App",created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.commit("setJsonData",c);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},l=s,u=(n("034f"),n("2877")),p=n("6544"),d=n.n(p),m=n("a523"),h=Object(u["a"])(l,r,a,!1,null,null,null),f=h.exports;d()(h,{VContainer:m["a"]});var g=n("f309"),k=n("0fd9"),v=n("62ad");o["a"].use(g["a"],{components:{VRow:k["a"],VContainer:m["a"],VCol:v["a"]}});var y=new g["a"]({}),b=(n("0104"),n("41cb")),w=n("4776"),S=n.n(w),j=(n("b15b"),n("2f62"));o["a"].use(j["a"]);var C=new j["a"].Store({state:{jsonData:{}},mutations:{setJsonData:function(e,t){e.jsonData=t}},getters:{jsonData:function(e){return e.jsonData}}}),T=n("3f08"),D=n("0284"),I=n.n(D);o["a"].use(I.a,{id:"UA-155519688-1",router:b["a"]}),o["a"].use(S.a),o["a"].use(T["a"]),o["a"].config.productionTip=!1,new o["a"]({router:b["a"],vuetify:y,store:C,render:function(e){return e(f)}}).$mount("#app")},"7dc5":function(e){e.exports=JSON.parse('{"externalLinks":{"mailto":"mailto:gkabitakis@gmail.com","blog":"https://gkampitakis.hashnode.dev/","npm":"https://www.npmjs.com/~gkampitakis","twitter":"https://twitter.com/g_kampitakis","github":"https://github.com/gkampitakis","linkedin":"https://www.linkedin.com/in/gkampitakis/","cvUrlOpen":"https://drive.google.com/file/d/1s7RLwDkYCwr9s7Qnfn8VXTVCoCUsgH9u/view","cvUrl":"https://cors-anywhere.herokuapp.com/corsdemo/https://drive.google.com/uc?export=download&id=1s7RLwDkYCwr9s7Qnfn8VXTVCoCUsgH9u","downloadFile":"gkampitakis.pdf"},"commands":{"whoami":"Hi I\'m George Kampitakis. I come from Heraklion, Crete.I have finished my degree at Computer Science Department of Crete with 7.35(2:1) grade and have paused my Master Degree.I\'ve already worked for more than a year for a UK Startup both as an intern and as a full stack developer.  At the same time i\'ve worked as an intern in a Research Foundation (FORTH),  in the Human-Computer Interaction department.Currently I work at Sovrn Holdings an AdTech Company, as Senior Software Engineer. I am based in London, I love coding 💻, learning new things and exploring new places 🌍.","exit":"Hope you found what you were looking for! Bye Bye ...","help":[{"command":"whoami","description":"Some brief info about myself"},{"command":"skills","description":"A list of tools and languages I work with"},{"command":"experience","description":"My experience until now"},{"command":"cv [--download, -d, --preview, -p]","description":"Download/Preview my CV letter"},{"command":"github [--open, -o, --link, -l]","description":"Open/Get Link for my personal Github account"},{"command":"npm [--open, -o, --link, -l]","description":"Open/Get Link for my NPM account"},{"command":"linkedin [--open, -o, --link, -l]","description":"Open/Get Link for my personal LinkedIn account"},{"command":"blog [--open, -o, --link, -l]","description":"Open/Get Link for my Personal blog"},{"command":"twitter [--open, -o, --link, -l]","description":"Open/Get Link for my Twitter account"},{"command":"clear","description":"Clear the console"},{"command":"exit","description":"Leave the command line"}],"experience":[{"jobTitle":"Senior Software Engineer","company":"Sovrn Holdings","location":"London,UK","info":"Promoted 🚀","period":{"from":"Sep 2020","to":"Present"}},{"jobTitle":"Software Engineer II","company":"Sovrn Holdings","location":"London,UK","technologies":"Node.js, Typescript, AWS, Kubernetes, Docker, Jenkins, Jest/Enzyme, React.js/Redux/ Webpack, MongoDB, Kafka","period":{"from":"Oct 2019","to":"Sep 2020"}},{"jobTitle":"Fullstack Developer - Full Time","company":"Styloola Ltd | UK","location":"Heraklion,Greece","technologies":"Ionic 3, Node.js, MongoDB, Postman, Docker, Firebase","period":{"from":"Feb 2019","to":"Sep 2019"}},{"jobTitle":"Backend Developer - Part Time","company":"Styloola Ltd | UK","location":"Heraklion,Greece","technologies":"Node.js, Postman, Jest, Jenkins, Firebase, Ionic 3","period":{"from":"Sep 2018","to":"Feb 2019"}},{"jobTitle":"Fullstack Developer - Part Time","company":"Forth | Hellas","location":"Heraklion,Greece","technologies":"Ionic 4, Node.js, Sqlite, Typescript, Angular 6, LeapMotion, MongoDB, Postman, Socket.io","period":{"from":"Sep 2018","to":"Feb 2019"}},{"jobTitle":"Backend Developer - Intern","company":"Styloola Ltd | UK","location":"Heraklion,Greece","technologies":"Nodoe.js, Express, Firebase, MongoDB, Postman","period":{"from":"Jul 2018","to":"Sep 2018"}}],"skills":{"currently":[{"tech":"Node.js","class":3},{"tech":"Javascript","class":3},{"tech":"Typescript","class":3},{"tech":"React.js/Redux","class":3},{"tech":"Unit Testing","class":3},{"tech":"MongoDB","class":3},{"tech":"Docker","class":3},{"tech":"CI/CD(Jenkins, Travis CI, GH Actions)","class":3},{"tech":"Kubernetes","class":2},{"tech":"AWS","class":2},{"tech":"Webpack","class":2},{"tech":"Helm","class":2},{"tech":"Integration Tests (Cypress)","class":2},{"tech":"Golang","class":1}],"past":[{"tech":"Angular 2+/Ionic 3,4","class":2},{"tech":"mySQL/PostgreSQL","class":2},{"tech":"GraphQL","class":1},{"tech":"Vue.js","class":1},{"tech":"Java,C++,C","class":1}]}},"terminal":{"prompt":"guest:-$","startingMessage":"Hi there 👋, I am George! I am a Software engineer / Full-stack developer. I created this terminal to help you learn more things about me. In order to use it you can either execute the \'help\' command and see all available commands or use the more user-friednly menu on the side."}}')},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.f448713d.js.map