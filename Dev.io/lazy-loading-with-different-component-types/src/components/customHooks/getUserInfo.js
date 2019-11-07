import React, { useEffect, useState } from "react";

const useUserInfo = (profile_link = "mohammadzainabbas") => {
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

const UserInfo = ({ profile_link }) => {
	const userInfo = useUserInfo(profile_link);

	if (!!userInfo) {
		const { avatar_url, name, location, bio, public_repos, followers, following } = userInfo;
		return (
			<div className="profileDiv">
				<img className="image" src={avatar_url} alt={name} />
				<p>Name: {name}</p>
				<p>Location: {location}</p>
				<p>Bio: {bio}</p>
				<p>Total Public Repos: {public_repos}</p>
				<p>Followers: {followers}</p>
				<p>Following: {following}</p>
			</div>
		);
	} else {
		return <></>;
	}
};

export default UserInfo;
