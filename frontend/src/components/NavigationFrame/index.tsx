import React, { InputHTMLAttributes } from 'react';
import AppHeader from '../AppHeader';
import Sidebar from '../Sidebar';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

const NavigationFrame: React.FC<InputProps> = ({title, children}) => {
    return (
        <div className="navigation-frame-wrapper">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="app-header">
                <AppHeader title={title} />
            </div>
            <div className="page-content">
                {children}
            </div>
        </div>
    )
}

export default NavigationFrame;