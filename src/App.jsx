import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesList';
import AboutPage from './pages/AboutPage';

function App() {
  const routes = [{
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/articles',
    element: <ArticlesListPage/>
  },
  {
    path: '/articles/individual',
    element: <ArticlePage/>
  }
]

  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router= {router} />
  )
}

export default App
