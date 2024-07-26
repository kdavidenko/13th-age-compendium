import './ClassPage.css';
import CoreClasses from '../data/CoreClasses.json';
import SupplementalClasses from '../data/SupplementalClasses.json';
import ClassItem from "./ClassItem";

function ClassPage() {
  return (
    <div className="ClassPage">
      <h2>Class Overview</h2>
      <div className='content'>
        <div>Below is not the full extent of the classes, it is just a brief overview to give you an idea of what the class is capable of and what it's like to play them.</div>
        <div><b>Talents</b> help define your particular expression of the class. Think of it like being able to pick a collection of starting class features. By default a class starts with three.</div>
        <div><b>Feats</b> are incremental improvements to Talents, Spells, and other powers of your class. This is the primary way you customize your build over time.</div>
        <div>Most spells have level progression and you cast them at your level, so a spell you pick up at level 1 will always be "Cast at Higher Level" in 5e terms.</div>
      </div>
      <h3>Core Classes</h3>
      { 
        CoreClasses.classes.map(function(Class, i) {
          return (
            <div key={`Class`+i}>
              <ClassItem {...Class} />
            </div>
          )
        })
      }
      <h3>Supplemental Classes</h3>
      { 
        SupplementalClasses.classes.map(function(Class, i) {
          return (
            <div key={`Class`+i}>
              <ClassItem {...Class} />
            </div>
          )
        })
      }

    </div>
  );
}

export default ClassPage;
