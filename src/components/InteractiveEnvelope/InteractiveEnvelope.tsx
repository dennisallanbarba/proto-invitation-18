import { useState } from 'react';
import { StyledInteractiveEnvelope } from './InteractiveEnvelope.styled';
import { InteractiveEnvelopeProps } from './InteractiveEnvelope.types';

export const InteractiveEnvelope: React.FC<InteractiveEnvelopeProps> = (props) => {
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

    const {
        envelopeHeight,
        envelopeWidth,
        paperHeight,
        paperWidth,
        messageNode,
    } = props;

    const handleClickTopCover = () => {
        setIsEnvelopeOpen(true);
    };

    const handleCloseCover = () => {
        setIsEnvelopeOpen(false);
    }

    return (
        <StyledInteractiveEnvelope
            envelopeHeight={envelopeHeight}
            envelopeWidth={envelopeWidth}
            paperHeight={paperHeight}
            paperWidth={paperWidth}
            isOpen={isEnvelopeOpen}
        >
            <div className="cover">
                <div className="bottom"></div>
                <div className="side">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <div
                    className="top"
                    onClick={handleClickTopCover}
                >
                    <div className="top-cover"></div>
                </div>
            </div>

            <div className="paper">
                <div className="message">{messageNode}</div>
                <div
                    className="close"
                    onClick={handleCloseCover}
                >
                    X
                </div>
            </div>

            <div className="shadow"></div>
        </StyledInteractiveEnvelope>
    )
}
