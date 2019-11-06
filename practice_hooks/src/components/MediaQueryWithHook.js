import React, { useState, useEffect } from "react";

const useMediaQuery = query => {
	let [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		let media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		let listener = () => setMatches(media.matches);
		media.addListener(listener);
		return () => media.removeListener(listener);
	}, [matches, query]);
	return matches;
};

const App = () => {
	let small = useMediaQuery("(max-width: 800px)");
	let large = useMediaQuery("(min-width: 800px)");
	return (
		<div className="Media">
			<h1>Media</h1>
			<p>Small? {small ? "Yeah" : "Nope"}.</p>
			<p>Large? {large ? "Yeah" : "Nope"}.</p>
		</div>
	);
};

export default App;
