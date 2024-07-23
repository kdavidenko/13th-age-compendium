import './Map.css';
import { Link } from 'react-router-dom';

import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';

interface Props {
  map:string
  zones?: {
    title: string,
    callback: () => void
  }[]
}

function Map(props:Props) {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)

  return (
      <div className="Map">
        {props.zones !== undefined && 
        props.zones.map(zone => 
          <Link key={`map${zone.title}`} to="/">
            <div id={zone.title} className={`zone ${location === zone.title.toLocaleLowerCase() ? 'selected' : ''}`} onClick={() => {zone.callback()}}>
              <div className='zoneHighlight' />
              <div className='zoneTitle'>{zone.title}</div>
            </div>
          </Link>
        )}
        <img src={`/13th-age-compendium/img/map/${props.map}.png`} />
      </div>
  );
}

export default Map;
