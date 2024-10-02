import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies';
import About from './Components/About';
import Popular from './Components/Popular';
import Furniture from './Components/Furniture';
import Customer from './Components/Customer';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
function App() {
  return (
    <>
			<Header/>
			<main>
				<Hero/>
				<Companies/>
				<About/>
				<Popular/>
				<Furniture/>
				<Customer/>
				<Subscribe/>
			</main> 
			<Footer/>
		</>
  );
}
export default App;