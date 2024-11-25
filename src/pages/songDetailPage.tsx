import React from "react";
import BackButton from "../components/BackButton";


const SongDetailPage : React.FC  = () => {
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="pt-4 pb-8 px-8 bg-gradient-to-b from-green-950 to-green-800 ">
          <div className="mb-2">
            <BackButton/>
          </div>
          <h1 className="font-bold">Song</h1>
        
        </div>

      </div>
    );
};
  

export default SongDetailPage;