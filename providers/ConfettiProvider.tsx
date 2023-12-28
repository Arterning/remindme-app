"use client";

import ReactConfetti from "react-confetti";

import { useConfettiStore } from "@/hooks/use-confetti-store";

/**
 * react-confetti 是一个用于在 React 应用中实现彩带飘落效果的组件库。这种效果通常用于庆祝或增加视觉吸引力。
 * react-confetti 简化了在 React 项目中集成彩带飘落效果的过程。
 * @returns 
 */
export const ConfettiProvider = () => {
  const confetti = useConfettiStore();

  if (!confetti.isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={800}
      recycle={false}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  )
}