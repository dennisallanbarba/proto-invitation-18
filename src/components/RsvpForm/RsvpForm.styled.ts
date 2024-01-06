import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

export const StyledRsvpForm = styled(Paper)(() => {
    return {
        alignItems: 'center',
        color: '#f00',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        justifyContent: 'center',
        margin: '0 auto',
        maxWidth: '600px',
        padding: '24px 16px',
        width: '90%',
        boxShadow: '1px 1px 3px #000',
        top: '50%',
        position: 'relative',
        transform: 'translateY(-50%)',

        '.rsvp-submit': {
            // borderColor: '#fff',
            // color: '#fff',
            width: '100%',
        }
    }
});
