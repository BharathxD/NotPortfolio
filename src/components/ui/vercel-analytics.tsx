"use client";

import dynamic from "next/dynamic";

const Analytics = dynamic(() => import("@vercel/analytics/react").then((module) => module.Analytics), {
  ssr: false,
});

const VercelAnalytics = () => <Analytics />;

export default VercelAnalytics;
