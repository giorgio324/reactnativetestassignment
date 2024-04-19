import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { useState, createContext } from 'react';
import List from './routes/List';

import { Home } from './routes/Home';

export const AppContext = createContext(null);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
]);

function App() {
  const [state, setState] = useState(null);
  return (
    <AppContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
