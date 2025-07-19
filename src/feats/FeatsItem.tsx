import React from 'react';
import {
  TableRow,
  TableCell,
  IconButton,
  Box
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import {
  KeyboardArrowDown,
  KeyboardArrowUp
} from '@mui/icons-material';

import './FeatsItem.css';


interface Feat {
  featName: string;
  featType: string;
  desc: Record<string, string[] | string>;
  req?: string;
}

interface FeatsItemProps {
  feat: Feat;
  index: number;
  openRow: number | null;
  setOpenRow: (index: number | null) => void;
  colSpan: number;
}

const FeatsItem: React.FC<FeatsItemProps> = ({ feat, index, openRow, setOpenRow, colSpan }) => {
  const { featName, featType, desc, req } = feat;
  const isOpen = openRow === index;

  return (
    <>
      <TableRow className={`${featType}-feat`}  onClick={() => setOpenRow(isOpen ? null : index)}>
        <TableCell><h4>{featName}</h4></TableCell>
        <TableCell>{featType}</TableCell>
        <TableCell>{req}</TableCell>
        <TableCell>
          <IconButton size="small">
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow className={`${featType}-feat-content`}>
        <TableCell colSpan={colSpan} style={{ paddingBottom: 0, paddingTop: 0 }}>
            <Collapse in={isOpen} timeout={500} unmountOnExit>
            <Box margin={2} className="description" >
              <div className="content">
                {(['adventurer', 'champion', 'epic', 'zenith'] as const).map(tier => {
                  const tierContent = desc[tier];
                  if (!tierContent || (Array.isArray(tierContent) && tierContent.length === 0)) {
                    return null;
                  }

                  const items = Array.isArray(tierContent) ? tierContent : [tierContent];

                  return (
                    <div key={tier} className="feat-tier">
                      <div className="feat-tier-title">
                        {tier.charAt(0).toUpperCase() + tier.slice(1)}
                      </div>
                      {items.map((item, i) => (
                        <div className="feat-desc-item" key={i}>{item}</div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default FeatsItem;