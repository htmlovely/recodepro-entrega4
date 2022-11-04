import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Contato from "./componentes/Contato";
import Cadastros from "./componentes/Cadastros";

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/destinos" component={Cadastros} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
};

export default Rotas;