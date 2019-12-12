import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login/login.js';
import crieseuevento from './pages/crieseuevento/crieseuevento.js';
import AdministradorApadrinhar from './pages/admin/AdministradorApadrinhar';
import AdministradorAprovar from './pages/admin/AdministradorAprovar';
import AdministradorVisualizar from './pages/admin/AdministradorVizualizar';
import  editeseuperfil from './pages/edite/editeseuperfil';
import redefinirsenha from './pages/redefinir/redefinirsenha';
import admperfil from './pages/admin/admperfil';
import comunidadeperfil from './pages/comunidade/comunidadeperfil';
import funcionarioperfil from './pages/funcionario/funcionarioperfil';
import visualizeseuevento from './pages/crieseuevento/visualizeseuevento';
{/* <Route path="/redefinirsenha" component={ () => <redefinirsenha titulo_pagina="Redefinir | Redefiinir senha" /> } /> */}


const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path='/login' component={Login}/>
                <Route path='/criandoevento' component={crieseuevento}/>
                <Route path='/visualizeseuevento' component={visualizeseuevento}/>
                <Route path='/administrador-apadrinhar' component={AdministradorApadrinhar}/>
                <Route path='/administrador-aprovar' component={AdministradorAprovar}/>
                <Route path='/administrador' component={AdministradorVisualizar}/>
                <Route path='/editeseuperfil' component={editeseuperfil}/>
                <Route path='/redefinirsenha' component={redefinirsenha}/>
                <Route path='/admperfil' component={admperfil}/>
                <Route path='/comunidadeperfil' component={comunidadeperfil}/>
                <Route path='/funcionarioperfil' component={funcionarioperfil}/>
            </Switch>
        </div>
    </Router>
)
        
        
        
        
        
        ReactDOM.render(Rotas, document.getElementById('root'));
        
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
