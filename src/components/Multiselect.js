import MenuItem from "@mui/material/MenuItem";
import {OutlinedInput, useTheme} from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const MultipleSelect = ({rows, name, label, handleChange, value}) => {
    const theme = useTheme();

    return (
        <div>
            <FormControl sx={{width: "100%"}}>
                <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    name={name}
                    multiple
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput label={label}/>}
                    variant="outlined">
                    {rows.map((row) => (
                        <MenuItem
                            key={row.id}
                            value={row.id}
                            style={theme}
                        >
                            {row.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultipleSelect;