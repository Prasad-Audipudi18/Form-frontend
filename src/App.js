import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./Login/index"
import Signup from "./Signup"
import NotFound from "./Not Found"
import Home from "./Home"
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Home" component={Home} />
        <Route component={NotFound} />
      </Switch>
 </BrowserRouter>
)

export default App
