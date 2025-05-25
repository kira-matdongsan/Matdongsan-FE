import{j as r}from"./jsx-runtime-D_zvdyIk.js";const l=({size:p="medium",img:a,...u})=>{const d={small:"w-[16px] h-[16px]",medium:"w-[24px] h-[24px]",large:"w-[32px] h-[32px]"};return r.jsx("button",{type:"button",...u,className:"flex items-center justify-center",children:a&&r.jsx("img",{src:a,alt:"icon",className:`${d[p]}`})})};l.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},img:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f={title:"Components/Icon",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{size:"medium",img:"/src/assets/Icons/leftArrow.png"}},s={args:{size:"small",img:"/src/assets/Icons/closeCircle.png"}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: "medium",
    img: "/src/assets/Icons/leftArrow.png"
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,m,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: "small",
    img: "/src/assets/Icons/closeCircle.png"
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const x=["Medium","Small"];export{e as Medium,s as Small,x as __namedExportsOrder,f as default};
