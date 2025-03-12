import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { Provider } from 'react-redux';
import { store } from '../redux/store.ts';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </Provider>
  );
};
