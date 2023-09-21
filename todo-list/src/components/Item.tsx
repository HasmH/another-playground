import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Status from './Status';

interface ItemProps {
  todo: string 
  dueDate: Date
}


const Item: React.FC<ItemProps> = ({todo, dueDate}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ mb: 1.5, mt: 1.5 }}>
        <Typography color="text.primary" sx={{mt: 1}}>
          {todo}
        </Typography>
        <Status dueDate={dueDate}></Status>
      </CardContent>
    </Card>
  );
}

export default Item; 
