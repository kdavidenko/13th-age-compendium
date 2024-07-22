import { useDispatch, useSelector } from 'react-redux';
import './MapPage.css';
import Map from "Map";
import { RegionState } from 'app/reducers/regionReducer';

function MapPage() {
  const location = useSelector<RegionState, RegionState['region']>((state) => state.region)
  const dispatch = useDispatch();

  const switchRegion = (region:string) => {
    dispatch({type:"CHANGE_REGION", payload: region})
  }
  return (
      <div className="MapPage">
          <Map
          map="worldMap"
          zones={[
            {title:"Mainland", callback: () => {switchRegion("mainland")}},
            {title:"Urthu", callback: () =>  {switchRegion("urthu")}}
          ]}
          />
      </div>
  );
}

export default MapPage;
