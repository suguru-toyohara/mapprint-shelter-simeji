import React from 'react';
import { FaHospital, FaSchool } from 'react-icons/fa';

interface PlaceIconRendererProps {
  emoji?: string;
}

export default function PlaceIconRenderer({ emoji }: PlaceIconRendererProps) {
  return (
    <>
      {emoji === '🏥' ? (
        <FaHospital className="h-5 w-5 fill-zinc-50 pb-0.5" />
      ) : (
        <FaSchool className="h-5 w-5 fill-zinc-50 pb-1" />
      )}
    </>
  );
}
