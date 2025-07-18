import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import InfoOutlineIcon from '@mui/icons-material/InfoOutlined'
import { Popover, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Feats from '../data/Feats.json';
import './FeatsPage.css';

type Feat = {
    featType: string,
    featName: string,
    req: string,
    desc: {
      adventurer?: string | string[],
      champion?: string | string[],
      epic?: string | string[],
      zenith?: string | string[]
    }

  }

function FeatsPage() {
  const [popOpen, setPopOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const popOverIconRef = useRef<HTMLDivElement | null>(null);

  const handlePopoverOpen = () => {
    setAnchorEl(popOverIconRef.current);
    setPopOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopOpen(false);
  };

  const location = useSelector<RegionState, RegionState['region']>((state:any) => state.regionReducer.region)

  return (
    <div className="FeatsPage">
      <h2>List of all available feats <span
        ref={popOverIconRef}
        aria-owns={popOpen ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <InfoOutlineIcon fontSize='small' color='primary' className='info-icon' />
      </span></h2>
      <p><i>NOTE: Feats for Homebrew/3rd Party kin or Supplemental Classes not included</i>
</p>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={popOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          "A:" indicates Adventurer feats (lvls 1-4)<br />
          "C:" indicates Champion feats (lvls 5-7)<br />
          "E:" indicates Epic feats (lvls 8-10)<br />
          "Z:" indicates Zenith feats (taken as incremental at 10th)
          </Typography>
      </Popover>
      <hr />
    <TableContainer component={Paper} sx={{ maxHeight: 750 }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow className='table-headers'>
            <TableCell><h3>Name</h3></TableCell>
            <TableCell align="left"><h3>Type</h3></TableCell>
            <TableCell align="left"><h3>Source</h3></TableCell>
            <TableCell align="left"><h3>Description</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Feats.map((Feat:Feat) => (
            <TableRow
              key={uuidv4()}
              className={`${Feat.featType}-feat`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h4>{Feat.featName}</h4>
              </TableCell>
              <TableCell align="left">{Feat.featType}</TableCell>
              <TableCell align="left">{Feat.req}</TableCell>
              <TableCell align="left">
                {
                  (['adventurer', 'champion', 'epic', 'zenith'] as const).map(tier => {
                    const tierContent = Feat.desc[tier];

                    if (!tierContent || (Array.isArray(tierContent) && tierContent.length === 0)) {
                      return null; // Skip empty tiers
                    }

                    const items = Array.isArray(tierContent) ? tierContent : [tierContent];

                    return (
                      <div key={tier} className="feat-tier">
                        <div className="feat-tier-title">{tier.charAt(0).toUpperCase() + tier.slice(1)}</div>
                        {items.map((item, index) => (
                          <div className="feat-desc-item" key={index}>{item}</div>
                        ))}
                      </div>
                    );
                  })
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default FeatsPage;