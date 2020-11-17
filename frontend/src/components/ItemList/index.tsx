import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    primaryText: string;
    avatar?: any;
    actionButtonLabel?: string;
    actionButtonIcon?: any;
    actionButtonClick?: any;
    secundaryTitle?: string;
    secundaryText?: string;
}

const ItemList: React.FC<InputProps> = (
        {primaryText, ...rest}
    ) => {
    return (
        <div className="list-item">

                <ListItem alignItems="flex-start">
                    
                    <ListItemAvatar>
                        <Avatar>
                            {rest.avatar}
                        </Avatar>
                    </ListItemAvatar>
                    
                    <ListItemText
                        primary={primaryText}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className="inline"
                                    color="textPrimary"
                                >
                                    {rest.secundaryTitle}
                                </Typography>
                                {rest.secundaryText}
                            </React.Fragment>
                        }
                    />

                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label={rest.actionButtonLabel}>
                            {rest.actionButtonIcon}
                        </IconButton>
                    </ListItemSecondaryAction>

                </ListItem>

        </div>
    )
}

export default ItemList;