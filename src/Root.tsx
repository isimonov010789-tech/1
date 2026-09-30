import {Composition} from 'remotion';
import {TeacherVideo} from './TeacherVideo';

export const RemotionRoot = () => (
  <Composition
    id="TeacherVideo"
    component={TeacherVideo}
    durationInFrames={192}
    fps={24}
    width={1080}
    height={1920}
    defaultProps={{videoSrc: ''}}
  />
);
