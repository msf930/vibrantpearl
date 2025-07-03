import React from "react";

export default function FeaturedPostSkeleton() {
    return (
        <div className="w-full flex justify-center items-center py-8 bg-[#EBF9FF] h-[400px]">
            <div className="bg-white/80 rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden h-full animate-pulse">
                <div className="md:w-1/2 w-full h-full flex items-center justify-center relative">
                    <div className="bg-gray-200 rounded-lg w-[95%] h-[95%]" />
                </div>
                <div className="p-6 flex flex-col justify-between md:w-1/2 w-full">
                    <div>
                        <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
                        <div className="h-5 bg-gray-200 rounded w-2/3 mb-2" />
                        <div className="h-4 bg-gray-200 rounded w-full mb-4" />
                        <div className="flex flex-wrap gap-2 mb-2">
                            <div className="h-4 w-16 bg-gray-200 rounded" />
                            <div className="h-4 w-12 bg-gray-200 rounded" />
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-1/4" />
                    </div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-1/2" />
                </div>
            </div>
        </div>
    );
}