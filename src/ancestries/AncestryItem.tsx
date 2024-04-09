import './AncestryItem.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

type AncestryItemProps = {
  title: string,
  img: string,
  desc: string,
  srd: string,
  powers: Array<AncestryPowerProps>
}

type AncestryPowerProps = {
  pwrtitle?: string,
  pwrDesc: string,
  pwrFeats?: Array<AncestryFeatProps>
}

type AncestryFeatProps = {
  featType: string,
  feat: string
}

function AncestryItem(
  {
    title,
    img,
    desc,
    srd,
    powers
  }: AncestryItemProps,
) {
  
  const CustomAccordion = styled(Accordion)(() => {
    console.log(img)
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
    <div className="AncestryItem">
      <CustomAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }}/>}>
          <div className='name'> 
            {title}
          </div> 
          <div className='fade' />
      </AccordionSummary>
      <AccordionDetails>
        <div className='description'>
          <div className='content'>
            {desc}
          </div>
        </div> 
        <div className='power'>
          <div className="heading">Power{powers.length > 1 && 's'}</div>
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
                            <b><i>{feat.featType}.</i></b> {feat.feat}
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
        {srd && 
          <div className='srd'>
            <div className="heading"><a href={srd} target='_blank'>SRD Link</a></div>
          </div>
        }
        </AccordionDetails>
      </CustomAccordion>
    </div>
    
  );
}

export default AncestryItem;
