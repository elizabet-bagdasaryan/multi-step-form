import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
	const [clickedPage, setClickedPage] = useState(1);
	const background = "url('../assets/background-mob.png')";

	function handlePages(pageIndex: number) {
		setClickedPage(pageIndex);
	}

	return (
		<div style={{ background }} className=" bg-no-repeat">
			<div className="wrapper">
				<Link to="/info" style={{ textDecoration: "none" }}>
					<div
						onClick={() => handlePages(1)}
						className={
							clickedPage === 1
								? "w-10 h-10  rounded-full flex items-center justify-center text-denim bg-sky font-bold"
								: "w-10 h-10 border-2 border-solid border-white rounded-full flex items-center justify-center text-white font-bold"
						}
					>
						1
					</div>
				</Link>

				<Link to="/plan" style={{ textDecoration: "none" }}>
					<div
						onClick={() => handlePages(2)}
						className={
							clickedPage === 2
								? "w-10 h-10  rounded-full flex items-center justify-center text-denim bg-sky font-bold"
								: "w-10 h-10 border-2 border-solid border-white rounded-full flex items-center justify-center text-white font-bold"
						}
					>
						2
					</div>
				</Link>
				<Link to="/add" style={{ textDecoration: "none" }}>
					<div
						onClick={() => handlePages(3)}
						className={
							clickedPage === 3
								? "w-10 h-10  rounded-full flex items-center justify-center text-denim bg-sky font-bold"
								: "w-10 h-10 border-2 border-solid border-white rounded-full flex items-center justify-center text-white font-bold"
						}
					>
						3
					</div>
				</Link>
				<Link to="/summary" style={{ textDecoration: "none" }}>
					<div
						onClick={() => handlePages(4)}
						className={
							clickedPage === 4
								? "w-10 h-10  rounded-full flex items-center justify-center text-denim bg-sky font-bold"
								: "w-10 h-10 border-2 border-solid border-white rounded-full flex items-center justify-center text-white font-bold"
						}
					>
						4
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
