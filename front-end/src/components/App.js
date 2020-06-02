import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import CreateNewRecipe from "./recipes/CreateNewRecipe";
import SingleRecipe from "./recipes/SingleRecipe";
import RecipesList from "./recipes/RecipesList";
import RecipeHome from "./recipes/RecipeHome";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={RecipeHome} />
            <Route path="/recipes/new" exact component={CreateNewRecipe} />
            <Route path="/recipes/all" exact component={RecipesList} />
            <Route path="/recipes/:id" exact component={SingleRecipe} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
