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
import { FaTachometerAlt, FaGem, FaBars, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
// import sidebarBg from './assets/bg1.jpg';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    image?: string, 
    collapsed?: boolean, 
    rtl?: boolean, 
}

const Sidebar: React.FC<InputProps> = ({image, collapsed, rtl}) => {
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value: boolean) => {
        setToggled(value);
    };

    return (
        <div className="sidebar-wrapper">
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
        </div>
        
            <ProSidebar
            //   image={image ? sidebarBg : false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            >
            <SidebarHeader>
                <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
                >
                {'sidebarTitle'}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                <MenuItem
                    icon={<FaTachometerAlt />}
                    suffix={<span className="badge red">{'new'}</span>}
                >
                    {'dashboard'}
                </MenuItem>
                <MenuItem icon={<FaGem />}> {'components'}</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                <SubMenu
                    suffix={<span className="badge yellow">3</span>}
                    title={'withSuffix'}
                    icon={<FaRegLaughWink />}
                >
                    <MenuItem>{'submenu'} 1</MenuItem>
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
