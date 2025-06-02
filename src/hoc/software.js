import React from "react";
import {Container, Typography} from "@mui/material";

const Software= () =>{
    return (
        <Container>
            <Typography>
                This is an HOC for displaying all records for Software
            </Typography>
        </Container>
    );

    

}

export default React.memo(Software);