import styled from "styled-components";


export const StyledDiv = styled.div` 
    background-color:${props => props.theme.main};
    border: ${props => props.theme.primary};
    color: ${props => props.theme.txt_secondary};
    width:100%;
    height:100%;
    border-radius: .5rem;
    justify-content: center;
    text-align: center;
    margin-top: .5rem;
    `
export const CommentFormDiv = styled.div` 
    border: ${props => props.theme.primary};
    color: ${props => props.theme.txt_secondary};
    width:100%;
    height:100%;
    border-radius: .5rem;
    justify-content: center;
    text-align: left;
    margin-top: 2rem
`

export const StyledArea = styled.textarea`
    width: 50rem;
    border: 4px solid rgba(0,0,0,0.1);
    outline: none;
    resize: none;
    resize: none;
    `

export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.txt_secondary};
    background: ${props => props.theme.main};
    `
export const StyledLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.txt_secondary};
`

export const LanguageCardDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    justify-content: center;
`