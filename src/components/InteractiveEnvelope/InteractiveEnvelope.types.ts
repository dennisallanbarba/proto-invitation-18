import { ReactNode } from "react";

export interface InteractiveEnvelopeProps {
    envelopeHeight?: string;
    envelopeWidth?: string;
    paperWidth?: string;
    paperHeight?: string;
    paperBorderRadius?: string;
    isOpen?: boolean;
    messageNode?: ReactNode;
};
