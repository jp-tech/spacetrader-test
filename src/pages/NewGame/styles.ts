import { colors } from "../../globalStyles/colors";

export const styles = {
    pageContainer: {
        flex: 1,
        minHeight: '100vh',
        justifyItems: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBoxContainer: {
        backgroundImage:
          'url("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdqdDUxZDlpYWc2cDE0dXlsZGF0NTN5cndtdDRhZzFsbmR0eHMyNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0IV7MOCfnm85iRa/giphy.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        height: '100vh'
    },
    formInput: {
        border: `1px solid ${colors.darkGray}`,
        borderRadius: '3px',
        color: colors.silver,
    },
    button: {
        backgroundColor: "#f8fafc",
        fontSize: "18px",
        color: "#303030"
    }
}