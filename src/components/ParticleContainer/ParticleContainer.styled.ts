import { styled } from "@mui/material";
import Particles from "@tsparticles/react";

export const StyledParticleContainer = styled(Particles)(() => {
    return {
        background: 'linear-gradient(0deg, rgba(0,126,221,1) 0%, rgba(255,123,254,1) 67%)',
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: -1,
    }
})
