import React from 'react';
import { Route } from 'react-router-dom';

import Header from './lib/components/header';
import HomeModule from './modules/home';
import ModuleA from './modules/module-a';
import ModuleB from './modules/module-b';


class App extends React.Component {

  render() {

    return <div>
      <Header />
      <Route exact path="/" component={HomeModule} />
      <Route path="/module-a" component={ModuleA} />
      <Route path="/module-b" component={ModuleB} />
    </div>;
  }

}

export default App;