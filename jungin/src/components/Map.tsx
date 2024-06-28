import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export const Map = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };

    var map = new window.kakao.maps.Map(container, options);
    var markerPosition = new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    var marker = new window.kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

  }, [])

  return (
    <div id="map" className="w-full grow"></div>
  )
}
