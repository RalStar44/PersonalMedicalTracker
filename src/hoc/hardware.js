import React from "react";
import {Container, Typography} from "@mui/material";

const Hardware= () =>{
    return (
        <Container>
            <Typography>
                This is an HOC for displaying all records for Hardware
            </Typography>
        </Container>
    );

    

}

export default React.memo(Hardware);