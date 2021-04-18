import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Redirect, Route, Switch } from "react-router";
import { Header } from "./components/Header/Header";
import { UsersPage } from './pages/UsersPage/UsersPage';
import { SingleUserPage } from './pages/SingleUserPage/SingleUserPage';
import { CreateNewUser } from './pages/CreateNewUser/CreateNewUser';
import { EditUser } from './pages/EditUser/EditUser';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/users" />
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/users/:id" component={SingleUserPage} />
        <Route exact path="/createuser/" component={CreateNewUser} />
        <Route exact path="/users/:id/edit" component={EditUser} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
