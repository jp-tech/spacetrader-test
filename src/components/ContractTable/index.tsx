import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styles } from '../DisplayTable/styles';
import { numberToMonetaryDisplay } from '../../utils';
import Chip from '@mui/material/Chip';
import { COPY } from '../../copy';
import useAcceptContract from '../../api/useAcceptContract';
import CtaButton from '../CtaButton';
import { colors } from '../../globalStyles/colors';

interface Props {
  contracts: any[];
}

export default function ContractTable({ contracts }: Props) {
  const {accepted, pending} = COPY.components.statusLabels;
  const {accept} =  useAcceptContract();
  return (
    <TableContainer component={Paper} style={styles.tableContainer}>
      <Table size="small" aria-label="a dense table">
        <TableHead style={{ border: '0', padding: '0'}}>
          <TableRow>
            {COPY.components.tables.contracts.headers.map((header) => 
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
          {contracts?.map((contract: any) => 
            <TableRow>
              <TableCell style={styles.tableBodyCell}>
                <a
                  href="#"
                  style={{ color: colors.whiteSmoke }}
                  onClick={() => alert(JSON.stringify(contract))}
                >
                  {contract?.type}
                </a>
              </TableCell>
              <TableCell style={styles.tableBodyCell}>
                {numberToMonetaryDisplay(contract?.terms?.payment.onFulfilled)}
              </TableCell>
              <TableCell style={styles.tableBodyCell}>
                <Chip
                  label={contract?.accepted ? accepted : pending }
                  color={contract?.accepted ? "success" : "error"}
                />
              </TableCell>
              <TableCell style={styles.tableBodyCell}>
                <CtaButton
                  size="small"
                  disabled={contract?.accepted}
                  onClick={() => accept(contract?.id)}
                >
                  {COPY.components.buttons.accept}
                </CtaButton>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
