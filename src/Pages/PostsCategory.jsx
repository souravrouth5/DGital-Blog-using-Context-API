import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../Context/Auth"
import { Layout } from "../Components/Common/Layout"
import { Box, Container, Paper, Typography } from "@mui/material"
import { Grid } from "@mui/material"
import { BlogSkeleton, SidebarSkeleton } from "../Components/Common/Skeletons"
import { CardBlog } from "../Components/CardBlog"


export function PostsCategory(){

    const [postList, setPostList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const {id} = useParams()
    const {auth} = useContext(AuthContext)
    const [load, setLoad] = useState(true)

    const token = auth.token || JSON.parse(localStorage.getItem('token'))

    // console.log(token);

    // useEffect(()=>{
    //     (async () => {
    //         try {
    //             let res = await axios.get(`https://restapinodejs.onrender.com/api/showallcategory`, {
    //                 headers: {
    //                     'x-access-token': token
    //                 }
    //             })
    //             console.log(res?.data);
    //             if (res?.data?.status === "success") {
    //                 setCategoryList(res?.data?.data)
    //                 setLoad(false)
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })()
    //     // eslint-disable-next-line
    // }, [])

    useEffect(()=>{
        (async () => {
            setLoad(true)
            try {
                let res = await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id}`, {
                    headers: {
                        'x-access-token': token
                    }
                })

                console.log(res?.data);

                if(res?.data?.status){
                    if(res?.data?.data){
                        setPostList(res?.data?.data)
                        setLoad(false)
                    }
                }

                res = await axios.get(`https://restapinodejs.onrender.com/api/showallcategory`, {
                    headers: {
                        'x-access-token': token
                    }
                })
                console.log(res?.data);
                if (res?.data?.status === "success") {
                    setCategoryList(res?.data?.data)
                    // setLoad(false)
                }
            } catch (error) {
                console.log(error);
            }
        })()
        // eslint-disable-next-line
    }, [id])

    return(
        <>
            <Layout>
                {
                    <Container maxWidth='xl' sx={{ border: '', margin: '20px 0' }}>

                        <Grid container spacing={2}>

                            <Grid item xs={12} md={9}>

                                {
                                    load ? <BlogSkeleton /> : (
                                        !postList.length === true ? <Grid item xs={12} md={9}><h1>No posts available</h1></Grid> : (
                                            postList.map(blog => {
                                                return (
                                                    <CardBlog key={blog._id} blogData={blog} />
                                                )
                                            })
                                        )
                                    )
                                }

                            </Grid>

                            <Grid item xs={12} md={3}>
                                {
                                    load ? <Paper sx={{ overflow: 'hidden' }}><SidebarSkeleton /></Paper> : (
                                        <Paper sx={{ textAlign: 'center', padding: '20px 0' }}>

                                            <Box component='div' sx={{ margin: '20px 0', padding: '20px 0', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                <Typography variant="h6">Categories</Typography>
                                                {
                                                    categoryList.map(item => {
                                                        return (
                                                            <Link to={`/blogs/post-by-category/${item._id}`} key={item._id} style={{ textDecoration: 'none', fontWeight: '', color: 'black', '&:hover': { color: '#6222CC !important' } }}>{item.category}</Link>
                                                        )
                                                    })
                                                }

                                            </Box>
                                        </Paper>
                                    )
                                }
                            </Grid>

                        </Grid>

                    </Container>
                }

            </Layout>
        </>
    )
}