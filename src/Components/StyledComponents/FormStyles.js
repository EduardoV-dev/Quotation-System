import styled from '@emotion/styled';

const ControlGroup = styled.div`
    margin: 1.5em 0;
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    padding: 0.8em;
    flex-basis: 100%;
    appearance: none;
    border: 1px solid rgb(225, 225, 225);
`;

const Button = styled.button`
    background-color: rgb(0, 131, 143);
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    margin-top: 2em;
    transition: all 0.3s ease 0s;

    &:hover {
        background-color: rgb(38, 198, 218);
        cursor: pointer;
    }
`;

export { ControlGroup, Label, Select, Button };