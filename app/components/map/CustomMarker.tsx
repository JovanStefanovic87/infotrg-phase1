import React, { useEffect } from 'react';

interface CustomMarkerProps {
	map: google.maps.Map;
	position: { lat: number; lng: number };
	label: string;
}

const getCustomIcon = () => {
	const svgMarker = {
		path: 'M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z',
		fillColor: '#FF0000',
		fillOpacity: 1,
		strokeWeight: 2,
		strokeColor: '#FFFFFF',
		scale: 1.5,
		anchor: new google.maps.Point(12, 24),
	};

	return svgMarker;
};

const CustomMarker: React.FC<CustomMarkerProps> = ({ map, position, label }) => {
	useEffect(() => {
		if (!map) return;

		const marker = new google.maps.Marker({
			position,
			map,
			icon: getCustomIcon(),
		});

		const labelDiv = document.createElement('div');
		labelDiv.className = 'label';
		labelDiv.style.position = 'absolute';
		labelDiv.style.backgroundColor = 'white';
		labelDiv.style.border = '1px solid black';
		labelDiv.style.padding = '4px';
		labelDiv.style.borderRadius = '4px';
		labelDiv.style.fontSize = '12px';
		labelDiv.style.fontWeight = 'bold';
		labelDiv.style.color = 'black';
		labelDiv.style.textAlign = 'center';
		labelDiv.textContent = label;

		const markerPosition = new google.maps.LatLng(position.lat, position.lng);
		const overlay = new google.maps.OverlayView();
		overlay.draw = () => {
			const projection = overlay.getProjection();
			const divPosition = projection.fromLatLngToDivPixel(markerPosition);
			if (divPosition) {
				labelDiv.style.left = divPosition.x + 'px';
				labelDiv.style.top = divPosition.y + 'px';
			}
		};
		overlay.setMap(map);

		return () => {
			marker.setMap(null);
			overlay.setMap(null);
		};
	}, [map, position, label]);

	return null;
};

export default CustomMarker;
