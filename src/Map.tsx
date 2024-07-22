import './Map.css';

interface Props {
  map:string
  zones?: {
    title: string,
    callback: () => void
  }[]
}

function Map(props:Props) {
  return (
      <div className="Map">
        {props.zones !== undefined && 
        props.zones.map(zone => 
          <div key={`map${zone.title}`} id={zone.title} className='zone' onClick={() => zone.callback()}/>
        )}
        <img src={`/13th-age-compendium/img/map/${props.map}.png`} />
      </div>
  );
}

export default Map;
