import {useNavigate} from "react-router-dom";
import BasePage from "../components/BasePage";
import {Button, Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import httpGet from "../utils/httpRequests/httpGet";

const TeachersPage = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState();

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'name', headerName: 'Nome', flex: 1},
        {field: 'email', headerName: 'E-mail', flex: 1},
    ];

    useEffect(() => {
        httpGet('teachers/find-all-teachers', setTeachers);
    }, []);

    function handleClick() {
        navigate('/create-teachers');
    }

    return (
        <BasePage title='Professores'>
            <Button variant="contained" sx={{margin: "1rem 0"}} onClick={handleClick}>Novo</Button>
            <Grid container spacing={2} justifyContent='center'>
                <Paper sx={{height: 400, width: '90%', border: '1px solid rgba(0,0,0,0.2)'}}>
                    <DataGrid
                        rows={teachers}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        sx={{border: 0}}
                    />
                </Paper>
            </Grid>
        </BasePage>
    )
}

export default TeachersPage;