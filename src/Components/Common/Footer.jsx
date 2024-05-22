import { Container, Typography } from "@mui/material";

export function Footer(){

    return(
        <>
            <Container maxWidth='xl' sx={{ position: 'static', bottom: 0, left: 0, textAlign:'center' }}>
                    <Typography variant="h5">Copyright ©️ SRV 2024</Typography>
            </Container>
        </>
    )
}