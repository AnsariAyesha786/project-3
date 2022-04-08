import React from "react";
import { useNavigate } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";

const Main = () => {

    const navigate = useNavigate()

    const userLogout = () => {
        navigate("/")
    }

  return (
  <div>
    
     <Online>
<div className="containers">
<h1 className="text-center text-white bg-danger w-100 py-4">welcome back</h1>
</div>

     </Online>
      <Offline>
          <div className="text-center">
              <img src='https://dz2cdn1.dzone.com/storage/temp/13837795-no-internet.png' alt="" />
          </div>
      </Offline>
    </div>
  );
};

export default Main;
