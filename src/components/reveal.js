import React from 'react';
import { motion } from 'framer-motion';
import useInView from './use-in-view';

const DIRECTIONS = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
};

export default function Reveal({ children, direction = 'up', delay = 0, duration = 0.6, style, className, as = 'div' }) {
  const [ref, inView] = useInView();
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: offset.y, x: offset.x },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  );
}
