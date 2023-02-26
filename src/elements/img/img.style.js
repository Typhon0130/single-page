import styled from 'styled-components';

export default styled.img`
    max-width:100%;
    height:auto;
    user-select: none;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: ;
    height: ;
    ${(props) => (props.position ? `position:${props.position}` : "")};
    ${(props) => (props.top ? `top:${props.top}` : "")};
    ${(props) => (props.left ? `left:${props.left}` : "")};
    ${(props) => (props.bottom ? `bottom:${props.bottom}` : "")};
    ${(props) => (props.right ? `right:${props.right}` : "")};
    ${(props) => (props.zIndex ? `z-index:${props.zIndex}` : "")};
    ${(props) => (props.width ? `width:${props.width}` : "")};
    ${(props) => (props.height ? `height:${props.height}` : "")};
`;