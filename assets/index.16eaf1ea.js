import{q as t,r as e,m as i,u as s,a as n}from"./vendor.d185d0a4.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(i){const s=new URL(t,location),n=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((i,a)=>{const r=new URL(t,s);if(self[e].moduleMap[r])return i(self[e].moduleMap[r]);const c=new Blob([`import * as m from '${r}';`,`${e}.moduleMap['${r}']=m;`],{type:"text/javascript"}),p=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){a(new Error(`Failed to import: ${t}`)),n(p)},onload(){i(self[e].moduleMap[r]),n(p)}});document.head.appendChild(p)})),self[e].moduleMap={}}}("/waifu-worldcup/assets/");const a=["https://i.waifu.pics/wRpvaDu.jpg","https://i.waifu.pics/ZPXy_XG.jpg","https://i.waifu.pics/L~qlLcJ.jpg","https://i.waifu.pics/FWE8ggD.png","https://i.waifu.pics/Txwg1-z.png","https://i.waifu.pics/LOR7MBO.jpg","https://i.waifu.pics/tLc5RfN.png","https://i.waifu.pics/aGY3-X6.jpg","https://i.waifu.pics/CNzs4Pd.jpg","https://i.waifu.pics/B-CZCbU.png","https://i.waifu.pics/-WhXn5t.jpg","https://i.waifu.pics/II9WeHB.png","https://i.waifu.pics/ysB8wtC.jpg","https://i.waifu.pics/Weau1RP.jpg","https://i.waifu.pics/n6U5SHh.png","https://i.waifu.pics/jIClgKA.jpg","https://i.waifu.pics/R5n5P7f.png","https://i.waifu.pics/qPWyHQ0.png","https://i.waifu.pics/vd4XAVZ.jpg","https://i.waifu.pics/ueqBS0o.jpg","https://i.waifu.pics/i~RQhRD.png","https://i.waifu.pics/UyzDyil.jpg","https://i.waifu.pics/ZV7J1WW.png","https://i.waifu.pics/JIQ9QZ_.jpg","https://i.waifu.pics/NOJicBh.png","https://i.waifu.pics/8m-r1_O.png","https://i.waifu.pics/I15h0iO.jpg","https://i.waifu.pics/9seL-Rc.jpg","https://i.waifu.pics/Wc5WkuE.png","https://i.waifu.pics/MHrvoGY.jpg","https://i.waifu.pics/8TL6ycS.jpg","https://i.waifu.pics/WGTA1vN.png"],r=t.header`
  display: flex;
  justify-content: center;
  height: 20px;
  background-color: #1e1e1e;
  color: #fff;
`,c=({currentRound:t,rounds:i})=>{const s=.5===i?"Winner":`${2*i} Contestants (${t} / ${i})`;return e.createElement(r,null,"Waifu Worldcup 2021 - ",s)},p=t.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;

  div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: #fff;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    background-color: red;
  }
  div:after,
  div:before {
    content: ' ';
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: #fff;
    background-color: red;
  }
  div:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
  }
  div:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`,o=t.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,l=()=>e.createElement(o,null,e.createElement("h1",null,"Waifu Worldcup 2021"),e.createElement(p,null,e.createElement("div",null))),u=t.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #fff;
  background-color: #1e1e1e;
  border: 2px solid #000;
  border-radius: 20px;
`,f=({onClick:t})=>e.createElement(u,{onClick:t},"Restart");const h=t(i.img)`
  height: 100%;
  width: 49%;
  object-fit: fill;
  cursor: pointer;
`,d=({src:t,onWaifuClick:i,isFirstWaifu:n})=>{const a=s();return e.createElement(h,{src:t,animate:a,onTap:async()=>{await a.start({x:n?"50%":"-50%",zIndex:1}),i(n),a.start({x:0,zIndex:0})},transition:{duration:.4}})},g=t(i.img)`
  margin: 0 auto;
  height: 100%;
  object-fit: contain;
`,m=({src:t})=>e.createElement(g,{src:t}),w=t.div`
  height: calc(100vh - 20px);
  max-height: calc(100vh - 20px);
  display: flex;
  justify-content: space-between;
`,x=()=>{const[t,i]=e.useState(a),[s,n]=e.useState(a.length),[r,p]=e.useState(!1),[o,u]=e.useState(!1),h=e.useMemo((()=>s-t.length+1),[s,t]),g=e.useMemo((()=>s/2),[s]);e.useEffect((()=>{r||new Promise((t=>setTimeout(t,1500))).then((()=>{const t=window.localStorage.getItem("waifus");if(null!=t){const e=t.split(";");i(e),1===e.length?n(1):e.length<=8?n(8):e.length<=16?n(16):n(32)}p(!0)}))})),e.useEffect((()=>{r&&!o&&([16,8,4].includes(t.length)&&(!function(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}}(t),i((()=>[...t]))),u(!0))}));const x=e=>{if(e){const e=t.shift();t.push(e),t.shift()}else{t.shift();const e=t.shift();t.push(e)}i((t=>[...t])),window.localStorage.setItem("waifus",t.join(";")),t.length==g&&(n(t.length),u(!1))};return r?e.createElement("div",null,e.createElement(c,{currentRound:h,rounds:g}),e.createElement(w,null,1==t.length?e.createElement(m,{src:t[0]}):e.createElement(e.Fragment,null,e.createElement(d,{src:t[0],onWaifuClick:x,isFirstWaifu:!0}),e.createElement(d,{src:t[1],onWaifuClick:x,isFirstWaifu:!1}))),e.createElement(f,{onClick:()=>{i((()=>[...a])),n(a.length),p(!1),window.localStorage.removeItem("waifus")}})):e.createElement(l,null)};function j(){return e.createElement("div",{className:"App"},e.createElement(x,null))}n.render(e.createElement(e.StrictMode,null,e.createElement(j,null)),document.getElementById("root"));
