import { ReactNode } from "react";
import Alert from "@mui/material/Alert";

type Severity = 'error' | 'success';

interface Props {
  children: ReactNode;
  severity: Severity;
}

export default function AlertBanner({children, severity}: Props) {
  return (
    <Alert severity={severity}>
      {children}
    </Alert>
  )
}