import { useContext, useEffect, useState } from "react";
import { Layout } from "../Components/Common/Layout";
import axios from "axios";
import { AuthContext } from "../Context/Auth";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, FormControl, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import AvatarCard from '../Components/AvatarCard'
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import { BlogdetailsSkeleton } from "../Components/Common/Skeletons";


export function Blogdetails() {

    const [singleblog, setSingleBlog] = useState(false)
    const { auth } = useContext(AuthContext)
    const { id } = useParams()
    const [load, setLoad] = useState(true)
    const [imgBuffer, setImgBuffer] = useState([])
    const [comments, setComments] = useState([])
    const [countComments, setCountComments] = useState(0)

    const {register, handleSubmit, formState: {errors}} = useForm()

    const token = auth.token || JSON.parse(localStorage.getItem('token'))
    // console.log(id);


    let b64Img = btoa(String.fromCharCode(...new Uint8Array(imgBuffer)))

    const getDetails = async () => {
        try {
            let res = await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`, { headers: { 'x-access-token': token } })
            // console.log(res?.data);
            if (res?.data?.status === 'success') {
                setSingleBlog(res?.data?.data)
                setImgBuffer(res?.data?.data?.photo?.data?.data)
                // setLoad(false)
            }

            res = await axios.get(`https://restapinodejs.onrender.com/api/comment/${id}`, { headers: { 'x-access-token': token } })
            // console.log(res?.data);
            if (res?.data?.status) {
                setComments(res?.data?.post?.comment?.comments?.reverse())
            }

        } catch (error) {
            console.log("Blogdetails Error", error);
            swal(error?.response && error?.response?.data?.msg, { icon: 'error', buttons: 'OK' })
            // setLoad(false)
        }
    }

    const upvote = async () => {
        try {
            let headersList = {
                "x-access-token": token
            }

            let reqOptions = {
                url: `https://restapinodejs.onrender.com/api/blog/like/${id}`,
                method: "PUT",
                headers: headersList,
            }
            let res = await axios.request(reqOptions)
            // console.log(res);
            if (res?.status === 200) {
                toast.success('Blog has been upvoted successfully')
                getDetails()
            } else {
                toast.error('Failed to upvote. please try again later')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const downvote = async () => {
        try {
            let headersList = {
                "x-access-token": token
            }

            let reqOptions = {
                url: `https://restapinodejs.onrender.com/api/blog/unlike/${id}`,
                method: "PUT",
                headers: headersList,
            }
            let res = await axios.request(reqOptions)
            if (res?.data?._id) {
                toast.success('Blog has been downvoted successfully')
                getDetails()
            } else {
                toast.error('Failed to upvote. please try again later')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const showMoreComments = () => {
        setCountComments(countComments + 1)
    }

    const onSubmit = async (data) => {
        console.log(data);
        try {
            let res = await axios.post(`https://restapinodejs.onrender.com/api/blog/${id}/comment/create`, data, { headers: { 'x-access-token': token } })
            console.log(res);
            if (res?.status === 201) {
                toast.success(res?.data?.message)
            } else {
                toast.error(res?.data?.message)
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getDetails()
        // eslint-disable-next-line
    }, [])
    useEffect(()=>{
        if (singleblog.status === false && comments.length > 0) {
            setLoad(false)
        }
    },[singleblog, comments])

    // console.log(singleblog);
    // console.log(comments);

    return (
        <>
            <Layout>
                <Container maxWidth='md' sx={{ margin: '10px 0' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            {
                                load ? <BlogdetailsSkeleton /> : (
                                    <>
                                        <Card>
                                            <CardMedia sx={{ textAlign: 'center' }}>
                                                <img src={`data:image/png;base64,${b64Img}`} alt="" srcset="" style={{ height: '100%', maxHeight: '400px', width: '100%', objectFit: 'contain' }} />
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant="h4">{singleblog.title}</Typography>
                                                <Typography variant="body2"><div dangerouslySetInnerHTML={{ __html: singleblog.postText }} /></Typography>
                                                <hr />
                                                <Box component='div' marginTop={4} display='flex' justifyContent='space-between'>
                                                    <Typography variant="h4"><button style={{ border: 'none', backgroundColor: 'transparent', color: 'red' }} onClick={upvote}><i class="fa-solid fa-heart fa-beat"></i></button> <b>{singleblog.likes}</b></Typography>
                                                    <Typography variant="h4"><button style={{ border: 'none', backgroundColor: 'transparent', color: 'red' }} onClick={downvote}><i class="fa-solid fa-heart-crack fa-beat"></i></button> <b>{singleblog.unlikes}</b></Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                        <Box component='div' display='flex' justifyContent='center' flexDirection='column' my={4} >
                                            <Typography variant="h5" sx={{ marginBottom: '20px' }}><b>{comments.length} Comments</b></Typography>

                                            <Box height='auto' maxHeight={500} overflow='hidden scroll' py={2} px={4} sx={{ scrollbarWidth: '1px' }}>
                                                {/* <Stack spacing={2} sx={{ my: '10px' }}> */}
                                                {
                                                    comments?.slice(0, (countComments * 5)).map(item => {
                                                        return (
                                                            <Paper elevation={4} sx={{ my: '12px', borderRadius: '30px' }}>
                                                                <Card key={item._id} sx={{ borderRadius: '30px' }}>
                                                                    <CardHeader
                                                                        avatar={<AvatarCard data={item.name} />}
                                                                        titleTypographyProps={{ variant: 'h6', fontWeight: '600' }}
                                                                        title={item.name}
                                                                        subheaderTypographyProps={{ variant: 'caption' }}
                                                                        subheader={item.email}
                                                                        sx={{ fontWeight: '800' }}
                                                                    />
                                                                    <CardContent sx={{ pl: '68px' }}>
                                                                        <Typography variant="body2">{item.comment}</Typography><br />
                                                                        <Typography variant="body1" textAlign='right' fontSize='12px'><span style={{ color: 'rgba(0,0,0,0.3)' }}>Commented on </span>{item.createdAt.slice(0, 10)}</Typography>

                                                                    </CardContent>
                                                                </Card>
                                                            </Paper>
                                                        )
                                                    })
                                                }
                                                {/* </Stack> */}
                                            </Box>
                                            <Button variant="contained" sx={{ bgcolor: 'seagreen', width: '160px', margin: '0 auto' }} onClick={showMoreComments}>{countComments === 0 ? 'Show comments' : 'Show More'}</Button>
                                        </Box>

                                        <Box maxWidth='md' textAlign='center' sx={{ my: '16px', textAlign: 'center', justifyContent: 'center' }}>
                                            <Typography variant="h4" sx={{ my: '16px' }}><b>Leave a comment</b></Typography>

                                            <Box maxWidth='sm' mx='auto' textAlign='center' my={2}>
                                                <form action="" onSubmit={handleSubmit(onSubmit)}>

                                                    <Stack spacing={2} my={2}>

                                                        <FormControl fullWidth>
                                                            <TextField id="outlined-basic" label="Name" variant="outlined" {...register('name', { required: true })} />
                                                            {errors.name && errors.name.type === 'required' && <span style={{ color: 'red', marginLeft: '30px', textAlign: 'left' }}>Name is required</span>}
                                                        </FormControl>

                                                        <FormControl fullWidth>
                                                            <TextField id="outlined-basic" label="Email" variant="outlined" {...register('email', { required: true })} />
                                                            {errors.email && errors.email.type === 'required' && <span style={{ color: 'red', marginLeft: '30px', textAlign: 'left' }}>Email is required</span>}
                                                        </FormControl>

                                                        <FormControl fullWidth>
                                                            <textarea rows={10} id="outlined-basic" label="Comment" variant="outlined" {...register('comment', { required: true })} />
                                                            {errors.comment && errors.message.type === 'required' && <span style={{ color: 'red', marginLeft: '30px', textAlign: 'left' }}>Message is required</span>}
                                                        </FormControl>

                                                    </Stack>
                                                    <Button variant="contained" endIcon={<SendIcon />} type="submit">Comment</Button>

                                                </form>
                                            </Box>
                                        </Box>
                                    </>
                                )
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Layout>
        </>
    )
}