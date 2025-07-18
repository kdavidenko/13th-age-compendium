import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import './HomePage.css';

function HomePage() {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)

  return (
    <div className="HomePage">
      <h2>Welcome to the new Myrr</h2>
      <p>Magic has been changed forever, the gods are silent.</p>
      <p>Use the icon in the upper right to change your region. Urthu for campaign 6 and Mainland for the locations of campaigns 2 through 5.</p>      
    </div>
  );
}

export default HomePage;
