import React, { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

const CardContext = createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - left) / width - 0.5;
    const normalizedY = (e.clientY - top) / height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const contextValue = { rotateX, rotateY };

  return (
    <CardContext.Provider value={contextValue}>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
          rotateX,
          rotateY,
        }}
        className={cn("flex items-center justify-center", containerClassName)}
      >
        <div
          style={{ transformStyle: "preserve-3d" }}
          className={cn(
            "relative flex items-center justify-center",
            className
          )}
        >
          {children}
        </div>
      </motion.div>
    </CardContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const { rotateX: cardRotateX, rotateY: cardRotateY } = useContext(CardContext);

  const itemTranslateX = useTransform(cardRotateY, [-10, 10], [translateX, -translateX]);
  const itemTranslateY = useTransform(cardRotateX, [-10, 10], [-translateY, translateY]);

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      style={{
        translateX: itemTranslateX,
        translateY: itemTranslateY,
        translateZ,
        rotateX,
        rotateY,
        rotateZ,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};