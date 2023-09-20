import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import { Routes } from 'react-router-dom';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>

  );
}

export default App;
