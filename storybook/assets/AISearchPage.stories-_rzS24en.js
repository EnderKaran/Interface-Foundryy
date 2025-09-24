import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-x2xj3tzo.js";import{c as A}from"./utils-Bzm_o1ou.js";import{L as P,S as M,M as R}from"./index-CfZ_xE_D.js";import"./preload-helper-PPVm8Dsz.js";import"./iconBase-CF6xm_aW.js";const k=o.forwardRef(({className:t,type:f,...d},m)=>e.jsx("input",{type:f,className:A("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50","bg-gray-800 text-white border-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500",t),ref:m,...d}));k.displayName="Input";k.__docgenInfo={description:"",methods:[],displayName:"Input"};const S=t=>{const{id:f,className:d,background:m,particleColor:s,minSize:x=.4,maxSize:g=1,particleDensity:h=1200,speed:p=1}=t,a=o.useRef(null),[c,j]=o.useState([]),[n,u]=o.useState(null);return o.useEffect(()=>{if(a.current){const l=a.current,i=window.devicePixelRatio||1,r=l.getBoundingClientRect();l.width=r.width*i,l.height=r.height*i;const b=l.getContext("2d");b&&(b.scale(i,i),u(b))}},[]),o.useEffect(()=>{if(n&&a.current){const l=[],i=Math.floor(a.current.offsetWidth/100*h/10);for(let r=0;r<i;r++)l.push({x:Math.random()*a.current.offsetWidth,y:Math.random()*a.current.offsetHeight,size:x+Math.random()*(g-x),alpha:Math.random()*.5+.5,speed:Math.random()*2*p+.5*p});j(l)}},[n,h,x,g,p]),o.useEffect(()=>{if(n&&c.length>0){let l;const i=()=>{a.current&&(n.clearRect(0,0,a.current.offsetWidth,a.current.offsetHeight),c.forEach(r=>{r.y-=r.speed,r.y<0&&(r.y=a.current.offsetHeight,r.x=Math.random()*a.current.offsetWidth),n.beginPath(),n.arc(r.x,r.y,r.size,0,2*Math.PI);const b=parseInt(s.slice(1,3),16),z=parseInt(s.slice(3,5),16),D=parseInt(s.slice(5,7),16);n.fillStyle=`rgba(${b}, ${z}, ${D}, ${r.alpha})`,n.fill()}),l=window.requestAnimationFrame(i))};return i(),()=>{window.cancelAnimationFrame(l)}}},[n,c,s]),e.jsx("div",{className:A("absolute inset-0 h-full w-full",d),children:e.jsx("canvas",{id:f,ref:a,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:m}})})};S.__docgenInfo={description:"",methods:[],displayName:"SparklesCore"};function I(){const[t,f]=o.useState(""),[d,m]=o.useState(""),[s,x]=o.useState(!1),[g,h]=o.useState(""),p="/Interface-Foundryy/storybook/?path=/story/ui-3d-card--basic-usage",a=async c=>{if(c.preventDefault(),!t.trim())return;x(!0),h(""),m("");const n="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBa13ZJ_BwneoKsu_XKjsJVG_xGQYfggGY";try{const u=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:t}]}]})});if(!u.ok){const r=await u.json();throw new Error(r.error.message||"Google AI API'sinden bir hata alındı.")}const l=await u.json();if(!l.candidates||l.candidates.length===0)throw new Error("AI uygun bir cevap üretemedi veya içerik güvenlik filtrelerine takıldı.");const i=l.candidates[0].content.parts[0].text;m(i.trim())}catch(u){h(u.message)}finally{x(!1)}};return e.jsxs("div",{className:"relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"w-full absolute inset-0 h-screen",children:e.jsx(S,{id:"tsparticlesfullpage",background:"transparent",minSize:.6,maxSize:1.4,particleDensity:100,className:"w-full h-full",particleColor:"#FFFFFF"})}),e.jsx("div",{className:"absolute top-0 left-0 z-20 p-4",children:e.jsx(P,{to:"/",className:"bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700",children:"← Ana Sayfa"})}),e.jsxs("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors z-20",title:"Storybook'u Aç",children:[e.jsx(M,{className:"text-pink-500 text-xl"}),e.jsx("span",{className:"hidden sm:inline",children:"Storybook"})]}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4",children:[e.jsx("h1",{className:"md:text-7xl text-3d/xl lg:text-9xl font-bold text-center text-white relative z-20",children:"AI Destekli Arama"}),e.jsxs("form",{onSubmit:a,className:"w-full mt-8",children:[e.jsx(k,{type:"text",value:t,onChange:c=>f(c.target.value),placeholder:"Doğal bir dilde sorunuzu sorun...",className:"w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500",disabled:s}),e.jsx("button",{type:"submit",disabled:s,className:"w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 disabled:bg-gray-600 transition-colors",children:s?"Aranıyor...":"Ara"})]}),e.jsxs("div",{className:"w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]",children:[s&&e.jsx("p",{className:"text-center",children:"Lütfen bekleyin, AI düşünüyor..."}),g&&e.jsx("p",{className:"text-red-500 text-center",children:g}),d&&!s&&e.jsx("p",{className:"whitespace-pre-wrap font-mono",children:d}),!d&&!s&&!g&&e.jsx("p",{className:"text-gray-400 text-center",children:"Arama sonucunuz burada görünecektir."})]})]})]})}I.__docgenInfo={description:"",methods:[],displayName:"AISearchPage"};const G={title:"Sayfalar/AI Destekli Arama Sayfası",component:I,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[t=>e.jsx(R,{children:e.jsx(t,{})})]},y={storyName:"1. Varsayılan Durum",parameters:{docs:{description:{story:"Kullanıcı sayfayı ilk ziyaret ettiğinde veya herhangi bir arama yapmadığında component'in nasıl göründüğünü gösterir. Arama çubuğu aktiftir ve sonuç alanı boştur."}}}},v={storyName:"2. Yüklenme Durumu",parameters:{docs:{description:{story:"Kullanıcı bir arama yaptıktan sonra API'den cevap beklenirken arayüzün nasıl göründüğünü gösterir. Buton ve input devre dışı bırakılır ve bir yüklenme mesajı gösterilir."}}},render:()=>{const t=()=>e.jsxs("div",{className:"relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"w-full absolute inset-0 h-screen"}),e.jsx("div",{className:"absolute top-0 left-0 z-20 p-4",children:e.jsx("a",{href:"#",className:"bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700",children:"← Ana Sayfa"})}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4",children:[e.jsx("h1",{className:"md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20",children:"AI Destekli Arama"}),e.jsxs("form",{className:"w-full mt-8",children:[e.jsx("input",{type:"text",placeholder:"Doğal bir dilde sorunuzu sorun...",className:"w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500",disabled:!0}),e.jsx("button",{type:"submit",disabled:!0,className:"w-full mt-4 h-12 rounded-lg bg-gray-600 text-white font-bold transition-colors",children:"Aranıyor..."})]}),e.jsx("div",{className:"w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]",children:e.jsx("p",{className:"text-center",children:"Lütfen bekleyin, AI düşünüyor..."})})]})]});return e.jsx(t,{})}},w={storyName:"3. Sonuç Gösterimi",parameters:{docs:{description:{story:"API'den başarılı bir cevap alındığında sonucun sonuç alanında nasıl görüntülendiğini gösterir."}}},render:()=>{const t=()=>e.jsxs("div",{className:"relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"w-full absolute inset-0 h-screen"}),e.jsx("div",{className:"absolute top-0 left-0 z-20 p-4",children:e.jsx("a",{href:"#",className:"bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700",children:"← Ana Sayfa"})}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4",children:[e.jsx("h1",{className:"md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20",children:"AI Destekli Arama"}),e.jsxs("form",{className:"w-full mt-8",children:[e.jsx("input",{type:"text",value:"React'in temel hookları nelerdir?",readOnly:!0,className:"w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500"}),e.jsx("button",{type:"submit",className:"w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors",children:"Ara"})]}),e.jsx("div",{className:"w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]",children:e.jsx("p",{className:"whitespace-pre-wrap font-mono",children:"React'in temel hook'ları şunlardır: - useState: Bileşenlere state (durum) eklemek için kullanılır. - useEffect: Yan etkileri (veri çekme, abonelikler) yönetmek için kullanılır. - useContext: Prop'ları derinlemesine geçirme (prop drilling) sorununu çözmek için kullanılır."})})]})]});return e.jsx(t,{})}},N={storyName:"4. Hata Durumu",parameters:{docs:{description:{story:"API çağrısı başarısız olduğunda veya bir hata oluştuğunda kullanıcıya nasıl bir geri bildirim gösterildiğini sergiler."}}},render:()=>{const t=()=>e.jsxs("div",{className:"relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"w-full absolute inset-0 h-screen"}),e.jsx("div",{className:"absolute top-0 left-0 z-20 p-4",children:e.jsx("a",{href:"#",className:"bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700",children:"← Ana Sayfa"})}),e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4",children:[e.jsx("h1",{className:"md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20",children:"AI Destekli Arama"}),e.jsxs("form",{className:"w-full mt-8",children:[e.jsx("input",{type:"text",value:"Bu arama hata verecek",readOnly:!0,className:"w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500"}),e.jsx("button",{type:"submit",className:"w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors",children:"Ara"})]}),e.jsx("div",{className:"w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]",children:e.jsx("p",{className:"text-red-500 text-center",children:"API anahtarı geçersiz veya istek limiti aşıldı."})})]})]});return e.jsx(t,{})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  storyName: '1. Varsayılan Durum',
  parameters: {
    docs: {
      description: {
        story: 'Kullanıcı sayfayı ilk ziyaret ettiğinde veya herhangi bir arama yapmadığında component\\'in nasıl göründüğünü gösterir. Arama çubuğu aktiftir ve sonuç alanı boştur.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  storyName: '2. Yüklenme Durumu',
  parameters: {
    docs: {
      description: {
        story: 'Kullanıcı bir arama yaptıktan sonra API\\'den cevap beklenirken arayüzün nasıl göründüğünü gösterir. Buton ve input devre dışı bırakılır ve bir yüklenme mesajı gösterilir.'
      }
    }
  },
  render: () => {
    const AISearchPageLoadingMock = () => <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">\r
        <div className="w-full absolute inset-0 h-screen">\r
        </div>\r
        <div className="absolute top-0 left-0 z-20 p-4">\r
          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</a>\r
        </div>\r
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">\r
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>\r
          <form className="w-full mt-8">\r
            <input type="text" placeholder="Doğal bir dilde sorunuzu sorun..." className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500" disabled={true} />\r
            <button type="submit" disabled={true} className="w-full mt-4 h-12 rounded-lg bg-gray-600 text-white font-bold transition-colors">\r
              Aranıyor...\r
            </button>\r
          </form>\r
          <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">\r
            <p className="text-center">Lütfen bekleyin, AI düşünüyor...</p>\r
          </div>\r
        </div>\r
      </div>;
    return <AISearchPageLoadingMock />;
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  storyName: '3. Sonuç Gösterimi',
  parameters: {
    docs: {
      description: {
        story: 'API\\'den başarılı bir cevap alındığında sonucun sonuç alanında nasıl görüntülendiğini gösterir.'
      }
    }
  },
  render: () => {
    const AISearchPageResultMock = () => <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">\r
           <div className="w-full absolute inset-0 h-screen"></div>\r
           <div className="absolute top-0 left-0 z-20 p-4">\r
            <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</a>\r
           </div>\r
           <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">\r
             <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>\r
             <form className="w-full mt-8">\r
               <input type="text" value="React'in temel hookları nelerdir?" readOnly className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500" />\r
               <button type="submit" className="w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">Ara</button>\r
             </form>\r
             <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">\r
               <p className="whitespace-pre-wrap font-mono">React'in temel hook'ları şunlardır:\r
                - useState: Bileşenlere state (durum) eklemek için kullanılır.\r
                - useEffect: Yan etkileri (veri çekme, abonelikler) yönetmek için kullanılır.\r
                - useContext: Prop'ları derinlemesine geçirme (prop drilling) sorununu çözmek için kullanılır.</p>\r
             </div>\r
           </div>\r
         </div>;
    return <AISearchPageResultMock />;
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  storyName: '4. Hata Durumu',
  parameters: {
    docs: {
      description: {
        story: 'API çağrısı başarısız olduğunda veya bir hata oluştuğunda kullanıcıya nasıl bir geri bildirim gösterildiğini sergiler.'
      }
    }
  },
  render: () => {
    const AISearchPageErrorMock = () => <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">\r
           <div className="w-full absolute inset-0 h-screen"></div>\r
           <div className="absolute top-0 left-0 z-20 p-4">\r
            <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</a>\r
           </div>\r
           <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">\r
             <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>\r
             <form className="w-full mt-8">\r
               <input type="text" value="Bu arama hata verecek" readOnly className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500" />\r
               <button type="submit" className="w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">Ara</button>\r
             </form>\r
             <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">\r
               <p className="text-red-500 text-center">API anahtarı geçersiz veya istek limiti aşıldı.</p>\r
             </div>\r
           </div>\r
         </div>;
    return <AISearchPageErrorMock />;
  }
}`,...N.parameters?.docs?.source}}};const K=["VarsayilanDurum","YuklenmeDurumu","SonucGosterimi","HataDurumu"];export{N as HataDurumu,w as SonucGosterimi,y as VarsayilanDurum,v as YuklenmeDurumu,K as __namedExportsOrder,G as default};
