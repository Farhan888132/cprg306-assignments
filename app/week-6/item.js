"use client";
import { useState } from "react";

export default function Item({id, name, quantity, category, onDelete}) {
  
  const [visibility, setVisibility] = useState("invisible");

  return (
    <main className="text-black">
      <div className="max-w-96 "> 
        <ul className=" bg-mute p-2.5 m-4 w-96 border-2 border-black border-opacity-50" onMouseEnter={() => setVisibility("visible")} onMouseLeave={() => setVisibility("invisible")}>
        <button className={"float-right relative left-1 bottom-2 font-extralight text-xs  pl-2 pb-2 "+visibility} onClick={() => onDelete(id)}>x</button>
          <li className="text-xl font-bold">{name}</li>
          <li className="text-sm">Buy {quantity} in {category}</li>
        </ul>
      </div>
    </main>
  );
}