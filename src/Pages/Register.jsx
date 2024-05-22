import { Button, Container, FormControl, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { Layout } from "../Components/Common/Layout";
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BtnLoader } from "../Components/Common/BtnLoader";

export function Register() {

    const [headerHeight, setHeaderHeight] = useState('')
    const [load, setLoad] = useState(false)
    const Navi = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    // console.log(watch('photo')[0]);

    const onSubmit = async (data) => {
        setLoad(true)
        console.log(data);
        const formdata = new FormData()
        formdata.append('name', data.name)
        formdata.append('email', data.email)
        formdata.append('mobile', data.mobile)
        formdata.append('password', data.password)
        formdata.append('photo', data.photo[0])
        try {
            let res = await axios.post(`https://restapinodejs.onrender.com/api/register`, formdata)
            console.log(res?.data);
            if (res?.data?.success) {
                setLoad(false)
                toast.success(res?.data?.message);
                Navi('/login')
            } else {
                setLoad(false)
                toast.error(res?.data?.message)
            }
        } catch (error) {
            setLoad(false)
            console.log(error);
            toast.error(error?.response?.data?.msg)
            toast.error(error?.response?.data)
        }
    }

    useEffect(() => {
        const head = document.getElementsByTagName('header')[0]?.clientHeight
        setHeaderHeight(head + 20)
    }, [])

    return (
        <>

            <Layout>
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: `calc(100vh - ${headerHeight}px)` }}>

                    <Container maxWidth='sm' style={{ textAlign: 'center', padding: '10px 0' }} className="myForm">
                        <i class="fa-solid fa-circle-user" style={{ color: "#6222CC", fontSize: '46px' }}></i>
                        <Typography variant='h6' style={{ margin: 0, padding: '0 0', color: '#FBA504' }}>Registration Form</Typography>
                        <form action="" style={{ margin: '10px' }} onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={1}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        placeholder="Enter Name"
                                        label="Name"
                                        {...register('name', { required: true })}
                                    />
                                    {errors.name && errors.name.type === 'required' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Name is required</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        placeholder="Enter Email"
                                        label="Email"
                                        // eslint-disable-next-line
                                        {...register('email', { required: 'true', pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm })}
                                    />
                                    {errors.email && errors.email.type === 'required' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Email is required</span>}
                                    {errors.email && errors.email.type === 'pattern' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Email patten must be xyz@mail.com</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined">Mobile</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        placeholder="Enter Mobile"
                                        label="Mobile"
                                        {...register('mobile', { required: 'true', minLength: 10, maxLength: 10 })}
                                    />
                                    {errors.mobile && errors.mobile.type === 'required' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Mobile num is required</span>}
                                    {errors.mobile && (errors.mobile.type === 'minLength' || errors.mobile.type === 'maxLength') && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Mobile num length must be of 10 digit</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        placeholder="Enter Password"
                                        label="password"
                                        type="password"
                                        {...register('password', { required: 'true', minLength: 8, maxLength: 20 })}
                                    />
                                    {errors.password && errors.password.type === 'required' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Password is required</span>}
                                    {errors.password && errors.password.type === 'minLength' && errors.password.type === 'minLength' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Password length must be between 8 to 20 chars</span>}
                                </FormControl>

                                <FormControl fullWidth>
                                    {/* <InputLabel htmlFor="component-outlined">Photo</InputLabel> */}
                                    <OutlinedInput
                                        id="component-outlined"
                                        type="file"
                                        // placeholder="Select Photo"
                                        label="Profile Pic"
                                        {...register('photo', { required: 'true' })}
                                    />
                                    {errors.photo && errors.photo.type === 'required' && <span style={{ color: 'red', textAlign: 'left', padding: '0 25px' }}>Please select Profile Picture</span>}
                                </FormControl>

                                <Button variant="contained" type="submit" sx={{ bgcolor: '#6222CC', padding: '10px 40px', fontWeight: 'bold', '&:hover': { bgcolor: '#411788', boxShadow: '5px 8px 1px 2px rgba(0,0,0,0.3)' } }}>{load ? <BtnLoader height={25} width={70} /> : 'Register'}</Button>

                            </Stack>
                        </form>
                    </Container>
                </Container>

            </Layout>

        </>
    )
}