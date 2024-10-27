import BasePage from "../components/BasePage";
import {Box, Button, TextField} from "@mui/material";
import MultipleSelect from "../components/Multiselect";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import httpGet from "../utils/httpRequests/httpGet";
import httpPost from "../utils/httpRequests/httpPost";

const CreateTeachers = () => {
    const [courses, setCourses] = useState([]);
    const [teacherData, setteacherData] = useState({
        name: '',
        email: '',
        courses: [],
    });
    const navigate = useNavigate();

    useEffect(() => {
        httpGet('courses/find-all-courses', setCourses);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const formattedData = {
            name: teacherData.name,
            email: teacherData.email,
        };

        httpPost('teachers/create-teacher', formattedData);
        setTimeout(() => {
            navigate('/teachers');
        }, 3000);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setteacherData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <BasePage title='Novo Professor'>
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
                    value={teacherData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={teacherData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <MultipleSelect
                    label='Cursos'
                    name='courses'
                    rows={courses}
                    value={teacherData.courses}
                    handleChange={handleChange}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </BasePage>
    )
}

export default CreateTeachers;