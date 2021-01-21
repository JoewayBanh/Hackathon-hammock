import * as React from 'react';
import { CompoundButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { CheckboxCompositeIcon  } from '@fluentui/react-icons';


export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const CreateTask: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;
  initializeIcons('https://my.cdn.com/path/to/icons/');
  return (
    <Stack horizontal tokens={stackTokens}>
     
      <CompoundButton primary secondaryText="Create a new task." disabled={disabled} checked={checked}>
      Create Task 
      </CompoundButton>
    </Stack>
  );
};
