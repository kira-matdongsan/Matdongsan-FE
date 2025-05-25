import{j as q}from"./jsx-runtime-D_zvdyIk.js";const v=({variant:b="primary",label:x,size:f="large",...S})=>{const h="w-[345px] h-[48px] py-12 px-8 rounded-lg",z={primary:"bg-[#47B7E5] text-white",secondary:"bg-gray-200 text-gray-500 hover:bg-gray-700"},T={small:"h-[40px] py-[10px] text-sm",large:"h-[56px] py-[16px] text-base"};return q.jsx("button",{type:"button",className:`${h} ${z[b]} ${T[f]}`,...S,children:x})};v.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const B={title:"Components/Button",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},variant:{options:["primary","secondary"]}}},e={args:{variant:"primary",label:"투표하기"}},a={args:{variant:"secondary",label:"투표하기"}},r={args:{size:"large",variant:"primary",label:"투표하기"}},s={args:{size:"small",variant:"secondary",label:"투표하기"}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "투표하기"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "투표하기"
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "large",
    variant: "primary",
    label: "투표하기"
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "small",
    variant: "secondary",
    label: "투표하기"
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const _=["Primary","Secondary","Large","Small"];export{r as Large,e as Primary,a as Secondary,s as Small,_ as __namedExportsOrder,B as default};
