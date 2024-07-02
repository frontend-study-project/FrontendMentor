import { useEffect } from "react";
import { useSelector } from "react-redux";

declare global {
  interface Window {
    kakao: any;
  }
}

export const Map = () => {
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    const [lat, long] = [data.latitude, data.longitude];
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(lat, long),
      level: 3
    };

    const map = new window.kakao.maps.Map(container, options);
    const markerPosition = new window.kakao.maps.LatLng(lat, long);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

  }, [data])

  return (
    <div id="map" className="w-full grow"></div>
  )
}
