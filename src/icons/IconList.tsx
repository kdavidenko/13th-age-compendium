import './IconList.css';
import IconItem from './IconItem';

import Heroic from '../data/HeroicIcons.json';
import Ambiguous from '../data/AmbiguousIcons.json';
import Villainous from '../data/VillainousIcons.json';

function IconList() {
  return (
    <div className="IconItem">
      <h3>Heroic Icons</h3>
    { 
      Heroic.icons.map(function(icon, i) {
        console.log(icon)
        return (
          <div key={`icon`+i}>
            <IconItem {...icon} />
          </div>
        )
      })
    }
    <h3>Ambiguous Icons</h3>
    { 
      Ambiguous.icons.map(function(icon, i) {
        console.log(icon)
        return (
          <div key={`icon`+i}>
            <IconItem {...icon} />
          </div>
        )
      })
    }
    <h3>Villainous Icons</h3>
    { 
      Villainous.icons.map(function(icon, i) {
        console.log(icon)
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

export default IconList;
