import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Form from "./views/form/Form"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/home/:id" component={Detail} />
        <Route path="/form" component={Form}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
