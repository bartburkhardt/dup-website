import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import configData from "../../assets/config/xrConfig.json";
import "@google/model-viewer";
import "aframe";

import "./index.scss";

function XR() {

  const { id } = useParams();
  const [config, setConfig] = useState(null);

  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (configData[id]) {
      setConfig(configData[id]);
    }
  }, [id]);

  const handleARClick = () => {
    if (modelViewerRef.current && modelViewerRef.current.canActivateAR) {
      modelViewerRef.current.activateAR();
    }
  };

  if (!config) return <div>Model niet gevonden</div>; 

  const viewerUrl = `${window.location.origin}/xr/${id}`;
  const modelUrl = `${window.location.origin}/${config.modelUrl}`; 
  const modelIosUrl = `${window.location.origin}/${config.modelIosUrl}`;

  return (
    <div className="xr-container">

      {config.type === "ar" ? (

          <div>
            <p>Welkom bij de 3D-weergave van het nieuwbouwproject!</p>
              
              <p>Klik op de knop hieronder om het model in AR te bekijken en op je tafel te projecteren.</p>
            <button onClick={handleARClick}>Projecteer het model op je tafel</button>
            
            <model-viewer
              ref={modelViewerRef}
              src={modelUrl}
              ios-src={modelIosUrl}
              ar
              auto-rotate
              camera-controls
              style={{ width: "300px", height: "300px" }}
            ></model-viewer>
          
          </div>


        // <div>modelUrl: {config.modelUrl}</div>
      ) : config.type === "360" ? (

        <div>
          <a-scene xr-mode-ui="enabled: false">
            <a-entity camera look-controls ></a-entity>
            <a-sky src={config.image} ></a-sky>
          </a-scene>
        </div>
      ) : (
        <p>Onbekend type</p>
      )}


    </div>
  );
}

export default XR;
