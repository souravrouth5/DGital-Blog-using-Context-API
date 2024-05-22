import { Button, Container, FormControl, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { Layout } from "../Components/Common/Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Auth";
import { BtnLoader } from "../Components/Common/BtnLoader";


export function Login() {

    const [headerHeight, setHeaderHeight] = useState('')
    const { auth, setAuth } = useContext(AuthContext)
    const [load, setLoad] = useState(false)

    const Navi = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setLoad(true)
        console.log(data);
        try {
            let res = await axios.post(`https://restapinodejs.onrender.com/api/login`, data)
            console.log(res?.data);
            if (res?.data?.status === 200) {
                setLoad(false)
                toast.success(res.data.message)

                localStorage.setItem('user', JSON.stringify(res?.data?.user))
                localStorage.setItem('token', JSON.stringify(res?.data?.token))

                setAuth({ ...auth, user: (res?.data?.user), token: res?.data?.token })

                Navi('/blogs')

            } else {
                setLoad(false)
                toast.error(res.data.message)
            }

        } catch (error) {
            setLoad(false)
            console.log(error);
            toast.error(error?.response?.data?.message)
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

                    <Container maxWidth='sm' sx={{ textAlign: 'center', padding: '40px 20px' }} className="myForm">
                        <i class="fa-solid fa-circle-user" style={{ color: "#6222CC", fontSize: '56px' }}></i>
                        <Typography variant='h6' style={{ margin: 0, padding: '10px 0', color: '#FBA504' }}>Login Form</Typography>

                        <form action="" style={{ margin: '10px' }} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        placeholder="Enter Email"
                                        label="Email"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && errors.email.type === 'required' && <span style={{ color: 'red', textAlign: 'left', margin: '0 25px' }}>Email is required</span>}
                                </FormControl> <br /><br />

                                <FormControl fullWidth>
                                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        placeholder="Enter Password"
                                        label="Password"
                                        type="password"
                                        {...register('password', { required: true })}
                                    />
                                    {errors.password && errors.password.type === 'required' && <span style={{ color: 'red', textAlign: 'left', margin: '0 25px' }}>Password is required</span>}
                                </FormControl> <br /><br />

                                <Button variant="contained" type="submit" sx={{ bgcolor: '#6222CC', padding: '10px 40px', fontWeight: 'bold', '&:hover': { bgcolor: '#411788', boxShadow: '5px 8px 1px 2px rgba(0,0,0,0.3)' } }}>{load ? <BtnLoader height={25} width={70} /> : 'Login'}</Button>

                        </Stack>
                        </form>
                    </Container>
                </Container>
            </Layout>
        </>
    )
}