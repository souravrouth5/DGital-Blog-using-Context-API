import { Box, Button, FormControl, Stack, TextField } from "@mui/material";

export function ContactForm() {
    return (
        <>
            <Box textAlign='center' my={2}>
                <form action="">

                    <Stack spacing={2} my={2}>

                        <FormControl fullWidth>
                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField id="outlined-basic" label="Phone" variant="outlined" />
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField id="outlined-basic" label="Message" variant="outlined" />
                        </FormControl>

                    </Stack>
                    <Button variant="contained">Contained</Button>

                </form>
            </Box>
        </>
    )
}