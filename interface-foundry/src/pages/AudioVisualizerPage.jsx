import React from 'react';
import AudioVisualizer from '../components/ui/AudioVisualizer';

const AudioVisualizerPage = () => { 
    return (
        <div className="min-h-screen px-4 pt-24 pb-12 text-white bg-black">
            <div className="mx-auto space-y-12 max-w-7xl">
                {/* Header Section */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500">
                    Audio Visualizer
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                    HTML5 Canvas ve Web Audio API kullanılarak oluşturulmuş gerçek zamanlı ses spektrum analizi.
                    </p>
                </div>

                {/* Visualizer Component */}
                <div className="flex justify-center">
                    <AudioVisualizer />
                </div>

            </div>
        </div>
    )
}

export default AudioVisualizerPage;