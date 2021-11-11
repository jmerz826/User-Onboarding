import React from "react";
import styled from 'styled-components';


const StyledDiv = styled.div`
    border: 1px solid black;
    margin: 2% 5%;
`

export default function User(props) {
    const { id, email, username } = props;
    return (
        <StyledDiv>
            <h2>{username}</h2>
            <h3>{email}</h3>
        </StyledDiv>
    )
}