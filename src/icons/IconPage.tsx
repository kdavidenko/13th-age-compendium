import './IconPage.css';
import IconItem from './IconItem';

import IconsMainland from '../data/IconsMainland.json';
import IconsUrthu from '../data/IconsUrthu.json';


import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';

function IconPage() {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)
  let regionIcons;

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


  return (
    <div className="IconPage">
      <h3>Heroic Icons</h3>
    { 
      regionIcons.heroic.map(function(icon, i) {
        return (
          <div key={`icon`+i}>
            <IconItem {...icon} />
          </div>
        )
      })
    }
    <h3>Ambiguous Icons</h3>
    { 
       regionIcons.ambiguous.map(function(icon, i) {
          return (
            <div key={`icon`+i}>
              <IconItem {...icon} />
            </div>
          )
      })
    }
    <h3>Villainous Icons</h3>
    { 
      regionIcons.villainous.map(function(icon, i) {
          return (
            <div key={`icon`+i}>
              <IconItem {...icon} />
            </div>
          )
      })
    }
    </div>
  );
}

export default IconPage;
