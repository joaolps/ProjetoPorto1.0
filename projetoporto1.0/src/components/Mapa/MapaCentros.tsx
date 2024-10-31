import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapaCentros.module.css";

const centrosAutomotivos = [
  { id: 1, nome: "Centro Automotivo - Bela Vista", endereco: "R Pedroso, 394 - Bela Vista", cidade: "São Paulo", coordinates: [-46.655981, -23.561684] },
  { id: 2, nome: "Centro Automotivo - Rio Branco", endereco: "Av Rio Branco, 1448 - Campos Eliseos", cidade: "São Paulo", coordinates: [-46.6334, -23.5362] },
  { id: 3, nome: "Centro Automotivo - Caninde Global", endereco: "Av Cruzeiro do Sul, 607 - Caninde", cidade: "São Paulo", coordinates: [-46.6201, -23.5184] },
  { id: 4, nome: "Centro Automotivo - Jardins", endereco: "Rua Oscar Freire, 2500 - Jardins", cidade: "São Paulo", coordinates: [-46.6623, -23.5645] }
];

export default function MapaCentros() {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.listContainer}>
        {centrosAutomotivos.map((centro) => (
          <div key={centro.id} className={styles.centroItem}>
            <h3>{centro.nome}</h3>
            <p>{centro.endereco} - {centro.cidade}</p>
            <a href="#">Ver Detalhes</a>
          </div>
        ))}
      </div>
      <div className={styles.map}>
        <Map
          initialViewState={{
            longitude: -46.633308,
            latitude: -23.55052,
            zoom: 11
          }}
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="pk.eyJ1Ijoia2Vuem90YWtheWFtYSIsImEiOiJjbTJ3dnoxcHgwY2IzMmtwejl1N3E1YnZ3In0.skikeMQtJt3-hOMLOXbvvg"
        >
          {centrosAutomotivos.map((centro) => (
            <Marker key={centro.id} longitude={centro.coordinates[0]} latitude={centro.coordinates[1]} anchor="bottom">
              <img src="/img/marker.png" alt="Marker" style={{ width: "20px", height: "20px" }} />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
