import React from "react";
import { Check ,X ,Star } from 'lucide-react';

export default function PersonalProfile() {
  return (
    <>
      <div className="gap-5 p-5 mx-auto font-bold row bg-zinc-200">
      <div className="col-lg-4">
          <div className="p-10 mb-5 bg-white border-gray-100 h-[400px] rounded-md border-1">
            <h2 className="mb-3 text-xl font-bold">Statistics</h2>
            <hr className="mb-3" />
            <div className="flex flex-col gap-3">
              <h2 className="flex justify-between">Ratings <span className="flex text-yellow-500"> (1) <Star /><Star /><Star /><Star /><Star /> </span> </h2>
              <p className="flex justify-between">Order completion rate: <span className="p-1 text-white bg-gray-400">100%</span></p>
              <p className="flex justify-between">Published services: <span>1</span></p>
              <p className="flex justify-between">Number of clients: <span>1</span></p>
              <p className="flex justify-between">Average speed of response: <span>50 min</span></p>
              <p className="flex justify-between">Date of registration: <span>February 12, 2024</span></p>
            </div>
          </div>
          <div className="p-10 bg-white border-gray-100 rounded-md border-1">
            <h2>Documentations</h2>
            <hr className="mb-3" />
            <p className="flex">Email <span className="ml-5 font-bold text-green-500"><Check /></span></p>
            <p className="flex">Phone number <span className="ml-5 font-bold text-green-500"><Check /></span></p>
            <p className="flex">Personal identification <span className="ml-5 font-bold text-red-500"><X /></span> </p>
          </div>
        </div>

        <div className="col-lg-7">
          <div>
            <div className="p-10 mb-5 bg-white border-gray-100 rounded-md border-1">
              <h2 className="mb-3 text-xl font-bold">brief about me</h2>
              <hr className="mb-3" />
              <div className="">
                <h2>He did not write a personal profile</h2>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <div className="p-10 mb-5 h-[400px] bg-white border-gray-100 rounded-md border-1">
              <h2 className="mb-3 text-xl font-bold">My Services</h2>
              <hr className="mb-3" />
              <div className="">
             
                <p>
                No services add yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
