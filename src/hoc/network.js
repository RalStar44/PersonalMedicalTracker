import React from "react";
import {Container, Typography} from "@mui/material";

const Network= () =>{
    return (
        <Container>
            <Typography>
                This is an HOC for displaying all records for Network
            </Typography>
        </Container>
    );

    

}

export default React.memo(Network);