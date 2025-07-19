import { RegionState } from 'app/reducers/regionReducer';
import { useSelector } from 'react-redux';
import InfoOutlineIcon from '@mui/icons-material/InfoOutlined'
import { Popover, TableFooter, TablePagination, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TablePaginationActions from 'pagination/TablePaginationActions';
import FeatsItem from './FeatsItem';

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openRow, setOpenRow] = useState<number | null>(null);

  const popOverIconRef = useRef<HTMLDivElement | null>(null);

  const handlePopoverOpen = () => {
    setAnchorEl(popOverIconRef.current);
    setPopOpen(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopOpen(false);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Feats.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


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
          Adventurer feats are taken at lvls 1-4<br />
          Champion feats are taken at lvls 5-7<br />
          Epic feats are taken at lvls 8-10<br />
          Zenith feats are taken as incremental at 10th
          </Typography>
      </Popover>
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow className="table-headers">
              <TableCell><h3>Name</h3></TableCell>
              <TableCell align="left"><h3>Type</h3></TableCell>
              <TableCell align="left"><h3>Source</h3></TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? Feats.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : Feats
          ).map((Feat: Feat, index:number) => (
                <FeatsItem
                  key={uuidv4()}
                  feat={Feat}
                  index={index}
                  openRow={openRow}
                  setOpenRow={setOpenRow}
                  colSpan={4} // match your total number of columns
                />
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={4}
                count={Feats.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

    </div>
  );
}

export default FeatsPage;