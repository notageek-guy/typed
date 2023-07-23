import React from "react";
import Options from "@/app/components/options/options";
import EditableWindow from "@/app/components/editable/EditableWindow";
import OutputWindow from "@/app/components/editable/OutputWindow";
import Navbar from "../components/header/navbar";

function Page() {
  return (
    <div className="bg-gray-800 flex flex-col h-screen p-6 ">
      <Navbar />
      <div className="text-right">
        <Options />
      </div>
      <div className="flex flex-1 flex-col md:flex-row gap-2 overflow-y-auto">
        <div className="hide-scrollbar rounded ring-1 p-2 hover:ring-2 ring-gray-700 flex-[0.4]  overflow-x-hidden overflow-y-scroll">
          <EditableWindow />
        </div>
        <div className=" scrollbar-hide rounded flex-[0.6] hover:ring-2 ring-gray-700 p-2 overflow-y-auto">
          <OutputWindow />
        </div>
      </div>
    </div>
  );
}

export default Page;
