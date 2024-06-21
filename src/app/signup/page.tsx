'use client'

import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";


const SignupPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };

    const handleSignup = async () => {
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="min-h-screen p-0 sm:p-10 bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-0">
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                        <div className="w-full flex-1 mt-8">
                            <Button className="!flex !items-center !w-[60%] !border !border-gray-500  mx-auto rounded-md">
                                <FcGoogle className="mr-2" size={20} />
                                Sign up with Google
                            </Button>
                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign up with e-mail
                                </div>
                            </div>
                            <div className="mx-auto max-w-xs space-y-4">
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    color="success"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button fullWidth size="large" type="submit" variant="contained">
                                    Sign up
                                </Button>
                                <FormControlLabel
                                    control={<Checkbox checked={checked} onChange={handleChange} color="success" size="small" />}
                                    label={
                                        <p className="!text-xs text-gray-600 text-left">
                                            I agree to abide by templatana's{' '}
                                            <Typography fontSize={12} component="a" href="#" className="border-b border-gray-500 border-dotted">
                                                Terms of Service
                                            </Typography>{' '}
                                            and its{' '}
                                            <Typography fontSize={12} component="a" href="#" className="border-b border-gray-500 border-dotted">
                                                Privacy Policy
                                            </Typography>
                                        </p>

                                    }
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
