import { useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Form from './components/Form';
import Movies from './components/Movies';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <Navbar />
      <Hero />
      <Form setSearchValue={setSearchValue} />
      <Movies searchValue={searchValue} />
    </div>
  );
}

export default App;
