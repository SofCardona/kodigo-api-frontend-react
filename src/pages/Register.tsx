import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (error) {
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Crear Cuenta</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Correo electrónico"
          />
          {errors.email && <span className="text-red-500 text-sm">Este campo es requerido</span>}
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold">Contraseña</label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Contraseña"
          />
          {errors.password && <span className="text-red-500 text-sm">Mínimo 6 caracteres</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;