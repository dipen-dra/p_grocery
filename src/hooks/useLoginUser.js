import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { loginUserService } from '../services/authServices';
import { useContext } from 'react';
import NavigationContext from '../context/NavigationContext';

// Add the "export" keyword here
export const useLoginUser = () => {
  const { navigate } = useContext(NavigationContext);

  return useMutation({
    mutationFn: loginUserService,
    onSuccess: (data) => {
      toast.success('Login successful!');
      localStorage.setItem('token', data.token);
      setTimeout(() => {
        // You might want to navigate to a dashboard or home page
        window.location.hash = '#/dashboard'; // Or use navigate('dashboard')
      }, 1500);
    },
    onError: (error) => {
      toast.error(error.message || 'Login failed. Please try again.');
    },
  });
};
// This hook can be used in your LoginPage component to handle user login.
// Usage example in a component:
// Note: There is no 'export default' in this file.