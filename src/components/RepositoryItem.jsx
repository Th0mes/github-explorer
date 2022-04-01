export const RepositoryItem = ({ repository }) => {
	return (
		<li>
			<strong>{repository?.name ?? 'Name'}</strong>
			<p>{repository?.description ?? 'Description'}</p>

			<a href={repository?.link ?? '#'}>Acessar repositório</a>
		</li>
	);
};
