import './DesignPage.css';

import DesignHero from '../DesignHero/DesignHero';
import HomeGuides from '../HomeGuides/HomeGuides';
import DesiInfo from '../DesiInfo/DesiInfo';
import Variants from '../Variants/Variants';
import Advice from '../Advice/Advice';

export function DesignPage() {
  return (
    <div className="DesignPage" >
      <DesignHero/>
      <HomeGuides/>
      <DesiInfo/>
      <Variants/>
      <Advice/>
    </div>
  );
}

export default DesignPage;
