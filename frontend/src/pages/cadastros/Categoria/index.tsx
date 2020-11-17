import React from 'react';
import Sidebar from '../../../components/Sidebar';
import SimpleHeader from '../../../components/SimpleHeader';

function Categoria() {
    return (  
        <div className="categoria-wrapper">
            <Sidebar collapsed={true} />
            <SimpleHeader title="Categoria" /> 
        </div>
    )
}

export default Categoria;