import { createElement, ReactElement } from "react";
import { BarcodeScannerPreviewProps } from "../typings/BarcodeScannerProps";
import { BarcodeScanner } from "./components/BarcodeScanner";

export function preview(props: BarcodeScannerPreviewProps): ReactElement {
    // TODO: Implement design preview
    return <BarcodeScanner onClose={undefined} onDetect={undefined} showMask={props.showMask} class={props.class} />;
}