import { Box, Button, TextField } from "@mui/material";
import { StyledRsvpForm } from "./RsvpForm.styled";

export const RsvpForm: React.FC = () => {
    return (
        <StyledRsvpForm>
                (Draft/WIP - Dennis)
                <TextField
                    variant="outlined"
                    placeholder="Please enter your name"
                    fullWidth
                />

                <Button
                    className="rsvp-submit"
                    size="large"
                    variant="contained"
                >
                    Confirm attendance
                </Button>
        </StyledRsvpForm>
    )
};