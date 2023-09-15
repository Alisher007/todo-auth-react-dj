import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import TodosPage from './pages/TodosPage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
			<Routes>
			<Route exact path='/' element={<PrivateRoute/>}>
				<Route exact path='/' element={<HomePage/>}/>
				<Route exact path='/todos' element={<TodosPage/>}/>
			</Route>
			<Route element={<LoginPage />} path="/login"/>
			</Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

