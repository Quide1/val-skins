import { getWeaponById } from "@/services/weapons";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function TestPageWithParam() {
  const { weapon } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weaponUuid = searchParams.get('idWeapon');
        
        if (!weaponUuid) {
          navigate('/');
          return;
        }

        const responseFetch = await getWeaponById(weaponUuid);
        console.log(responseFetch); // Aquí puedes manejar la respuesta de la API

      } catch (error) {
        console.error('Error fetching weapon:', error);
        navigate('/'); 
      }
    };

    fetchData();

  }, [searchParams, navigate]);

  return (
    <div>
      <h1>hola {weapon}</h1>
      <p>Este párrafo debería hablar sobre la weapon {weapon}</p>
    </div>
  );
}

export default TestPageWithParam;
