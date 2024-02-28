import React from "react";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div className="container">
      <div className="cartHeading  bg-[#f5f5f5] flex flex-col p-10 pl-1 pt-1 m-60 mb-20 justify-between items-center">
        <table className="w-full m-auto table-auto">
          <tr className=" h-40 text-center font-bold">
            <th className=" ">Services</th>
            <th className=" ">Price</th>
            <th className=" ">Quantity</th>
            <th className=" ">Subtotal</th>
          </tr>

          <tr className=" h-40">
            <td className=" h-40 flex justify-center">
              <div className="">
                <img
                  src="https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png"
                  className="w-40 h-30 col-span-2"
                />
                <p className="col-span-2">Angular Course</p>
              </div>
            </td>
            <td className=" h-40 mt-10 ml-5 gap-3">1500$</td>
            <td className=" h-40 m-30 gap-3">
              <div className="inline-block align-middle">
                <div className=" ml-40">
                  <button className=" w-8 h-8 border border-black/40 ">
                    +
                  </button>
                  <div className="inline-block align-middle m-3">1</div>
                  <button className=" w-8 h-8 border border-black/40">-</button>
                </div>
              </div>
            </td>
            <td className="">1500$</td>
          </tr>

          <tr className="">
            <td className="h-40 flex justify-center">
              <div>
                <img
                  src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/662d3d0e3373.jpg"
                  className="w-40 h-30 col-span-2"
                />
                <p>React Course</p>
              </div>
            </td>
            <td className="">1200$</td>

            <td className="">
              <div className=" inline-block align-middle">
                <div className="ml-40">
                  <button className="w-8 h-8 border border-black/40 ">+</button>
                  <div className=" inline-block align-middle m-3 ">3</div>
                  <button className="w-8 h-8 border border-black/40">-</button>
                </div>
              </div>
            </td>
            <td className="">3600$</td>
          </tr>
        </table>
        <div className="flex justify-center">
          <Link
            to="/pay"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
