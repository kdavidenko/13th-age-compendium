import './ClassItem.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

type ClassItemProps = {
  id: string,
  source: string,
  img: string,
  name: string,
  complexity: string,
  desc: string,
  playstyle: string,
  keymechanics: ClassKeyMechanicProps[],
  backgrounds: string,
  powers: Array<ClassPowerProps>
}
type ClassKeyMechanicProps = {
  title: string,
  desc: string,
}

type ClassPowerProps = {
  pwrtitle?: string,
  pwrDesc: string,
  pwrFeats?: Array<ClassFeatProps>
}

type ClassFeatProps = {
  featType: string,
  feat: string
}

function ClassItem(
  {
    id,
    img,
    source,
    name,
    complexity,
    desc,
    playstyle,
    keymechanics,
    backgrounds,
    powers
  }: ClassItemProps,
) {

  const CustomAccordion = styled(Accordion)(() => {
    return {
      boxShadow: 'none', // this styles directly apply to accordion
      border: `1px solid gray`,
      
      '.MuiAccordionDetails-root': {},
      '.MuiAccordionSummary-root': {
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textShadow: "#000 0px 0px 5px",
        textAlign: "center"
        // height: '385px', 
        // width: '385px'
      }, // this apply to Summary
      ".MuiExpansionPanelSummary-expandIcon": {
        color: "white"
      }
    };
  });


  return (
    <div id={id} className="ClassItem">
      <CustomAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }}/>}>
          <div className='name'> 
            {name}
          </div> 
          <div className='fade' />
      </AccordionSummary>
      <AccordionDetails>
      <div>Source: <u>{source}</u></div>
        <div className='description'>
          <div className='content'>
            <i>{desc}</i>
          </div>
        </div> 
        <div className='complexity'>
          <div className='content'>
          <b>Complexity</b>: {complexity}
          </div>
        </div>
        <div className='playstyle'>
          <div className='content'>
          <b>Playstyle</b>: {playstyle}
          </div>
        </div> 
        <div className='backgrounds'>
          <div className='content'>
          <b>Background Ideas</b>: {backgrounds}
          </div>
        </div> 
        <hr />
        <div><i>Note: The mechanics below are <b>not</b> an exhaustive list, these are simply some examples of talents, spells, and other powers available to members of this class.</i></div>
        <div className='keymechanics'>
          <div className="heading">Key Mechanic{keymechanics.length > 1 && 's'}</div>
          <div className='content'>
            {
              keymechanics.map((mechanic, i) => {
                return (
                  <div key={'keymechanics'+i}>
                  <div className='keymechanics-title'>
                  <b><u>{mechanic.title}</u></b>
                  </div>
                    <div className='keymechanics-desc'>
                      {mechanic.desc}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='power'>
          <div className="heading">Notable Abilit{powers.length > 1 ? 'ies' : 'y'}</div>
          <div className='content'>
            {
              powers.map((power, i) => {
                return (
                  <div key={'power'+i}>
                    <div className='power-title'>{power.pwrtitle}</div>
                    <div className='power-desc'>{power.pwrDesc}</div>
                    {power.pwrFeats &&
                      power.pwrFeats.map((feat, i) => {
                        return (
                          <div key={"feat"+i}>
                            <u>{feat.featType}</u>: {feat.feat}
                          </div>
                        );
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        </AccordionDetails>
      </CustomAccordion>
    </div>
    
  );
}

export default ClassItem;
