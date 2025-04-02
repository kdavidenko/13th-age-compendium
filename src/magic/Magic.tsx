import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import './Magic.css';

function MagicPage() {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)

  return (
    <div className="MagicPage">
      <h2>Magic and Gods</h2>
      <h3>The Old Ways</h3>
      <p>In ancient times, the gods became split along two lines, the Prismatic and the Fallen. Locked away with their demon allies, the Fallen sought a path into the material world to remake it in their own image. The five Prismatic deities each ruled a minor pantheon of their own and their efforts were spent ensuring that magic capable of releasing the Fallen was denied and other magics shielded from their ever-present gaze.</p>
      <p>For millennia, the gods filtered magic for mortal use, even those who did not adhere to their worship still fell under their protection if they used magic aligned with them. For example, a wizard conjuring a shield to protect themselves from harm used magic filters and channeled by Ausphitar, the Golden Dragon and protector of the world.</p>
      <h3>After the Last Night</h3>
      <p>Magic, and the world, changed forever about 30 years ago.</p>
      <p>This event was called "The Last Night", name for an ancient dragonmage prophecy fortelling the end of the protection of the Prismatic gods. During the initial stages of the crisis, the gods suddenly fell silent. Clerical powers stopped working, prayers went unanswered, spells became dangerous overnight. Under the previous magical paradigm, only magic relating to teleportation, summoning, and portals showed signs of significant danger. After the fall of the Last Night, every spell attracted demonic beings seeking to make pacts with the caster or simply consume them. There was only one sort of magic that still worked "properly."</p>
      <h3>Age of Pact Magic</h3>
      <p>Among spellcasters during the last night, those who seemed least affected were those who had acquired their powers through magical transactions or were innately magical. These sorcerers and warlocks quickly rose to prominance as defenders against the demonic incursions that now plagued the whole of Myrr.</p>
      <p>It became readily apparant that magic still existed in the world, and safe paths to wield it. Former mages studied beings with natural abilities, such as djinn, dragons, and elementals. This research led to the conclusion that these entities with natural magical prowess were not affected by risk of attracting demonic attention. However, they were only safe using their own magic.</p>
      <h3>New Faiths and Local Magic</h3>
      <p>With the discovery of the resistance pact magic had with demonic attraction, spellcasters were forced to look closer to home for magical power. They once again had to cultivate relationships with fey creatures, elementals, even devillish angels and noble dragons. The practice of magic became more about the relationship between the caster and those they had learned and borrowed from rather than the pure science of it or simply being gifted.</p>
      <p>In essence, most spellcasters (or at least those who wanted to remain safe) found themselves creating "brain trusts" of beings or devoting themselves to one particularly strong relationship. With this effort, cleric magic began to creep back into the world. No longer bound by trafficking with deity, the dedication of the cleric themselves became the conduit for channeling the power of the being they venerated. Rather than a cleric of a distant greater god, most clerics had a closer relationship with their patron entity. For example, a cleric could venerate a local river elemental and have great sway of that element.</p>
      <h3>Looking to the Future</h3>
      <p>Magic has become strange in Myrr, requiring more caution and as such spells can become more potent individually but cast less frequently. Often, once every few battles or even once in a day to avoid attracting demonic attention.</p>
      <p><i>In game terms, the changes to magic after the Last Night explain the shift from frequent and Vancian magic (ie, spell slots) to the more structured and 'every spell counts' system of 13th Age.</i></p>
    </div>
  );
}

export default MagicPage;
