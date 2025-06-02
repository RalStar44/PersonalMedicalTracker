import React from "react";
import {Container, Typography} from "@mui/material";

const User= () =>{
    return (
        <Container>
            <Typography>
                This is an HOC for displaying all records for User
            </Typography>
        </Container>
    );

    

}

export default React.memo(User);