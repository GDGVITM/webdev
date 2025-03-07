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
            <div className="container mx-auto max-w-3xl text-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="mb-4">
                        Have a question or want to work together? Fill out the form below or reach out on social media.
                    </p>
                </div>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <TextField id="name" label="Name" fullWidth placeholder="Your name" />
                        </div>
                        <div>
                            <TextField id="email" label="Email" fullWidth type="email" placeholder="Your email" />
                        </div>
                    </div>
                    <TextField
                        id="message"
                        label="Message"
                        fullWidth
                        multiline
                        rows={5}
                        placeholder="Your message"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth className="mt-4">
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
            </div>
        </section>
    );
}
