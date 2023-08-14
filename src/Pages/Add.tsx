function Add(){
  return(
    <>
    <h2 className="text-3xl text-denim font-bold">Pick add-ons</h2>
    <p className="text-gray">Add-ons help enhance your gaming experience.</p>
    <div className="flex border border-1 border-gbor rounded-md p-2 w-full items-center justify-between mt-6">
    <input type="checkbox"  id="1" className="w-5 h-5 "/>
    <label htmlFor="1">
        <p className="text-denim font-bold">Online service</p>
        <p className="text-gray text-xs">Access to multiplayer games</p>
      </label>
      <p className="text-purple font-bold">+$1/mo</p>
    </div>
    <div className="flex border border-1 border-gbor rounded-md p-2 w-full items-center justify-between mt-6">
    <input type="checkbox"  id="2" className="w-5 h-5"/>
    <label htmlFor="2">
        <p className="text-denim font-bold">Larger storage</p>
        <p className="text-gray text-xs">Extra 1TB of cloud save</p>
      </label>
      <p className="text-purple font-bold">+$2/mo</p>
    </div>

    <div className="flex border border-1 border-gbor rounded-md p-2 w-full items-center justify-between mt-6">
    <input type="checkbox"  id="3" className="w-5 h-5"/>
    <label htmlFor="3">
        <p className="text-denim font-bold">Customizable profile</p>
        <p className="text-gray text-xs">Custom theme on your profile</p>
      </label>
      <p className="text-purple font-bold">+$2/mo</p>
    </div>
    </>
  )
}


export default Add