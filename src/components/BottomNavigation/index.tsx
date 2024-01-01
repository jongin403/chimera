'use client';

import { HouseSolid } from '../../icons/house-solid';
import { MagnifyingGlassSolid } from '../../icons/magnifying-glass-solid';
import Typo from '../atom/Typo';
import styles from './BottomNavigation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export type BottomNavigationProps = {
  className?: string;
  activeTabMenu?: '홈' | '검색' | undefined;
  handleClickTabMenu?: (menuName: string) => void;
};

const menuList = ['홈', '검색'];

const BottomNavigation = ({
  className,
  activeTabMenu,
  handleClickTabMenu,
}: BottomNavigationProps) => {
  return (
    <div className={cx(className, styles.bottomNavigation)}>
      <div className={styles.itemList}>
        {menuList.map((itemName, index) => {
          return (
            <button
              key={index}
              className={cx(
                'itemButton',
                itemName === activeTabMenu ? 'active' : 'inactive',
              )}
              onClick={() => {
                if (handleClickTabMenu) {
                  handleClickTabMenu(itemName);
                }
              }}
            >
              <MenuIcon
                menuIconProps={{
                  className: styles.menuIcon,
                  width: 24,
                  height: 24,
                }}
                name={itemName}
                isActive={false}
              />
              <div className={styles.itemNameWrap}>
                <Typo>{itemName}</Typo>
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
      {name === '검색' && <MagnifyingGlassSolid {...menuIconProps} />}
    </>
  );
};

export const BottomNavigationBlank = () => {
  return <div className={cx(styles.bottomNavigationBlank)} />;
};

export default BottomNavigation;
