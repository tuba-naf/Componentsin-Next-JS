import React from "react";

function Navbar() {
  return (
    <div className="bg-black h-12" >
      <div className="text-yellow-50 flex justify-between items-center">
        <h1 className="text-xl m-2 cursor-pointer">Navbar</h1>
        <ul className="flex gap-4 mr-10 cursor-pointer">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
