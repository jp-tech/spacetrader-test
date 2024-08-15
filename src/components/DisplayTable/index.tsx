import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styles } from './styles';

interface Props {
  headers: string[];
  dataRows: string[][];
}

export default function DisplayTable({ headers, dataRows }: Props) {
  return (
    <TableContainer component={Paper} style={styles.tableContainer}>
      <Table size="small" aria-label="a dense table">
        <TableHead style={{ border: '0', padding: '0'}}>
          <TableRow>
            {headers.map((header) => 
              <TableCell
                key={header}
                style={styles.tableHeaderCell}
              >
                {header}
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody style={{ border: '0'}}>
          {dataRows?.map((rows, index) => 
            <TableRow key={index}>
              {rows.map((value, index) => 
                <TableCell
                  key={`${index}${value}`}
                  style={styles.tableBodyCell}
                >
                  {value}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
