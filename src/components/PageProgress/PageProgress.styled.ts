import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const StyledPageProgress = styled(Box)(() => {
    return {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        position: 'fixed',
        zIndex: 1000,
    }
})
