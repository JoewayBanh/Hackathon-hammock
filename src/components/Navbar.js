import React, {useState, useEffect} from 'react';
import './Navbar.css'
import { Icon } from '@fluentui/react/lib/Icon';
import {IconButton, DefaultButton} from '@fluentui/react'

const Navbar = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
   
    function toggle() {
        setIsActive(!isActive);
      }
    
      function reset() {
        setSeconds(0);
        setIsActive(false);
      }
    
      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);
    return(
        <>
        <div className="navbar">
            <Icon iconName="Home" />
            <Icon iconName="AddFriend" />
            <Icon iconName="CheckboxComposite"/>
            <Icon iconName="Timer"/>
        </div>
        <div className="timer">
       
      <DefaultButton className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>{isActive ? 'Pause' : 'Start'}</DefaultButton>
      <div className="time">
        {seconds}s
      </div>
      <DefaultButton className="button" onClick={reset}>Reset</DefaultButton>
      </div>
        </>
    )
}


export default Navbar;