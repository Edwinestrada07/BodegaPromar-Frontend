import { useState } from "react";
import { login } from "../api/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

        await login({
            correo,
            password
        });

        navigate("/dashboard");

        } catch (error) {
            alert("Credenciales incorrectas");
        }
    };

    return (

        <div className="h-screen flex items-center justify-center bg-gray-900">

        <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded-lg shadow-lg w-80"
        >

            <h2 className="text-xl font-bold mb-6 text-center">
                Melamina Stock
            </h2>

            <input
                type="email"
                placeholder="Correo"
                className="w-full border p-2 mb-4 rounded"
                onChange={(e) => setCorreo(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-4 rounded"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="w-full bg-orange-500 text-white p-2 rounded"
            >
                Iniciar sesión
            </button>

        </form>

        </div>
    );
}