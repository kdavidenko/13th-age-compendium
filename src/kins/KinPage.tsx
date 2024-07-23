import './KinPage.css';
import KinItem from './KinItem';
import Kins from '../data/Kins.json';
import { useSelector } from 'react-redux';

function KinPage() {
  const location = useSelector((state:any) => state.regionReducer.region)
  return (
    <div className="KinPage">
      <h2>Kins of Myrr</h2>
      <div className='content'>
        <div>kin in 13th Age are less about a collection of minor features and ability increases and more about a unique power only they get. 13th Age races are fairly flexible in how they appear and there is very little guidance given.</div>
        <div>To help in selection, on the left is the official term for the Kin and on the right is the common equivalent (such as "The Lost/Tiefling"). These terms are interchangeable.</div>
        <div>If you are not using a race from the core rulebook, it will likely not be in Foundry and you'll have to port the power over. I can help with any settings required to make it function properly.</div>
        <div>Ignore any specified abilities score increase (such as "+2 to Dexterity or Wisdom") and just take a +2 bonus to any stat of your choice. If there is a special note or restriction, such as with Ogre/Giantkin, you still have to adhere to that.</div>
      </div>
      { 
        Kins.kins.map(function(Kin, i) {
          if (Kin.setting.includes(location)) {
          return (
            <div key={`Kin`+i}>
              <KinItem {...Kin} />
            </div>
          )
        } else {
          return;
        }
        })
      }

    </div>
  )
}

export default KinPage;
