import './AncestryPage.css';
import AncestryItem from './AncestryItem';

import Ancestries from '../data/Ancestries.json';

function AncestryPage() {
  return (
    <div className="AncestryPage">
      <h2>Ancestries</h2>
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
