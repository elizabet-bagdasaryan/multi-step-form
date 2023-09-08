import { useState } from "react";

function Add() {
	const [clickedService, setClickedService] = useState(false);
	const [clickedStorage, setClickedStorage] = useState(false);
	const [clickedProf, setClickedProf] = useState(false);

	function handleService() {
		setClickedService((prevState) => !prevState);
	}

	function handleStorage() {
		setClickedStorage((prevState) => !prevState);
	}

	function handleProf() {
		setClickedProf((prevState) => !prevState);
	}
	return (
		<div className="p-6">
			<h2 className="text-3xl text-denim font-bold">Pick add-ons</h2>
			<p className="text-gray">Add-ons help enhance your gaming experience.</p>
			<div
				onClick={handleService}
				className={
					clickedService
						? "flex border border-1 border-purple bg-lightgrey rounded-md p-2 w-full items-center justify-between mt-6"
						: "flex border border-1 border-gbor rounded-md p-2 w-full items-center justify-between mt-6"
				}
			>
				<div className="flex items-center">
					<input type="checkbox" id="1" className="w-5 h-5 mr-4" />
					<label htmlFor="1">
						<p className="text-denim font-bold">Online service</p>
						<p className="text-gray text-xs">Access to multiplayer games</p>
					</label>
				</div>
				<p className="text-purple font-bold">+$1/mo</p>
			</div>
			<div
				onClick={handleStorage}
				className={
					clickedStorage
						? "flex border border-1 border-purple bg-lightgrey rounded-md p-2 w-full items-center justify-between mt-6"
						: "flex border border-1 border-gbor rounded-md p-2 w-full items-center justify-between mt-6"
				}
			>
				<div className="flex items-center">
					<input type="checkbox" id="2" className="w-5 h-5 mr-4" />
					<label htmlFor="2">
						<p className="text-denim font-bold">Larger storage</p>
						<p className="text-gray text-xs">Extra 1TB of cloud save</p>
					</label>
				</div>
				<p className="text-purple font-bold">+$2/mo</p>
			</div>
			<div
				onClick={handleProf}
				className={
					clickedProf
						? "flex border border-1 border-purple bg-lightgrey rounded-md p-2 w-full items-center justify-between mt-6"
						: "flex border border-1 border-gbor rounded-md p-2 w-full items-center justify-between mt-6"
				}
			>
				<div className="flex items-center">
					<input type="checkbox" id="3" className="w-5 h-5 mr-4" />
					<label htmlFor="3">
						<p className="text-denim font-bold">Customizable profile</p>
						<p className="text-gray text-xs">Custom theme on your profile</p>
					</label>
				</div>
				<p className="text-purple font-bold">+$2/mo</p>
			</div>
		</div>
	);
}

export default Add;
