(this["webpackJsonporbit-messenger-react"]=this["webpackJsonporbit-messenger-react"]||[]).push([[0],{115:function(e,t,n){e.exports=n(150)},120:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=(n(120),n(81),n(200)),l=n(103),s=n.n(l),u=n(195),m=n(206),g=n(37),d=n(155),p=n(201),h=n(199),b=n(5),f=n(24),k=n.n(f),v=n(38),x=n(39),y=n(40),E=n(74),w=n(73),F=n(10),S=n(192),j=n(209),B=n(154),A=(n(122),n(123),"url('./res/img/organCoastRocky2.jpg') fixed no-repeat"),O="100% 100%",T="url('./res/img/organSunset.jpg') no-repeat",C="#01BAEF",P="#01BAEF",N="#0B4F6C",I="#01BAEF",L="#20BF55",z="#0B4F6C",R="#20BF55",W="#20BF55",q="#FF0000",H="#20BF55",D='"Bangers"',J="#01BAEF",K="170%",U="black",G="#FFFFFF",M='"Roboto"',$="#FFFFFF",Q='"Bangers"',V="#0B4F6C",X="#FFFFFF",Y="840px",Z=n(194),_=Object(S.a)({root:{backgroundColor:V}});function ee(){var e=_();return r.a.createElement(Z.a,{variant:"middle",className:e.root})}var te=Object(S.a)((function(){return{root:{background:"#000000",backgroundSize:O,color:U,textAlign:"center",margin:"0px",minHeight:O},titleBar:{textAlign:"center",background:T,backgroundSize:"2000px 500px",backgroundAttachment:"fixed",backgroundPosition:"100% 0px",color:J,fontFamily:D,paddingTop:"1%"},titleBarTitle:{color:J,fontFamily:D,margin:"0px",fontSize:"200%"},titleBarText:{color:G,fontFamily:M,fontStyle:"bold",fontSize:"100%",marginTop:"0.5%",marginBottom:"0.5%"},avatarImg:{width:"250px",height:"250px",marginLeft:"auto",marginRight:"auto",marginTop:"10px",borderStyle:"solid",borderWidth:"4px",borderColor:H},experienceBar:{margin:"0px"},blogBar:{background:T,backgroundSize:"2000px 500px",backgroundAttachment:"fixed",backgroundPosition:"100% 0px",margin:"0px",padding:"0px"},articleBar:{background:T,backgroundSize:"2000px 500px",backgroundAttachment:"fixed",backgroundPosition:"100% 0px",margin:"0px",padding:"0px"},homeImg:{width:"100%",height:"auto"}}})),ne=function(){var e=te();return r.a.createElement(u.a,{container:!0,justify:"center",className:e.root,spacing:0},r.a.createElement(u.a,{item:!0,xl:12,lg:12,md:12,sm:12,xs:12},r.a.createElement(B.a,{elevation:3,className:e.titleBar},r.a.createElement(j.a,{alt:"avatar image",src:"./res/img/profilePic.jpg",className:e.avatarImg}),r.a.createElement(ee,null))))},ae=n(204),re="https://onebadbyte.com/api",oe={loginBase:"https://onebadbyte.com/login",addPost:re+"/addPost",updateBlog:re+"/updateBlog/",getPost:re+"/getPost/",getBlogTitles:re+"/getBlogTitles",getPosts:re+"/getPosts",getArticle:re+"/getArticle/",addArticle:re+"/addArticle",updateArticle:re+"/updateArticle/",getArticleTitles:re+"/getArticleTitles",login:re+"/login",tokenAuth:re+"/tokenAuth"},ie=200,ce=403,le=500,se=function(){function e(){Object(x.a)(this,e)}return Object(y.a)(e,null,[{key:"sendPostRequest",value:function(){var e=Object(v.a)(k.a.mark((function e(t,n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,a);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendGetRequest",value:function(){var e=Object(v.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"checkLoginStatus",value:function(e){return 200===e?ie:403===e?ce:le}}]),e}(),ue=Object(S.a)({root:{margin:"0px",padding:"0px",height:"auto"},paper:{background:W,textAlign:"center",fontSize:"100%",fontFamily:M,color:G,marginBottom:"1px",padding:"0px",margin:"0px"}});function me(e){var t=ue(),n=!1,r=W;return""!==e.text&&void 0!==e.text||(n=!0),e.warning&&(r=q),a.createElement(B.a,{elevation:3,hidden:n,className:t.paper,style:{backgroundColor:r},id:"statusBar"},a.createElement("h1",null,e.text))}var ge=function(){function e(){Object(x.a)(this,e)}return Object(y.a)(e,null,[{key:"getUsernameAndPassword",value:function(){return[document.getElementById("usernameInput").value,document.getElementById("passwordInput").value]}},{key:"setLoginSessionStorage",value:function(e,t){sessionStorage.setItem("username",e),sessionStorage.setItem("token",t)}},{key:"sendRequest",value:function(){var e=Object(v.a)(k.a.mark((function e(t,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.sendPostRequest(oe.login,{username:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"checkLoginStatus",value:function(e){return 200===e.status?ie:403===e.status?ce:le}}]),e}(),de=function(e){Object(E.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).handleKeyPress=function(e){"Enter"===e.key&&a.onSubmit()},a.state={status:"",statusWarning:!1},a}return Object(y.a)(n,[{key:"onSubmit",value:function(){var e=this,t=ge.getUsernameAndPassword();ge.sendRequest(t[0],t[1]).then((function(n){var a=ge.checkLoginStatus(n);a===ie?(e.setState({status:"User successfully logged in!",statusWarning:!1}),ge.setLoginSessionStorage(t[0],n.token),window.location===oe.loginBase&&(window.location="/admin")):a===ce?e.setState({status:"Username or password incorrect",statusWarning:!0}):e.setState({status:"Internal Server Error ".concat(n.status),statusWarning:!0})})),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(u.a,{container:!0,justify:"center",className:t.root},r.a.createElement(u.a,{item:!0,xl:8,lg:8,md:10,sm:10,xs:10,className:t.subroot},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(me,{text:this.state.status,warning:this.state.statusWarning}),r.a.createElement(B.a,{elevation:3,className:t.paper},r.a.createElement("h1",{className:t.title},"Login"),r.a.createElement(ae.a,{id:"usernameInput","data-testid":"usernameInput",label:"Login",variant:"filled",className:t.inputs,autoFocus:!0}),r.a.createElement("br",null),r.a.createElement(ae.a,{id:"passwordInput","data-testid":"passwordInput",type:"password",label:"Password",variant:"filled",className:t.inputs,onKeyDown:this.handleKeyPress}),r.a.createElement(d.a,{id:"loginButton",variant:"contained",color:"secondary",className:t.buttons,onClick:function(){return e.onSubmit()}},"Login"))))}}]),n}(r.a.Component);Object(b.a)((function(){return{root:{background:A,backgroundSize:O,minHeight:Y},title:{fontFamily:D,textAlign:"center",paddingTop:"2%",color:G},paper:{backgroundColor:P,margin:"0px",paddingTop:"0px"},inputs:{backgroundColor:"white",marginLeft:"5%",marginRight:"5%",marginTop:"1%",width:"90%"},buttons:{backgroundColor:L,marginTop:"1%",marginLeft:"5%",marginRight:"5%",marginBottom:"5%",width:"90%",height:"60px",fontFamily:D,fontSize:"150%","&:hover":{backgroundColor:z}}}}))(de);var pe=function(e){Object(E.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={loginPermission:!1,checkLoginTime:500},a}return Object(y.a)(n,[{key:"getTokenAuth",value:function(){var e=Object(v.a)(k.a.mark((function e(){var t,n,a,r=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=sessionStorage.getItem("username"),n=sessionStorage.getItem("token"),null!==t&&null!==n){e.next=4;break}return e.abrupt("return");case 4:return a={method:"POST",body:JSON.stringify({username:t,token:n}),headers:{"Content-Type":"application/json"}},e.next=7,fetch(oe.tokenAuth,a).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){return e===ie?(r.setState({loginPermission:!0}),r.setState({checkLoginTime:6e4})):r.setState({loginPermission:!1}),e}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"checkTokenAuth",value:function(){var e=this;setTimeout((function(){e.getTokenAuth().then(),e.checkTokenAuth()}),this.state.checkLoginTime)}},{key:"componentDidMount",value:function(){this.checkTokenAuth()}},{key:"render",value:function(){return r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/"},r.a.createElement(ne,null)))}}]),n}(r.a.Component),he=n(71),be=n(85),fe=n(72),ke=n(205),ve=n(196),xe=n(197),ye=n(208),Ee=n(198),we=n(102),Fe=n.n(we),Se=Object(S.a)({root:{width:"0px",background:R,fontFamily:Q,color:$},list:{width:"350px",backgroundColor:C,height:"100%"},itemHolder:{backgroundColor:C,fontFamily:Q,color:$},listItem:{fontFamily:Q,color:$,textAlign:"center",fontSize:"170%"}});function je(){var e=Se(),t=r.a.useState({left:!1}),n=Object(fe.a)(t,2),a=n[0],o=n[1],i=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&o(Object(be.a)(Object(be.a)({},a),{},Object(he.a)({},e,t)))}};return r.a.createElement("div",{className:e.root},["left"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(Ee.a,{color:"inherit","aria-label":"menu",edge:"start",size:"medium",disableFocusRipple:!0},r.a.createElement(Fe.a,{onClick:i(t,!0)})),r.a.createElement(ke.a,{anchor:t,open:a[t],onClose:i(t,!1),onOpen:i(t,!0)},function(t){return r.a.createElement("div",{className:e.list,role:"presentation",onClick:i(t,!1),onKeyDown:i(t,!1)},r.a.createElement(ve.a,null,["Home","Blog","Projects","About","Photography","Articles","Drawings"].map((function(t,n){return r.a.createElement(xe.a,{button:!0,key:t,component:g.b,to:t.toLowerCase(),className:e.itemHolder},r.a.createElement(ye.a,{primary:t,className:e.listItem,disableTypography:!0}))}))))}(t)))})))}var Be=s()((function(){return{root:{},navBar:{backgroundColor:P,color:U},button:{fontFamily:D,color:G},artMenu:{textAlign:"center","& div":{background:P,textAlign:"center"}},homeButton:{background:"url('./res/img/onebadbyte.png') center center no-repeat",width:"100%",height:"60px"}}})),Ae=Object(b.a)({root:{fontFamily:D,color:G,fontSize:K,border:"none","&:hover":{background:z}}})(d.a),Oe=Object(b.a)({root:{backgroundColor:I}})(h.a);function Te(){var e=Be();return r.a.createElement(u.a,{container:!0,className:e.root},r.a.createElement(g.a,null,r.a.createElement(c.a,{position:"sticky",className:e.navBar},r.a.createElement(p.a,null,r.a.createElement(u.a,{item:!0,xl:1,lg:1,md:1,sm:1,xs:2},r.a.createElement(je,null)),r.a.createElement(u.a,{item:!0,xl:2,lg:2,md:3,sm:4,xs:10},r.a.createElement(d.a,{color:"inherit",component:g.b,to:"/",variant:"text",className:e.homeButton})),r.a.createElement(m.a,{only:"xs"},r.a.createElement(u.a,{item:!0,xl:5,lg:5,md:3,sm:0}),r.a.createElement(u.a,{item:!0,xl:4,lg:4,md:5,sm:7},r.a.createElement(Oe,{size:"large",variant:"outlined",fullWidth:!0},r.a.createElement(Ae,{fullWidth:!0,component:g.b,to:"/about"},"About"),r.a.createElement(Ae,{fullWidth:!0,component:g.b,to:"/login"},"Login")))))),r.a.createElement(pe,null)))}var Ce=n(202),Pe=n(203),Ne=n(104),Ie=n.n(Ne),Le=n(105),ze=n.n(Le),Re=n(106),We=n.n(Re),qe=Object(S.a)({root:{backgroundColor:N,color:U,height:"60px",position:"absolute",width:"100%"}});function He(){var e=qe(),t=a.useState(),n=Object(fe.a)(t,2),r=n[0],o=n[1];return a.createElement(Ce.a,{value:r,onChange:function(e,t){switch(o(t),t){case"github":window.open("https://www.github.com/blackdartq");break;case"linkedin":window.open("https://www.linkedin.com/in/brody-prestwich/");break;case"email":window.open("mailto:brody.prestwich18@gmail.com")}},className:e.root},a.createElement(Pe.a,{label:"Github",value:"github",icon:a.createElement(Ie.a,{fontSize:"large",style:{color:X}})}),a.createElement(Pe.a,{label:"Linkedin",value:"linkedin",icon:a.createElement(ze.a,{fontSize:"large",style:{color:X}})}),a.createElement(Pe.a,{label:"Email",value:"email",icon:a.createElement(We.a,{fontSize:"large",style:{color:X}})}))}var De=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,null),r.a.createElement(He,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.ef8dcbd9.chunk.js.map