import { CardContent, Container, Grid, Paper, Skeleton, Stack, Typography } from "@mui/material";

export function BlogSkeleton() {

    return (
        <>
            <Grid container spacing={1} mt={1}>
                {/* <Grid container spacing={1} xs='12' sm='9' sx={{ marginBottom: '15px', padding: ' 0 5px', boxShadow: '0 0 5px grey', borderRadius: '10px' }}>
                    <Grid item sm={4} sx={{ margin: { xs: '0 auto', md: 'auto 0' } }}>
                        <Skeleton variant="rectangular" height={220} sx={{ borderRadius: '15px', padding: { xs: '0', md: '5px' }, width: '100%' }} />
                    </Grid>

                    <Grid item sm={8}>
                        <Skeleton variant="text" sx={{ fontSize: '32px' }} />
                        <CardContent>
                            <Typography variant='body2' color='text.secondary'>
                                <Skeleton variant="text" sx={{ fontSize: '60px' }} />
                            </Typography>
                            <Skeleton variant="rectangular" height={25} width={60} />
                        </CardContent>
                    </Grid>
                </Grid> */}

                <Grid item sm={4} sx={{ margin: { xs: '0 auto', md: 'auto 0' } }}>
                    <Skeleton variant="rectangular" height={220} sx={{ borderRadius: '15px', padding: { xs: '0', md: '5px' }, width: '100%' }} />
                </Grid>

                <Grid item sm={8}>
                    <Skeleton variant="text" sx={{ fontSize: '32px' }} />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            <Skeleton variant="text" sx={{ fontSize: '100px' }} />
                        </Typography>
                        <Skeleton variant="rectangular" height={35} width={100} />
                    </CardContent>
                </Grid>

                <Grid item sm={4} sx={{ margin: { xs: '0 auto', md: 'auto 0' } }}>
                    <Skeleton variant="rectangular" height={220} sx={{ borderRadius: '15px', padding: { xs: '0', md: '5px' }, width: '100%' }} />
                </Grid>

                <Grid item sm={8}>
                    <Skeleton variant="text" sx={{ fontSize: '32px' }} />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            <Skeleton variant="text" sx={{ fontSize: '100px' }} />
                        </Typography>
                        <Skeleton variant="rectangular" height={35} width={100} />
                    </CardContent>
                </Grid>

                <Grid item sm={4} sx={{ margin: { xs: '0 auto', md: 'auto 0' } }}>
                    <Skeleton variant="rectangular" height={220} sx={{ borderRadius: '15px', padding: { xs: '0', md: '5px' }, width: '100%' }} />
                </Grid>

                <Grid item sm={8}>
                    <Skeleton variant="text" sx={{ fontSize: '32px' }} />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            <Skeleton variant="text" sx={{ fontSize: '100px' }} />
                        </Typography>
                        <Skeleton variant="rectangular" height={35} width={100} />
                    </CardContent>
                </Grid>

                <Grid item sm={4} sx={{ margin: { xs: '0 auto', md: 'auto 0' } }}>
                    <Skeleton variant="rectangular" height={220} sx={{ borderRadius: '15px', padding: { xs: '0', md: '5px' }, width: '100%' }} />
                </Grid>

                <Grid item sm={8}>
                    <Skeleton variant="text" sx={{ fontSize: '32px' }} />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            <Skeleton variant="text" sx={{ fontSize: '100px' }} />
                        </Typography>
                        <Skeleton variant="rectangular" height={35} width={100} />
                    </CardContent>
                </Grid>

                {/* <Grid item xs='12' md='9'>
                    <Skeleton variant="rounded" sx={{ display: { xs: { height: '220px', width: '220px' }, md: { height: '220px', width: '216px' } } }} />
                    <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ display: { xs: { height: '64px', width: '352px' }, md: { height: '65px', width: '406px' } } }} />
                        <Skeleton variant="text" sx={{ display: { xs: { height: '81px', width: '352px' }, md: { height: '60px', width: '406px' } } }} />
                        <Skeleton variant="rounded" sx={{ display: { xs: { height: '25px', width: '82px' }, md: { height: '2225px0px', width: '82px' } } }} />
                    </Stack>
                </Grid> */}
            </Grid>

        </>
    )
}

export function SidebarSkeleton() {

    return (
        <>
            <Stack spacing={3} px={4}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="rounded" height={20} width={'100%'} />
                <Stack spacing={3} alignItems='center'>
                    <Skeleton variant="rectangular" height={60} width={220} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                    <Skeleton variant="rounded" height={20} width={80} />
                </Stack>
                <Stack spacing={3} alignItems='center'>
                    <Skeleton variant="rectangular" height={60} width={220} />
                    <Skeleton variant="text" height={30} width={180} />
                    <Skeleton variant="text" height={30} width={180} />
                    <Skeleton variant="text" height={30} width={180} />
                    <Skeleton variant="text" height={30} width={180} />
                    <Skeleton variant="text" height={30} width={180} />
                    <Skeleton variant="text" height={30} width={180} />
                    <Skeleton variant="text" height={30} width={180} />
                </Stack>
            </Stack>
        </>
    )
}

export function CourseSkeleton() {

    return (
        <>
            {/* <div style={{borderRightColor: 'grey',display: 'flex', justifyContent: 'space-between',  alignItems: 'center', flexWrap: 'wrap', gap: '20px', width: '100%' }}>
                <Paper sx={{width: '100%', maxWidth: '360px'}}>
                    <Skeleton variant="rectangular" height={150} sx={{}} />
                            <Skeleton variant="text" sx={{ fontSize: '1.2rem', width: '158px' }} />
                            <Skeleton variant="text" sx={{ fontSize: '0.8rem', width: '258px' }} />
                            <Skeleton variant="text" sx={{ fontSize: '0.8rem', width: '258px' }} />
                            <Skeleton variant="text" sx={{ fontSize: '0.8rem', width: '258px' }} />
                            <Skeleton variant="rounded" height={30} width={120} />
                </Paper>
            </div> */}

            <Grid container spacing={0} margin="">
                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200}/>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200}/>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200}/>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                
                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item padding={1} xs='12' sm='6' md='3'>
                    <Paper sx={{ padding: '0 20px', margin: '10px 30px', }}>
                        <Stack spacing={2} >
                            <Skeleton height={150} />

                            <Stack spacing={2} sx={{ height: '220px', padding: '0px', textAlign: 'left' }}>
                                <Skeleton variant="text" sx={{ fontSize: '32px', width: '200px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="text" sx={{ fontSize: '14px' }} />
                                <Skeleton variant="rounded" height={40} width={200} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

            </Grid>

        </>
    )
}

export function BlogdetailsSkeleton() {

    return (
        <>
            <Container maxWidth='md' sx={{ my: '10px' }}>
                <Stack spacing={1}>
                    <Skeleton variant="rounded" height={400} width='100%' />
                    <Skeleton variant="text" sx={{ fontSize: '62px' }} />
                    <Skeleton variant="rectangular" height={110} />
                    <Stack spacing={3} px={6}>
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '42px' }} />
                    </Stack>
                    <Skeleton variant="rectangular" height={110} />
                </Stack>
            </Container>
        </>
    )
}