import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Apple = () =>{

    const Navigate  = useNavigate();
    const onHomePageButtonClick = () =>{
        Navigate("/");
    };
    
    return <div>
        <div>Apple Page 🍎</div>
        <Button variant="contained" onClick = {onHomePageButtonClick} >Navigate to Home Page</Button>
    </div>
}
export default Apple;