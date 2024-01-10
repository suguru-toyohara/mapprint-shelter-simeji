import { Marker } from 'react-map-gl/maplibre';
import { Feature, Geometry, GeoJsonProperties, Point } from 'geojson';

interface Props {
  title: string;
  feature: Feature<Geometry, GeoJsonProperties> | undefined;
  center: Feature<Point, GeoJsonProperties> | undefined;
  onClickMarker: (center: Feature<Point, GeoJsonProperties> | undefined) => void;
  zIndex: number;
  style?: {
    color?: string;
    fillColor?: string;
    emoji?: string;
  };
  index: number;
}

export default function Pointer({
  title,
  feature,
  center,
  onClickMarker,
  zIndex,
  style,
  index,
}: Props): React.JSX.Element {
  if (!feature || !center) {
    return <span>null</span>;
  }

  return (
    <Marker
      key={feature?.id}
      longitude={center.geometry.coordinates[0]}
      latitude={center.geometry.coordinates[1]}
      onClick={() => onClickMarker(center)}
      style={{ zIndex: zIndex }}
    >
      <div
        title={title}
        className="relative z-50 flex h-7 w-7 -rotate-[135deg] cursor-pointer items-center justify-center overflow-hidden rounded-bl-3xl rounded-br-3xl rounded-tr-3xl border-2 border-zinc-900 text-center text-base"
        style={{
          backgroundColor: style?.fillColor ? style.fillColor : 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <div className="relative z-50 rotate-[135deg] text-center text-base">
          <span
            className="z-50 text-center text-base"
            style={{
              color: style?.color ? style.color : 'rgba(0, 0, 0, 0.8)',
            }}
          >
            {index + 1}
          </span>
        </div>
      </div>
    </Marker>
  );
}
