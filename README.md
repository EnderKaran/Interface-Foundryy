# Interface Foundry

> Fikirlerin interaktif deneyimlere dönüştüğü yer. Bu, modern web teknolojileriyle oluşturulmuş yaşayan bir bileşen kütüphanesi ve vitrinidir.

Bu proje, sadece bir dizi UI bileşeni koleksiyonu değil, aynı zamanda **React**, **Framer Motion**, **Three.js (React Three Fiber)** ve **Google Gemini API** gibi güçlü araçların bir araya getirilerek nasıl zengin, interaktif ve modern kullanıcı deneyimleri oluşturulabildiğini gösteren bir vitrindir. Her bir sayfa, belirli bir frontend konseptini derinlemesine incelemek üzere tasarlanmıştır.

**[Canlı Demoyu Görüntüle](https://enderkaran.github.io/Interface-Foundryy/)**

<img width="1881" height="900" alt="Ekran görüntüsü 2025-09-24 123550" src="https://github.com/user-attachments/assets/96d34332-4230-4382-b81e-8fce482c0df7" />


---

## Öne Çıkan Özellikler

Bu proje, modern frontend geliştirmenin birçok önemli alanını kapsayan dört ana modülden oluşmaktadır:

### 1. İnteraktif 3D Kartlar & Component Vitrini
- **Fareyi Takip Eden 3D Efekti:** `Framer Motion`'ın `useSpring` ve `useTransform` hook'ları kullanılarak oluşturulan, fare hareketine tepki veren ve derinlik hissi (parallax) yaratan kartlar.
- **Dinamik Sekmeler:** Farklı kart varyasyonlarını sergilemek için `Framer Motion`'ın `layoutId` özelliği ile oluşturulmuş akıcı geçiş animasyonlarına sahip sekmeler.
- **Yeniden Kullanılabilir Bileşenler:** `3d-card` gibi temel UI bileşenlerinin nasıl oluşturulup farklı senaryolar (`Showcase` component'leri) için kullanılabileceğini gösteren atomik tasarım örneği.

### 2. 3D Ürün Yapılandırıcı
- **Gerçek Zamanlı 3D Render:** `React Three Fiber` ve `React Three Drei` kullanılarak bir `.glb` 3D modelinin web sahnesine aktarılması.
- **İnteraktif Renk Değişimi:** Kullanıcıların arayüz üzerinden 3D modelin rengini anlık olarak değiştirmesine olanak tanıyan state yönetimi.
- **Kamera Kontrolleri:** `OrbitControls` ile kullanıcının modeli 360 derece döndürmesine, yakınlaştırıp uzaklaştırmasına olanak tanıyan tam interaktif bir 3D sahne.

### 3. AI Destekli Anlamsal Arama
- **Google Gemini Entegrasyonu:** Google'ın güçlü Gemini AI modelini kullanarak doğal dilde yapılan aramalara anlamsal cevaplar üreten bir arama motoru.
- **Asenkron API Çağrıları:** `fetch` API'si ile harici bir yapay zeka servisine asenkron istekler gönderme.
- **Durum Yönetimi:** `isLoading` ve `error` gibi durumları yöneterek kullanıcıya akıcı bir geri bildirim sağlayan modern bir arayüz.
- **Görsel Efektler:** `SparklesCore` bileşeni ile arayüze estetik bir dokunuş katan canvas tabanlı partikül animasyonları.

### 4. Dinamik Alışveriş Sepeti
- **Global State Yönetimi:** Harici kütüphaneler olmadan, React'in yerleşik `Context API`'ı kullanılarak oluşturulmuş, uygulama genelinde erişilebilir sepet (`CartContext`) ve bildirim (`NotificationContext`) state'leri.
- **Akıcı Animasyonlar:** `Framer Motion` ve `AnimatePresence` kullanılarak oluşturulan modern animasyonlar:
  - Sepet panelinin yumuşak bir şekilde açılıp kapanması.
  - Sepete ürün eklendiğinde/çıkarıldığında listede akıcı animasyonlar.
  - "Sepete Eklendi" gibi anlık "toast" bildirimleri.
- **Tam İşlevsellik:** Ürün ekleme, çıkarma ve miktar güncelleme gibi tüm temel sepet işlemlerini içerir.

---

## Teknoloji Yığını

Bu projenin temelini oluşturan ana teknolojiler ve kütüphaneler:

- **Framework:** [React 19](https://react.dev/)
- **Build Aracı:** [Vite](https://vitejs.dev/)
- **Stil:** [Tailwind CSS](https://tailwindcss.com/)
- **Animasyon:** [Framer Motion](https://www.framer.com/motion/)
- **3D Grafik:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & [Drei](https://github.com/pmndrs/drei)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **API Entegrasyonu:** [Google Gemini API](https://aistudio.google.com/)
- **State Yönetimi:** [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
- **Component Dokümantasyonu:** [Storybook](https://storybook.js.org/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) & [gh-pages](https://www.npmjs.com/package/gh-pages)
- **Yardımcılar:** `clsx`, `tailwind-merge`

---

## Başlarken

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Kurulum

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/EnderKaran/Interface-Foundryy.git
    cd Interface-Foundryy
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Ortam Değişkenlerini Ayarlayın:**
    Projenin ana dizininde `.env.local` adında bir dosya oluşturun. Bu dosya, API anahtarları gibi hassas bilgileri içerecektir. Aşağıdaki şablonu kullanabilirsiniz:

    ```env
    # Google AI Studio'dan aldığınız Gemini API anahtarınız
    VITE_GOOGLE_API_KEY="AIzaSy...xxxxxxxxxxxx"

    # Storybook'un yerel sunucu adresi (genellikle bu şekildedir)
    VITE_STORYBOOK_URL="http://localhost:6006"
    ```
    **Önemli:** `.env.local` dosyası `.gitignore` tarafından yok sayılır ve asla GitHub'a gönderilmemelidir.

### Kullanılabilir Script'ler

Proje dizinindeyken aşağıdaki komutları çalıştırabilirsiniz:

-   **`npm run dev`**
    Uygulamayı geliştirme modunda `http://localhost:5173` adresinde başlatır.

-   **`npm run build`**
    Uygulamayı üretim için `dist` klasörüne derler.

-   **`npm run storybook`**
    Storybook'u `http://localhost:6006` adresinde başlatır ve bileşenleri izole bir şekilde görüntülemenizi sağlar.

-   **`npm run deploy`**
    Projeyi derler ve `dist` klasörünün içeriğini GitHub Pages'e dağıtır.

---

## 📂 Proje Yapısı

Proje, modern React uygulamaları için standartlaşmış, ölçeklenebilir ve bakımı kolay bir klasör yapısı üzerine kurulmuştur. Sorumlulukların ayrılması (separation of concerns) ilkesi benimsenmiştir.

/
├── .storybook/         # Storybook için yapılandırma dosyaları
├── public/             # Statik dosyalar (favicon, robots.txt vb.)
├── src/
│   ├── assets/         # Resimler, 3D modeller (.glb) gibi statik varlıklar
│   ├── components/
│   │   ├── showcase/   # Belirli senaryolar için `ui` bileşenlerinin birleştirildiği somut örnekler
│   │   └── ui/         # Yeniden kullanılabilir, atomik ve temel UI bileşenleri (3D Card, Input vb.)
│   ├── context/        # Uygulama geneli state yönetimi için React Context'leri (Sepet, Bildirimler)
│   ├── lib/            # Genel yardımcı fonksiyonlar (örn: cn fonksiyonu)
│   ├── pages/          # Her bir rota için tam sayfa bileşenleri (Ana Sayfa, Arama Sayfası vb.)
│   │
│   ├── App.jsx         # Ana component ve React Router ile rota yönetimi
│   └── main.jsx        # React uygulamasının DOM'a bağlandığı giriş noktası
│
├── .env.example        # Gerekli ortam değişkenleri için şablon dosyası
├── .gitignore          # Git tarafından takip edilmeyecek dosyalar
├── index.html          # Ana HTML dosyası
├── package.json        # Proje bağımlılıkları ve script'leri
├── tailwind.config.js  # Tailwind CSS yapılandırması
└── vite.config.js      # Vite için ana yapılandırma dosyası

---

**Not:** `package.json` dosyanızdaki `homepage` alanında `Interface-Foundryy` (çift 'y' ile) yazıyor. GitHub Pages dağıtımının doğru çalışması için bunu `Interface-Foundry` olarak düzeltmeniz önerilir.
