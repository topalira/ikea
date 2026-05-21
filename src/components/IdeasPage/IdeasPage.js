import './IdeasPage.css';

import Ideadecor from '../Ideadecor/Ideadecor'
import IdeasCard from '../IdeasCard/IdeasCard'
import Interiorlayout from '../Interiorlayout/Interiorlayout'
import Many from '../Many/Many'
import ProductsRooms from '../ProductsRooms/ProductsRooms';

export function IdeasPage() {
  return (
    <div className="IdeasPage" >
      <Ideadecor />
      <Interiorlayout />
      <ProductsRooms/>
      <IdeasCard />
      <Many />
      <ProductsRooms/>
    </div>
  );
}

export default IdeasPage;