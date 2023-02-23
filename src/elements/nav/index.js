import { StyledNav, StyledUl, StyledLi } from './nav.style';

export default function Nav({children, ...rest}) {
    return (
        <StyledNav {...rest} >
            {
                children
            }
        </StyledNav>
    )
}

Nav.Ul = ({ children, ...rest }) => {
    return (
        <StyledUl {...rest}>
            {
                children
            }
        </StyledUl>
    )
}

Nav.Li = ({ children, ...rest }) => {
    return (
        <StyledLi {...rest}>
            {
                children
            }
        </StyledLi>
    )
}