import './AncestryPage.css';
import AncestryItem from './AncestryItem';

import Ancestries from '../data/Ancestries.json';

function AncestryPage() {
  return (
    <div className="AncestryPage">
      <h2>Ancestries</h2>
      <div className='content'>
        <div>Ancestries in 13th Age are less about a collection of minor features and ability increases and more about a unique power only they get. 13th Age races are fairly flexible in how they appear and there is very little guidance given.</div>
        <div>To help in selection, on the left is the Myrr ancestry and on the right is the 13th age SRD equivalent. If you are not using a race from the core rulebook, it will likely not be in Foundry and you'll have to port the power over. I can help with any settings required to make it function properly.</div>
        <div>Ignore the specified abilities score increase (such as "+2 to Dexterity or Wisdom") and just take a +2 bonus to any stat of your choice. If there is a special note or restriction, such as with Ogre/Giantkin, you still have to adhere to that.</div>
      </div>
      { 
        Ancestries.ancestries.map(function(ancestry, i) {
          return (
            <div key={`ancestry`+i}>
              <AncestryItem {...ancestry} />
            </div>
          )
        })
      }

    </div>
  )
}

export default AncestryPage;
