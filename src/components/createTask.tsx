import * as React from 'react';
import { CompoundButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { CheckboxCompositeIcon } from '@fluentui/react-icons';
import { Label } from 'office-ui-fabric-react/lib/Label';
import "./createTaskForm"
import { Link } from 'react-router-dom';
import {DetailsListDocumentsExample} from "./DetailsList"

export const CreateTask = props => {
  const { disabled, checked } = props;
  initializeIcons('https://my.cdn.com/path/to/icons/');

  return (
    <section className="centerThings formStyling">
      <Link to="/createTaskForm">
        <CompoundButton className="stretchedBtn" primary secondaryText="Create a new task." disabled={disabled} checked={checked}>
          Create Task
      </CompoundButton>
      </Link>
      <div className="formComponents">
        <Label className="formLabel">Assigner</Label>
        <select className="formInput" id="assigner" name="assigner">
          <option>Please select assigner</option>
          <option value="3eb220d3-45da-4f21-8a08-d6454a43c7e6">Sara van der Wacht</option>
          <option value="f4ee9508-7489-487b-83d5-ca8cf41bd473">Regina Drup</option>
          <option value="f0c98d14-d872-4e8e-bfb6-add3be66bd19">Simon Strand</option>
          <option value="d490c018-9b23-4c2b-8ad6-b3388e94fb9e">Ernst Jolink</option>
          <option value="bcd1de03-7d08-4dd5-b5b9-430f3879ab3a">Piet Palmbloom</option>
          <option value="61feb898-1cad-461c-9599-9251d23cf865">Peter Parasol</option>
          <option value="f39bf025-1b93-4751-ba87-4f75d9965a96">Support HAMMOCK</option>
          <option value="b18b24e6-51f8-415b-8fe9-ad1641c8b758">Test</option>
        </select>
      </div>
      <div className="formComponents">
        <Label className="formLabel">Assignee</Label>
        <select className="formInput" id="assignee" name="assignee">
          <option>Please select assignee</option>
          <option value="3eb220d3-45da-4f21-8a08-d6454a43c7e6">Sara van der Wacht</option>
          <option value="f4ee9508-7489-487b-83d5-ca8cf41bd473">Regina Drup</option>
          <option value="f0c98d14-d872-4e8e-bfb6-add3be66bd19">Simon Strand</option>
          <option value="d490c018-9b23-4c2b-8ad6-b3388e94fb9e">Ernst Jolink</option>
          <option value="bcd1de03-7d08-4dd5-b5b9-430f3879ab3a">Piet Palmbloom</option>
          <option value="61feb898-1cad-461c-9599-9251d23cf865">Peter Parasol</option>
          <option value="f39bf025-1b93-4751-ba87-4f75d9965a96">Support HAMMOCK</option>
          <option value="b18b24e6-51f8-415b-8fe9-ad1641c8b758">Test</option>
        </select>
      </div>
      <div className="formComponents">
        <Label className="formLabel">Status</Label>
        <select className="formInput" id="status" name="status">
          <option>Open</option>
          <option>Completed</option>
        </select>
      </div>
      <DetailsListDocumentsExample />
    </section>
    
  );
};
