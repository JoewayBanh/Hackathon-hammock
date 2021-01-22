import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens } from '@fluentui/react';
import './App.css';

import Time_record_list from './components/time-record-list'

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
export const App: React.FunctionComponent = () => {



  return (

    <Time_record_list />


  );
};
