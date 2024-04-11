import './WorldPage.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import Locations from '../../data/Locations.json';

type LocationData = {
  name: string,
  id: string,
  size: string,
  tooltip: string
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    pointerEvents: 'none'
  },
}));

function WorldPage() {


  return (
    <div className="WorldPage">
      <h2>The World</h2> 
      <div className='map'>
        { 
          Locations.locations.map(function(location:LocationData, i) {
            return (
              <div id={`location-`+location.id} className={`location-tooltip`} key={`location`+i}>
                <HtmlTooltip
                  title={
                    <>
                      {location.tooltip}
                    </>
                  } 
                  arrow
                >
                  <div className={`map-locations location-${location.size}`}>{location.name}</div>
                </HtmlTooltip>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default WorldPage;
