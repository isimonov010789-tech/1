import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const TeacherVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontSize: 96,
          fontWeight: 700,
          opacity: interpolate(frame, [0, 30], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Teacher Video
      </div>
    </AbsoluteFill>
  );
};
