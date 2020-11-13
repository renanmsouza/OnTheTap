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
import { FaTachometerAlt, FaCashRegister, FaBars, FaList, FaAddressBook, FaHeart } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi'
import sidebarBg from '../../assets/images/pub.jpg';

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
                <div className='title'>
                <button className="collapse-btn" type="button" onClick={() => handleCollapseSidebar(!collapsed)}>
                    <FiCode />
                </button>
                <div className="title-text">
                    OnTheTap
                </div>
                </div>
                
                
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        // suffix={<span className="badge red">{'new'}</span>}
                    >
                        {'Dashboard'}
                        <Link to="/admin/dashboard" />
                    </MenuItem>
                    
                    <MenuItem icon={<FaCashRegister />}> 
                        {'Caixa'}
                        <Link to="/caixa/principal" />
                    </MenuItem>

                    <MenuItem icon={<FaCashRegister />}> 
                        {'Garçom'}
                        <Link to="/garcom/principal" />
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">

                <SubMenu
                    // suffix={<span className="badge yellow">3</span>}
                    title={'Cadastros'}
                    icon={<FaAddressBook />}
                >
                    <SubMenu title={`${'Produtos'}`}>
                        <MenuItem>{'Cadastro'}</MenuItem>
                        <MenuItem>{'Categorias'}</MenuItem>
                        <MenuItem>{'Unidades de Medida'}</MenuItem>
                    </SubMenu>
                    <MenuItem>{'submenu'} 2</MenuItem>
                    <MenuItem>{'submenu'} 3</MenuItem>
                </SubMenu>

                <SubMenu
                    prefix={<span className="badge gray">3</span>}
                    title={'withPrefix'}
                    icon={<FaHeart />}
                >
                    <MenuItem>{'submenu'} 1</MenuItem>
                    <MenuItem>{'submenu'} 2</MenuItem>
                    <MenuItem>{'submenu'} 3</MenuItem>
                </SubMenu>
                <SubMenu title={'multiLevel'} icon={<FaList />}>
                    <MenuItem>{'submenu'} 1 </MenuItem>
                    <MenuItem>{'submenu'} 2 </MenuItem>
                    <SubMenu title={`${'submenu'} 3`}>
                    <MenuItem>{'submenu'} 3.1 </MenuItem>
                    <MenuItem>{'submenu'} 3.2 </MenuItem>
                    <SubMenu title={`${'submenu'} 3.3`}>
                        <MenuItem>{'submenu'} 3.3.1 </MenuItem>
                        <MenuItem>{'submenu'} 3.3.2 </MenuItem>
                        <MenuItem>{'submenu'} 3.3.3 </MenuItem>
                    </SubMenu>
                    </SubMenu>
                </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter >
                
            </SidebarFooter>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
