import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

export default function PageHeader({ back, backLabel = 'На главную', label, title, lead }) {
  return (
    <motion.div
      className="page-header"
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <Link to={back} className="back-link">
        ← {backLabel}
      </Link>
      {label && <p className="section-label">{label}</p>}
      <h1 className="page-title">{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </motion.div>
  );
}
