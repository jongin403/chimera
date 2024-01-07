'use client';

import styles from './SearchBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export type SearchBarProps = {
  className?: string;
  activeTabMenu?: '홈' | '사이트맵' | '검색' | '마이페이지' | undefined;
};

const SearchBar = ({ className }: SearchBarProps) => {
  return <div className={cx(className, styles.searchBar)} />;
};

export default SearchBar;
