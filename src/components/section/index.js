import StyledSection from './section.style';

export default function Section ({children, ...rest}) {
    return(
        <StyledSection {...rest}>
            {
                children
            }
        </StyledSection>
    )
}