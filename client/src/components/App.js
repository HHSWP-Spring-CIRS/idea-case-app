import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

import Main from './Main';
import IdeaFormPage from './ideas/IdeaFormPage';
import ShowIdea from './ideas/ShowIdea';
import Members from './members/Members';
import MemberFormPage from './members/MemberFormPage';
import Categories from './categories/Categories';
import CategoryFormPage from './categories/CategoryFormPage';
import Header from './Header';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 68,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Particles className='particles'
            params={particlesOptions} />          
          <Header />
          
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/ideas/new" component={IdeaFormPage} />
            <Route exact path="/ideas/:id" component={ShowIdea} />
            <Route exact path="/ideas/update/:id" component={IdeaFormPage} />
            <Route exact path="/members/new" component={MemberFormPage} />
            <Route exact path="/members" component={Members} />
            <Route
              exact
              path="/categories/update/:id"
              component={CategoryFormPage}
            />
            <Route exact path="/categories/new" component={CategoryFormPage} />
            <Route exact path="/categories" component={Categories} />
            <Route
              exact
              path="/members/update/:id"
              component={MemberFormPage}
            />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
