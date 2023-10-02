import React from 'react';
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useAppDispatch, useAppSelector} from "../hooks";
import {clearMessage} from "../features/notificationSlice";

const Toast = () => {
    const dispatch = useAppDispatch()
    const notification = useAppSelector(state => state.notification)

    const closeToast = () => {
        dispatch(clearMessage())
    }

    return (<>
            {notification.isOpen && <div
                className={`fixed top-20 right-10 z-20 ${notification.isError ? 'text-red-900 bg-red-100' : 'text-green-900 bg-green-100'} p-2 rounded-lg flex justify-between items-center`}>
                <div>{notification.message}</div>
                <button onClick={closeToast}
                        className={`${notification.isError ? 'text-red-900' : 'text-green-900'} hover:text-red-500 focus:outline-none`}>
                    <XMarkIcon className="w-5 h-5" aria-hidden="true"/>
                </button>
            </div>}</>
    );
};

export default Toast;
