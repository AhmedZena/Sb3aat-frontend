import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ item }) {
    return (
        <Link to={`/Course/${item._id}`}>
            <img src={item.courseImg} alt="" />
            <div className='info'>
                <div className="user">
                    {/* Assuming item.freelance is an object with img and name properties */}
                    <div><img src={item.freelance.img} alt={item.freelance.name} /></div>
                    <span>{item.freelance.name}</span>
                </div>
                <div className="desc">
                    <p>{item.description}</p>
                    {[...Array(5)].map((star, i) => (
                        <svg
                            key={i}
                            className="h-6 w-6 text-yellow-500 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    ))}
                </div>
            </div>
            <div className='descripe'></div>
        </Link>
    );
}
