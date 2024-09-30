import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import About from './Components/About';
function App() {
  return (
    <>
			<Header/>
			<main>
				<Hero/>
				<Companies/>
				<About/>
			</main>
		</>
  );
}

export default App;
