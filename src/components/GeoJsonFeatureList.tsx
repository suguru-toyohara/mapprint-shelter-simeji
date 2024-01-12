import PositionType from './PositionType';
import Icon from './Icon';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface GeoJsonFeatureListProps {
  emoji?: string;
  feature: any | undefined;
  index: number;
  geoIndex: number;
}

export default function GeoJsonFeatureList({
  emoji,
  feature,
  index,
  geoIndex,
}: GeoJsonFeatureListProps): React.JSX.Element {
  if (!emoji || !feature) return <p>Object is Null</p>;

  const name = feature.properties?.name;
  const address: string = feature.properties?.['KSJ2:AdminArea'] + ' ' + feature.properties?.['KSJ2:ADS'];

  return (
    <div key={name}>
      <PositionType emoji={emoji} index={index} geoIndex={geoIndex} />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="flex w-full flex-row items-center truncate">
            <span className="mr-3 flex h-10 max-h-10 min-h-10 w-10 min-w-10 max-w-10 items-center justify-center rounded-full bg-zinc-500">
              <Icon emoji={emoji} />
            </span>
            <span className="font-medium text-zinc-900">{`${index + 1}. ${name}`}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="truncate">
            {typeof address !== 'undefined' && address !== 'undefined undefined' ? (
              <span className="truncate pt-0.5 text-sm font-normal text-zinc-400">
                {address ? address : '表示できません'}
              </span>
            ) : (
              <span className="truncate pt-0.5 text-sm font-normal text-zinc-400">
                表示するコンテンツがありません
              </span>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}