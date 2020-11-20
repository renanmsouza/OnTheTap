import React, { InputHTMLAttributes, useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaCashRegister, FaBars, FaHamburger, FaAngleDoubleDown, FaMoneyCheckAlt } from 'react-icons/fa';
import { GiHotMeal } from "react-icons/gi";

import sidebarBg from '../../assets/images/pub_2.png';

import './styles.scss';
import { Link } from 'react-router-dom';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    image?: boolean, 
    collapsed?: boolean, 
    rtl?: boolean, 
}

const Sidebar: React.FC<InputProps> = ({image, rtl}) => {
    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSidebar = (value: boolean) => {
        setToggled(value);
    };

    const handleCollapseSidebar = (value: boolean) => {
        setCollapsed(value);
    }

    return (
        <div className="sidebar-wrapper">
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>
        
            <ProSidebar
                image={sidebarBg}
                rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
            <SidebarHeader>
                <div className='title-header'>
                    <div className="collapse-btn" onClick={() => handleCollapseSidebar(!collapsed)}>
                        <FaAngleDoubleDown />
                    </div>
                    <div className="title-text">
                        OnTheTap
                    </div>
                </div>  
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="round">
                    <MenuItem icon={<FaTachometerAlt />}>
                        {'Dashboard'}
                        <Link to="/admin/dashboard" />
                    </MenuItem>

                    <SubMenu title={'Caixa'} icon={<FaCashRegister />}>
                        <MenuItem>{'Gestão de Caixa'} <Link to="/caixa/principal" /> </MenuItem>
                        <MenuItem>{'Fluxo de Caixa'} <Link to="/admin/gestaocaixa" /> </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<GiHotMeal />}> 
                        {'Garçom'}
                        <Link to="/garcom/principal" />
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">

                    <SubMenu title={'Produtos'} icon={<FaHamburger />}>
                        <MenuItem>{'Cadastro'}</MenuItem>
                        <MenuItem>{'Categorias'}</MenuItem>
                        <MenuItem>{'Unidades de Medida'}</MenuItem>
                    </SubMenu>

                    <MenuItem icon={<FaMoneyCheckAlt />}>{'Promoções'}</MenuItem>

                </Menu>
            </SidebarContent>

            <SidebarFooter >
                 
            </SidebarFooter>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
