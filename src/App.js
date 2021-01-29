import { Suspense } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './Router/app.router';
import Sidebar from './Components/layouts/sidebar';
import Navbar from './Components/layouts/navbar';
function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading…</h1>}>
        <BrowserRouter>
          <Layout>
            <Sidebar />
            <Layout>
              <Navbar />
              <AppRouter />
            </Layout>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
