import './ConvertPage.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function ConvertPage() {
  return (
    <div className="ConvertPage">
      <h2>Conversion from 13th Age to Myrr</h2>
      <h3>Icon Conversion</h3>
      <div>Some abilities, powers, and spells in 13th Age refer to the default icons. Base mechanics will likely to stay the same, but the story and fluff around them will change as such:</div>
      <hr />
      <div className='convertIcon'>Archmage <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Arbiter, Storm, Unwaking</div>
      <hr />
      <div className='convertIcon'>Crusader <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Iron Marshal</div>
      <hr />
      <div className='convertIcon'>Diabolist <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Epiphany</div>
      <hr />
      <div className='convertIcon'>Dwarf King <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Iron Marshal, Uniter</div>
      <hr />
      <div className='convertIcon'>Elf Queen <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Matriarch, Green Man, Truthteller</div>
      <hr />
      <div className='convertIcon'>Emperor <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Sun Queen, Iron Marshal, Storm</div>
      <hr />
      <div className='convertIcon'>Great Gold Wyrm <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Redeemer, Unwaking</div>
      <hr />
      <div className='convertIcon'>High Druid <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Green Man</div>
      <hr />
      <div className='convertIcon'>Lich King <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Dead Seer</div>
      <hr />
      <div className='convertIcon'>Orc Lord <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Uniter</div>
      <hr />
      <div className='convertIcon'>Priestess <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Arbiter or Truthteller</div>
      <hr />
      <div className='convertIcon'>Prince of Shadows <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Viper</div>
      <hr />
      <div className='convertIcon'>The Three <TrendingFlatIcon fontSize='small' style={{verticalAlign:'middle'}} /> Schemer</div>
      <hr />
      <div>If there are multiple options, choose the one that would fit best for you.</div>

    </div>
  );
}

export default ConvertPage;
