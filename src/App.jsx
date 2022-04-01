import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/globals.scss';

export const App = () => {
	return (
		<>
			<RepositoryList />
			<Counter />
		</>
	);
};
