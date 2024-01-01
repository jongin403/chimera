'use client';

import { HouseSolid } from '../../icons/house-solid';
import { MagnifyingGlassSolid } from '../../icons/magnifying-glass-solid';
import { SitemapSolid } from '../../icons/sitemap-solid';
import Typo from '../atom/Typo';
import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';
import { usePathname, useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

export type BottomNavigationProps = {
  className?: string;
  activeTabMenu?: '홈' | '사이트맵' | '검색' | undefined;
};

type MenuListProps = {
  name: string;
  path: string;
};

const menuList: MenuListProps[] = [
  {
    name: '홈',
    path: '/home',
  },
  {
    name: '사이트맵',
    path: '/sitemap',
  },
  {
    name: '검색',
    path: '/search',
  },
];

const BottomNavigation = ({ className }: BottomNavigationProps) => {
  const router = useRouter();
  const handleClickTabMenu = (path: string) => {
    router.push(path);
  };
  const currentRoute = usePathname();

  return (
    <div className={cx(className, styles.bottomNavigation)}>
      <div className={styles.itemList}>
        {menuList.map((item, index) => {
          const isActive = currentRoute === item.path;
          return (
            <button
              key={index}
              className={cx('itemButton', { active: isActive })}
              onClick={() => {
                handleClickTabMenu(item.path);
              }}
            >
              <MenuIcon
                menuIconProps={{
                  className: styles.menuIcon,
                  width: 24,
                  height: 24,
                }}
                name={item.name}
                isActive={isActive}
              />
              <div className={styles.itemWrap}>
                <Typo>{item.name}</Typo>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

type MenuIconProps = {
  className: string;
  width: number;
  height: number;
};

const MenuIcon = ({
  menuIconProps,
  name,
  isActive,
}: {
  menuIconProps: MenuIconProps;
  name: string;
  isActive: boolean;
}) => {
  return (
    <>
      {name === '홈' && <HouseSolid {...menuIconProps} />}
      {name === '사이트맵' && <SitemapSolid {...menuIconProps} />}
      {name === '검색' && <MagnifyingGlassSolid {...menuIconProps} />}
    </>
  );
};

export const BottomNavigationBlank = () => {
  return <div className={cx(styles.bottomNavigationBlank)} />;
};

export default BottomNavigation;
