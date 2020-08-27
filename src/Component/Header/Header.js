import React from 'react';
import './Header.css'
const Header = (props) => {
    const test = props.count;
    let item =0 ;
    for(let i = 0;i<test.length;i++) {
        let element = test[i];
        item  = item + element.length;
    }
    return (
        <div className="" >
            <div className="menuContainer" >

<ul class="nav justify-content-end container">
    <li class="nav-item">
        <a class="nav-link text-left " href="/">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/">About us</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/">Teach Here</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/">My Course <span >{test.length}</span>  {
                test.map(item => <div>{item.name}</div> )
            } </a>
    </li>
</ul>
            </div>
        </div>
    );
};

export default Header;