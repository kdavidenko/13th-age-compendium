import { useDispatch } from 'react-redux';
import './MapPage.css';
import Map from "./Map";
import { useState } from 'react';

function MapPage() {
  const dispatch = useDispatch();
  const [regSelected, setRegSelected] = useState("");

  const switchRegion = (region:string) => {
    setRegSelected(region);
    dispatch({type:"CHANGE_REGION", payload: region})
  }
  return (
      <div className="MapPage">
      <h3>World Map</h3>
      <p>Select the region you wish to see information about, then proceed to other pages.</p>
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
