import React from 'react';
import { Html } from '@react-three/drei';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
} from '@mui/material';

import { GithubIcon, LinkedinIcon, TwitterIcon } from '../helper/IconHelper';

export default function Contact() {
    return (
        <section className="bg-gray-200 py-12">
            <Container maxWidth="md">
                <div className="text-center">
                    <Typography variant="h4" component="h2" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Have a question or want to work together? Fill out the form below or reach out on social media.
                    </Typography>
                </div>
                <form className="mt-8 space-y-4">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="name" label="Name" fullWidth placeholder="Your name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="email" label="Email" fullWidth type="email" placeholder="Your email" />
                        </Grid>
                    </Grid>
                    <TextField
                        id="message"
                        label="Message"
                        fullWidth
                        multiline
                        rows={5}
                        placeholder="Your message"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Send Message
                    </Button>
                </form>
                <div className="flex justify-center mt-6 space-x-4">
                    <Link href="https://www.github.com/abhishekdubey369" target="_blank" rel="noopener" className="text-gray-500 hover:text-gray-700">
                        <GithubIcon />
                    </Link>
                    <Link href="https://www.twitter.com/asdts109" target="_blank" rel="noopener" className="text-gray-500 hover:text-gray-700">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/asdts" target="_blank" rel="noopener" className="text-gray-500 hover:text-gray-700">
                        <LinkedinIcon />
                    </Link>
                </div>
            </Container>
            <footer className="text-center mt-8">
                <Typography variant="body2" color="textSecondary">
                    &copy; {new Date().getFullYear()} Abhishek Dubey. All rights reserved.
                </Typography>
                <div className="mt-4">
                    {/* Add your footer content here */}
                </div>
            </footer>
        </section>
    );
}
