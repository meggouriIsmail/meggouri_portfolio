import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProject from './Components/AddProject';
import Dashboard from './Components/Dashboard';
import Delete from './Components/Delete';
import Home from './Components/Home';
import Login from './Components/Login';
import Update from './Components/Update';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
        <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
        <Route exact path={`${process.env.PUBLIC_URL}/add`} component={AddProject} />
        <Route path={`${process.env.PUBLIC_URL}/delete/:id`} component={Delete} />
        <Route path={`${process.env.PUBLIC_URL}/update/:id`} component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
