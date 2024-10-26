import BasePage from "../components/BasePage";
import {Box, Button, TextField} from "@mui/material";
import MultipleSelect from "../components/Multiselect";

const CreateStudent = () => {
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (
        <BasePage title='Novo Estudante'>
            <Box
                component="form"
                // onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "80%",
                    margin: "0 auto",
                    mt: 5,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2
                }}
            >
                <TextField
                    label="Nome"
                    name="name"
                    variant="outlined"
                    // value={formData.name}
                    // onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    // value={formData.email}
                    // onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    label="Data de nascimento"
                    name="dateOfBirth"
                    type="date"
                    variant="outlined"
                    // value={formData.password}
                    // onChange={handleChange}
                    fullWidth
                    required
                />

                <MultipleSelect name='Cursos' rows={names}/>

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </BasePage>
    )
}

export default CreateStudent;