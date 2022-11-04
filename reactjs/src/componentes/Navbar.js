import React from 'react';

function Navbar() {
    return (
        <div className="App">
            <header>
                <nav class="menu">
                    <ul>
                        <li>
                            <a href="/">Bem-Vindo</a>
                        </li>
                        <li>
                            <a href="/Cadastros">Cadastros</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;