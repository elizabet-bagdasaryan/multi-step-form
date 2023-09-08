import Arcade from "../../assets/arcade.png";
import Advanced from "../../assets/advanced.png";
import Pro from "../../assets/pro.png";
import { useState } from "react";
import "./Plan.css";

function Plan() {
	const [billing, setBilling] = useState(false);
	const [clickedPlan, setClickedPlan] = useState(-1);

	const handleBilling = () => {
		setBilling((prevState) => !prevState);
	};

	function handlePlan(planIndex: number) {
		setClickedPlan(planIndex);
	}

	return (
		<div className="p-6">
			<h2 className="text-3xl text-denim font-bold">Select your plan</h2>
			<p className="text-gray">
				You have the option of monthly or yearly billing.
			</p>
			<div className="md:flex ">
				<div
					onClick={() => handlePlan(1)}
					className={
						clickedPlan === 1
							? "flex w-full border border-1 border-purple bg-lightgrey rounded-md p-4 mt-4 md:h-48 md:block   mr-8"
							: "flex w-full border border-1 border-gbor rounded-md p-4 mt-4 md:h-48 md:block   mr-8"
					}
				>
					<img src={Arcade} className="w-12 h-12 mr-6 md:mt-4 mb-8" />
					<div>
						<p className="text-denim font-bold">Arcade</p>
						{billing ? (
							<p className="text-gray font-medium">$90/yr</p>
						) : (
							<p className="text-gray font-medium">$9/mo</p>
						)}
						<p className={billing ? "visible text-denim text-sm" : "hidden"}>
							{" "}
							2 months free
						</p>
					</div>
				</div>
				<div
					onClick={() => handlePlan(2)}
					className={
						clickedPlan === 2
							? "flex w-full border border-1 border-purple bg-lightgrey rounded-md p-4 mt-4 md:h-48 md:block   mr-8"
							: "flex w-full border border-1 border-gbor rounded-md p-4 mt-4 md:block mr-8"
					}
				>
					<img src={Advanced} className="w-12 h-12 mr-6 md:mt-4 mb-8" />
					<div>
						<p className="text-denim font-bold">Advanced</p>
						{billing ? (
							<p className="text-gray font-medium">$120/yr</p>
						) : (
							<p className="text-gray font-medium">$12/mo</p>
						)}
						<p className={billing ? "visible text-denim text-sm" : "hidden"}>
							{" "}
							2 months free
						</p>
					</div>
				</div>

				<div
					onClick={() => handlePlan(3)}
					className={
						clickedPlan === 3
							? "flex w-full border border-1 border-purple bg-lightgrey rounded-md p-4 mt-4 md:h-48 md:block  "
							: "flex w-full border border-1 border-gbor rounded-md p-4 mt-4 md:block "
					}
				>
					<img src={Pro} className="w-12 h-12 mr-6 md:mt-4 mb-8" />
					<div>
						<p className="text-denim font-bold">Pro</p>
						{billing ? (
							<p className="text-gray font-medium">$150/yr</p>
						) : (
							<p className="text-gray font-medium">$15/mo</p>
						)}
						<p className={billing ? "visible text-denim text-sm" : "hidden"}>
							{" "}
							2 months free
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center bg-bgray rounded-md p-2 w-full  justify-center mt-8">
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
	);
}

export default Plan;
