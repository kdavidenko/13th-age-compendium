import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import './ConvertPage.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function ConvertPage() {
  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)

  return (
    <div className="ConvertPage">
      <h2>Conversion from 13th Age to Myrr</h2>
      <h3>Icon Conversion</h3>
      <div>Some abilities, powers, and spells in 13th Age refer to the default icons. Base mechanics will likely to stay the same, but the story and fluff around them will change as such:</div>
      <hr />
      { location === 'mainland' && 
        <>
          <div className='convertIcon'>Archmage <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Arbiter</div>
          <hr />
          <div className='convertIcon'>Crusader <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Iron Marshal</div>
          <hr />
          <div className='convertIcon'>Diabolist <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Epiphany</div>
          <hr />
          <div className='convertIcon'>Dwarf King <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Uniter</div>
          <hr />
          <div className='convertIcon'>Elf Queen <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Matriarch</div>
          <hr />
          <div className='convertIcon'>Emperor <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Sun Queen</div>
          <hr />
          <div className='convertIcon'>Great Gold Wyrm <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Redeemer</div>
          <hr />
          <div className='convertIcon'>High Druid <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Green Man</div>
          <hr />
          <div className='convertIcon'>Lich King <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Dead Seer</div>
          <hr />
          <div className='convertIcon'>Orc Lord <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Storm</div>
          <hr />
          <div className='convertIcon'>Priestess <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Truthteller</div>
          <hr />
          <div className='convertIcon'>Prince of Shadows <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Viper</div>
          <hr />
          <div className='convertIcon'>The Three <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Schemer</div>
          <hr />
        </>
      }
      { location === 'urthu' && 
        <>
          <div className='convertIcon'>Archmage <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Arbiter</div>
          <hr />
          <div className='convertIcon'>Crusader <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Conqueror</div>
          <hr />
          <div className='convertIcon'>Diabolist <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Epiphany</div>
          <hr />
          <div className='convertIcon'>Dwarf King <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Loresinger</div>
          <hr />
          <div className='convertIcon'>Elf Queen <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Shadowbinder</div>
          <hr />
          <div className='convertIcon'>Emperor <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Sealord</div>
          <hr />
          <div className='convertIcon'>Great Gold Wyrm <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Unwaking</div>
          <hr />
          <div className='convertIcon'>High Druid <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Huntress</div>
          <hr />
          <div className='convertIcon'>Lich King <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Hive</div>
          <hr />
          <div className='convertIcon'>Orc Lord <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Conqueror</div>
          <hr />
          <div className='convertIcon'>Priestess <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Shaman</div>
          <hr />
          <div className='convertIcon'>Prince of Shadows <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Collector</div>
          <hr />
          <div className='convertIcon'>The Three <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Breaker</div>
          <hr />
        </>
      }
      <div>If there are multiple options, choose the one that would fit best for you.</div>

    </div>
  );
}

export default ConvertPage;
