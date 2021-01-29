import Header from './components/Header'
import Items from './components/Items'
import './App.css';
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className = 'home_page'>

{/*Header */}
<Header/>
{/* Items */}

<div className = 'item_container'></div>

<Items 
title = 'Lowest Cost Solar Panels in America'
desc= 'Money-back guarantee'
backgroundImage ={SolarPanels}
textButtonright = 'Learn More'
linkButtonRight
textButtonLeft='Order Now'
linkButtonLeft
twoButtons= 'true'
first = 'true'
/>

<Items 

title = 'Model S'
desc= 'Starting at $69,420'
backgroundImage ={ModelS}
textButtonright= 'Existing Inventory'
linkButtonRight
textButtonLeft= 'Custom Order'
linkButtonLeft
twoButtons= 'true'


/>

<Items 
title = 'Model 3'
desc= ' Order Online for Touchless Delivery'
backgroundImage={Model3}
textButtonright = 'Existing Inventory'
linkButtonRight
textButtonLeft= 'Custom Order'
linkButtonLeft
twoButtons= 'true'
/>

<Items 
title = 'Model X'
desc= 'Order Online for Touchless Delivery'
backgroundImage={ModelX}
textButtonright = 'Existing Inventory'
linkButtonRight
textButtonLeft= 'Custom Order'
linkButtonLeft
twoButtons= 'true'
/>

<Items 
title = 'Model Y'
desc= 'Order Online for Touchless Delivery'
backgroundImage={ModelY}
textButtonright = 'Existing Inventory'
linkButtonRight
textButtonLeft= 'Custom Order'
linkButtonLeft
twoButtons= 'true'

/>

<Items 
title = 'Solar for New Roofs'
desc= 'Solar Roof Costs Less Than a New Roof Plus Solar Panels '
backgroundImage={SolarRoof}
textButtonright = 'Learn More'
linkButtonRight
textButtonLeft = 'Order Now'
linkButtonLeft
twoButtons= 'true'

/>

<Items 
title = 'Accessories'
desc= ''
backgroundImage ={Accessories}
textButtonLeft = 'Shop Now'
linkButtonRight



/>





      </div>

  );
}

export default App;
