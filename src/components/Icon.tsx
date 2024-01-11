import React from 'react';
import { FaHospital, FaSchool } from 'react-icons/fa';

interface IconProps {
  emoji?: string;
}

export default function Icon({ emoji }: IconProps) {
  switch (emoji) {
    case '🏥':
      return <FaHospital className="h-5 w-5 fill-zinc-50 pb-0.5" />;
    case '🏫':
      return <FaSchool className="h-5 w-5 fill-zinc-50 pb-1" />;
    default:
      return null;
  }
}
