import TextField from '@mui/material/TextField';

export default function Input(props) {
    // console.log(props)
    return (
        <div style={{margin:"20px"}}>
            <TextField id={props.id} label={props.label} variant={props.variants} multiline rows={props.rows} />
        </div>
    );
}