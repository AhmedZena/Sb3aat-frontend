import React from "react";
import Card from "react-bootstrap/Card";


export default function Myservices() {
  return (
    <>
      <div className="mb-5 bg-zinc-200 p-10 border-1 rounded-md border-gray-100">
        <h2 className="text-xl font-bold mb-3">My Services</h2>
        <div/>
        <hr className="mb-3" />
        <div className="">
         
          <Card className="max-w-xs max-h-200 border-none bg-white shadow-xl">
                <Card.Img
                  variant="top"
                  src="https://khamsat.hsoubcdn.com/images/services/858931/958f63c89c0b6509c32c49c5c67e8e6a.jpg"
                  className="h-64 w-full object-cover" 
                />
                <Card.Body className="h-40">
                  <a href="#" className="text-blue-900 font-bold">
                 service Name
                  </a>
                  <Card.Text className="text-sm text-black">Category/sub Category</Card.Text>
        
              
                  <span className="text-yellow-500 text-2xl ml-1">Start From 7 $</span>
                </Card.Body>
              </Card>
        </div>
      </div>
    </>
  );
}
