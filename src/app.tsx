import React, { Component } from 'react';
import logo from './logo.svg';
import { UIRouter, UIRouterReact, UIView, hashLocationPlugin, trace, UISrefActive, UISref } from '@uirouter/react';
import { Home } from './components/home'
import { Foo } from './components/foo'

// define your states
const states = [
  {
    name: 'home',
    url: '/home',
    component: Home,
  },
  {
    name: 'foo',
    url: '/foo',
    component: Foo,
  },

];

// select your plugins
const plugins = [hashLocationPlugin];

const routerConfig = (router: UIRouterReact) => {
  router.urlRouter.otherwise('/home');
  trace.enable(1);
};

export class App extends Component {
  render() {
    return (
      <UIRouter plugins={plugins} states={states} config={routerConfig}>
        <div>
          <UISrefActive class="active">
            <UISref to="home">
              <a>Home</a>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="foo">
              <a>Foo</a>
            </UISref>
          </UISrefActive>
          <UIView />
        </div>
      </UIRouter>
    );
  }
}

