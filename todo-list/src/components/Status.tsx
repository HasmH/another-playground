import * as React from 'react';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
interface StatusProps {
  dueDate: Date
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Status: React.FC<StatusProps> = ({dueDate}) => {
    return (
        <div>
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: green[700],
            '&.Mui-checked': {
              color: green[700],
            },
          }}
        />
        <Typography>
            {formatDate(dueDate)} 
        </Typography>
      </div>
    );
}

function formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date?.getFullYear();
  
    return `${day}/${month}/${year}`;
  }

export default Status; 
