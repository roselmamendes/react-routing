import React from 'react';
import { render } from 'react-dom';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'

const Home = () => (<h1>Hi</h1>);

const Car = () => (<h1>Cars page</h1>);

const About = () => (<h1>About page</h1>);

render(
  (<BrowserRouter>
    <div>
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/cars">Cars</Link></li>
       </ul>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  </BrowserRouter>),
    document.getElementById('container')
);
