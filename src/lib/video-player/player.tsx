'use client'
import * as React from 'react';
import { styled } from '@mui/material';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import PlayerControls from './player-control';
import PlayerOverlay from './player-overlay';
import { INITIAL_STATE, reducer } from './player-reducer';

const StyledPlayer = styled('div') <ReactPlayerProps>`
  position: relative;
  /* aspect-ratio: 16/9; */
  border-radius: 8px;

  video,
  .react-player__preview {
    border-radius: 8px;
  }

  // defined from script, if props light is true then is visible
  .react-player__preview:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), transparent);
  }

  &:hover {
    .video-player__controls {
      opacity: 1;
    }
  }

  .video-player__controls {
    opacity: ${({ state }) => (state.light ? '0' : state.playing ? '0' : '1')};
  }
`;

const Player: React.FC<ReactPlayerProps & { overLayText: string, date?: string, label?: string, className?: string, height?: string, width?: string }> = (props) => {
    const { url, light, overLayText, date, label, className, height = '100%', width = '100%' } = props;
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
    const playerRef = React.useRef<ReactPlayer>(null);
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    const handlePreview = () => {
        dispatch({ type: 'PLAY' });
        dispatch({ type: 'LIGHT', payload: false });
    };

    const handlePause = () => {
        dispatch({ type: 'PAUSE' });
    };

    const handlePlay = () => {
        dispatch({ type: 'PLAY' });
    };

    const handleEnded = () => {
        dispatch({ type: 'LIGHT', payload: true });
        playerRef.current?.showPreview();
    };

    const handleProgress = (progress: { played: number, playedSeconds: number }) => {
        dispatch({ type: 'SEEK', payload: progress });
    };

    const handleDuration = (duration: number) => {
        dispatch({ type: 'DURATION', payload: duration });
    };

    return (
        isClient &&
        <StyledPlayer className={className} state={state} ref={wrapperRef}>
            <ReactPlayer
                ref={playerRef}
                url={url}
                width={width}
                height={height}
                light={light}
                playIcon={
                    <PlayArrowRounded
                        sx={{
                            color: 'white',
                            fontSize: '6rem',
                        }}
                    />
                }
                controls={state.controls}
                loop={state.loop}
                muted={false}
                playing={state.playing}
                playbackRate={state.playbackRate}
                volume={state.volume}
                onPlay={handlePlay}
                onEnded={handleEnded}
                onPause={handlePause}
                onDuration={handleDuration}
                onProgress={handleProgress}
                onClickPreview={handlePreview}
            />
            <PlayerOverlay dispatch={dispatch} overLayText={overLayText} date={date} state={state} label={label} />
            <PlayerControls state={state} dispatch={dispatch} playerRef={playerRef} wrapperRef={wrapperRef} />
        </StyledPlayer>
    );
};

export default Player;
