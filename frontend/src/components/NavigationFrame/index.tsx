import React, { InputHTMLAttributes } from 'react';
import AppHeader from '../AppHeader';
import Sidebar from '../Sidebar';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

const NavigationFrame: React.FC<InputProps> = ({title}) => {
    return (
        <div className="navigation-frame-wrapper">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="app-header">
                <AppHeader title={title} />
            </div>
        </div>
    )
}

export default NavigationFrame;