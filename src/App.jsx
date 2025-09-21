import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
	const data = [
		{
			id: 1,
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафт',
			date: new Date()
		},
		{
			id: 2,
			title: 'Поход в годы',
			text: 'Думал, что очень много времени',
			date: new Date()
		}
	];

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{data.map((el) => (
						<CardButton key={el.id}>
							<JournalItem title={el.title} text={el.text} date={el.date} />
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>123</Body>
		</div>
	);
}

export default App;
