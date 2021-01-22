import React, { useState } from 'react';

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from "react-datepicker";
import nl from 'date-fns/locale/nl';

import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from 'office-ui-fabric-react/lib/Dropdown';
const dropdownStyles = { dropdown: { width: 300 } };

const DropdownControlledMultiExampleOptions = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];




    registerLocale('nl', nl)



    function Time_record_list() {

        const [firstDate, setFirstDate] = useState(new Date())
        const [secondDate, setSecondDate] = useState(new Date())

        return (
            <>
                <DatePicker
                    selected={firstDate}
                    onChange={date => setFirstDate(date)}
                    dateFormat='dd/MM/yyyy'
                    locale="nl"
                />
                <br></br>
                <DatePicker
                    selected={secondDate}
                    onChange={date => setSecondDate(date)}
                    dateFormat='dd/MM/yyyy'
                    locale="nl"
                />
                <br></br>

                {/* <Dropdown
                    placeholder="Select options"
                    label="Multi-select controlled example"
                    selectedKeys={selectedKeys}
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={onChange}
                    multiSelect
                    options={DropdownControlledMultiExampleOptions}
                    styles={dropdownStyles}
                /> */}




            </>

        )

    }


    export default Time_record_list

    export const DropdownControlledMultiExample = () => {
        const [selectedKeys, setSelectedKeys] = React.useState([]);
    
        const onChange = (event, item) => {
            if (item) {
                setSelectedKeys(
                    item.selected ? [...selectedKeys, item.key] : selectedKeys.filter(key => key !== item.key),
                );
            }
        }}