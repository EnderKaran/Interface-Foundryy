"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const FadeInDiv = ({
    className,
    tabs,
    hovering,
  }) => {
    return (
      <>
        {tabs.map((tab, idx) => (
          <div
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn("flex space-x-2 items-center cursor-pointer", tabClassName)}
            style={{
                transformStyle: "preserve-3d",
            }}
          >
            <p
              className={cn(
                "text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
              )}
            >
              {tab.title}
            </p>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div
        className={cn(
          "relative flex flex-row items-center justify-center [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative px-4 py-2 rounded-full",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-800 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div
        className={cn("mt-16", contentClassName)}
      >
        {active.content}
      </div>
    </>
  );
};