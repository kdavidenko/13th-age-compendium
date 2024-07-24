import './RegionMap.css';
import Map, { MapIconList } from "./Map";
import { useEffect, useState } from 'react';
import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import IconsMainland from '../data/IconsMainland.json';
import IconsUrthu from '../data/IconsUrthu.json';

interface IconTypes {
    id:string,
    iconType: string,
    symbolPath: string,
    name: string,
    description: string,
    quote: string,
    usualLocation: string,
    commonKnowledge: string[],
    adventurers: string[],
    allies: string,
    enemies: string,
    history: string[],
    trueDanger: string
}

type IconWrapperType = {
    heroic:IconTypes[],
    ambiguous:IconTypes[],
    villainous:IconTypes[],
}

function RegionMap() {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)
  const [listOfIcons, setListOfIcons] = useState<MapIconList[] | undefined>();

  let regionIcons:IconWrapperType;

  switch (location) {
    case 'mainland':
      regionIcons = IconsMainland;
      break;
    case 'urthu':
      regionIcons = IconsUrthu;
      break;
    default:
      regionIcons = IconsMainland;
      break;
  }

    const iconList:IconTypes[] = [...regionIcons.heroic, ...regionIcons.ambiguous, ...regionIcons.villainous];
    useEffect(() => {
        const returnList:MapIconList[] = [];
        console.log (iconList);
        iconList.forEach(icon => {
            returnList.push({
                id: icon.id,
                iconType: icon.iconType,
                symbol: icon.symbolPath,
                name: icon.name
            })
        });
        setListOfIcons(returnList);
    },[]);

  return (
      <div className={`RegionMap ${location ?? 'mainland'}-map`} >
      <h3>Region Map</h3>
          <Map
            map={`${location ?? 'mainland'}Map`}
            icons={listOfIcons}
          />
      </div>
  );
}

export default RegionMap;
