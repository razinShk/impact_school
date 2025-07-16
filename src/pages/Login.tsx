
import { LoginForm } from '@/components/auth/LoginForm';
import { User } from '@/pages/Index';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (user: User) => {
    // Store user data and redirect to main app
    localStorage.setItem('currentUser', JSON.stringify(user));
    navigate('/dashboard');
  };

  return <LoginForm onLogin={handleLogin} />;
};

export default Login;
