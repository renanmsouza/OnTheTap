import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

const SimpleHeader: React.FC<InputProps> = ({title}) => {
    return (
        <div className="simple-title">
            <strong className="title">
                {title}
            </strong>
        </div>
    )
}

export default SimpleHeader;