import PositionType from './PositionType';
import Icon from './Icon';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface GeoJsonFeatureListProps {
  emoji?: string;
  feature: any | undefined;
  index: number;
  geoIndex: number;
  length: number;
}

export default function GeoJsonFeatureList({
  emoji,
  feature,
  index,
  geoIndex,
  length,
}: GeoJsonFeatureListProps): React.JSX.Element {
  if (!emoji || !feature) return <p>Object is Null</p>;

  const name = feature.properties?.name;
  const address: string = feature.properties?.['KSJ2:AdminArea'] + ' ' + feature.properties?.['KSJ2:ADS'];

  return (
    <div key={name} className={`py-2 ${length !== index + 1 && 'border-b border-zinc-200'}`}>
      <PositionType emoji={emoji} index={index} geoIndex={geoIndex} />
      <Accordion sx={{ boxShadow: 0 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Grid container>
            <Grid item xs={4}>
              <Icon emoji={emoji} />
            </Grid>
            <Grid item xs={8}>
              <span className="flex h-full items-center" style={{ fontWeight: 500 }}>{`${
                index + 1
              }. ${name}`}</span>
            </Grid>
          </Grid>
          {/* <div className="flex w-full flex-row items-center truncate">
            <span className="mr-3 flex h-10 max-h-10 min-h-10 w-10 min-w-10 max-w-10 items-center justify-center rounded-full bg-zinc-500">
              <Icon emoji={emoji} />
            </span>
            <span className="font-medium text-zinc-900">{`${index + 1}. ${name}`}</span>
          </div> */}
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
