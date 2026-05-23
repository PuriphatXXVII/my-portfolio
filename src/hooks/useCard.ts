import { useState } from 'react';

// รวม Type ไว้ที่เดียว เรียกใช้ง่าย
export type CardType = 'hero' | 'projects' | 'about' | 'connect' | 'certificates' | null;

export function useCard() {
  const [expanded, setExpanded] = useState<CardType>(null);
  const closeCard = () => setExpanded(null);

  return { expanded, setExpanded, closeCard };
}
