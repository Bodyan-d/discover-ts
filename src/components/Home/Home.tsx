import DailyNews from '../DailyNews/DailyNews';
import BrowseAll from '../BrowseAll/BrowseAll';

function Home() {
	return (
		<section className='Home'>
			<header>
				<h1 className='app-title'>Discover</h1>
			</header>
			<DailyNews></DailyNews>
			<BrowseAll></BrowseAll>
		</section>
	);
}

export default Home;
