import React from "react";
import "../../Styles/Home.css";
import Link from "next/link";

const Base = () => {
  return (
    <div className=" min-h-screen ">
      <h4 className="tagName">name1111</h4>
      <Link href="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded borderAnt">
          Button
        </button>
      </Link>
    </div>
  );
};

export default Base;
