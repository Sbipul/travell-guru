
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Departure from './Pages/Departure/Departure';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div className="backGround">
<AuthProvider>
<BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/dep">
            <Departure/>
          </Route>
        </Switch>
      </BrowserRouter>
</AuthProvider>


    </div>
  );
}

export default App;
