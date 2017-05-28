import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return <header>
      <h1>Webpack Modular React Example</h1>
      <p>Open the network tab in your developer tools and watch how modules are loaded only
      the first time you click a link.</p>

      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/module-a">Module A</Link></li>
        <li><Link to="/module-b">Module B</Link></li>
      </ul>
    </header>
  }

}

export default Header;