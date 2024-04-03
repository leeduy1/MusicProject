import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/index.ts'
import DefaultLayout from './components/Layout/DefaultLayout.tsx'
import { AuthProvider } from './pages/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = DefaultLayout
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
