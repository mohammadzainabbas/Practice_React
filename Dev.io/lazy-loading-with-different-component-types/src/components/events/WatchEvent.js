import React from "react";
const WatchEvent = ({ created_at: eventDate, repo, org, actor, payload }) => {
	const { display_login: login, url: actorURL } = actor;
	const { action } = payload;
	const { name: repoName, url: repoURL } = repo;

	return (
		<div class="event">
			<h3>
				Watch - (<small>{eventDate.toString()}</small>)
			</h3>
			<p>
				<a href={actorURL}>{login}</a> has {action} following <a href={repoURL}>{repoName}</a>
			</p>
		</div>
	);
};

export default WatchEvent;
