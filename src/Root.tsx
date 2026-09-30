import {Composition} from 'remotion';
import {TeacherVideo} from './TeacherVideo';

export const RemotionRoot = () => (
  <Composition
    id="TeacherVideo"
    component={TeacherVideo}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
  />
);
