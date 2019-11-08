import { useEffect, useState } from "react";

export const useUserInfo = (profile_link = "mohammadzainabbas") => {
	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		fetch(`https://api.github.com/users/${profile_link}`)
			.then(res => res.json())
			.then(res => {
				setUserInfo(res);
			});
	}, [profile_link]);
	return userInfo;
};
