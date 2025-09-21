import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// İkonlar için react-icons'tan birkaç ikon import edelim
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function ProfileCardShowcase() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Jane Doe
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-400"
        >
          Frontend Geliştirici & UI Meraklısı
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Profil fotoğrafı"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            className="flex space-x-4"
          >
            <a href="#" title="GitHub"><FaGithub className="text-neutral-400 hover:text-white transition-colors text-2xl" /></a>
            <a href="#" title="LinkedIn"><FaLinkedin className="text-neutral-400 hover:text-white transition-colors text-2xl" /></a>
            <a href="#" title="Twitter"><FaTwitter className="text-neutral-400 hover:text-white transition-colors text-2xl" /></a>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            İletişime Geç
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}