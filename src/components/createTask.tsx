import * as React from 'react';
import { CompoundButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { CheckboxCompositeIcon } from '@fluentui/react-icons';
import "./createTaskForm"
import { Link } from 'react-router-dom';

export const CreateTask = props => {
  const { disabled, checked } = props;
  initializeIcons('https://my.cdn.com/path/to/icons/');

  return (
    <section className="centerThings">

      <Link to="/createTaskForm">
        <CompoundButton className="stretchedBtn" primary secondaryText="Create a new task." disabled={disabled} checked={checked}>
          Create Task
      </CompoundButton>
      </Link>

    </section>
  );
};
