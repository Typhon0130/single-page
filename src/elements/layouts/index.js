import { StyledColumn, StyledLayout, StyledRow, StyledContainer } from './layout.style';

export default function Layout ({children, ...rest}) {
    return(
        <StyledLayout {...rest}>
            {
                children
            }
        </StyledLayout>
    )
}

Layout.Row = ({children, ...rest}) => {
    return(
        <StyledRow {...rest}>
            {
                children
            }
        </StyledRow>
    )
}

Layout.Column = ({children, ...rest}) => {
    return(
        <StyledColumn {...rest}>
            {
                children
            }
        </StyledColumn>
    )
}

Layout.Container = ({children, ...rest}) => {
    return(
        <StyledContainer {...rest}>
            {
                children
            }
        </StyledContainer>
    )
}