import { Container } from "@mui/material";
import { Header } from "./Header";
// import { Footer } from "./Footer";


export function Layout( {children} ){

    return(
        <>
        <Header/>

        <Container maxWidth="xl" disableGutters sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: '0 0', padding: '0' }}>
                {children}
        </Container>

        {/* <Footer/> */}
        </>
    )
}