import './Map.css';
import { Link } from 'react-router-dom';

import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from '@mui/material';

export interface MapIconList {
  id: string,
  iconType: string,
  symbol: string,
  name: string
}

interface Props {
  map:string,
  icons?: MapIconList[],
  zones?: {
    title: string,
    callback?: () => void
  }[]
}

function Map(props:Props) {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)
  const [showIcons, setShowIcons] = useState(true);
  const [zoom, setZoom] = useState(false);

  return (
      <div className="Map">
      {props.icons && 
        <Button variant="contained" onClick={() => setShowIcons(!showIcons)}>
          {showIcons ? 'Hide' : 'Show'} Icons
        </Button>
      }
      {props.icons !== undefined && 
      props.icons.map(icon => 
        <div key={`icon${icon.id}`} id={`${location}-${icon.id}`} className={`mapIcon icon-${icon.iconType} ${showIcons ? "" : "hide"}`}>
         <img src={icon.symbol} alt={`${icon.name} symbol`} className='name-symbol' />
         <div className='iconTitle'>{icon.name}</div>
         <div className='icon-shadow'/>
        </div>
      )}
      {props.zones !== undefined && 
      props.zones.map(zone => 
        <Link key={`map${zone.title}`} to="/">
          <div id={zone.title} className={`zone ${location === zone.title.toLocaleLowerCase() ? 'selected' : ''}`} onClick={() => {if (zone.callback){ zone.callback() }}}>
            <div className='zoneHighlight' />
            <div className='zoneTitle'>{zone.title}</div>
          </div>
        </Link>
      )}
        <img 
          src={`/13th-age-compendium/img/map/${props.map}.png`}
          about={`${props.map} map`}
          className={`${zoom ? 'zoom' : ''}`}
          onClick={() => {
            if(!zoom) {
              setShowIcons(false)
            } else {
              
            setShowIcons(true);
            }
            setZoom(!zoom); 
          }}
        />
      </div>
  );
}

export default Map;
