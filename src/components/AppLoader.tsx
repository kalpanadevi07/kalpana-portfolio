"use client";

import { useEffect, useState } from "react";
import { VolumeOff } from "./Icons";

export function AppLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = window.sessionStorage.getItem("kd-initialized");
    if (hasLoaded) return;

    setVisible(true);
    document.body.classList.add("is-loading");
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("is-loading");
      window.sessionStorage.setItem("kd-initialized", "true");
    }, 1650);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="app-loader" role="status" aria-live="polite">
      <div className="loader-grid" />
      <div className="loader-content">
        <div className="loader-monogram">
          <span>KD</span>
          <i />
        </div>
        <p>Initializing Intelligent Systems</p>
        <div className="loader-progress"><span /></div>
        <div className="sound-indicator" title="Opening sound disabled">
          <VolumeOff size={15} /> sound disabled
        </div>
      </div>
    </div>
  );
}
