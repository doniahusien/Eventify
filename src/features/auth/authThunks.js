import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser, setToken, setLoading, setError } from './authSlice';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email }, { dispatch }) => {
        dispatch(setLoading(true));
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }
            const data = await response.json();
            console.log('Login successful. Data:', data); // Log the fetched data
            dispatch(setToken(data.token)); // Assuming your API returns a token
            // Optionally, you can dispatch setUser here if your API also returns user data
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
);
