import React from "react";

const JobCard = ({ img, title, children }) => {
    return (
        <div className="relative w-full max-w-sm mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl mb-4 flex items-center justify-center">
                    <div className="flex items-center justify-center w-2/3 h-full py-8">
                        {img}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default JobCard;