import { useState } from 'react';

// ย้าย Type มาไว้ที่นี่ที่เดียวเลย จะได้เรียกใช้ง่ายๆ
export type CardType = 'hero' | 'projects' | 'about' | 'connect' | null;

export function useCard() {
  const [expanded, setExpanded] = useState<CardType>(null);
  const closeCard = () => setExpanded(null);

  return { expanded, setExpanded, closeCard };
}