"use client";

import { useRef, useState } from "react";
import Script from "next/script";

const PLANITY_KEY = "-OZIh3mOfeC3vHoANV1y";
const PRIMARY_COLOR = "#ef7d15";

export default function PlanityWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [polyfillsReady, setPolyfillsReady] = useState(false);

  const initPlanity = () => {
    if (!containerRef.current) return;
    (window as unknown as Record<string, unknown>).planity = {
      key: PLANITY_KEY,
      primaryColor: PRIMARY_COLOR,
      container: containerRef.current,
      options: {
        servicesNotCollapsed: true,
      },
    };
    setPolyfillsReady(true);
  };

  return (
    <>
      <div
        id="planity-widget"
        ref={containerRef}
        className="w-full min-h-[600px] rounded-3xl overflow-hidden"
      />
      <Script
        src="https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js"
        strategy="lazyOnload"
        onLoad={initPlanity}
      />
      {polyfillsReady && (
        <Script
          src="https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js"
          strategy="lazyOnload"
        />
      )}
    </>
  );
}
