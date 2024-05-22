import { Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { Layout } from "../Components/Common/Layout";


export function Profile() {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);

    return (
        <>
            <Layout>
                <Container disableGutters sx={{ my: '10px' }}>
                    <Grid container sx={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={8} sx={{}}>
                            <Card sx={{ display: 'flex' }} raised>
                                <CardMedia
                                    component='img'
                                    image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1714398811~exp=1714399411~hmac=d86b6c8d4c59804b583d5019da546b2ed60dcdee25cd1c9d92e8375e8cf96c18"
                                    height={300}
                                    sx={{ width: '40%' }}
                                />

                                <CardContent>
                                    <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Typography variant="h5">Name: {user.name}</Typography>
                                        <Typography variant="body1">Email: {user.email}</Typography>
                                        <Typography variant="body1">Phone: {user.mobile}</Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </>
    )
}