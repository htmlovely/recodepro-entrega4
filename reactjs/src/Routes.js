import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Principal from "./componentes/Principal";
import Contato from "./componentes/Contato";
import Destinos from "./componentes/Cadastros";

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/destinos" component={Destinos} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
};

export default Rotas;