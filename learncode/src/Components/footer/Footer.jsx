import React from 'react'
import { Box, Container, Typography,  Avatar, ListItemText, ListItem, List, TextField } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        
            <Box bgcolor='black' component='center'  height={250}   sx={{ color: 'whitesmoke' }}>
                <Container component='div'  sx={{
                    paddingTop: '35px',
                    height: '200px',
                    marginTop: '20px',
                    flex: 'wrap', display: 'flex',
                    alignItems: 'center',
                    gap: "200px",

                }}  >
                    <Typography component='div' sx={{ width: "200px", height: '120px', alignItems: 'center' }}>
                        <Avatar sx={{ width: '120px', height: '50px', marginTop: '30px' }}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgngeMIjuzwQq2QclV3VCjkGD5o2R6wy8WasJxcXnNqA&s' alt='err' />
                    </Typography>

                    <Typography component='div'>
                        <List >
                            <ListItem sx={{ fontSize: '20px' }} >Download</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}   >Windowapp</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Mac app</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Linux app</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Desktop app</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Services</ListItem>
                            <ListItem >Windowapp</ListItem>

                        </List>
                    </Typography>

                    <Typography component='div'>
                        <List >
                            <ListItem sx={{ fontSize: '20px', }} >Download</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}   >Windowapp</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Mac app</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Linux app</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Desktop app</ListItem>
                            <ListItem sx={{ marginBottom: '-18px' }}>Services</ListItem>
                            <ListItem >Windowapp</ListItem>

                        </List>
                    </Typography>
                    <Typography component='div'>
                        <ListItemText>Get in Touch</ListItemText>
                        <Typography component='div' sx={{ display: 'flex', gap: '10px', marginLeft: '36px' }}>
                            <InstagramIcon /><WhatsAppIcon /><TwitterIcon />
                        </Typography>
                        <TextField sx={{ border: "2px solid white", marginTop: '12px' }} type='text' placeholder='Enter your email' size='small' />
                    </Typography>
                </Container>

            </Box>


        
    )
}

export default Footer