import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function AlbumCardShowcase() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        
        <CardItem
          translateZ="80"
          className="w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Albüm kapağı"
          />
        </CardItem>
        
        <div className="mt-8">
            <CardItem
                translateZ="40"
                className="text-xl font-bold text-neutral-600 dark:text-white"
            >
                Cyber Dreams
            </CardItem>
            <CardItem
                as="p"
                translateZ="50"
                className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-400"
            >
                Synthwave Collective
            </CardItem>
        </div>

        <div className="flex justify-end items-center mt-10">
          <CardItem
            translateZ={60}
            as="button"
            className="px-6 py-2 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white text-sm font-bold"
          >
            Şimdi Dinle
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}