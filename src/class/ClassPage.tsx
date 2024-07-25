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
