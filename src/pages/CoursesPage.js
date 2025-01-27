import {useNavigate} from "react-router-dom";
import BasePage from "../components/BasePage";
import {Button, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import httpGet from "../utils/httpRequests/httpGet";
import formatDate from "../utils/formatDate/formatDate";

const CoursesPage = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState();

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'name', headerName: 'Nome', flex: 1},
        {field: 'description', headerName: 'Descrição', flex: 1},
        {field: 'initialDate', headerName: 'Data de início', flex: 1},
        {field: 'finalDate', headerName: 'Data de término', flex: 1},
    ];

    useEffect(() => {
        httpGet('courses/find-all-courses', (data) => {
            const formattedData = data.map((course, index) => ({
                ...course,
                id: course.courseId,
                initialDate: formatDate(course.initialDate),
                finalDate: formatDate(course.finalDate)
            }));
            setCourses(formattedData);
        });
    }, []);

    function handleClick() {
        navigate('/create-courses');
    }

    return (
        <BasePage title='Cursos'>
            <Button variant="contained" sx={{margin: "1rem 0"}} onClick={handleClick}>Novo</Button>
            <Grid container spacing={2} justifyContent='center'>
                <Paper sx={{height: 400, width: '90%', border: '1px solid rgba(0,0,0,0.2)'}}>
                    <DataGrid
                        rows={courses}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        sx={{border: 0}}
                    />
                </Paper>
            </Grid>
        </BasePage>
    )
}

export default CoursesPage;