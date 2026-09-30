import {AbsoluteFill, Img, OffthreadVideo, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

/** A still-image camera preview; videoSrc replaces it with externally generated footage. */
export const TeacherVideo = ({videoSrc = ''}: {videoSrc?: string}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  return (
    <AbsoluteFill style={{backgroundColor: '#ffffff', overflow: 'hidden'}}>
      {videoSrc ? (
        <OffthreadVideo
          src={staticFile(videoSrc)}
          muted
          style={{width: '100%', height: '100%', objectFit: 'contain'}}
        />
      ) : (
        <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
          <Img
            src={staticFile('character-front.jpg')}
            alt="Auburn-haired character in a gray sleeveless top, trousers and white sneakers"
            style={{
              height: 1680,
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              scale: interpolate(frame, [0, durationInFrames - 1], [1, 1.04], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              }),
              transformOrigin: '50% 50%',
            }}
          />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
