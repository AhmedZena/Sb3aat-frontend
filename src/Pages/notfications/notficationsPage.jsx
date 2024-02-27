import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get("https://sb3aat.onrender.com/api/notifications")
            .then((response) => {
                setNotifications(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='container bg-white p-2 mb-5'>
                <h1 className='text-3xl font-bold mt-5'>Notifications</h1>
                {[...Array(5)].map((notfication, i) => (
                    <div key={i} className='container bg-white py-5 text-center items-center flex border-bottom border-black '>
                        <img src="https://avatars.hsoubcdn.com/477c1806403780d9be54db92ffcc9442?s=256" alt="User Img" className='w-12 h-12 rounded-full' />
                        <h3 className='ml-5 text-2xl font-semibold inline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nisi.</h3>
                        <h4 className='ml-5 text-sm text-gray-600 font-semibold inline-block'>Posted on 12/12/2020</h4>
                    </div>
                ))}
            </div>
        </>
    );
}
