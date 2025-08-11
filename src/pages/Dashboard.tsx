import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = () => {
  const [bootcamps, setBootcamps] = useState<any[]>([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const querySnapshot = await getDocs(collection(db, "bootcams"));
      setBootcamps(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBootcamps();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Dashboard de Bootcamps</h1>
        <p className="text-lg text-blue-700 mb-6">
          Acceso exclusivo para usuarios autenticados.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {bootcamps.map(bc => (
          <div
            key={bc.id}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500 hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{bc.name}</h2>
            <p className="text-gray-700">{bc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;