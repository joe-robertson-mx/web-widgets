import { Dimensions } from "@mendix/pluggable-widgets-commons";
import { CSSProperties, ReactNode } from "react";
export interface ModeledMarker {
    address?: string;
    latitude?: number;
    longitude?: number;
    title?: string;
    customMarker?: string;
    action?: () => void;
    popup?: ReactNode;
}

export interface Marker {
    latitude: number;
    longitude: number;
    url: string;
    onClick?: () => void;
    title?: string;
    popup?: ReactNode;
}

export interface SharedProps extends Dimensions {
    autoZoom: boolean;
    optionZoomControl: boolean;
    zoomLevel: number;
    optionDrag: boolean;
    optionScroll: boolean;
    showCurrentLocation: boolean;
    currentLocation?: Marker;
    locations: Marker[];
    mapsToken?: string;
    className?: string;
    style?: CSSProperties;
}
