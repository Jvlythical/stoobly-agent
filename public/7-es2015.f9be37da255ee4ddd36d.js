(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+tDV":function(t,n){n.__esModule=!0,n.default={body:'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>',width:24,height:24}},"6W+F":function(t,n){n.__esModule=!0,n.default={body:'<path opacity=".3" d="M4 8h16v11H4z" fill="currentColor"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" fill="currentColor"/>',width:24,height:24}},"6qw8":function(t,n){n.__esModule=!0,n.default={body:'<path opacity=".3" d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z" fill="currentColor"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z" fill="currentColor"/>',width:24,height:24}},KUDd:function(t,n,l){"use strict";l.d(n,"a",function(){return e});class e{}},OcYv:function(t,n){n.__esModule=!0,n.default={body:'<path opacity=".3" d="M16.11 6.77c-.53 2.6-2.62 4.43-5.28 4.43c-1.56 0-2.96-.62-3.97-1.63C6.3 10.96 6 12.47 6 14c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.56-.66-5.03-1.89-7.23zm-4.22 11.22c-1.37 0-2.49-1.08-2.49-2.42c0-1.25.81-2.13 2.17-2.41c1.37-.28 2.78-.93 3.57-1.99c.3 1 .46 2.05.46 3.12c0 2.04-1.66 3.7-3.71 3.7z" fill="currentColor"/><path d="M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41c0 1.34 1.11 2.42 2.49 2.42c2.05 0 3.71-1.66 3.71-3.71c0-1.07-.15-2.12-.46-3.12c-.79 1.07-2.2 1.72-3.57 2zM13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73c-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6c0-1.53.3-3.04.86-4.43a5.582 5.582 0 0 0 3.97 1.63c2.66 0 4.75-1.83 5.28-4.43A14.77 14.77 0 0 1 18 14c0 3.31-2.69 6-6 6z" fill="currentColor"/>',width:24,height:24}},PCNd:function(t,n,l){"use strict";l.d(n,"a",function(){return e});class e{}},UTQ3:function(t,n,l){"use strict";l.d(n,"a",function(){return x}),l.d(n,"b",function(){return L}),l.d(n,"c",function(){return T}),l.d(n,"d",function(){return A}),l.d(n,"e",function(){return C}),l.d(n,"f",function(){return S});var e=l("8Y7J"),r=l("xUpK"),a=l.n(r),i=l("kScs"),o=l("GJmQ"),s=l("lJxs");class u{constructor(t){this.sourceId=t}}var c=function(t){return t.FACEBOOK="facebook",t.GOOGLE="google",t.TWITTER="twitter",t.INSTAGRAM="instagram",t.VKONTAKTE="vkontakte",t.SKYPE="skype",t.GRAVATAR="gravatar",t.GITHUB="github",t.CUSTOM="custom",t.INITIALS="initials",t.VALUE="value",t}({});class d{constructor(t){this.sourceId=t,this.sourceType=c.FACEBOOK}getAvatar(t){return`https://graph.facebook.com/${this.sourceId}/picture?width=${t}&height=${t}`}}class h{constructor(t){this.sourceId=t,this.sourceType=c.TWITTER}getAvatar(t){const n=this.getImageSize(t);return`https://twitter.com/${this.sourceId}/profile_image?size=${n}`}getImageSize(t){return t<=24?"mini":t<=48?"normal":t<=73?"bigger":"original"}}class b extends u{constructor(t){super(t),this.sourceType=c.GOOGLE}getAvatar(){return`https://picasaweb.google.com/data/entry/api/user/${this.sourceId}?alt=json`}processResponse(t,n){const l=t.entry.gphoto$thumbnail.$t;return l?l.replace("s64","s"+n):null}}class f extends u{constructor(t){super(t),this.sourceType=c.INSTAGRAM}getAvatar(){return`https://www.instagram.com/${this.sourceId}/?__a=1`}processResponse(t,n){return`${t.graphql.user.profile_pic_url_hd}&s=${n}`}}class p{constructor(t){this.sourceId=t,this.sourceType=c.CUSTOM}getAvatar(){return this.sourceId}}class g{constructor(t){this.sourceId=t,this.sourceType=c.INITIALS}getAvatar(t){return this.getInitials(this.sourceId,t)}getInitials(t,n){if(!(t=t.trim()))return"";const l=t.split(" ");return this.constructInitials(n&&n<l.length?l.slice(0,n):l)}constructInitials(t){return t&&t.length?t.filter(t=>t&&t.length>0).map(t=>t[0].toUpperCase()).join(""):""}}class m{constructor(t){this.value=t,this.sourceType=c.GRAVATAR,this.sourceId=t.match("^[a-f0-9]{32}$")?t:i.Md5.hashStr(t).toString()}getAvatar(t){const n=a()()?2*t:t;return`https://secure.gravatar.com/avatar/${this.sourceId}?s=${n}&d=404`}}class v{constructor(t){this.sourceId=t,this.sourceType=c.SKYPE}getAvatar(){return`https://api.skype.com/users/${this.sourceId}/profile/avatar`}}class O{constructor(t){this.sourceId=t,this.sourceType=c.VALUE}getAvatar(){return this.sourceId}}class _ extends u{constructor(t){super(t),this.sourceType=c.VKONTAKTE}getAvatar(t){const n=this.getImageSize(t);return`https://api.vk.com/method/users.get?user_id=${this.sourceId}&v=5.8&fields=${n}`}processResponse(t){const n=Object.keys(t.response[0]).pop();return n&&t.response[0][n]||null}getImageSize(t){return t<=50?"photo_50":t<=100?"photo_100":t<=200?"photo_200":"photo_max"}}class y extends u{constructor(t){super(t),this.sourceType=c.GITHUB}getAvatar(){return"https://api.github.com/users/"+this.sourceId}processResponse(t,n){return n?`${t.avatar_url}&s=${n}`:t.avatar_url}}let A=class{constructor(){this.sources={},this.sources[c.FACEBOOK]=d,this.sources[c.TWITTER]=h,this.sources[c.GOOGLE]=b,this.sources[c.INSTAGRAM]=f,this.sources[c.SKYPE]=v,this.sources[c.GRAVATAR]=m,this.sources[c.CUSTOM]=p,this.sources[c.INITIALS]=g,this.sources[c.VALUE]=O,this.sources[c.VKONTAKTE]=_,this.sources[c.GITHUB]=y}newInstance(t,n){return new this.sources[t](n)}};const S=new e.s("avatar.config");let C=class{constructor(t){this.userConfig=t}getAvatarSources(t){if(this.userConfig&&this.userConfig.sourcePriorityOrder&&this.userConfig.sourcePriorityOrder.length){const n=[...new Set(this.userConfig.sourcePriorityOrder)].filter(n=>t.includes(n));return[...n,...t.filter(t=>!n.includes(t))]}return t}getAvatarColors(t){return this.userConfig&&this.userConfig.colors&&this.userConfig.colors.length&&this.userConfig.colors||t}};const I=[c.FACEBOOK,c.GOOGLE,c.TWITTER,c.INSTAGRAM,c.VKONTAKTE,c.SKYPE,c.GRAVATAR,c.GITHUB,c.CUSTOM,c.INITIALS,c.VALUE],z=["#1abc9c","#3498db","#f1c40f","#8e44ad","#e74c3c","#d35400","#2c3e50","#7f8c8d"];let T=class{constructor(t,n){this.http=t,this.avatarConfigService=n,this.avatarSources=I,this.avatarColors=z,this.failedSources=new Map,this.overrideAvatarSources(),this.overrideAvatarColors()}fetchAvatar(t){return this.http.get(t)}getRandomColor(t){if(!t)return"transparent";const n=this.calculateAsciiCode(t);return this.avatarColors[n%this.avatarColors.length]}compareSources(t,n){return this.getSourcePriority(t)-this.getSourcePriority(n)}isSource(t){return this.avatarSources.includes(t)}isTextAvatar(t){return[c.INITIALS,c.VALUE].includes(t)}buildSourceKey(t){return t.sourceType+"-"+t.sourceId}sourceHasFailedBefore(t){return this.failedSources.has(this.buildSourceKey(t))}markSourceAsFailed(t){this.failedSources.set(this.buildSourceKey(t),t)}overrideAvatarSources(){this.avatarSources=this.avatarConfigService.getAvatarSources(I)}overrideAvatarColors(){this.avatarColors=this.avatarConfigService.getAvatarColors(z)}calculateAsciiCode(t){return t.split("").map(t=>t.charCodeAt(0)).reduce((t,n)=>t+n)}getSourcePriority(t){return this.avatarSources.indexOf(t)}},x=class{constructor(t,n){this.sourceFactory=t,this.avatarService=n,this.round=!0,this.size=50,this.textSizeRatio=3,this.fgColor="#FFF",this.style={},this.cornerRadius=0,this.clickOnAvatar=new e.o,this.isAlive=!0,this.avatarSrc=null,this.avatarText=null,this.avatarStyle={},this.hostStyle={},this.currentIndex=-1,this.sources=[]}onAvatarClicked(){this.clickOnAvatar.emit(this.sources[this.currentIndex])}ngOnChanges(t){for(const n in t)if(this.avatarService.isSource(n)){const l=c[n.toUpperCase()],e=t[n].currentValue;e&&"string"==typeof e?this.addSource(l,e):this.removeSource(l)}this.initializeAvatar()}fetchAvatarSource(){const t=this.sources[this.currentIndex];t&&this.avatarService.markSourceAsFailed(t);const n=this.findNextSource();n&&(this.avatarService.isTextAvatar(n.sourceType)?(this.buildTextAvatar(n),this.avatarSrc=null):this.buildImageAvatar(n))}findNextSource(){for(;++this.currentIndex<this.sources.length;){const t=this.sources[this.currentIndex];if(t&&!this.avatarService.sourceHasFailedBefore(t))return t}return null}ngOnDestroy(){this.isAlive=!1}initializeAvatar(){this.currentIndex=-1,this.sources.length>0&&(this.sortAvatarSources(),this.fetchAvatarSource(),this.hostStyle={width:this.size+"px",height:this.size+"px"})}sortAvatarSources(){this.sources.sort((t,n)=>this.avatarService.compareSources(t.sourceType,n.sourceType))}buildTextAvatar(t){this.avatarText=t.getAvatar(this.initialsSize),this.avatarStyle=this.getInitialsStyle(t.sourceId)}buildImageAvatar(t){this.avatarStyle=this.getImageStyle(),t instanceof u?this.fetchAndProcessAsyncAvatar(t):this.avatarSrc=t.getAvatar(this.size)}getInitialsStyle(t){return Object.assign({textAlign:"center",borderRadius:this.round?"100%":this.cornerRadius+"px",border:this.borderColor?"1px solid "+this.borderColor:"",textTransform:"uppercase",color:this.fgColor,backgroundColor:this.bgColor?this.bgColor:this.avatarService.getRandomColor(t),font:Math.floor(this.size/this.textSizeRatio)+"px Helvetica, Arial, sans-serif",lineHeight:this.size+"px"},this.style)}getImageStyle(){return Object.assign({maxWidth:"100%",borderRadius:this.round?"50%":this.cornerRadius+"px",border:this.borderColor?"1px solid "+this.borderColor:"",width:this.size,height:this.size},this.style)}fetchAndProcessAsyncAvatar(t){this.avatarService.sourceHasFailedBefore(t)||this.avatarService.fetchAvatar(t.getAvatar(this.size)).pipe(Object(o.a)(()=>this.isAlive),Object(s.a)(n=>t.processResponse(n,this.size))).subscribe(t=>this.avatarSrc=t,t=>{this.fetchAvatarSource()})}addSource(t,n){const l=this.sources.find(n=>n.sourceType===t);l?l.sourceId=n:this.sources.push(this.sourceFactory.newInstance(t,n))}removeSource(t){this.sources=this.sources.filter(n=>n.sourceType!==t)}};var w;let L=w=class{static forRoot(t){return{ngModule:w,providers:[{provide:S,useValue:t||{}}]}}}},"Y8N+":function(t,n,l){"use strict";l.d(n,"a",function(){return w});var e=l("8Y7J"),r=l("s7LF"),a=l("iELJ"),i=l("VDRc"),o=l("/q54"),s=l("1Xc+"),u=l("Dxy4"),c=l("YEUz"),d=l("omvX"),h=l("XE/z"),b=l("Tj54"),f=l("l+Q0"),p=l("cUpR"),g=l("mGvx"),m=l("BSbQ"),v=l("H3DK"),O=l("Q2Ze"),_=l("9gLZ"),y=l("SCoL"),A=l("e6WT"),S=l("UhP/"),C=l("8sFK"),I=l("vb3d"),z=e.yb({encapsulation:0,styles:[[""]],data:{}});function T(t){return e.bc(0,[(t()(),e.Ab(0,0,null,null,82,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(t,n,l){var r=!0,a=t.component;return"submit"===n&&(r=!1!==e.Ob(t,2).onSubmit(l)&&r),"reset"===n&&(r=!1!==e.Ob(t,2).onReset()&&r),"ngSubmit"===n&&(r=!1!==a.save()&&r),r},null,null)),e.zb(1,16384,null,0,r.z,[],null,null),e.zb(2,540672,null,0,r.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Tb(2048,null,r.c,null,[r.j]),e.zb(4,16384,null,0,r.q,[[6,r.c]],null,null),(t()(),e.Ab(5,0,null,null,12,"div",[["class","mat-dialog-title"],["fxLayout","row"],["fxLayoutAlign","start center"],["mat-dialog-title",""]],[[8,"id",0]],null,null,null,null)),e.zb(6,81920,null,0,a.m,[[2,a.l],e.l,a.e],null,null),e.zb(7,671744,null,0,i.d,[e.l,o.i,i.k,o.f],{fxLayout:[0,"fxLayout"]},null),e.zb(8,671744,null,0,i.c,[e.l,o.i,i.i,o.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(t()(),e.Ab(9,0,null,null,2,"h2",[["class","headline m-0"],["fxFlex","auto"]],null,null,null,null,null)),e.zb(10,737280,null,0,i.b,[e.l,o.i,o.e,i.h,o.f],{fxFlex:[0,"fxFlex"]},null),(t()(),e.Yb(11,null,[""," Organization"])),(t()(),e.Ab(12,0,null,null,5,"button",[["class","text-secondary mat-focus-indicator"],["mat-dialog-close",""],["mat-icon-button",""],["type","button"]],[[1,"aria-label",0],[1,"type",0],[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],function(t,n,l){var r=!0;return"click"===n&&(r=!1!==e.Ob(t,13)._onButtonClick(l)&&r),r},s.d,s.b)),e.zb(13,606208,null,0,a.g,[[2,a.l],e.l,a.e],{type:[0,"type"],dialogResult:[1,"dialogResult"]},null),e.zb(14,4374528,null,0,u.b,[e.l,c.h,[2,d.a]],null,null),(t()(),e.Ab(15,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[1,"data-mat-icon-type",0],[1,"data-mat-icon-name",0],[1,"data-mat-icon-namespace",0],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null],[2,"ic-inline",null],[4,"font-size",null],[8,"innerHTML",1]],null,null,h.b,h.a)),e.zb(16,8634368,null,0,b.b,[e.l,b.d,[8,null],b.a,e.n],null,null),e.zb(17,606208,null,0,f.a,[p.b],{icIcon:[0,"icIcon"]},null),(t()(),e.Ab(18,0,null,null,1,"mat-divider",[["class","-mx-6 text-border mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,g.b,g.a)),e.zb(19,49152,null,0,m.a,[],null,null),(t()(),e.Ab(20,0,null,null,53,"mat-dialog-content",[["class","mat-dialog-content"],["fxLayout","column"]],null,null,null,null,null)),e.zb(21,16384,null,0,a.j,[],null,null),e.zb(22,671744,null,0,i.d,[e.l,o.i,i.k,o.f],{fxLayout:[0,"fxLayout"]},null),(t()(),e.Ab(23,0,null,null,27,"mat-form-field",[["class","mt-6 mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.zb(24,7520256,null,9,O.g,[e.l,e.h,e.l,[2,_.b],[2,O.c],y.a,e.B,[2,d.a]],null,null),e.Ub(603979776,1,{_controlNonStatic:0}),e.Ub(335544320,2,{_controlStatic:0}),e.Ub(603979776,3,{_labelChildNonStatic:0}),e.Ub(335544320,4,{_labelChildStatic:0}),e.Ub(603979776,5,{_placeholderChild:0}),e.Ub(603979776,6,{_errorChildren:1}),e.Ub(603979776,7,{_hintChildren:1}),e.Ub(603979776,8,{_prefixChildren:1}),e.Ub(603979776,9,{_suffixChildren:1}),e.Tb(2048,null,O.b,null,[O.g]),(t()(),e.Ab(35,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.zb(36,16384,[[3,4],[4,4]],0,O.k,[],null,null),(t()(),e.Yb(-1,null,["Name"])),(t()(),e.Ab(38,0,null,1,7,"input",[["cdkFocusInitial",""],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","name"],["matInput",""]],[[2,"mat-input-server",null],[1,"id",0],[1,"data-placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(t,n,l){var r=!0;return"input"===n&&(r=!1!==e.Ob(t,39)._handleInput(l.target.value)&&r),"blur"===n&&(r=!1!==e.Ob(t,39).onTouched()&&r),"compositionstart"===n&&(r=!1!==e.Ob(t,39)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e.Ob(t,39)._compositionEnd(l.target.value)&&r),"focus"===n&&(r=!1!==e.Ob(t,43)._focusChanged(!0)&&r),"blur"===n&&(r=!1!==e.Ob(t,43)._focusChanged(!1)&&r),"input"===n&&(r=!1!==e.Ob(t,43)._onInput()&&r),r},null,null)),e.zb(39,16384,null,0,r.d,[e.G,e.l,[2,r.a]],null,null),e.Tb(1024,null,r.n,function(t){return[t]},[r.d]),e.zb(41,671744,null,0,r.i,[[3,r.c],[8,null],[8,null],[6,r.n],[2,r.y]],{name:[0,"name"]},null),e.Tb(2048,null,r.o,null,[r.i]),e.zb(43,5128192,null,0,A.a,[e.l,y.a,[6,r.o],[2,r.r],[2,r.j],S.d,[8,null],C.a,e.B,[2,O.b]],null,null),e.zb(44,16384,null,0,r.p,[[4,r.o]],null,null),e.Tb(2048,[[1,4],[2,4]],O.h,null,[A.a]),(t()(),e.Ab(46,0,null,0,4,"mat-icon",[["class","ltr:mr-3 rtl:ml-3 mat-icon notranslate"],["matPrefix",""],["role","img"]],[[1,"data-mat-icon-type",0],[1,"data-mat-icon-name",0],[1,"data-mat-icon-namespace",0],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null],[2,"ic-inline",null],[4,"font-size",null],[8,"innerHTML",1]],null,null,h.b,h.a)),e.zb(47,8634368,null,0,b.b,[e.l,b.d,[8,null],b.a,e.n],null,null),e.zb(48,16384,null,0,O.l,[],null,null),e.zb(49,606208,null,0,f.a,[p.b],{icIcon:[0,"icIcon"]},null),e.Tb(2048,[[8,4]],O.d,null,[O.l]),(t()(),e.Ab(51,0,null,null,22,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),e.zb(52,7520256,null,9,O.g,[e.l,e.h,e.l,[2,_.b],[2,O.c],y.a,e.B,[2,d.a]],null,null),e.Ub(603979776,10,{_controlNonStatic:0}),e.Ub(335544320,11,{_controlStatic:0}),e.Ub(603979776,12,{_labelChildNonStatic:0}),e.Ub(335544320,13,{_labelChildStatic:0}),e.Ub(603979776,14,{_placeholderChild:0}),e.Ub(603979776,15,{_errorChildren:1}),e.Ub(603979776,16,{_hintChildren:1}),e.Ub(603979776,17,{_prefixChildren:1}),e.Ub(603979776,18,{_suffixChildren:1}),e.Tb(2048,null,O.b,null,[O.g]),(t()(),e.Ab(63,0,null,3,2,"mat-label",[],null,null,null,null,null)),e.zb(64,16384,[[12,4],[13,4]],0,O.k,[],null,null),(t()(),e.Yb(-1,null,["Description"])),(t()(),e.Ab(66,0,null,1,7,"textarea",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","description"],["matInput",""]],[[2,"mat-input-server",null],[1,"id",0],[1,"data-placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(t,n,l){var r=!0;return"input"===n&&(r=!1!==e.Ob(t,67)._handleInput(l.target.value)&&r),"blur"===n&&(r=!1!==e.Ob(t,67).onTouched()&&r),"compositionstart"===n&&(r=!1!==e.Ob(t,67)._compositionStart()&&r),"compositionend"===n&&(r=!1!==e.Ob(t,67)._compositionEnd(l.target.value)&&r),"focus"===n&&(r=!1!==e.Ob(t,71)._focusChanged(!0)&&r),"blur"===n&&(r=!1!==e.Ob(t,71)._focusChanged(!1)&&r),"input"===n&&(r=!1!==e.Ob(t,71)._onInput()&&r),r},null,null)),e.zb(67,16384,null,0,r.d,[e.G,e.l,[2,r.a]],null,null),e.Tb(1024,null,r.n,function(t){return[t]},[r.d]),e.zb(69,671744,null,0,r.i,[[3,r.c],[8,null],[8,null],[6,r.n],[2,r.y]],{name:[0,"name"]},null),e.Tb(2048,null,r.o,null,[r.i]),e.zb(71,5128192,null,0,A.a,[e.l,y.a,[6,r.o],[2,r.r],[2,r.j],S.d,[8,null],C.a,e.B,[2,O.b]],null,null),e.zb(72,16384,null,0,r.p,[[4,r.o]],null,null),e.Tb(2048,[[10,4],[11,4]],O.h,null,[A.a]),(t()(),e.Ab(74,0,null,null,8,"mat-dialog-actions",[["align","end"],["class","mat-dialog-actions"]],null,null,null,null,null)),e.zb(75,16384,null,0,a.f,[],null,null),(t()(),e.Ab(76,0,null,null,3,"button",[["class","mat-focus-indicator"],["mat-button",""],["mat-dialog-close",""],["type","button"]],[[1,"aria-label",0],[1,"type",0],[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],[[null,"click"]],function(t,n,l){var r=!0;return"click"===n&&(r=!1!==e.Ob(t,77)._onButtonClick(l)&&r),r},s.d,s.b)),e.zb(77,606208,null,0,a.g,[[2,a.l],e.l,a.e],{type:[0,"type"],dialogResult:[1,"dialogResult"]},null),e.zb(78,4374528,null,0,u.b,[e.l,c.h,[2,d.a]],null,null),(t()(),e.Yb(-1,0,["CANCEL"])),(t()(),e.Ab(80,0,null,null,2,"button",[["class","mat-focus-indicator"],["color","primary"],["mat-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[2,"mat-button-disabled",null]],null,null,s.d,s.b)),e.zb(81,4374528,null,0,u.b,[e.l,c.h,[2,d.a]],{color:[0,"color"]},null),(t()(),e.Yb(82,0,["",""]))],function(t,n){var l=n.component;t(n,2,0,l.form),t(n,6,0),t(n,7,0,"row"),t(n,8,0,"start center"),t(n,10,0,"auto"),t(n,13,0,"button",""),t(n,16,0),t(n,17,0,l.icClose),t(n,22,0,"column"),t(n,41,0,"name"),t(n,43,0),t(n,47,0),t(n,49,0,l.icPerson),t(n,69,0,"description"),t(n,71,0),t(n,77,0,"button",""),t(n,81,0,"primary")},function(t,n){var l=n.component;t(n,0,0,e.Ob(n,4).ngClassUntouched,e.Ob(n,4).ngClassTouched,e.Ob(n,4).ngClassPristine,e.Ob(n,4).ngClassDirty,e.Ob(n,4).ngClassValid,e.Ob(n,4).ngClassInvalid,e.Ob(n,4).ngClassPending),t(n,5,0,e.Ob(n,6).id),t(n,11,0,l.organization?"Edit":"New"),t(n,12,0,e.Ob(n,13).ariaLabel||null,e.Ob(n,13).type,e.Ob(n,14).disabled||null,"NoopAnimations"===e.Ob(n,14)._animationMode,e.Ob(n,14).disabled),t(n,15,0,e.Ob(n,16)._usingFontIcon()?"font":"svg",e.Ob(n,16)._svgName||e.Ob(n,16).fontIcon,e.Ob(n,16)._svgNamespace||e.Ob(n,16).fontSet,e.Ob(n,16).inline,"primary"!==e.Ob(n,16).color&&"accent"!==e.Ob(n,16).color&&"warn"!==e.Ob(n,16).color,e.Ob(n,17).inline,e.Ob(n,17).size,e.Ob(n,17).iconHTML),t(n,18,0,e.Ob(n,19).vertical?"vertical":"horizontal",e.Ob(n,19).vertical,!e.Ob(n,19).vertical,e.Ob(n,19).inset),t(n,23,1,["standard"==e.Ob(n,24).appearance,"fill"==e.Ob(n,24).appearance,"outline"==e.Ob(n,24).appearance,"legacy"==e.Ob(n,24).appearance,e.Ob(n,24)._control.errorState,e.Ob(n,24)._canLabelFloat(),e.Ob(n,24)._shouldLabelFloat(),e.Ob(n,24)._hasFloatingLabel(),e.Ob(n,24)._hideControlPlaceholder(),e.Ob(n,24)._control.disabled,e.Ob(n,24)._control.autofilled,e.Ob(n,24)._control.focused,"accent"==e.Ob(n,24).color,"warn"==e.Ob(n,24).color,e.Ob(n,24)._shouldForward("untouched"),e.Ob(n,24)._shouldForward("touched"),e.Ob(n,24)._shouldForward("pristine"),e.Ob(n,24)._shouldForward("dirty"),e.Ob(n,24)._shouldForward("valid"),e.Ob(n,24)._shouldForward("invalid"),e.Ob(n,24)._shouldForward("pending"),!e.Ob(n,24)._animationsEnabled]),t(n,38,1,[e.Ob(n,43)._isServer,e.Ob(n,43).id,e.Ob(n,43).placeholder,e.Ob(n,43).disabled,e.Ob(n,43).required,e.Ob(n,43).readonly&&!e.Ob(n,43)._isNativeSelect||null,e.Ob(n,43).errorState,e.Ob(n,43).required.toString(),e.Ob(n,44).ngClassUntouched,e.Ob(n,44).ngClassTouched,e.Ob(n,44).ngClassPristine,e.Ob(n,44).ngClassDirty,e.Ob(n,44).ngClassValid,e.Ob(n,44).ngClassInvalid,e.Ob(n,44).ngClassPending]),t(n,46,0,e.Ob(n,47)._usingFontIcon()?"font":"svg",e.Ob(n,47)._svgName||e.Ob(n,47).fontIcon,e.Ob(n,47)._svgNamespace||e.Ob(n,47).fontSet,e.Ob(n,47).inline,"primary"!==e.Ob(n,47).color&&"accent"!==e.Ob(n,47).color&&"warn"!==e.Ob(n,47).color,e.Ob(n,49).inline,e.Ob(n,49).size,e.Ob(n,49).iconHTML),t(n,51,1,["standard"==e.Ob(n,52).appearance,"fill"==e.Ob(n,52).appearance,"outline"==e.Ob(n,52).appearance,"legacy"==e.Ob(n,52).appearance,e.Ob(n,52)._control.errorState,e.Ob(n,52)._canLabelFloat(),e.Ob(n,52)._shouldLabelFloat(),e.Ob(n,52)._hasFloatingLabel(),e.Ob(n,52)._hideControlPlaceholder(),e.Ob(n,52)._control.disabled,e.Ob(n,52)._control.autofilled,e.Ob(n,52)._control.focused,"accent"==e.Ob(n,52).color,"warn"==e.Ob(n,52).color,e.Ob(n,52)._shouldForward("untouched"),e.Ob(n,52)._shouldForward("touched"),e.Ob(n,52)._shouldForward("pristine"),e.Ob(n,52)._shouldForward("dirty"),e.Ob(n,52)._shouldForward("valid"),e.Ob(n,52)._shouldForward("invalid"),e.Ob(n,52)._shouldForward("pending"),!e.Ob(n,52)._animationsEnabled]),t(n,66,1,[e.Ob(n,71)._isServer,e.Ob(n,71).id,e.Ob(n,71).placeholder,e.Ob(n,71).disabled,e.Ob(n,71).required,e.Ob(n,71).readonly&&!e.Ob(n,71)._isNativeSelect||null,e.Ob(n,71).errorState,e.Ob(n,71).required.toString(),e.Ob(n,72).ngClassUntouched,e.Ob(n,72).ngClassTouched,e.Ob(n,72).ngClassPristine,e.Ob(n,72).ngClassDirty,e.Ob(n,72).ngClassValid,e.Ob(n,72).ngClassInvalid,e.Ob(n,72).ngClassPending]),t(n,76,0,e.Ob(n,77).ariaLabel||null,e.Ob(n,77).type,e.Ob(n,78).disabled||null,"NoopAnimations"===e.Ob(n,78)._animationMode,e.Ob(n,78).disabled),t(n,80,0,e.Ob(n,81).disabled||null,"NoopAnimations"===e.Ob(n,81)._animationMode,e.Ob(n,81).disabled),t(n,82,0,l.organization?"UPDATE":"CREATE")})}function x(t){return e.bc(0,[(t()(),e.Ab(0,0,null,null,1,"organizations-create",[],null,null,null,T,z)),e.zb(1,114688,null,0,I.a,[a.a,a.l,r.f],null,null)],function(t,n){t(n,1,0)},null)}var w=e.wb("organizations-create",I.a,x,{},{},[])},kScs:function(t,n,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function t(){this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return t.hashStr=function(t,n){return void 0===n&&(n=!1),this.onePassHasher.start().appendStr(t).end(n)},t.hashAsciiStr=function(t,n){return void 0===n&&(n=!1),this.onePassHasher.start().appendAsciiStr(t).end(n)},t._hex=function(n){var l,e,r,a,i=t.hexChars,o=t.hexOut;for(a=0;a<4;a+=1)for(e=8*a,l=n[a],r=0;r<8;r+=2)o[e+1+r]=i.charAt(15&l),o[e+0+r]=i.charAt(15&(l>>>=4)),l>>>=4;return o.join("")},t._md5cycle=function(t,n){var l=t[0],e=t[1],r=t[2],a=t[3];e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&r|~e&a)+n[0]-680876936|0)<<7|l>>>25)+e|0)&e|~l&r)+n[1]-389564586|0)<<12|a>>>20)+l|0)&l|~a&e)+n[2]+606105819|0)<<17|r>>>15)+a|0)&a|~r&l)+n[3]-1044525330|0)<<22|e>>>10)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&r|~e&a)+n[4]-176418897|0)<<7|l>>>25)+e|0)&e|~l&r)+n[5]+1200080426|0)<<12|a>>>20)+l|0)&l|~a&e)+n[6]-1473231341|0)<<17|r>>>15)+a|0)&a|~r&l)+n[7]-45705983|0)<<22|e>>>10)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&r|~e&a)+n[8]+1770035416|0)<<7|l>>>25)+e|0)&e|~l&r)+n[9]-1958414417|0)<<12|a>>>20)+l|0)&l|~a&e)+n[10]-42063|0)<<17|r>>>15)+a|0)&a|~r&l)+n[11]-1990404162|0)<<22|e>>>10)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&r|~e&a)+n[12]+1804603682|0)<<7|l>>>25)+e|0)&e|~l&r)+n[13]-40341101|0)<<12|a>>>20)+l|0)&l|~a&e)+n[14]-1502002290|0)<<17|r>>>15)+a|0)&a|~r&l)+n[15]+1236535329|0)<<22|e>>>10)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&a|r&~a)+n[1]-165796510|0)<<5|l>>>27)+e|0)&r|e&~r)+n[6]-1069501632|0)<<9|a>>>23)+l|0)&e|l&~e)+n[11]+643717713|0)<<14|r>>>18)+a|0)&l|a&~l)+n[0]-373897302|0)<<20|e>>>12)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&a|r&~a)+n[5]-701558691|0)<<5|l>>>27)+e|0)&r|e&~r)+n[10]+38016083|0)<<9|a>>>23)+l|0)&e|l&~e)+n[15]-660478335|0)<<14|r>>>18)+a|0)&l|a&~l)+n[4]-405537848|0)<<20|e>>>12)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&a|r&~a)+n[9]+568446438|0)<<5|l>>>27)+e|0)&r|e&~r)+n[14]-1019803690|0)<<9|a>>>23)+l|0)&e|l&~e)+n[3]-187363961|0)<<14|r>>>18)+a|0)&l|a&~l)+n[8]+1163531501|0)<<20|e>>>12)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e&a|r&~a)+n[13]-1444681467|0)<<5|l>>>27)+e|0)&r|e&~r)+n[2]-51403784|0)<<9|a>>>23)+l|0)&e|l&~e)+n[7]+1735328473|0)<<14|r>>>18)+a|0)&l|a&~l)+n[12]-1926607734|0)<<20|e>>>12)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e^r^a)+n[5]-378558|0)<<4|l>>>28)+e|0)^e^r)+n[8]-2022574463|0)<<11|a>>>21)+l|0)^l^e)+n[11]+1839030562|0)<<16|r>>>16)+a|0)^a^l)+n[14]-35309556|0)<<23|e>>>9)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e^r^a)+n[1]-1530992060|0)<<4|l>>>28)+e|0)^e^r)+n[4]+1272893353|0)<<11|a>>>21)+l|0)^l^e)+n[7]-155497632|0)<<16|r>>>16)+a|0)^a^l)+n[10]-1094730640|0)<<23|e>>>9)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e^r^a)+n[13]+681279174|0)<<4|l>>>28)+e|0)^e^r)+n[0]-358537222|0)<<11|a>>>21)+l|0)^l^e)+n[3]-722521979|0)<<16|r>>>16)+a|0)^a^l)+n[6]+76029189|0)<<23|e>>>9)+r|0,e=((e+=((r=((r+=((a=((a+=((l=((l+=(e^r^a)+n[9]-640364487|0)<<4|l>>>28)+e|0)^e^r)+n[12]-421815835|0)<<11|a>>>21)+l|0)^l^e)+n[15]+530742520|0)<<16|r>>>16)+a|0)^a^l)+n[2]-995338651|0)<<23|e>>>9)+r|0,e=((e+=((a=((a+=(e^((l=((l+=(r^(e|~a))+n[0]-198630844|0)<<6|l>>>26)+e|0)|~r))+n[7]+1126891415|0)<<10|a>>>22)+l|0)^((r=((r+=(l^(a|~e))+n[14]-1416354905|0)<<15|r>>>17)+a|0)|~l))+n[5]-57434055|0)<<21|e>>>11)+r|0,e=((e+=((a=((a+=(e^((l=((l+=(r^(e|~a))+n[12]+1700485571|0)<<6|l>>>26)+e|0)|~r))+n[3]-1894986606|0)<<10|a>>>22)+l|0)^((r=((r+=(l^(a|~e))+n[10]-1051523|0)<<15|r>>>17)+a|0)|~l))+n[1]-2054922799|0)<<21|e>>>11)+r|0,e=((e+=((a=((a+=(e^((l=((l+=(r^(e|~a))+n[8]+1873313359|0)<<6|l>>>26)+e|0)|~r))+n[15]-30611744|0)<<10|a>>>22)+l|0)^((r=((r+=(l^(a|~e))+n[6]-1560198380|0)<<15|r>>>17)+a|0)|~l))+n[13]+1309151649|0)<<21|e>>>11)+r|0,e=((e+=((a=((a+=(e^((l=((l+=(r^(e|~a))+n[4]-145523070|0)<<6|l>>>26)+e|0)|~r))+n[11]-1120210379|0)<<10|a>>>22)+l|0)^((r=((r+=(l^(a|~e))+n[2]+718787259|0)<<15|r>>>17)+a|0)|~l))+n[9]-343485551|0)<<21|e>>>11)+r|0,t[0]=l+t[0]|0,t[1]=e+t[1]|0,t[2]=r+t[2]|0,t[3]=a+t[3]|0},t.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(t.stateIdentity),this},t.prototype.appendStr=function(n){var l,e,r=this._buffer8,a=this._buffer32,i=this._bufferLength;for(e=0;e<n.length;e+=1){if((l=n.charCodeAt(e))<128)r[i++]=l;else if(l<2048)r[i++]=192+(l>>>6),r[i++]=63&l|128;else if(l<55296||l>56319)r[i++]=224+(l>>>12),r[i++]=l>>>6&63|128,r[i++]=63&l|128;else{if((l=1024*(l-55296)+(n.charCodeAt(++e)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");r[i++]=240+(l>>>18),r[i++]=l>>>12&63|128,r[i++]=l>>>6&63|128,r[i++]=63&l|128}i>=64&&(this._dataLength+=64,t._md5cycle(this._state,a),i-=64,a[0]=a[16])}return this._bufferLength=i,this},t.prototype.appendAsciiStr=function(n){for(var l,e=this._buffer8,r=this._buffer32,a=this._bufferLength,i=0;;){for(l=Math.min(n.length-i,64-a);l--;)e[a++]=n.charCodeAt(i++);if(a<64)break;this._dataLength+=64,t._md5cycle(this._state,r),a=0}return this._bufferLength=a,this},t.prototype.appendByteArray=function(n){for(var l,e=this._buffer8,r=this._buffer32,a=this._bufferLength,i=0;;){for(l=Math.min(n.length-i,64-a);l--;)e[a++]=n[i++];if(a<64)break;this._dataLength+=64,t._md5cycle(this._state,r),a=0}return this._bufferLength=a,this},t.prototype.getState=function(){var t=this._state;return{buffer:String.fromCharCode.apply(null,this._buffer8),buflen:this._bufferLength,length:this._dataLength,state:[t[0],t[1],t[2],t[3]]}},t.prototype.setState=function(t){var n,l=t.buffer,e=t.state,r=this._state;for(this._dataLength=t.length,this._bufferLength=t.buflen,r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],n=0;n<l.length;n+=1)this._buffer8[n]=l.charCodeAt(n)},t.prototype.end=function(n){void 0===n&&(n=!1);var l,e=this._bufferLength,r=this._buffer8,a=this._buffer32,i=1+(e>>2);if(this._dataLength+=e,r[e]=128,r[e+1]=r[e+2]=r[e+3]=0,a.set(t.buffer32Identity.subarray(i),i),e>55&&(t._md5cycle(this._state,a),a.set(t.buffer32Identity)),(l=8*this._dataLength)<=4294967295)a[14]=l;else{var o=l.toString(16).match(/(.*?)(.{0,8})$/);if(null===o)return;var s=parseInt(o[2],16),u=parseInt(o[1],16)||0;a[14]=s,a[15]=u}return t._md5cycle(this._state,a),n?this._state:t._hex(this._state)},t.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),t.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t.hexChars="0123456789abcdef",t.hexOut=[],t.onePassHasher=new t,t}();n.Md5=e,"5d41402abc4b2a76b9719d911017c592"!==e.hashStr("hello")&&console.error("Md5 self test failed.")},tx0H:function(t,n,l){"use strict";l.d(n,"a",function(){return a}),l.d(n,"b",function(){return u});var e=l("8Y7J"),r=(l("UTQ3"),l("SVse")),a=(l("IheW"),e.yb({encapsulation:0,styles:["[_nghost-%COMP%] {\n        border-radius: '50%';\n      }"],data:{}}));function i(t){return e.bc(0,[(t()(),e.Ab(0,0,null,null,1,"img",[["class","avatar-content"]],[[8,"src",4],[8,"width",0],[8,"height",0]],[[null,"error"]],function(t,n,l){var e=!0;return"error"===n&&(e=!1!==t.component.fetchAvatarSource()&&e),e},null,null)),e.zb(1,278528,null,0,r.p,[e.l,e.v,e.G],{ngStyle:[0,"ngStyle"]},null)],function(t,n){t(n,1,0,n.component.avatarStyle)},function(t,n){var l=n.component;t(n,0,0,l.avatarSrc,l.size,l.size)})}function o(t){return e.bc(0,[(t()(),e.Ab(0,0,null,null,2,"div",[["class","avatar-content"]],null,null,null,null,null)),e.zb(1,278528,null,0,r.p,[e.l,e.v,e.G],{ngStyle:[0,"ngStyle"]},null),(t()(),e.Yb(2,null,[" "," "]))],function(t,n){t(n,1,0,n.component.avatarStyle)},function(t,n){t(n,2,0,n.component.avatarText)})}function s(t){return e.bc(0,[(t()(),e.jb(16777216,null,null,1,null,o)),e.zb(1,16384,null,0,r.m,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(t()(),e.jb(0,null,null,0))],function(t,n){t(n,1,0,n.component.avatarText)},null)}function u(t){return e.bc(0,[(t()(),e.Ab(0,0,null,null,4,"div",[["class","avatar-container"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.onAvatarClicked()&&e),e},null,null)),e.zb(1,278528,null,0,r.p,[e.l,e.v,e.G],{ngStyle:[0,"ngStyle"]},null),(t()(),e.jb(16777216,null,null,1,null,i)),e.zb(3,16384,null,0,r.m,[e.R,e.O],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(t()(),e.jb(0,[["textAvatar",2]],null,0,null,s))],function(t,n){var l=n.component;t(n,1,0,l.hostStyle),t(n,3,0,l.avatarSrc,e.Ob(n,4))},null)}},vb3d:function(t,n,l){"use strict";l.d(n,"a",function(){return h});var e=l("8Y7J"),r=l("5mnX"),a=l.n(r),i=l("e3EN"),o=l.n(i),s=l("6qw8"),u=l.n(s),c=l("KaaH"),d=l.n(c);class h{constructor(t,n,l){this.organization=t,this.dialogRef=n,this.fb=l,this.onCreate=new e.o,this.form=this.fb.group({name:null,description:null}),this.icClose=a.a,this.icDelete=o.a,this.icPerson=d.a,this.icEmail=u.a}ngOnInit(){this.form.patchValue(this.organization||{})}save(){this.onCreate.emit(this.form.value),this.dialogRef.close()}}},wjWB:function(t,n,l){"use strict";l.d(n,"a",function(){return a});var e=l("8Y7J"),r=l("iCaw");let a=(()=>{class t{constructor(t){this.restApi=t,this.ENDPOINT="organizations"}index(t){return this.restApi.index([this.ENDPOINT],t)}show(t,n){return this.restApi.show([this.ENDPOINT,t],n)}create(t){return this.restApi.create([this.ENDPOINT],t)}update(t,n){return this.restApi.update([this.ENDPOINT,t],n)}destroy(t){return this.restApi.destroy([this.ENDPOINT,t])}subscription(t,n){return this.restApi.index([this.ENDPOINT,t,"subscription"],n)}payments(t,n){return this.restApi.index([this.ENDPOINT,t,"payments"],n)}}return t.\u0275prov=e.cc({factory:function(){return new t(e.dc(r.a))},token:t,providedIn:"root"}),t})()},xUpK:function(t,n){t.exports=function(){if("undefined"!=typeof window&&null!==window){if(window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}},yVsR:function(t,n,l){"use strict";l.d(n,"a",function(){return a});var e=l("8Y7J"),r=l("4UAC");let a=(()=>{class t{constructor(t){this.projectResource=t}resolve(t){let n={};return t.queryParams.organization_id?n={organization_id:t.queryParams.organization_id}:t.parent.params.organization_id&&(n={organization_id:t.parent.params.organization_id}),this.projectResource.index(n)}}return t.\u0275prov=e.cc({factory:function(){return new t(e.dc(r.a))},token:t,providedIn:"root"}),t})()}}]);