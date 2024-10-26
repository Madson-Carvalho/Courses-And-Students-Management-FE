import BasePage from "../components/BasePage";
import Grid from '@mui/material/Grid2';
import {DataGrid} from '@mui/x-data-grid';
import {Button, Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";

const StudentsPage = () => {
    const navigate = useNavigate();

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
        {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
        {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
        {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
        {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
        {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
    ];

    function handleClick() {
        navigate('/create-student');
    }

    return (
        <BasePage title='Estudantes'>
            <Button variant="contained" sx={{margin: "1rem 0"}} onClick={handleClick}>Novo</Button>
            <Grid container spacing={2} justifyContent='center'>
                <Paper sx={{height: 400, width: '90%', border: '1px solid rgba(0,0,0,0.2)'}}>
                    <DataGrid
                        rows={rows}
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