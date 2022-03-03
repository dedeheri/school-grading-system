import { useNavigate } from "react-router-dom";

function Forbidden({ error }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl z-auto mx-auto items-center flex justify-center min-h-screen">
      <div className="space-y-3 text-center">
        <h1 className="font-bold text-8xl">403</h1>
        <p className="font-medium text-xl">{error}</p>
        <p
          onClick={() => navigate("/")}
          className="font-base text-md hover:underline cursor-pointer"
        >
          Back to login
        </p>
      </div>
    </div>
  );
}

export default Forbidden;
