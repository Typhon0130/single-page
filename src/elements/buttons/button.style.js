import styled from 'styled-components';

const Button = styled.button`
    background: linear-gradient(180deg, #AAFFA3 -171.14%, #269E38 362.63%);
    border-radius: 100px;
    box-sizing: border-box;
    color: var(--light);
    cursor: pointer;
    font-family: revert;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
    padding: 10px 25px;
    position: relative;
    white-space: nowrap;
    ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
`;

export default Button;