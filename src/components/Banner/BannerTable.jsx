import React from 'react';

const ImageUploadSection = () => {
    return (
        <div className="p-4 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Main Screen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gray-100 flex items-center justify-center rounded-md border border-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8 md:w-10 md:h-10 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75v10.5m5.25-5.25H6.75m13.5-7.5A2.25 2.25 0 0018 4.5h-12A2.25 2.25 0 003.75 6.75v10.5A2.25 2.25 0 006 19.5h12a2.25 2.25 0 002.25-2.25V6.75z"
                                />
                            </svg>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                                Upload
                            </button>
                            <button className="px-3 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploadSection;