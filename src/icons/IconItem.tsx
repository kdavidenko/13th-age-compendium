import './IconItem.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

type IconItemProps = {
  iconType: string,
  symbolPath: string,
  name: string,
  description: string,
  quote: string,
  usualLocation: string,
  commonKnowledge: Array<string>,
  adventurers: Array<string>,
  allies: string,
  enemies: string,
  history: Array<string>,
  trueDanger: string
}

function IconItem(
  {
    iconType,
    symbolPath,
    name,
    description,
    quote,
    usualLocation,
    commonKnowledge,
    adventurers,
    allies,
    enemies,
    history,
    trueDanger
  }: IconItemProps,
) {
  const checkIconType = (type:string) => {
    if (type === 'heroic') {return '#a8efd7'}
    else if (type === 'ambiguous') {return '#dfcf8e'}
    else {return '#ff9f9f'}
  }
  
  const CustomAccordion = styled(Accordion)(() => {
    return {
      boxShadow: 'none', // this styles directly apply to accordion
      border: `1px solid gray`,
      '.MuiAccordionDetails-root': {},
      '.MuiAccordionSummary-root': {
        background: checkIconType(iconType)
      }, // this apply to Summary
    };
  });


  return (
    <div className="IconItem">
      <CustomAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <img src={symbolPath} alt={`${name} name symbol`} className='name-symbol' />
        <div className='accordionHeaderContent'>
          <div className='iconNameWrapper'>
          <div className='name'> 
                {name}
            </div>
            <div className='description'>
              {description}
            </div> 
           </div>  
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className='quote'>
          <div className="heading">Quote</div>
          <div className='content'>{quote}</div>
        </div>
        <div className='usual-location'>
          <div className="heading">Usual Location</div>
          <div className='content'>{usualLocation}</div>
        </div>
        <div className='common-knowledge'>
          <div className="heading">Common Knowledge</div>
          <div className='content'>
            {
              commonKnowledge.map((string, i) => {
                return (
                  <div key={'common'+i}>{string}</div>
                )
              })
            }
          </div>
        </div>
        <div className='adventurers'>
          <div className="heading">Adventurers and the Icon</div>
          <div className='content'>
            {
              adventurers.map((string, i) => {
                return (
                  <div key={'adventurers'+i}>{string}</div>
                )
              })
            }
          </div>
        </div>
        <div className='allies'>
          <div className="heading">Allies</div>
          <div className='content'>{allies}</div>
        </div>
        <div className='enemies'>
          <div className="heading">Enemies</div>
          <div className='content'>{enemies}</div>
        </div>
        <div className='history'>
          <div className="heading">History</div>
          <div className='content'>
            {
              history.map((string, i) => {
                return (
                  <div key={'history'+i}>{string}</div>
                )
              })
            }
          </div>
        </div>
        <div className='true-danger'>
          <div className="heading">The True Danger</div>
          <div className='content'>{trueDanger}</div>
        </div>

        <div className='symbol'><img src={symbolPath} alt={`${name} symbol`} /></div>
        </AccordionDetails>
      </CustomAccordion>
    </div>
    
  );
}

export default IconItem;
