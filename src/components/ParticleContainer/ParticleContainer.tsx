import { ISourceOptions } from '@tsparticles/engine';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import { StyledParticleContainer } from './ParticleContainer.styled';

export const ParticleContainer: React.FC = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            // background: {
            //     color: {
            //         value: "#000",
            //     },
            // },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 500,
                    },
                },
            },
            particles: {
                color: {
                    value: "#fff",
                },
                // links: {
                //     color: "#FFD700",
                //     distance: 150,
                //     enable: true,
                //     opacity: 0.1,
                //     width: 1,
                // },
                move: {
                    direction: 'top',
                    enable: true,
                    outModes: {
                        default: 'out'
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 300,
                },
                opacity: {
                    value: 0.25,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 5, max: 20 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <StyledParticleContainer options={options} />
    )
}