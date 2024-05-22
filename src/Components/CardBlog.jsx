

import { Button, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function CardBlog({ blogData }) {

    return (
        <Grid container spacing={1} sx={{marginBottom: '15px', padding: ' 0 5px', boxShadow: '0 0 5px grey', borderRadius: '10px'}} key={blogData._id}>
            <Grid item sm={4} sx={{ margin: { xs: '0 auto', md: 'auto 0' } }}>
                <CardMedia sx={{ borderRadius: '15px', padding: { xs: '0', md: '5px'}, width: '100%' }}
                    component="img"
                    // image={`data:image/png;base64,${blogData?.photo?.data}`}
                    image={`https://restapinodejs.onrender.com/api/blog/image/${blogData?._id}`}
                    alt=''
                    height={220}
                    width='100%'
                    />
            </Grid>

            <Grid item sm={8}>
                <CardHeader title={blogData?.title} subheader='' />
                <CardContent>
                    <Typography variant='body2' fontSize={12}><i class="fa-solid fa-message"></i> {blogData?.comment_count} Comments</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        <p dangerouslySetInnerHTML={{ __html: `${blogData?.postText?.slice(0, 250)}...` }} />
                    </Typography>
                    <Button variant="contained" sx={{ display: 'inline', color: '#6222CC !important'}}><Link to={`/blogs/blogdetails/${blogData._id}`} style={{ textDecoration: 'none', color: 'white' }}>Read More</Link></Button>
                </CardContent>
            </Grid>
        </Grid>
    );
}
