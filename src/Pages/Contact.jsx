import { Box, Button, Container, FormControl, Stack, TextField } from "@mui/material";
import { Layout } from "../Components/Common/Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";


export function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            let res = await axios.post(`https://restapinodejs.onrender.com/api/contact/create`, data)
            console.log(res?.data);
            if(res?.data?.success){
                swal(res?.data?.message, { icon: 'success', buttons: { text: "OK" }})
            } else {
                swal(res?.data?.message, { icon: 'error', buttons: { text: "OK" } })
            }
        } catch (error) {
            console.log(error);
            swal(error && error?.response?.data?.message, { icon: 'error', buttons: { text: 'OK'}})
        }
    }


    return (
        <>
            <Layout>
                <Container maxWidth='sm'>
                    <Box textAlign='center' my={2}>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            <Stack spacing={2} my={2}>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" {...register('name', {required: true})} />
                                    {errors.name && errors.name.type === 'required' && <span style={{color: 'red', marginLeft: '30px', textAlign: 'left'}}>Name is required</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" {...register('email', {required: true})} />
                                    {errors.email && errors.email.type === 'required' && <span style={{color: 'red', marginLeft: '30px', textAlign: 'left'}}>Email is required</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="Phone" variant="outlined" {...register('phone', {required: true})} />
                                    {errors.phone && errors.phone.type === 'required' && <span style={{color: 'red', marginLeft: '30px', textAlign: 'left'}}>phone is required</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="Message" variant="outlined" {...register('message', {required: true})} />
                                    {errors.message && errors.message.type === 'required' && <span style={{color: 'red', marginLeft: '30px', textAlign: 'left'}}>Message is required</span>}
                                </FormControl>

                            </Stack>
                            <Button variant="contained" type="submit">Submit</Button>

                        </form>
                    </Box>
                </Container>
            </Layout>
        </>
    )
}