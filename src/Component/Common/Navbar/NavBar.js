import React from 'react';
import items from "../../../FakeData/navBar.json"
import SideBarMain from './SideBarMain';

export default function Navbar(){
    return (
        <>
        <div className="sidebar shadow ">
          { items.map((item, index) => <SideBarMain key={index} item={item} />) }
        </div>
        </>
    )
}