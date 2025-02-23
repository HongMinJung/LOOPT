'use client';

import { useEffect } from 'react';
import { Paper } from '@mantine/core';

declare global {
  interface Window {
    kakao: any;
  }
}

export function MapView() {
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAP_KEY&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '100%' }} />
  );
} 