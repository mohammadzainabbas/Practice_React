import React, { useState } from "react";

function Counter() {
	// Declare a new state variable, which we'll call "count"
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	return (
		<div>
			<p>You clicked first counter {count1} times</p>
			<button onClick={() => setCount1(count1 + 1)}>Increment in counter 1</button>
			<button onClick={() => setCount1(count1 - 1)}>Decrement in counter 1</button>
			<p>You clicked second counter {count2} times</p>
			<button onClick={() => setCount2(count2 + 1)}>Increment in counter 2</button>
			<button onClick={() => setCount2(count2 - 1)}>Decrement in counter 2</button>
		</div>
	);
}

const App = () => {
	return <Counter />;
};

export default App;
