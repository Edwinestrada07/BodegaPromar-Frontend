import API  from "./axiosConfig";

export const login = async (data) => {
    const response = await API.post("/auth/login", data);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("rol", response.data.rol);

    return response.data;
}