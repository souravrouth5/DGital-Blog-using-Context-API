import axios from "axios"
import { useContext, useEffect, useState } from "react"
import swal from "sweetalert"
import { AuthContext } from "../Context/Auth"
import { Box, Container, Grid, InputBase, Paper, Typography, alpha, styled } from "@mui/material"
import { Layout } from "../Components/Common/Layout"
import SearchIcon from '@mui/icons-material/Search';
import { CardBlog } from "../Components/CardBlog"
import { Link } from "react-router-dom"
import { BlogSkeleton, SidebarSkeleton } from "../Components/Common/Skeletons"


// search component
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

// search component

export function Allblogs() {

    const { auth } = useContext(AuthContext)
    const [allBlogs, setAllblogs] = useState([])
    const [load, setLoad] = useState(true)
    const [latestPosts, setLatestPosts] = useState([])
    const [searchValue, setSearchValue] = useState(false)
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const [categoryList, setCategoryList] = useState([])

    const token = auth.token || JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'))

    const searchBlog = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get(`https://restapinodejs.onrender.com/api/allBlog`, {
                    headers: {
                        'x-access-token': token
                    }
                })

                // console.log(res?.data);
                if (res?.data?.status === "success") {
                    setAllblogs(res?.data?.data)
                    // setLoad(false)
                }
            } catch (error) {
                console.log(error);
                // toast.error(error?.response?.data?.message)
                swal(error?.response?.data?.message, { icon: 'error', buttons: 'OK' })
            }
        })()


        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get(`https://restapinodejs.onrender.com/api/letest-post`, {
                    headers: {
                        'x-access-token': token
                    }
                })

                // console.log(res?.data);
                if (res?.data?.status === "success") {
                    setLatestPosts(res?.data?.data)
                    // setLoad(false)
                }

                res = await axios.get(`https://restapinodejs.onrender.com/api/showallcategory`, {
                    headers: {
                        'x-access-token': token
                    }
                })
                console.log(res?.data);
                if (res?.data?.status === "success") {
                    setCategoryList(res?.data?.data)
                }
            } catch (error) {
                console.log(error);
                swal(error?.response?.data?.message, { icon: 'error', buttons: 'OK' })

            }

        })()
        // eslint-disable-next-line
    }, [])

    // console.log(allBlogs);

    useEffect(() => {
        (function SearchBlogs() {
            const filtered = allBlogs.filter(item => item.title.toLowerCase().includes(searchValue))
            setFilteredBlogs(filtered)
        })()
        // eslint-disable-next-line
    }, [searchValue])

    useEffect(() => {
        if (allBlogs?.length > 0 && latestPosts?.length > 0 && categoryList?.length > 0) {
            setLoad(false)
        }
    }, [allBlogs, latestPosts, categoryList])

    // console.log(searchValue);

    // console.log(filteredBlogs);


    return (
        <>
            <Layout>
                {
                    <Container maxWidth='xl' sx={{ border: '', margin: '20px 0' }}>

                        <Grid container spacing={2}>

                            <Grid item xs={12} md={9}>

                                {
                                    load ? <BlogSkeleton /> : (
                                        <>
                                            {
                                                filteredBlogs?.length < 1 ? (
                                                    allBlogs.map((blog, index) => {
                                                        return (
                                                            <CardBlog key={index} blogData={blog} />
                                                        )
                                                    })
                                                ) : (
                                                    filteredBlogs.map((blog, index) => {
                                                        return (
                                                            <CardBlog key={index} blogData={blog} />
                                                        )
                                                    })
                                                )
                                            }
                                        </>
                                    )
                                }

                            </Grid>

                            <Grid item xs={12} md={3}>
                                {
                                    load ? <Paper sx={{ overflow: 'hidden' }}><SidebarSkeleton /></Paper> : (
                                        <Paper sx={{ textAlign: 'center', padding: '20px 0' }}>

                                            <Typography py={2}>Search for Blogs</Typography>
                                            <Search>
                                                <SearchIconWrapper>
                                                    <SearchIcon />
                                                </SearchIconWrapper>
                                                <StyledInputBase
                                                    placeholder="Search…"
                                                    inputProps={{ 'aria-label': 'search' }}
                                                    name="search"
                                                    onChange={searchBlog}
                                                />
                                            </Search>

                                            <Box component='div' sx={{ margin: '20px 0', padding: '20px 0', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                <Typography variant="h6" fontWeight='bolder'>Categories</Typography>
                                                {
                                                    categoryList.map(item => {
                                                        return (
                                                            <Link to={`/blogs/post-by-category/${item._id}`} key={item._id} style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>{item.category}</Link>
                                                        )
                                                    })
                                                }

                                            </Box>


                                            <div style={{ margin: '20px 0', padding: '20px 0' }}>
                                                <Typography variant="h6">Recent Posts</Typography>

                                                {
                                                    latestPosts.map(post => {
                                                        return (
                                                            <div key={post._id} className="latestPost" style={{ padding: '5px 15px', margin: '10px 0', display: 'flex', gap: '10px', textAlign: 'left' }}>
                                                                <img src={`https://restapinodejs.onrender.com/api/blog/image/${post._id}`} alt={''} style={{ height: '50px', width: '70px' }} />
                                                                <p><Link to={`/blogs/blogdetails/${post._id}`} style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>{post.title}</Link> <br /><span style={{ color: 'rgba(0,0,0,0.5)' }}>{post.createdAt.slice(0, 10)}</span></p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
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