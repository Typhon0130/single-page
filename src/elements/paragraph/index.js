import PWrapper from './paragraph.style';

export default function P ({children, ...rest}) {
    return(
        <PWrapper {...rest}>
            {
                children
            }
        </PWrapper>
    )
}