import React, { useRef, useEffect, useState } from 'react';

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const audioRef = useRef(null); // HTML Audio elementi için ref
  const sourceRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [fileName, setFileName] = useState(null);

  // Dosya seçildiğinde çalışır
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const fileUrl = URL.createObjectURL(file);
      
      if (audioRef.current) {
        audioRef.current.src = fileUrl;
        audioRef.current.load();
        setIsPlaying(false);
      }
    }
  };

  const setupAudioContext = () => {
    if (!audioContextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
      
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;

      // Audio elementini kaynağa bağla
      sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
      
      // Kaynağı hem Analyser'a (görsel için) hem Destination'a (duymak için) bağla
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    // Tarayıcı politikaları gereği Context'i kullanıcı etkileşimiyle başlatmalıyız
    setupAudioContext();

    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      draw(); // Çizimi başlat
    }
    setIsPlaying(!isPlaying);
  };

  const draw = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const renderFrame = () => {
      // Eğer müzik durduysa döngüyü kesme, ama veri sıfır gelecektir, yine de çizmeye devam et
      // Ancak performans için playing check edilebilir. Şimdilik akıcı olsun diye bırakıyoruz.
      requestAnimationFrame(renderFrame);

      analyserRef.current.getByteFrequencyData(dataArray);

      // Canvas Temizle
      ctx.fillStyle = 'rgb(10, 10, 10)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        // Gelişmiş Renk Paleti (Cyan - Mor - Pembe)
        const r = barHeight + (25 * (i / bufferLength));
        const g = 250 * (i / bufferLength); // Daha yeşil/mavi tonlar
        const b = 200;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        
        // Çubukları çiz (Daha yumuşak kenarlar için roundRect kullanılabilir ama şimdilik rect)
        ctx.fillRect(x, canvas.height - barHeight / 1.4, barWidth, barHeight / 1.4);

        // Yansıma efekti (Opsiyonel - Daha havalı görünür)
        ctx.fillStyle = `rgba(${r},${g},${b}, 0.2)`;
        ctx.fillRect(x, canvas.height, barWidth, barHeight / 3); // Aşağı doğru silik yansıma

        x += barWidth + 1;
      }
    };

    renderFrame();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl p-8 mx-auto border shadow-2xl bg-neutral-900/60 rounded-2xl border-neutral-800 backdrop-blur-md">
      
      {/* Görünmez Audio Elementi */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />

      <div className="mb-8 space-y-2 text-center">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Müzik Görselleştirici
        </h3>
        <p className="text-sm text-neutral-400">
          {fileName ? `Seçilen Parça: ${fileName}` : "Bilgisayarından bir MP3 dosyası seç ve oynat."}
        </p>
      </div>

      {/* Canvas Ekranı */}
      <div className="relative w-full group">
         <canvas 
            ref={canvasRef} 
            width={700} 
            height={350}
            className="w-full h-80 bg-black rounded-xl border border-neutral-700 shadow-[0_0_30px_rgba(0,255,200,0.15)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500"
         />
         {/* Çalmıyorken ortada ikon göster */}
         {!isPlaying && fileName && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-4 border rounded-full bg-black/50 backdrop-blur-sm border-white/10">
                    <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                </div>
            </div>
         )}
      </div>

      {/* Kontroller */}
      <div className="flex items-center gap-4 mt-8">
        {/* Gizli Dosya Inputu için Özel Buton */}
        <label className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all border rounded-full cursor-pointer bg-neutral-800 hover:bg-neutral-700 border-neutral-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            Müzik Seç
            <input type="file" accept="audio/*" onChange={handleFileChange} className="hidden" />
        </label>

        {/* Oynat/Durdur Butonu (Dosya seçilmeden aktif olmaz) */}
        <button
          onClick={togglePlay}
          disabled={!fileName}
          className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg
            ${!fileName 
                ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed' 
                : isPlaying 
                    ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30' 
                    : 'bg-cyan-500 hover:bg-cyan-600 text-black shadow-cyan-500/30'
            }`}
        >
          {isPlaying ? (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Durdur
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
              Oynat
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioVisualizer;