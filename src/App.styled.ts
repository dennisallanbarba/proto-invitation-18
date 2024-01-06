import styled from "@emotion/styled";

export const StyledApp = styled('div')(() => {
    return {
        '.portrait': {
            opacity: 0.15,
            position: 'absolute',
            top: 0,
            width: '100vmax',
        },

        '.age-num': {
            fontFamily: "'WindSong', cursive",
            color:'#FFD700',
            fontSize: '17rem',
            textAlign: 'center',
            userSelect: 'none',
            lineHeight: '12rem',
            filter: 'drop-shadow(2px 4px 6px gold)',

            '.ordinal': {
                fontFamily: "'WindSong', cursive",
                fontSize: '5rem',
                verticalAlign: 'super',
                marginLeft: 20,
            }
        },

        '.hero-text': {
            color: '#fff',
            fontFamily: "'Poiret One', sans-serif",
            userSelect: 'none',
            fontSize: '2rem',
            textAlign: 'center',

            '&.MuiTypography-caption': {
                fontSize: '1.3rem',
            },

            '&.bold': {
                fontWeight: 900,
            }
        },

        '.rsvp-button': {
            marginTop: '32px',
            color: '#fff',
            zIndex: 10000,
            borderColor: '#fff',
        },

        '.rsvp-modal': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
});
