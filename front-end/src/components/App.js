import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import CreateNewRecipe from "./recipes/CreateNewRecipe";
import SingleRecipe from "./recipes/SingleRecipe";
import RecipesList from "./recipes/RecipesList";
import RecipeHome from "./recipes/RecipeHome";
import history from "../history";

const App = () => {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      <Router history={history}>
        <div className="ui justified container">
          <Header />
          <Switch>
            <Route path="/" exact component={RecipeHome} />
            <Route path="/recipes/new" exact component={CreateNewRecipe} />
            <Route path="/recipes/all" exact component={RecipesList} />
            <Route path="/recipes/:id" exact component={SingleRecipe} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
