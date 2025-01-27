import BasePage from "../components/BasePage";
import {Box, Button, TextField} from "@mui/material";
import MultipleSelect from "../components/Multiselect";
import {useEffect, useState} from "react";
import httpGet from "../utils/httpRequests/httpGet";
import httpPost from "../utils/httpRequests/httpPost";
import {useNavigate} from "react-router-dom";

const CreateStudent = () => {
    const [courses, setCourses] = useState([]);
    const [studentData, setStudentData] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        selectedCourses: [],
    });
    const navigate = useNavigate();

    useEffect(() => {
        httpGet('courses/find-all-courses', setCourses);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const formattedData = {
            name: studentData.name,
            email: studentData.email,
            dateOfBirth: new Date(studentData.dateOfBirth).toISOString(),
        };

        httpPost('students/create-student', formattedData);
        setTimeout(() => {
            navigate('/students');
        }, 3000);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <BasePage title='Novo Estudante'>
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                    value={studentData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={studentData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    name="dateOfBirth"
                    type="date"
                    variant="outlined"
                    value={studentData.dateOfBirth}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <MultipleSelect
                    label='Cursos'
                    name='selectedCourses'
                    rows={courses}
                    value={studentData.selectedCourses}
                    handleChange={handleChange}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </BasePage>
    )
}

export default CreateStudent;