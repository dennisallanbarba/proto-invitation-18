import styled from "@emotion/styled";

export const StyledHeroSection = styled('section')(() => {
    return {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'relative',
        overflow: 'hidden',
    }
})
