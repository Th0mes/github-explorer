import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/components/repositoryList.scss';

interface Repository {
	id: string;
	name: string;
	description: string;
	html_url: string;
}

export const RepositoryList = () => {
	const [repositories, setRepositories] = useState<Repository[]>([]);

	useEffect(() => {
		fetch('https://api.github.com/users/th0mes/repos')
			.then((response) => response.json())
			.then((data) => setRepositories(data));
	}, []);

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				{repositories.map((repository) => (
					<RepositoryItem key={repository.id} repository={repository} />
				))}
			</ul>
		</section>
	);
};
