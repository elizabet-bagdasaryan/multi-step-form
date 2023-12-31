import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Info from "./Pages/Info.tsx";
import Plan from "./Pages/Plan/Plan.tsx";
import Add from "./Pages/Add.tsx";
import Summary from "./Pages/Summary";
import Navbar from "./Navigation/Navbar.tsx";
function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Navigate to="/info" />} />
					<Route path="/info" element={<Info />} />
					<Route path="/plan" element={<Plan />} />
					<Route path="/add" element={<Add />} />
					<Route path="/summary" element={<Summary />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
