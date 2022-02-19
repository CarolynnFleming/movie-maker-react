import { useEffect, useState } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import HomePage from './HomePage';
import { logout } from './services/fetch-utils';
import SearchPage from './SearchPage';
import WatchListPage from './WatchListPage';
import './App.css';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    await logout();
    setUser('');
  }
  return (
    <Router>
      <div className="App">
        <header>
          {
            user &&
         <>
           <NavLink to="/search">Search Page</NavLink>
           <NavLink to="/sawmovie">Watched Movie Page</NavLink>
           <button onClick={handleLogout}>Logout</button>
         </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="/search"/>
                  : <HomePage setUser={setUser}/>
              }
            </Route>
            <Route exact path="/search">
              {
                !user
                  ? <Redirect to="/" />
                  : <SearchPage />
              }
            </Route>
            <Route exact path="/sawmovie">
              {
                !user
                  ? <Redirect to="/" />
                  : <WatchListPage />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
