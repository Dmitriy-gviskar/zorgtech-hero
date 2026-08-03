import { motion } from 'motion/react';

// TODO: placeholder clip from the spec — swap for real Zorgtech product footage.
const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4';

export default function BackgroundVideo() {
  return (
    <div className="video-bg">
      <motion.div
        className="video-wrap"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <video src={VIDEO_SRC} autoPlay muted playsInline loop />
      </motion.div>
    </div>
  );
}
