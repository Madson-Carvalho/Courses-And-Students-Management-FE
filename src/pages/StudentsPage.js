import BasePage from "../components/BasePage";
import Grid from '@mui/material/Grid2';
import {DataGrid} from '@mui/x-data-grid';
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import httpGet from "../utils/httpRequests/httpGet";
import formatDate from "../utils/formatDate/formatDate";

const StudentsPage = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState();

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'name', headerName: 'Nome', flex: 1},
        {field: 'email', headerName: 'E-mail', flex: 1},
        {field: 'dateOfBirth', headerName: 'Data de nascimento', flex: 1},
    ];

    useEffect(() => {
        httpGet('students/find-all-students', (data) => {
            const formattedData = data.map((student, index) => ({
                ...student,
                dateOfBirth: formatDate(student.dateOfBirth),
            }));
            setStudents(formattedData);
        });
    }, []);

    function handleClick() {
        navigate('/create-student');
    }

    return (
        <BasePage title='Estudantes'>
            <Button variant="contained" sx={{margin: "1rem 0"}} onClick={handleClick}>Novo</Button>
            <Grid container spacing={2} justifyContent='center'>
                <Paper sx={{height: 400, width: '90%', border: '1px solid rgba(0,0,0,0.2)'}}>
                    <DataGrid
                        rows={students}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        sx={{border: 0}}
                    />
                </Paper>
            </Grid>
        </BasePage>
    )
}

export default StudentsPage;