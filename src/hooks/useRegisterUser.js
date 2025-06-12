


// Correct imports at the top
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
// You should be IMPORTING the service function, like this:
import { registerUserService } from '../services/authServices';

// The hook definition
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUserService, // Using the imported function here
    onSuccess: (data) => {
    //   toast.success(data.message || 'Signup successful! You can now log in.');
    },
    onError: (error) => {
      toast.error(error.message || 'Signup failed.');
    },
  });
};

// --- PROBLEM AREA ---
// You likely have something like this at the bottom of the file.
// DELETE THE FOLLOWING CODE BLOCK from useRegisterUser.js

/*
export const registerUserService = async (formData) => {  <-- THIS IS THE DUPLICATE
  try {
    const response = await registerUserApi(formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
}
*/