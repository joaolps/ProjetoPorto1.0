import AlinhamentoBalanceamento from "../../components/AlinhamentoBalanceamento/AlinhamentoBalanceamento";
import DiscosPastilhasFreios from "../../components/DiscosPastilhasFreios/DiscosPastilhasFreios";
import Embreagem from "../../components/Embreagem/Embreagem";
import FiltrosVelas from "../../components/FiltrosVelas/FiltrosVelas";


export default function Problemas() {

    document.title = "Problemas"
  return (
    <AlinhamentoBalanceamento/>;
    <DiscosPastilhasFreios/>;
    <Embreagem/>;
    <FiltrosVelas/>;
  );
}