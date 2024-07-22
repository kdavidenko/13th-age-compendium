import { useState } from 'react';
import './Map.css';

interface Props {
  map:string
  zones?: {
    title: string,
    callback: () => void
  }[]
}

function Map(props:Props) {
  const [selected, setSelected] = useState("");

  return (
      <div className="Map">
        {props.zones !== undefined && 
        props.zones.map(zone => 
          <div key={`map${zone.title}`} id={zone.title} className={`zone ${selected === zone.title ? 'selected' : ''}`} onClick={() => {zone.callback(); setSelected(zone.title)}}>
            <div className='zoneHighlight' />
            <div className='zoneTitle'>{zone.title}</div>
          </div>
        )}
        <img src={`/13th-age-compendium/img/map/${props.map}.png`} />
      </div>
  );
}

export default Map;
