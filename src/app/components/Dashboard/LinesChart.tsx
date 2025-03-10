import React from "react";
import LinesChartData from "@/app/mock/LinesChartData";

export default function LinesChart() {
    return (
        <div className="w-120 h-80 bg-gray-800 text-white rounded-2xl">
            <div className="p-1">
                <p className="text-2xl font-bold">March 2025</p>
                <p className="text-lg font-semibold">Sales Metrics</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
                <LinesChartData/>    
            </div>
        </div>
    
    );
  }