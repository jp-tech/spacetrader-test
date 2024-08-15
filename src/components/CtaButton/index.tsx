import Button from "@mui/material/Button";
import { ReactNode } from "react";
import { styles } from "./styles";

type ButtonSize = 'small' | 'large';

interface Props {
  children: ReactNode;
  onClick?:  () => void;
  size?: ButtonSize;
  disabled?: boolean;
}

export default function CtaButton({children, onClick, disabled = false, size = 'large'}: Props) {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={styles.button}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}