import React from 'react';
import { Link } from 'react-router-dom';
import { SiStorybook } from "react-icons/si";
import { Tabs } from '../components/ui/tabs';

import { Interactive3DCardShowcase } from '../components/showcase/Interactive3DCardShowcase';
import { ProfileCardShowcase } from '../components/showcase/ProfileCardShowcase';
import { AlbumCardShowcase } from '../components/showcase/AlbumCardShowcase';

export function ComponentDetailPage() {
    const storybookUrl = `${import.meta.env.VITE_STORYBOOK_URL}/?path=/story/ui-3d-card--basic-usage`;

    const allComponents = [
        {
            title: "3D Kart (Varsayılan)",
            value: "default-3d-card",
            content: (
                <div className="w-full h-full relative flex items-center justify-center rounded-2xl p-4 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900">
                    <Interactive3DCardShowcase />
                </div>
            ),
        },
        {
            title: "3D Kart (Profil)",
            value: "profile-card",
            content: (
                <div className="w-full h-full relative flex items-center justify-center rounded-2xl p-4 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900">
                    <ProfileCardShowcase />
                </div>
            ),
        },
        {
            title: "3D Kart (Albüm)",
            value: "album-card",
            content: (
                <div className="w-full h-full relative flex items-center justify-center rounded-2xl p-4 md:p-10 bg-gradient-to-br from-gray-800 to-gray-900">
                    <AlbumCardShowcase />
                </div>
            ),
        },
    ];

    return (
        <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 py-24 sm:py-32 overflow-x-hidden">

            <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors z-20">
                ← Ana Sayfa
            </Link>

            <a href={storybookUrl} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors z-20" title="Storybook'u Aç">
                <SiStorybook className="text-pink-500 text-xl" />
                <span className="hidden sm:inline">Storybook</span>
            </a>

            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl font-bold text-white">Bileşen Vitrini</h1>
                <p className="text-neutral-400 mt-2">Geliştirdiğim bileşenleri ve varyasyonlarını buradan inceleyebilirsiniz.</p>
            </div>
            
            <div className="relative flex flex-col w-full max-w-5xl items-center justify-start">
                <Tabs tabs={allComponents} />
            </div>

            
        </div>
    );
}