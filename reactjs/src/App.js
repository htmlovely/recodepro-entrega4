import React from 'react';
import Rotas from './Routes';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Rotas />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
