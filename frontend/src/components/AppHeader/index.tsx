import React, { InputHTMLAttributes } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { MdSearch } from 'react-icons/md';

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const AppHeader: React.FC<InputProps> = ({title}) =>  {
  return (
    <AppBar className="app-bar">
      <Toolbar>

        {/* MenuButton */}

        <Typography className="title" variant="h6" noWrap>
          {title}
        </Typography>
        <div className="search">
          <div className="searchIcon">
            <MdSearch />
          </div>
          <InputBase
            placeholder="Procurar…"
            classes={{
              root: "inputRoot",
              input: "inputInput",
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
