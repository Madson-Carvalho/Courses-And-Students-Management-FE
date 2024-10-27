import {Box, Card, CardContent, Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';
import BasePage from "../components/BasePage";

const HomePage = () => {

    const cardMock = [{name: "Estudantes", quantity: 5}, {name: "Cursos", quantity: 25}, {name: "Professores", quantity: 3}];

    return (
        <BasePage title='Home'>
            <Grid container spacing={2} justifyContent='center' margin={10}>
                {cardMock.map(x => (
                    <Grid size={{xs: 2, md: 4}}>
                        <Box sx={{minWidth: 275}}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography gutterBottom sx={{color: 'text.secondary', fontSize: 14}}>
                                        {x.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        Quantidade de cadastros
                                        <br/>
                                        {x.quantity}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </BasePage>
    )
}

export default HomePage;