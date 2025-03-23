import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { Provider } from 'react-redux';
import { store } from '../redux/store.ts';

import { Link, Route, Router, Routes } from 'react-router';

import HomePage from './Pages/Home.jsx';
import ToDoList from './Pages/ToDoList.jsx';
import Counter from './Pages/Counter.jsx';

export const App = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toDoList">ToDoList</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};
