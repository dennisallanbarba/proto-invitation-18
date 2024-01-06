import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Button, Modal, Typography } from '@mui/material';
import { StyledApp } from './App.styled';
import { HeroSection } from './components/HeroSection/HeroSection';
import { ParticleContainer } from './components/ParticleContainer/ParticleContainer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MainImage from './assets/Ayesha_Invitation_Image_Main.jpg';
import { useState } from 'react';
import { RsvpForm } from './components/RsvpForm/RsvpForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickRsvp = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  return (
    <StyledApp>
      <HeroSection>
        <ParticleContainer />

        <img className="portrait" src={MainImage} />

        <Typography
          className='age-num'
          variant="h4"
        >
          18
          <Typography
            className="ordinal"
            variant="caption"
          >
            th
          </Typography>
        </Typography>

        <Typography
          variant="h5"
          className="hero-text"
        >
          You are invited to
          <Typography
            variant="h5"
            className="hero-text bold"
          >
            Ayesha's
          </Typography>
          18th Birthday
        </Typography>

        <Typography
          className="hero-text"
          variant="caption"
          mt={4}
        >
          <AccessTimeIcon
            sx={{
              position: 'relative',
              top: '0.3rem',
              marginRight: '6px',
            }}
          />
          Thursday, February 1, 2024
        </Typography>

        <Typography
          className="hero-text"
          variant="caption"
        >
          7:00 PM - 11:00 PM
        </Typography>


        <Typography
          className="hero-text"
          variant="caption"
          mt={4}
        >
          <LocationOnIcon
            sx={{
              position: 'relative',
              top: '0.3rem',
              marginRight: '6px',
            }}
          />
          {'12345 Lakeside View Resorts'}
          <br />
          {'Malolos, Bulacan'}
        </Typography>


        <Button
          className="rsvp-button"
          size="large"
          variant="outlined"
          onClick={handleClickRsvp}
        >
          Click here to RSVP
        </Button>


        <Modal
          className="rsvp-modal"
          keepMounted
          open={isModalOpen}
          onClose={handleModalClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <RsvpForm />
        </Modal>
      </HeroSection>
    </StyledApp>
  );
}

export default App;
