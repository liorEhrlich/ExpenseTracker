import { FunctionComponent } from "react";
import styled from "styled-components";
import React from 'react';


const StyledActionButton = styled.button`
    padding: 10px;
    margin: 10px;
    cursor: ${props => (props.disabled? "default": "pointer")};
    background-color: #F1AA7E;
    border-radius:4px;
   `;

interface Props {
    name: string;
    onClick?: any;
    disabled?: boolean;
}

const ActionButton: FunctionComponent<Props> = props => {
    const {name, onClick, disabled} = props;
    return(
        <StyledActionButton 
            onClick={onClick && onClick}
            disabled={disabled || false}>
           {name} 
        </StyledActionButton>
    )
}

export default ActionButton