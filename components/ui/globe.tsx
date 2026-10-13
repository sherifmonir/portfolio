"use client";

import { useEffect, useRef, useState } from "react";
import { Color} from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, ThreeElement } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/app/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElement<typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const cameraZ = 300;

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig?: GlobeConfig;
  data?: Position[];
}

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    {
      size: number;
      order: number;
      color: (t: number) => string;
      lat: number;
      lng: number;
      altitude: number;
    }[]
  >([]);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#062056",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };

    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  };

  const _buildData = () => {
    if (!data || data.length === 0) return;

    const points = [];
    for (let i = 0; i < data.length; i++) {
      const arc = data[i];
      if (
        isNaN(arc.startLat) ||
        isNaN(arc.startLng) ||
        isNaN(arc.endLat) ||
        isNaN(arc.endLng)
      ) {
        continue;
      }

      const rgb = hexToRgb(arc.color) || { r: 255, g: 255, b: 255 };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) =>
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
        altitude: arc.arcAlt,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) =>
          `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
        altitude: arc.arcAlt,
      });
    }

    setGlobeData(points);

    if (globeRef.current) {
      globeRef.current
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .hexPolygonColor(() => defaultProps.polygonColor)
        .arcsData(data)
        .arcStartLat((d: any) => d.startLat)
        .arcStartLng((d: any) => d.startLng)
        .arcEndLat((d: any) => d.endLat)
        .arcEndLng((d: any) => d.endLng)
        .arcColor((e: any) => e.color)
        .arcAltitude((e: any) => e.arcAlt)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((e: any) => e.order)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);
    }
  };

  return <threeGlobe ref={globeRef} />;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const sampleArcs = [
    {
      order: 1,
      startLat: 25.276987,
      startLng: 55.296249,
      endLat: 30.04442,
      endLng: 31.235712,
      arcAlt: 0.1,
      color: "#06b6d4",
    },
  ];

  return (
    <Canvas camera={{ position: [0, 0, cameraZ], fov: 45 }}>
      <ambientLight color={globeConfig?.ambientLight || "#ffffff"} intensity={0.6} />
      <directionalLight
        color={globeConfig?.directionalLeftLight || "#ffffff"}
        position={[-400, 100, 400]}
      />
      <directionalLight
        color={globeConfig?.directionalTopLight || "#ffffff"}
        position={[200, 500, 200]}
      />
      <Globe {...props} data={props.data || sampleArcs} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}