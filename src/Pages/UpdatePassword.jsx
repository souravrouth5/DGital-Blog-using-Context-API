import { Button, Container, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Layout } from "../Components/Common/Layout";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { BtnLoader } from "../Components/Common/BtnLoader";


export function UpdatePassword(){

    const { auth } = useContext(AuthContext)
    const [load, setLoad] = useState(false)

    const Navi = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const token = auth.token || JSON.parse(localStorage.getItem('token'))
    const userId = auth.user?._id || JSON.parse(localStorage.getItem('user'))?._id

    console.log(userId);

    const onSubmit = async (data) => {
        setLoad(true)
        data = {...data, "user_id":userId}
        console.log(data);
        try {
            let res = await axios.post(`https://restapinodejs.onrender.com/api/update-password`, data, { headers: { 'x-access-token': token } })
            console.log(res?.data);
            if (res?.data?.success) {
                setLoad(false)
                toast.success(res.data.msg)

                Navi('/blogs')

            } else {
                setLoad(false)
                toast.error(res.data.msg)
            }

        } catch (error) {
            setLoad(false)
            console.log(error);
            toast.error(error?.response?.data?.message)
            toast.error(error?.response?.data)
        }
    }

    return(
        <>
        <Layout>
                <Container maxWidth='sm' sx={{ textAlign: 'center' }}>
                    <Typography variant='h6' style={{ margin: 0, padding: '10px 0' }}>Update Password</Typography>

                    <form action="" style={{ margin: '10px' }} onSubmit={handleSubmit(onSubmit)}>

                        <FormControl fullWidth>
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                placeholder="Enter Password"
                                label="Password"
                                {...register('password', { required: true })}
                            />
                            {errors.password && errors.password.type === 'required' && <span style={{ color: 'red', textAlign: 'left', margin: '0 25px' }}>Password is required</span>}
                        </FormControl> <br /><br />

                        <Button variant="contained" type="submit" sx={{ bgcolor: '' }}>{load ? <BtnLoader height={25} width={70} /> : 'Update'}</Button>

                    </form>
                </Container>
        </Layout>
        </>
    )
}