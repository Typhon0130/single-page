import StyledButton from './button.style';

export default function Button ({children, ...rest}) {
    return(
        <StyledButton {...rest}>
            {
                children
            }
        </StyledButton>
    )
}