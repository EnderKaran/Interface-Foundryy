import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { SparklesCore } from '../components/ui/sparkles';
import { SiStorybook } from "react-icons/si";

export function AISearchPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

 
  const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/story/ui-3d-card--basic-usage`;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    setResult('');
   
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "contents": [{ "parts": [{ "text": query }] }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message || "Google AI API'sinden bir hata alındı.");
        }

        const data = await response.json();
        
        if (!data.candidates || data.candidates.length === 0) {
            throw new Error("AI uygun bir cevap üretemedi veya içerik güvenlik filtrelerine takıldı.");
        }
        
        const assistantMessage = data.candidates[0].content.parts[0].text;
        setResult(assistantMessage.trim());

    } catch (err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFFFFF" />
      </div>
      <div className="absolute top-0 left-0 z-20 p-4">
        <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">← Ana Sayfa</Link>
      </div>

      <a href={storybookUrl} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors z-20" title="Storybook'u Aç">
          <SiStorybook className="text-pink-500 text-xl" />
          <span className="hidden sm:inline">Storybook</span>
      </a> 

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">
        <h1 className="md:text-7xl text-3d/xl lg:text-9xl font-bold text-center text-white relative z-20">AI Destekli Arama</h1>
        <form onSubmit={handleSearch} className="w-full mt-8">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Doğal bir dilde sorunuzu sorun..."
            className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-teal-500"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading} className="w-full mt-4 h-12 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 disabled:bg-gray-600 transition-colors">
            {isLoading ? 'Aranıyor...' : 'Ara'}
          </button>
        </form>
        <div className="w-full mt-8 text-white p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 min-h-[150px]">
          {isLoading && <p className="text-center">Lütfen bekleyin, AI düşünüyor...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          {result && !isLoading && <p className="whitespace-pre-wrap font-mono">{result}</p>}
          {!result && !isLoading && !error && <p className="text-gray-400 text-center">Arama sonucunuz burada görünecektir.</p>}
        </div>
      </div>
    </div>
  );
}