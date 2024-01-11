import React from 'react';

interface PositionTypeProps {
  emoji?: string;
  index: number;
  geoIndex: number;
}

export default function PositionType({ emoji, index, geoIndex }: PositionTypeProps) {
  return (
    <>
      {emoji === '🏥' && index === 0 && geoIndex === 0 && <span className="mb-2 truncate pl-0.5">病院</span>}
      {emoji === '🏫' && index === 0 && geoIndex === 1 && <span className="mb-2 truncate pl-0.5">学校</span>}
    </>
  );
}
