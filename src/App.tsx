import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import './App.css';
import { CreateTask } from "./components/createTask"
import CreateTaskForm from "./components/createTaskForm"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className="App">


        <Switch>
          <Route path="/" exact component={CreateTask} />
          <Route path="/createTaskForm" component={CreateTaskForm} />
        </Switch>


      </div>
    </Router>
  );
};
