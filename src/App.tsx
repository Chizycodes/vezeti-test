import Footer from './components/Footer';
import Header from './components/Header';
import ProductModal from './components/ProductModal';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<Header>
				<Home />

				<Footer />
			</Header>
		</div>
	);
}

export default App;
