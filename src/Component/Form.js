import React from 'react';
import {Paper,Typography,TextField} from '@material-ui/core'


const Item = ({question})=>{
    return <div style={{margin:"16px 0"}}>
        <Typography align="left">
            {question}
        </Typography>
        <TextField fullWidth size="small" variant="outlined"  />
    </div>
}

const Form = () => {
    return (
        <Paper style={{padding:'16px 24px'}}>
            <Typography variant="h6" align="left">Data Input</Typography>
            <Item question="1. What is the company's current annual revenue?"/>
            <Item question="2. What is the company's current net profit margin (NPM) as a %?" />
            <Item question="3. What is the company's current gross profit margin (GPM) as a %?" />
        </Paper>
    );
};

export default Form;