'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import styles from './Accordion.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isOpen) {
      ref.current.style.height = ref.current.scrollHeight + 'px';
    } else {
      ref.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={toggleAccordion}>
        <h3 className={styles.title}>Question</h3>
        <div className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}>
          <i className={styles['fa fa-chevron-down']}></i>
        </div>
      </div>
      <div ref={ref} className={cx(styles.content, isOpen && styles.isOpen)}>
        <p className={styles.answer}>Answer</p>
      </div>
    </div>
  );
};

export default Accordion;
