import AsyncComponent from '../../lib/components/async-component';


class HomeModule extends AsyncComponent {

  getRequirePath() {
    return __dirname + '/home';
  }

  getChunk() {
    return import( /* webpackChunkName: "home" */ './home')
      .then(module => module.default);
  }

  getModuleId() {
    return require.resolveWeak('./home');
  }


}

export default HomeModule;