import AsyncComponent from '../../lib/components/async-component';


class ModuleAModule extends AsyncComponent {

  getRequirePath() {
    return __dirname + '/module-a';
  }

  getChunk() {
    return import( /* webpackChunkName: "module-a" */ './module-a')
      .then(module => module.default);
  }

  getModuleId() {
    return require.resolveWeak('./module-a');
  }


}

export default ModuleAModule;