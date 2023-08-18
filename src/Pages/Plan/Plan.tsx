import Arcade from "../../assets/arcade.png"
import Advanced from "../../assets/advanced.png"
import Pro from "../../assets/pro.png"
import { useState } from "react";
import "./Plan.css"

function Plan(){


 const [billing, setBilling] = useState(false);



  const handleBilling = () => {
    setBilling((prevState) => !prevState);
  };



    return(
        <div className="p-6">

    <h2 className="text-3xl text-denim font-bold">Select your plan</h2>
    <p className="text-gray">You have the option of monthly or yearly billing.</p>
    <div className="flex w-full border border-1 border-gbor rounded-md p-4 mt-4">
<img src={Arcade} className="w-12 h-12 mr-6"/>
<div>
    <p className="text-denim font-bold">Arcade</p>
    <p className="text-gray font-medium">$9/mo</p>
</div>

    </div>
    <div className="flex w-full border border-1 border-gbor rounded-md p-4 mt-4">
<img src={Advanced} className="w-12 h-12 mr-6"/>
<div>
    <p className="text-denim font-bold">Advanced</p>
    <p className="text-gray font-medium">$12/mo</p>
</div>

    </div>

    <div className="flex w-full border border-1 border-gbor rounded-md p-4 mt-4">
<img src={Pro} className="w-12 h-12 mr-6"/>
<div>
    <p className="text-denim font-bold">Pro</p>
    <p className="text-gray font-medium">$15/mo</p>
</div>
</div>
<div className="flex items-center bg-bgray rounded-md p-2 w-full  justify-center">
        <p
          className="text-denim text-lg font-medium my-2"
          style={{ color: billing ? "#9699AA" : "#022959" }}
        >
      Monthly
        </p>
        <label className="switch mx-4">
          <input type="checkbox" onClick={handleBilling} />
          <span className="slider round"></span>
        </label>
        <p
          className="text-black text-lg font-medium my-2"
          style={{ color: billing ? "#022959" : "#9699AA" }}
        >
         Yearly
        </p>
      </div>

   
        </div>
    )
}


export default Plan