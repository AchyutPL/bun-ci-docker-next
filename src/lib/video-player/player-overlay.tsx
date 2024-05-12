import * as React from 'react';
import { Box, Chip, Fade, styled, Typography } from '@mui/material';
import { ReactPlayerProps } from 'react-player';

const StyledPlayerOverlay = styled('div') <ReactPlayerProps>`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: end;
  left: 0;
  top: 0;
  bottom: ${({ state }) => (state.light ? '0' : '94px')};
  background-color: ${({ state }) => (state.light || state.playing ? 'transparent' : 'rgba(0, 0, 0, 0.4)')};
  opacity: ${({ state }) => (state.playing ? '0' : '1')};
  transition: opacity 0.2s ease-in-out;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  .video-player__overlay-inner {
    padding-left: ${({ state }) => (state.light ? '50px' : '25px')};
    padding-bottom: ${({ state }) => (state.light ? '50px' : '38px')};
    width: ${({ state }) => (state.light ? 'auto' : '100%')};
  }
`;

const PlayerOverlay: React.FC<ReactPlayerProps> = (props) => {
    const { state, overLayText, date, label = '#1 Hot' ,dispatch} = props;

    return (
        <StyledPlayerOverlay onClick={() => dispatch({ type: 'TOGGLE_PLAY' })} state={state}>
            <Box className={'video-player__overlay-inner'}>
                <Fade in>
                    <Chip label={label} color={'warning'} />
                </Fade>
                <Fade in>
                    <Typography variant="h4" color={'white'} mt={2}>
                        {overLayText}
                    </Typography>
                </Fade>
                <Fade in>
                    <Typography variant="overline" color={'white'}>
                        {date}
                    </Typography>
                </Fade>
            </Box>
        </StyledPlayerOverlay>
    );
};

export default PlayerOverlay;
