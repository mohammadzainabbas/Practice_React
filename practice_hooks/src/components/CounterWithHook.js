import React, { useState } from "react";

function Counter() {
	// Declare a new state variable, which we'll call "count"
	const [{ counter1, counter2 }, setCounter] = useState({ counter1: 0, counter2: 0 });

	return (
		<div>
			<p>You clicked first counter {counter1} times</p>
			<button onClick={() => setCounter({ counter1: counter1 + 1, counter2 })}>Increment in counter 1</button>
			<button onClick={() => setCounter({ counter1: counter1 - 1, counter2 })}>Decrement in counter 1</button>
			<p>You clicked second counter {counter2} times</p>
			<button onClick={() => setCounter({ counter1, counter2: counter2 + 1 })}>Increment in counter 2</button>
			<button onClick={() => setCounter({ counter1, counter2: counter2 - 1 })}>Decrement in counter 2</button>
		</div>
	);
}

const App = () => {
	return <Counter />;
};

export default App;
