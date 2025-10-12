import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesList';
import AboutPage from './pages/AboutPage';
import Layout from './Layout';
  const routes = [{
    path: '/',
    element: <Layout />,
    children : [
    {
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
  }]

  

function App() {

  const router = createBrowserRouter(routes);
  return (
    <>
    <RouterProvider router= {router} />
    </>
    
  )
}

export default App
