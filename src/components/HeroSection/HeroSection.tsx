import { StyledHeroSection } from './HeroSection.styled';
import { HeroSectionProps } from './HeroSection.types';

export const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
    return (
        <StyledHeroSection>
            { children }
        </StyledHeroSection>
    )
}
