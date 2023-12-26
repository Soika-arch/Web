import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import ContactForm from "./ContactForm";
import Question from "./Question";
import './styles.css'; 

const App = () => {
  return (
		<Router>
    	<div className = 'container'>
				<nav>
					<Link to="/">Резюме</Link>
      		<Link to="/contact">Зворотній зв'язок</Link>
				</nav>

        <Routes>
					<Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/question" element={<Question />} />
        </Routes>
    </div>
		</Router>
  );
};

const Home = () => {
  return (
    <>
      <h1>ВАСИЛЕНКО КАТЕРИНА ЮРІЇВНА</h1>
      <Contact />
      <Education />
      <Experience />
    </>
  );
};

export default App;
