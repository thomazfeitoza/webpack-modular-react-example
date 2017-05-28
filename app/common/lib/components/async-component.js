import React from 'react';

class AsyncComponent extends React.Component {

  constructor() {
    super(...arguments);

    this.state = {
      Component: this.getComponent()
    };

  }


  // Full module path for server-side require
  getRequirePath() { /* implement this method */ }

  // Returns a promise created by import() to split the module into a new chunk
  getChunk() { /* implement this method */ }

  // Used to retrieve the module id
  getModuleId() { /* implement this method */ }


  getComponent() {
    if (typeof window === 'undefined') {
      let requirePath = this.getRequirePath();
      return require(requirePath).default;
    } else {
      let moduleId = this.getModuleId();
      try {
        if (__webpack_modules__[moduleId])
          return __webpack_require__(moduleId).default;
      } catch (e) {}
    }

    return null;
  }

  componentWillMount() {
    if (!this.state.Component) {
      this
        .getChunk()
        .then((Component) => {
          this.setState({ Component });
        });
    }
  }

  render() {
    const { Component } = this.state;
    if (Component) {
      return <Component {...this.props} />;
    }
    return null;
  }
}

export default AsyncComponent;