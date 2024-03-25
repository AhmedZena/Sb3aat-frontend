import React from "react";

export default function PersonalProfile() {
  return (
    <>
      <div className="row bg-zinc-200 p-20 gap-5">
        <div className="col-lg-4 ">
          <div className="mb-5 bg-white p-10 border-1 rounded-md border-gray-100">
            <h2 className="text-xl font-bold mb-3">Statistics</h2>
            <hr className="mb-3" />
            <div className="">
              <h2>Ratings</h2>
              <p>Order completion rate: Not calculated yet</p>
              <p>Published services: 0</p>
              <p>Number of clients: 0</p>
              <p>Average speed of response: Didnt count</p>
              <p>Date of registration: February 12, 2024</p>
            </div>
          </div>
          <div className=" bg-white p-10 border-1 rounded-md border-gray-100">
            <h2>Documentations</h2>
            <hr className="mb-3 " />
            <p>Email</p>
            <p>Phone</p>
            <p>personal identification</p>
          </div>
        </div>

        <div className="col-lg-7">
          <div>
            <div className="mb-5 bg-white p-10 border-1 rounded-md border-gray-100">
              <h2 className="text-xl font-bold mb-3">brief about me</h2>
              <hr className="mb-3" />
              <div className="">
                <h2>Services</h2>
                <p></p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5 bg-white p-10 border-1 rounded-md border-gray-100">
              <h2 className="text-xl font-bold mb-3">brief about me</h2>
              <hr className="mb-3" />
              <div className="">
                <h2>Services</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  reiciendis mollitia earum iusto asperiores explicabo numquam,
                  labore quis ut distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
