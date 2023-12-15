"use client";
import ToggleButton from "@/app/utils/ToggleButton/ToggleButton";
import { useState } from "react";

export default function LightController() {
  const [toggle, setToggle] = useState({
    one: false,
    twp: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
  });
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[350px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-4">
          {["0", "73", "74", "75", "76", "77", "78"].map((item, index) => {
            return (
              <div className="bg-[#1134AD] h-[75px] w-full rounded-lg flex items-center justify-around mb-4 gap-2">
                <div>Light Mood {index + 1}</div>
                <ToggleButton id={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
