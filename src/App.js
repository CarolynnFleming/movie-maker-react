import { useEffect, useState } from 'react';
import { getUser } from './services/fetch_utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import HomePage from './HomePage';
import { logout } from './services/fetch_utils';
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
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
