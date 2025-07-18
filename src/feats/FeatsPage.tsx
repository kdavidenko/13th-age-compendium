import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import InfoOutlineIcon from '@mui/icons-material/InfoOutlined'
import { Popover, Typography } from '@mui/material';
import { useRef, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Feats from '../data/Feats.json';
import './FeatsPage.css';


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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='table-headers'>
            <TableCell>Name</TableCell>
            <TableCell align="left">Source</TableCell>
            <TableCell align="left">Pre-Req</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Feats.map((Feat) => (

            <TableRow
              key={Feat.desc}
              className={`${Feat.featType}-feat`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Feat.featName}
              </TableCell>
              <TableCell align="left">{Feat.featType}</TableCell>
              <TableCell align="left">{Feat.req}</TableCell>
              <TableCell align="left">{Feat.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default FeatsPage;