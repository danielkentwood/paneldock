import Link from 'next/link';
import sidebar_styles from '../styles/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={sidebar_styles.sidebar}>
      <div className={sidebar_styles.iconContainer} data-tooltip="New graph window">
        <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/share-2--v1.png" alt="share-2--v1" className={sidebar_styles.sidebarImg}/>
        <div className={sidebar_styles.dropdown}>
          <button className={sidebar_styles.dropdownButton}>ICD10</button>
          <button className={sidebar_styles.dropdownButton}>CPT4</button>
          <button className={sidebar_styles.dropdownButton}>GPI</button>
        </div>
      </div>

      <div className={sidebar_styles.iconContainer} data-tooltip="New node details window">
        <img width="48" height="48" src="https://img.icons8.com/ios/50/000000/microscope.png" alt="microscope" className={sidebar_styles.sidebarImg}/>
      </div>

      <div className={sidebar_styles.iconContainer} data-tooltip="New clinical journey explorer window (coming soon!)">
        <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/sankey.png" alt="sankey" className={sidebar_styles.sidebarImg}/>
      </div>

      <div className={sidebar_styles.iconContainer} data-tooltip="New AI chat window (coming soon!)">
        <img width="48" height="48" src="https://img.icons8.com/ios/50/background-remover.png" alt="ai-chat" className={sidebar_styles.sidebarImg} />
      </div>

      <div className={sidebar_styles.iconContainer} data-tooltip="Collections (coming soon!)">
        <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/collectibles.png" alt="collections" className={sidebar_styles.sidebarImg} />
      </div>

      <div className={`${sidebar_styles.iconContainer} ${sidebar_styles.homeIcon}`} data-tooltip="Home">
        <Link href="/">
          <img width="48" height="48" src="https://img.icons8.com/ios/50/1A1A1A/home.png" alt="home" className={sidebar_styles.sidebarImg}/>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;