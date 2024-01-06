import { CircularProgress } from "@mui/material";
import { StyledPageProgress } from "./PageProgress.styled";
import React from "react";

export const PageProgress = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 50));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <StyledPageProgress>
            <CircularProgress
                variant="determinate" value={progress}
            />
        </StyledPageProgress>
    );
}