import { Card, CardContent, CardMedia, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Layout } from '../Components/Common/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import Carousel from 'react-bootstrap/Carousel';
import { Loader } from '../Components/Common/Loader'

export function Home() {

    const [service, setService] = useState([])
    const [testimonial, setTestimonial] = useState([])
    const [team, setTeam] = useState([])
    const [banner, setBanner] = useState([])
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0);
    // const [serviceCardMaxheight, setServiceCardMaxheight] = useState([])

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // const elementHeight = (element) => {
    //     let cards = [...document.querySelectorAll(element)]
    //     // cards.forEach(card => console.log(card.clientHeight))
    //     return cards.reduce((acc, card) => card.clientHeight > acc ? acc = card.clientHeight : acc, 0) + 'px'
    // }

    // const serviceCardMaxheight = elementHeight('.service-card')

    // console.log(serviceCardMaxheight);

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get(`https://restapinodejs.onrender.com/api/banner`)
                if (res?.data?.success) {
                    setBanner(res?.data?.bannerdata)
                } else {
                    swal(res?.data?.message, { icon: 'error', buttons: 'OK' })
                }

                res = await axios.get(`https://restapinodejs.onrender.com/api/service`)
                console.log(res?.data);
                if (res?.data?.status === 'success') {
                    setService(res?.data?.data)
                }

                res = await axios.get(`https://restapinodejs.onrender.com/api/team`)
                if (res?.data?.success) {
                    setTeam(res?.data?.TeamMember)
                } else {
                    swal(res?.data?.message, { icon: 'error', buttons: 'OK' })
                }

                res = await axios.get(`https://restapinodejs.onrender.com/api/testimonial`)
                if (res?.data?.success) {
                    setTestimonial(res?.data?.testimonials)
                } else {
                    swal(res?.data?.message, { icon: 'error', buttons: 'OK' })
                }

                if (banner && service && team && testimonial) {
                    setLoad(false)
                }
            } catch (error) {
                console.log(error);
            }
        })()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Layout>
                {
                    load ? <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><Loader height={200} width={200} /></div> : (
                        <Container maxWidth='xl' disableGutters sx={{ padding: '0', margin: '0' }}>

                            {/* banner */}
                            <div >

                                <Carousel fade slide activeIndex={index} onSelect={handleSelect}>
                                    {
                                        banner.map(item => {
                                            return (
                                                <Carousel.Item interval={1000} >
                                                    <img src={`https://restapinodejs.onrender.com/api/banner/photo/${item._id}`} alt='' style={{ width: '100%', height: '700px', objectFit: 'fit' }} />
                                                    <Carousel.Caption>
                                                        <Stack spacing={4} style={{ width: '80%', backgroundColor: 'rgba(0,0,0, 0.7)', borderTop: '6px solid #6222CC', margin: '0 auto', padding: '5px 30px', position: 'relative', bottom: 100 }}>
                                                            <h3 style={{ color: 'white' }}>{item.title}</h3>
                                                            <p style={{ color: 'white' }}>{item.description}</p>
                                                        </Stack>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                            {/* Banner */}

                            {/* Services */}
                            <Container maxWidth='xl' sx={{ textAlign: 'center', padding: '10px 0' }}>
                                <Typography variant='h6' component='div' color='black' sx={{ position: 'relative', color: '#FBA504', paddingBottom: '30px', marginTop: '15px', marginBottom: '5px', fontWeight: '800', '&::after': { position: 'absolute', content: '""', display: 'block', width: '75px', height: '3px', backgroundColor: '#6222CC', bottom: '0', left: '50%', transform: 'translate(-50%)' } }}>SERVICES</Typography>
                                <Typography variant='h4' style={{ fontWeight: '700' }} >What Services We Provide</Typography>
                                <Grid container py={2} textAlign='center' sx={{ padding: '5px', margin: '20px 0' }}>

                                    {
                                        service.map(item => {
                                            return (
                                                <Grid item xs={12} sm={6} md={4} key={item.name} textAlign='center' sx={{ padding: '20px 30px' }}>
                                                    <Paper className='service-card' sx={{ minHeight: '300px', padding: '0 30px', bgcolor: '#F6F4F9', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                        <div className='blob' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px', width: '150px'}}>
                                                            <i className="fa-solid fa-laptop-code icon" style={{ fontSize: '40px', color: 'white', padding: ' 0', '&:hover': { color: '#FBA504' } }}></i>
                                                        </div>
                                                        <Typography className='sc-txt' variant='h6' fontWeight='600' pb='16px'>{item?.name}</Typography>
                                                        <Typography className='sc-txt' variant='subtitle1' color='rgba(0,0,0,0.6)'>{item?.details.slice(0, 100)}</Typography>
                                                    </Paper>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Container>
                            {/* services */}

                            {/* Team */}

                            <Container maxWidth='xl' sx={{ textAlign: 'center', padding: '10px 0' }}>
                                <Typography variant='h6' component='div' color='black' sx={{ position: 'relative', color: '#FBA504', paddingBottom: '30px', marginTop: '15px', marginBottom: '5px', fontWeight: '800', '&::after': { position: 'absolute', content: '""', display: 'block', width: '75px', height: '3px', backgroundColor: '#6222CC', bottom: '0', left: '50%', transform: 'translate(-50%)' } }}>OUR EXPERTS</Typography>
                                <Grid container py={2}>

                                    {
                                        team.map(item => {
                                            return (
                                                <Grid item padding={1} textAlign='center' key={item._id} xs={12} sm={6} md={3} p={3}>
                                                    <Card className='expert-card' elevation={0} sx={{ borderRadius: '10px', margin: '0 10px', bgcolor: '#F6F4F9' }}>
                                                        <div className='imgWrapper' style={{ overflow: 'hidden' }}>
                                                            <CardMedia
                                                                className='card-img'
                                                                component='img'
                                                                image={`https://restapinodejs.onrender.com/api/team/photo/${item._id}`}
                                                                height={300}
                                                            // sx={{height: '300px', width: '300px',borderRadius: '50%', margin: '0 auto'}}
                                                            />
                                                        </div>
                                                        <CardContent className='exp-content' sx={{ bgcolor: '#F6F4F9' }}>
                                                            <Typography className='expert-txt' variant='h5' component='div'>{item.name}</Typography>
                                                            <Typography className='expert-txt' variant='body2' color='text.secondary'>{item.possession}</Typography>
                                                        </CardContent>
                                                    </Card>

                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Container>
                            {/* Team */}

                            {/* Testimonials */}

                            <Container maxWidth='xl' sx={{ textAlign: 'center', padding: '10px 0' }}>
                                <Typography variant='h6' component='div' color='black' sx={{ position: 'relative', color: '#FBA504', paddingBottom: '30px', marginTop: '15px', marginBottom: '5px', fontWeight: '800', '&::after': { position: 'absolute', content: '""', display: 'block', width: '75px', height: '3px', backgroundColor: '#6222CC', bottom: '0', left: '50%', transform: 'translate(-50%)' } }}>TESTIMONIALS</Typography>

                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    {
                                        testimonial.map(item => {
                                            return (

                                                <Carousel.Item interval={2000}>
                                                    {/* <CarouselCaption> */}
                                                    <Card elevation={0} sx={{ minHeight: '550px', maxWidth: '600px', padding: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto', position: 'relative' }}>
                                                        <CardMedia
                                                            component='img'
                                                            image={`https://restapinodejs.onrender.com/api/testimonials/photo/${item._id}`}
                                                            height='120px'
                                                            sx={{ width: '120px', borderRadius: '50%', position: 'absolute', top: 10, border: '8px solid white' }}
                                                        />
                                                        <CardContent sx={{ bgcolor: '#F6F4F9', paddingTop: '60px' }}>
                                                            <Typography variant='h6' component='div' style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</Typography>
                                                            <Typography variant='subtitle1' component='div' style={{ color: 'black' }}>{item.position}</Typography>
                                                            <Typography variant='body2' style={{ color: 'black', position: 'relative', padding: '70px' }}><i class="fa-solid fa-quote-left" style={{ fontSize: '56px', padding: '10px', color: '#6222CC', position: 'absolute', top: 35, left: 10 }}></i>{item.talk?.slice(0, 200)}<i class="fa-solid fa-quote-right" style={{ fontSize: '56px', padding: '10px', color: '#6222CC', position: 'absolute', bottom: 30 }}></i></Typography>
                                                        </CardContent>
                                                    </Card>
                                                    {/* </CarouselCaption> */}
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                            </Container>
                            {/* Testimonials */}
                        </Container>
                    )
                }
            </Layout>
        </>
    )
}