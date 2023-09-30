import React from 'react';
import {XMarkIcon} from "@heroicons/react/24/outline";

const Toast = ({ message,isError, onClose }) => {
    return (
        <div className={`fixed top-20 right-10 ${isError ? 'text-red-900 bg-red-100':'text-green-900 bg-green-100'} p-2 rounded-lg flex justify-between items-center`}>
            <div>{message}</div>
            <button onClick={onClose} className={`${isError ? 'text-red-900' : 'text-green-900'} hover:text-red-500 focus:outline-none`}>
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
            </button>
        </div>
    );
};

export default Toast;
