'use client'
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngLiteral } from "leaflet";
import '@/app/ui/sass/map.scss'
import { NextPage } from "next";

const Page = () => {
    const position: LatLngLiteral = { lat: 31.6295, lng: -7.9811 };

    return (
        <div>
            <MapContainer
                className="h-screen"
                center={position}
                zoom={6}
                scrollWheelZoom={true}
                preferCanvas={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default Page;
