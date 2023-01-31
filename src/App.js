import './App.css';
import Hero from './components/Hero';
import Cards from './components/programs/cards';
import Footer from './components/programs/footer';
import Join from './components/programs/join';
import Programs from './components/programs/program';
import Reasons from './components/programs/reasons';
import Testimonial from './components/programs/testimonial';

function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs />
         <Reasons/>
         <Cards/>
         <Testimonial/>
         <Join/>
        <Footer />
    </div>
  );
}

export default App;
