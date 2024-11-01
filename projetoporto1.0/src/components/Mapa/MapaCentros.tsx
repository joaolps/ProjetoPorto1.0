import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MapaCentros.module.css";

const centrosAutomotivos = [
  { id: 1, nome: "Centro Automotivo - Bela Vista", endereco: "R Pedroso, 394 - Bela Vista", cidade: "São Paulo", coordinates: [-46.655981, -23.561684] },
  { id: 2, nome: "Centro Automotivo - Rio Branco", endereco: "Av Rio Branco, 1448 - Campos Eliseos", cidade: "São Paulo", coordinates: [-46.6334, -23.5362] },
  { id: 3, nome: "Centro Automotivo - Caninde Global", endereco: "Av Cruzeiro do Sul, 607 - Caninde", cidade: "São Paulo", coordinates: [-46.6201, -23.5184] },
  { id: 4, nome: "Centro Automotivo - Jardins", endereco: "Rua Oscar Freire, 2500 - Jardins", cidade: "São Paulo", coordinates: [-46.6623, -23.5645] },
  { id: 5, nome: "Centro Automotivo - Casa Verde", endereco: "Av Engenheiro Caetano Alvares, 1179 - Casa Verde Media", cidade: "São Paulo", coordinates: [-46.6666, -23.4935] },
  { id: 6, nome: "Centro Automotivo - Itaim Bibi", endereco: "R Clodomiro Amazonas, 57 - Itaim Bibi", cidade: "São Paulo", coordinates: [-46.6769, -23.5874] },
  { id: 7, nome: "Centro Automotivo - Pinheiros", endereco: "R Deputado Lacerda Franco, 410 - Pinheiros", cidade: "São Paulo", coordinates: [-46.6862, -23.5611] },
  { id: 8, nome: "Centro Automotivo - Vila Mariana", endereco: "Av Lins de Vasconcelos, 2474 - Vila Mariana", cidade: "São Paulo", coordinates: [-46.6333, -23.5891] },
  { id: 9, nome: "Centro Automotivo - Mooca", endereco: "R dos Trilhos, 1327 - Mooca", cidade: "São Paulo", coordinates: [-46.6027, -23.5575] },
  { id: 10, nome: "Centro Automotivo - Barra Funda", endereco: "R Quirino dos Santos, 230 - Barra Funda", cidade: "São Paulo", coordinates: [-46.6667, -23.5244] },
  { id: 11, nome: "Centro Automotivo - Cardeal Arcoverde", endereco: "R Cardeal Arcoverde, 93 - Pinheiros", cidade: "São Paulo", coordinates: [-46.6898, -23.5553] },
  { id: 12, nome: "Centro Automotivo - Ibirapuera", endereco: "R França Pinto, 1115 - Ibirapuera", cidade: "São Paulo", coordinates: [-46.6620, -23.5920] },
  { id: 13, nome: "Centro Automotivo - Avenida Sumaré", endereco: "Av Sumaré, 73 - Perdizes", cidade: "São Paulo", coordinates: [-46.6751, -23.5422] }
];


export default function MapaCentros() {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.listContainer}>
        {centrosAutomotivos.map((centro) => (
          <div key={centro.id} className={styles.centroItem}>
            <h3>{centro.nome}</h3>
            <p>{centro.endereco}</p>
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
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="pk.eyJ1Ijoia2Vuem90YWtheWFtYSIsImEiOiJjbTJ3dnoxcHgwY2IzMmtwejl1N3E1YnZ3In0.skikeMQtJt3-hOMLOXbvvg"
        >
          {centrosAutomotivos.map((centro) => (
            <Marker key={centro.id} longitude={centro.coordinates[0]} latitude={centro.coordinates[1]} anchor="bottom">
              <img src="/img/porto-icon.png" alt="Porto Seguro Icon" style={{ width: "30px", height: "30px" }} />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}
