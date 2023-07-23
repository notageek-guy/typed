import React from "react";
import LazyEditors from "./editor/editor";

const Demo = () => {
  return (
    <div className="max-w-[300px] mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ">
      <div className="px-4 flex flex-col h-[40vh] mt-8 rounded shadow-md">
        <div className="w-full flex py-2 gap-2 px-4 items-center shadow-md shadow-teal-600 h-14 bg-teal-500">
          <p className="bg-slate-10 text-teal-500 w-6 h-6 rounded-full items-center bg-white flex justify-center">
            ti
          </p>
          <p className="text-center text-xl text-white font-bold">typed</p>
        </div>
        <div className="scrollbar-hide overflow-y-auto">
          <LazyEditors />
        </div>
      </div>
    </div>
  );
};

export default Demo;
