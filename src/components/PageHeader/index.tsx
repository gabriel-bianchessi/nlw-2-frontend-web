import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg'
import BackIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface PageHeaderProps {
    title: string; //caso não for obrigatória ? no nome
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackIcon} alt="Voltar"/>
                </Link>
                <img src={LogoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                {props.children}
            </div>

        </header>
    )
}

export default PageHeader;