import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signin from './signin'; // Обновленное имя компонента
import Signup from './signup'; // Обновленное имя компонента

function App() {
  const path = window.location.pathname;

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
          </ul>
        </nav>

        {path === '/signup' && <Signup />}
        {path === '/signin' && <Signin />}
      </div>
    </Router>
  );
}

export default App;
