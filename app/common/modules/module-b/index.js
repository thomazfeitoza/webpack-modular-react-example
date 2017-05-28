import AsyncComponent from '../../lib/components/async-component';


class ModuleBModule extends AsyncComponent {

  getRequirePath() {
    return __dirname + '/module-b';
  }

  getChunk() {
    return import( /* webpackChunkName: "module-b" */ './module-b')
      .then(module => module.default);
  }

  getModuleId() {
    return require.resolveWeak('./module-b');
  }


}

export default ModuleBModule;