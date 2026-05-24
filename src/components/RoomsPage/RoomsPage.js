import './RoomsPage.css';

import Additional from '../Additional/Additional'
import Catalog from '../Catalog/Catalog'
import Cozysets from '../Cozysets/Cozysets'
import Ideasfor from '../Ideasfor/Ideasfor'
import Information from '../Information/Information'
import Productss from '../Productss/Productss'
import Rooms from '../Rooms/Rooms'

export function RoomsPage() {
  return (
    <div className="RoomsPage" >
      <Rooms />
      <Productss />
      <Information />
      <Catalog />
      <Ideasfor />
      <Cozysets />
      <Additional />
    </div>
  );
}

export default RoomsPage;
