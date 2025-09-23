import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-bOKhwWi9.js";import{C as t,a as o,b as r}from"./3d-card-uIvCJRYU.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"UI Bileşenleri/3D Kart",component:t,parameters:{layout:"centered"},tags:["autodocs"]},n={storyName:"1. Temel Kullanım",parameters:{docs:{description:{story:"`CardContainer`, `CardBody` ve `CardItem` bileşenlerinin en temel kullanımını gösterir. Kartın genel yapısı ve fare ile etkileşimi burada görülebilir."}}},render:e=>a.jsx(t,{...e,children:a.jsxs(o,{className:"bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700",children:[a.jsx(r,{translateZ:"50",className:"text-xl font-bold text-white",children:"Başlık Alanı"}),a.jsx(r,{as:"p",translateZ:"60",className:"text-neutral-400 text-sm mt-2",children:"Bu, 3D Kart bileşeninin standart ve temel bir örneğidir."})]})})},s={storyName:"2. Farklı Derinlikler (translateZ)",parameters:{docs:{description:{story:'`CardItem` bileşenine verilen `translateZ` prop\'u, ögelerin Z-ekseninde ne kadar "öne çıkacağını" belirler. Yüksek değerler, fare hareketinde daha belirgin bir 3D etkisi yaratır.'}}},render:e=>a.jsx(t,{...e,children:a.jsxs(o,{className:"bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700",children:[a.jsx(r,{translateZ:"100",className:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600",children:"EN ÖNDE (translateZ: 100)"}),a.jsx(r,{translateZ:"50",className:"text-lg font-bold text-white mt-4",children:"ORTADA (translateZ: 50)"}),a.jsx(r,{translateZ:"0",className:"text-sm text-neutral-400 mt-4",children:"ARKADA (translateZ: 0)"})]})})},l={storyName:"3. Parallax Etkisi (translateX/Y)",parameters:{docs:{description:{story:"`translateX` ve `translateY` propları, ögelerin fare hareketine ters yönde ne kadar kayacağını belirler. Bu, katmanlar arasında bir parallax (ıraklık) etkisi oluşturur."}}},render:e=>a.jsx(t,{...e,children:a.jsxs(o,{className:"relative bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700",children:[a.jsx(r,{as:"p",translateX:-20,translateY:-20,className:"absolute top-4 left-4 text-xs text-neutral-500",children:"Arka Plan Katmanı"}),a.jsx(r,{translateZ:"80",className:"text-3xl font-bold text-white",children:"Ana İçerik"}),a.jsx(r,{as:"p",translateX:20,translateY:20,className:"absolute bottom-4 right-4 text-xs text-green-400",children:"Ön Plan Katmanı"})]})})},d={storyName:"4. Kompleks Bir Örnek",parameters:{docs:{description:{story:"Tüm propların (`translateZ`, `translateX`, `translateY`, `rotateZ`) bir arada kullanılarak nasıl zengin ve katmanlı bir tasarım oluşturulabileceğini gösteren bir örnek."}}},render:e=>a.jsx(t,{...e,children:a.jsxs(o,{className:"relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-gray-700 bg-gray-900",children:[a.jsx(r,{translateZ:"50",className:"text-xl font-bold text-white",children:"Proje Başlığı"}),a.jsx(r,{as:"p",translateZ:"60",className:"text-neutral-400 text-sm max-w-sm mt-2",children:"Tüm efektler bir arada."}),a.jsx(r,{translateZ:"100",translateX:"-20",translateY:"-10",className:"w-full mt-4",children:a.jsx("img",{src:"https://plus.unsplash.com/premium_photo-1671650125931-7f85b7db0551?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",className:"h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:"görsel"})}),a.jsx("div",{className:"flex justify-end items-center mt-10",children:a.jsx(r,{translateZ:40,translateX:20,rotateZ:-5,as:"button",className:"px-4 py-2 rounded-xl bg-white text-black text-xs font-bold",children:"Buton"})})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  storyName: '1. Temel Kullanım',
  parameters: {
    docs: {
      description: {
        story: '\`CardContainer\`, \`CardBody\` ve \`CardItem\` bileşenlerinin en temel kullanımını gösterir. Kartın genel yapısı ve fare ile etkileşimi burada görülebilir.'
      }
    }
  },
  render: args => <CardContainer {...args}>\r
      <CardBody className="bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700">\r
        <CardItem translateZ="50" className="text-xl font-bold text-white">\r
          Başlık Alanı\r
        </CardItem>\r
        <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm mt-2">\r
          Bu, 3D Kart bileşeninin standart ve temel bir örneğidir.\r
        </CardItem>\r
      </CardBody>\r
    </CardContainer>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  storyName: '2. Farklı Derinlikler (translateZ)',
  parameters: {
    docs: {
      description: {
        story: '\`CardItem\` bileşenine verilen \`translateZ\` prop\\'u, ögelerin Z-ekseninde ne kadar "öne çıkacağını" belirler. Yüksek değerler, fare hareketinde daha belirgin bir 3D etkisi yaratır.'
      }
    }
  },
  render: args => <CardContainer {...args}>\r
      <CardBody className="bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700">\r
        <CardItem translateZ="100" // En önde
      className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600">\r
          EN ÖNDE (translateZ: 100)\r
        </CardItem>\r
        <CardItem translateZ="50" // Ortada
      className="text-lg font-bold text-white mt-4">\r
          ORTADA (translateZ: 50)\r
        </CardItem>\r
        <CardItem translateZ="0" // En arkada (hareketsiz)
      className="text-sm text-neutral-400 mt-4">\r
          ARKADA (translateZ: 0)\r
        </CardItem>\r
      </CardBody>\r
    </CardContainer>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  storyName: '3. Parallax Etkisi (translateX/Y)',
  parameters: {
    docs: {
      description: {
        story: '\`translateX\` ve \`translateY\` propları, ögelerin fare hareketine ters yönde ne kadar kayacağını belirler. Bu, katmanlar arasında bir parallax (ıraklık) etkisi oluşturur.'
      }
    }
  },
  render: args => <CardContainer {...args}>\r
      <CardBody className="relative bg-gray-900 w-auto h-auto p-8 rounded-xl border border-gray-700">\r
        <CardItem as="p" translateX={-20} // Sola doğru daha fazla hareket eder
      translateY={-20} // Yukarı doğru daha fazla hareket eder
      className="absolute top-4 left-4 text-xs text-neutral-500">\r
            Arka Plan Katmanı\r
        </CardItem>\r
        <CardItem translateZ="80" className="text-3xl font-bold text-white">\r
          Ana İçerik\r
        </CardItem>\r
        <CardItem as="p" translateX={20} // Sağa doğru daha fazla hareket eder
      translateY={20} // Aşağı doğru daha fazla hareket eder
      className="absolute bottom-4 right-4 text-xs text-green-400">\r
            Ön Plan Katmanı\r
        </CardItem>\r
      </CardBody>\r
    </CardContainer>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  storyName: '4. Kompleks Bir Örnek',
  parameters: {
    docs: {
      description: {
        story: 'Tüm propların (\`translateZ\`, \`translateX\`, \`translateY\`, \`rotateZ\`) bir arada kullanılarak nasıl zengin ve katmanlı bir tasarım oluşturulabileceğini gösteren bir örnek.'
      }
    }
  },
  render: args => <CardContainer {...args}>\r
        <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-gray-700 bg-gray-900">\r
          <CardItem translateZ="50" className="text-xl font-bold text-white">\r
            Proje Başlığı\r
          </CardItem>\r
          <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2">\r
            Tüm efektler bir arada.\r
          </CardItem>\r
          <CardItem translateZ="100" translateX="-20" translateY="-10" className="w-full mt-4">\r
            <img src="https://plus.unsplash.com/premium_photo-1671650125931-7f85b7db0551?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="görsel" />\r
          </CardItem>\r
          <div className="flex justify-end items-center mt-10">\r
            <CardItem translateZ={40} translateX={20} rotateZ={-5} // Hafifçe döndürülmüş
        as="button" className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold">\r
              Buton\r
            </CardItem>\r
          </div>\r
        </CardBody>\r
      </CardContainer>
}`,...d.parameters?.docs?.source}}};const b=["TemelKullanim","FarkliDerinlikler","ParallaxEtkisi","KompleksOrnek"];export{s as FarkliDerinlikler,d as KompleksOrnek,l as ParallaxEtkisi,n as TemelKullanim,b as __namedExportsOrder,u as default};
