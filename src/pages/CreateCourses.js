import BasePage from "../components/BasePage";
import {Box, Button, TextField} from "@mui/material";
import MultipleSelect from "../components/Multiselect";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import httpGet from "../utils/httpRequests/httpGet";
import {useNavigate} from "react-router-dom";
import httpPost from "../utils/httpRequests/httpPost";

const CreateCourses = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [courses, setCourses] = useState({
        name: '',
        description: '',
        initialDate: '',
        finalDate: '',
        teacher: '',
        students: []
    });
    const navigate = useNavigate();

    useEffect(() => {
        httpGet('students/find-all-students', setStudents);
        httpGet('teachers/find-all-teachers', setTeachers);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();


        const formattedData = {
            name: courses.name,
            description: courses.description,
            initialDate: new Date(courses.initialDate).toISOString(),
            finalDate: new Date(courses.finalDate).toISOString()
        };

        httpPost('courses/create-course', formattedData);
        setTimeout(() => {
            navigate('/courses');
        }, 3000);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setCourses((prevCourses) => ({
            ...prevCourses,
            [name]: value,
        }));
    }

    return (
        <BasePage title='Novo Curso'>
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
                    value={courses.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    label="Descrição"
                    name="description"
                    variant="outlined"
                    value={courses.description}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    // label="Data de início"
                    name="initialDate"
                    type="date"
                    variant="outlined"
                    value={courses.initialDate}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <TextField
                    // label="Data de término"
                    name="finalDate"
                    type="date"
                    variant="outlined"
                    value={courses.finalDate}
                    onChange={handleChange}
                    fullWidth
                    required
                />

                <FormControl fullWidth>
                    <InputLabel id="teacher">Professor</InputLabel>
                    <Select
                        labelId="teacher"
                        name="teacher"
                        id="teacher"
                        value={courses.teacher}
                        label="Professor"
                        onChange={handleChange}
                        variant="outlined"
                    >
                        {teachers.map((teacher) => (
                            <MenuItem key={teacher.id} value={teacher.id}>{teacher.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <MultipleSelect
                    label='Alunos'
                    name='students'
                    rows={students}
                    value={courses.students}
                    handleChange={handleChange}
                />

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
        </BasePage>
    )
}

export default CreateCourses;