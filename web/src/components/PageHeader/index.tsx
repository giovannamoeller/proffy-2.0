import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

import '../../assets/styles/global.css';
import './style.css';

interface PageHeaderProps{
    title: string,
    description?: string // ? = não obrigatória
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {

    return(
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="" className="icon"/>
                    </Link>
                    <img src={logo} alt="" className="logo"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    <p>{props.description}</p>
                    {props.children}
                </div>

            </header>
    )
}

export default PageHeader;