import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import logo from './logo.svg'
import './App.css';
import {CreateTask} from "./components/createTask"
import CreateTaskForm from "./components/createTaskForm"

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };

export const App: React.FunctionComponent = () => {
  return (
    <Stack>
     <CreateTask />
     <CreateTaskForm />
      
    </Stack>
  );
};
