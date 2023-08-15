/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Math Magicians</h1>
    <ul className="menu-items">
      <Link className="link" to="/">Home</Link>
      <div className="divider" />
      <Link className="link" to="/Calculator">Calculator</Link>
      <div className="divider" />
      <Link className="link" to="/Quote">Quote</Link>
    </ul>
  </header>
);

export default Navbar;
