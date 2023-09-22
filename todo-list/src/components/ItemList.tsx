import * as React from 'react';
import { Container, Box, Stack } from '@mui/system';
import Item from './Item';
const ItemList = () => {
    return (
        <Container maxWidth='sm'>
            <Box sx={{backgroundColor: '#808080'}}>
                <Item todo={'Take out the trash'} dueDate={new Date(2023, 8, 21, 15, 30, 0, 0)}></Item>
                <Item todo={'Take out the trash'} dueDate={new Date(2023, 8, 21, 15, 30, 0, 0)}></Item>
                <Item todo={'Take out the trash'} dueDate={new Date(2023, 8, 21, 15, 30, 0, 0)}></Item>
            </Box>
        </Container>
    )
}

export default ItemList;