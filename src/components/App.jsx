import React, { useState, Suspense } from "react";
import "./App.css";
import img from "./img.png";
import { foo } from './foobar';

const Home = React.lazy(() => import("./Home"));

const App = () => {
	const [show, setShow] = useState(false);
	const clickButton = () => {
		setShow(true);
		import('./showTime').then(({ default: show }) => {
		    show()
		})
	};
	return (
		<div>
			{show && (
				<Suspense fallback={<div>Loading...</div>}>
					<Home />
					<img src={img} alt="" />
				</Suspense>
			)}
            {/* <img src="/assets/img.png" /> */}
			<button type="button" onClick={clickButton}>Test</button>
			<h2 className="head">test2asldfjasdf</h2>
		</div>
	);
};
export default App;
