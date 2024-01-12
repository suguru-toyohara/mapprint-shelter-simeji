import PlaceEmojiRenderer from './PositionType';
import Icon from './Icon';

interface GeoJsonFeatureListProps {
  emoji?: string;
  feature: any | undefined;
  index: number;
  geoIndex: number;
  geoJsonWithStyle: any;
}

export default function GeoJsonFeatureList({
  emoji,
  feature,
  index,
  geoIndex,
  geoJsonWithStyle,
}: GeoJsonFeatureListProps): React.JSX.Element {
  if (!emoji || !feature) return <p>Object is Null</p>;

  const name = feature.properties?.name;
  const address: string = feature.properties?.['KSJ2:AdminArea'] + ' ' + feature.properties?.['KSJ2:ADS'];

  return (
    <div key={name} className="flex w-full flex-col truncate">
      <PlaceEmojiRenderer emoji={emoji} index={index} geoIndex={geoIndex} />

      <li
        className={
          index !== geoJsonWithStyle.geojson.features.length - 1
            ? 'w-full border-b border-gray-200 pb-4'
            : emoji === '🏥'
              ? 'pb-8'
              : 'pb-4'
        }
      >
        <div className="flex w-full flex-row items-center">
          <span className="flex h-10 max-h-10 min-h-10 w-10 min-w-10 max-w-10 items-center justify-center rounded-full bg-zinc-500">
            <Icon emoji={emoji} />
          </span>
          <div className="flex flex-col truncate pl-4">
            <span className="font-medium text-zinc-900">{`${index + 1}. ${name}`}</span>
            <div className="truncate">
              {typeof address !== 'undefined' && address !== 'undefined undefined' && (
                <span className="truncate pt-0.5 text-sm font-normal text-zinc-400">
                  {address ? address : '表示できません'}
                </span>
              )}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
