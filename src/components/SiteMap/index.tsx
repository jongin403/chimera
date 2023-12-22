import styles from './SiteMap.module.scss';
import SiteMapInfo, { SiteMapItem } from './siteMapInfo';

const SiteMap = () => {
  return (
    <div className={styles.siteMap}>
      {SiteMapInfo.map((item: SiteMapItem, index: number) => (
        <div key={index} className={styles.menuItem}>
          <h3>{item.label}</h3>
          {item.children && (
            <ul className={styles.subMenu}>
              {item.children.map((subItem: SiteMapItem, childIndex: number) => (
                <li key={childIndex}>{subItem.label}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SiteMap;
