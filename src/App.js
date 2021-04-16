import { ChakraProvider } from "@chakra-ui/react";
import { LoginPage } from './containers/LoginPage/LoginPage';
import { Redirect, Route, Switch } from "react-router";
import { Header } from "./components/Header/Header";
import { UsersPage } from './containers/UsersPage/UsersPage';
import { SingleUserPage } from './containers/SingleUserPage/SingleUserPage';
import { CreateNewUser } from './containers/CreateNewUser/CreateNewUser';

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
      </Switch>
    </ChakraProvider>
  );
}

export default App;
