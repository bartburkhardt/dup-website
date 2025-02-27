import React, { useEffect, useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "@google/model-viewer";
import useDeviceDetection from "../../hooks/useDeviceDetection";
import configData from "../../assets/config/xrConfig.json";

export default function XRViewer({ id }) {

  const [config, setConfig] = useState(null);

  useEffect(() => {
    if (configData[id]) {
      setConfig(configData[id]);
    }
  }, [id]);

  const modelViewerRef = useRef(null);
  const isMobile = useDeviceDetection();

  if (!config) return null;

  const viewerUrl = `${window.location.origin}/xr/${id}`;
  const modelUrl = `${window.location.origin}/${config.modelUrl}`; 
  const modelIosUrl = `${window.location.origin}/${config.modelIosUrl}`;

  const handleARClick = () => {
    if (modelViewerRef.current && modelViewerRef.current.canActivateAR) {
      modelViewerRef.current.activateAR();
    }
  };

  const handle360 = () => {
    window.location.href = viewerUrl;
  };

  const renderContent = () => {
    switch (config.type) {
      case "ar":
        return isMobile ? (
          <div>
            <button onClick={handleARClick}>Bekijk in AR</button>
            <model-viewer
              ref={modelViewerRef}
              src={modelUrl}
              ios-src={modelIosUrl}
              ar
              auto-rotate
              camera-controls
              style={{ width: "100px", height: "100px" }}
            ></model-viewer>
          </div>
        ) : (
          <div>
            <p>Scan de QR-code om het model op je telefoon te bekijken:</p>
            <QRCodeCanvas value={viewerUrl} size={150} />
          </div>
        );
  
      case "360":
        return isMobile ? (
          <button onClick={handle360}>Bekijk de 360</button>
        ) : (
          <div>
            <p>Scan de QR-code om de omgeving op je telefoon te bekijken:</p>
            <QRCodeCanvas value={viewerUrl} size={150} />
          </div>
        )
        
  
      default:
        return <p>Onbekend type</p>;
    }
  };


  if (!id) return null;

  return (

      <div className="qr-code">

        {renderContent()}

      </div>

  );
}