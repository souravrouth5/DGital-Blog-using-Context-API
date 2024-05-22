import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Layout } from "../Components/Common/Layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/Auth";
import { CourseSkeleton } from "../Components/Common/Skeletons";


export function Courses() {

    const [courseList, setCourseList] = useState([])
    const { auth } = useContext(AuthContext)
    const [load, setLoad] = useState(true)

    const token = auth.token || JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get(`https://restapinodejs.onrender.com/api/course`, { headers: { 'x-access-token': token } })
                console.log(res?.data);
                if (res?.data?.success) {
                    setCourseList(res?.data?.Courses)
                    setLoad(false)
                }
            } catch (error) {
                console.log(error);
            }
        })()
        // eslint-disable-next-line
    }, [])

    console.log(courseList);

    return (
        <>
            <Layout>
                <Container maxWidth='xl' sx={{ padding: ' 0', margin: '10px 0', backgroundColor: '' }}>
                    <Grid container >

                        {
                            load ? <CourseSkeleton /> : (
                                <>
                                    {
                                        courseList.map(item => {
                                            return (
                                                <Grid item key={item._id} padding={1} xs='12' sm='6' md='3'>
                                                    <Card sx={{ padding: '0 0px', margin: '10px 20px', bgcolor: '#F6F4F9', transition: 'all 0.5s ease', '&:hover': {translate: '0 -20px'}}}>
                                                        <CardMedia
                                                            component='img'
                                                            image={`https://restapinodejs.onrender.com/api/course/photo/${item._id}`}
                                                            height={150}
                                                            sx={{objectFit: 'contain', padding: '0.5em 0.5em 0 0.5em'}}
                                                        />
                                                        
                                                        <CardContent sx={{ height: '200px', padding: '20px', position: 'relative' }}>
                                                            <Typography variant="h5" component='div' sx={{ textTransform: 'capitalize', color: '#6222CC', fontWeight: '' }}>{item.name}</Typography>
                                                            <Typography variant="body1" sx={{fontSize: '14px', color: 'rgba(0,0,0,0.5)'}}>Minimum Eligibility: {item.requirement}</Typography>
                                                            <Typography variant="body1" sx={{fontSize: '14px', color: 'rgba(0,0,0,0.5)'}}>Course Duration: {item.duration}</Typography>
                                                            <Typography variant="body1" sx={{fontSize: '14px', color: 'rgba(0,0,0,0.5)'}}>Course Fees: {item.fees}</Typography>
                                                            <Box sx={{ position: 'absolute', bottom: '10px' }}>
                                                                <Button variant="contained" size="medium" sx={{ bgcolor: '#6222CC', fontWeight: 'bold', '&:hover': { bgcolor: '#411788'} }}>Apply Now</Button>
                                                            </Box>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            )
                                        })
                                    }
                                </>
                            )
                        }

                    </Grid>
                </Container>
            </Layout>
        </>
    )
}