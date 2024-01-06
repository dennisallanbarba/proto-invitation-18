import styled from "@emotion/styled";
import { InteractiveEnvelopeProps } from "./InteractiveEnvelope.types";
import { CSSProperties } from "react";
import { keyframes } from "@emotion/react";
import zIndex from "@mui/material/styles/zIndex";

export const StyledInteractiveEnvelope = styled('div')<InteractiveEnvelopeProps>(({ ...props }) => {
    const {
        envelopeHeight = '90px',
        envelopeWidth = '150px',
        paperHeight = '70px',
        paperWidth = '130px',
        paperBorderRadius = 3,
        isOpen,
    } = props;

    const flapHeight = `calc(${envelopeHeight} / 2)`;
    const flapWidth = `calc(${envelopeWidth} / 2)`;

    const color1 = '#7979aa';
    const color2 = '#5d5d93';
    const color3 = '#555587';
    const color4 = '#dadae7';

    const filterA = 'drop-shadow(0px 2px 3px rgba(50, 0, 50, 0.1))';
    const filterB = 'drop-shadow(0px -1px 3px rgba(50, 0, 50, 0.2))';

    const createClip = (x1y1: string, x2y2: string, x3y3: string) => {
        return {
            clipPath: `polygon(${x1y1}, ${x2y2}, ${x3y3})`,
        }
    }

    // Animation timings
    const openTopCoverDurationMs = 300;
    const pullPaperDurationMs = 600;

    const topOpenAnim = keyframes({
        '100%': {
            transform: 'translateZ(0px)',
        }
    });

    const topCoverOpenAnim = keyframes({
        '100%': {
            transform: 'rotateX(-180deg)',
        }
    });

    const pullPaperAnim = keyframes({
        '50%': {
            transform: 'translate(0, -100%)',
        },
        '100%': {
            transform: 'translate(0, 20%) translateZ(50px)',
        }
    });

    const coverChildGeneric: CSSProperties = {
        position: 'absolute',
        width: envelopeWidth,
    };
    
    const sideChildGeneric: CSSProperties = {
        background: color2,
        height: envelopeHeight,
        position: 'absolute',
        width: flapWidth,
    }

    return {
        background: color1,
        height: envelopeHeight,
        perspective: '1000px',
        width: envelopeWidth,

        '.cover': {
            perspective: '1000px',
            position: 'relative',

            '.top': {
                ...coverChildGeneric,
                cursor: 'pointer',
                filter: filterA,
                perspective: '1000px',
                transform: 'translateZ(1px)',

                ...(isOpen && {
                    animation: `${topOpenAnim} ${openTopCoverDurationMs}ms ease-out forwards`,
                }),
                
                '.top-cover': {
                    ...createClip('0 0',' 50% 100%', '100% 0'),
                    background: color1,
                    height: `calc(${envelopeHeight} - 30px)`,
                    transformOrigin: 'center top',
        
                    ...(isOpen && {
                        animation: `${topCoverOpenAnim} ${openTopCoverDurationMs}ms linear forwards`,
                    }),
                }
            },

            '.side': {
                ...coverChildGeneric,
                filter: filterB,
                height: envelopeHeight,
                transform: 'translateZ(1px)',

                '.left': {
                    ...sideChildGeneric,
                    ...createClip('0 0', '0 100%', '100% 50%'),
                    left: 0,
                },

                '.right': {
                    ...sideChildGeneric,
                    ...createClip('0 50%', '100% 0', '100% 100%'),
                    right: 0,

                },
            },

            '.bottom': {
                ...coverChildGeneric,
                ...createClip('0 100%', '50% 0%', '100% 100%'),
                background: color3,
                height: flapHeight,
                top: flapHeight,
                transform: 'translateZ(1px)',
            }
        },

        '.paper': {
            background: color4,
            borderRadius: paperBorderRadius,
            boxShadow: '0 0 2px rgba(50, 0, 50, 0.3)',
            color: '#50507f',
            height: paperHeight,
            margin: '0 auto',
            position: 'relative',
            width: paperWidth,

            ...(isOpen && {
                animation: `${pullPaperAnim} ${pullPaperDurationMs}ms linear forwards`,
            }),

            animationDelay: `${openTopCoverDurationMs}ms`,
        },

        '.message': {
            left: '50%',
            position: 'absolute',
            textAlign: 'center',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },

        '.close': {
            cursor: 'pointer',
            position: 'absolute',
            fontSize: 12,
            top: 10,
            right: 10,
        },
    }
})
