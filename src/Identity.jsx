import { useState } from "react";
import "./App.css";
export default function Identity() {
  const [name, setName] = useState("suraj");
  return (
    <div className="idDetails">
      <div className="bg-[#dedede] h-[30px] w-[30px] flex items-center justify-center rounded-[50%] text-[#ffffff] border-[1.5px] border-solid border-[#b8b4b4]">
        {name ? name[0].toUpperCase() : "A"}
      </div>
      <div className="spans">
        <span className="font-[600] text-[12px] text-[#000000]">
          admin- <span>{name}</span>
        </span>
        <span>admin@gmail.com</span>
      </div>
    </div>
  );
}
