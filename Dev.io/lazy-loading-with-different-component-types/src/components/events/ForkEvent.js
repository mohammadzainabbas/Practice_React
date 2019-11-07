import React from "react";
const ForkEvent = ({ created_at: eventDate, repo, org, actor, payload }) => {
	const { display_login: login, url: actorURL } = actor;
	const { name: repoName, url: repoURL } = repo;

	return (
		<div className="event">
			<h3>
				Fork - (<small>{eventDate.toString()}</small>)
			</h3>
			<p>
				<a href={actorURL}>{login}</a> has forked <a href={repoURL}>{repoName}</a>
			</p>
		</div>
	);
};

export default ForkEvent;
