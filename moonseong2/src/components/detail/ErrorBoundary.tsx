import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorBoundary = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert('존재하지 않는 국가입니다.');
    navigate('/');
  }, [navigate]);

  return undefined;
};

export default ErrorBoundary;