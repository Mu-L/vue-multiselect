import{_ as o,M as r,r as c,o as i,c as u,a as m,w as p,b as e,t as n,g}from"./index-4e40acdf.js";const d={components:{Multiselect:r},data(){return{value:null,options:[{name:"Vue.js",language:"JavaScript"},{name:"Rails",language:"Ruby"},{name:"Sinatra",language:"Ruby"},{name:"Laravel",language:"PHP",$isDisabled:!0},{name:"Phoenix",language:"Elixir"}]}}},_=e("label",{class:"typo__label"},"Single select / dropdown",-1),b=g(" is written in "),v={class:"language-json"};function f(h,t,x,S,a,V){const s=c("multiselect");return i(),u("div",null,[_,m(s,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value=l),"deselect-label":"Can't remove this value","track-by":"name",label:"name",placeholder:"Select one",options:a.options,searchable:!1,"allow-empty":!1},{singleLabel:p(({option:l})=>[e("strong",null,n(l.name),1),b,e("strong",null,n(l.language),1)]),_:1},8,["modelValue","options"]),e("pre",v,[e("code",null,n(a.value),1)])])}const w=o(d,[["render",f]]);export{w as default};