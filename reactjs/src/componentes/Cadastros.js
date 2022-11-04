
import Recife from '../reactjs/src/imgs/destinations/recife.png';
import SaoLuis from '../reactjs/src/imgs/destinations/sao-luis';
import JoaoPessoa from '../reactjs/src/imgs/destinations/joao-pessoa.jpg';
import Teresina from '../reactjs/src/imgs/destinations/Teresina-Piauí.jpg';
import './Cadastros.css';
import '../style.css';

const Destinos = () => {
    return (
        <div class="painel4">
            <div class="divTicket">
                <div class="divTicket-content">
                    <div>
                        <input type="radio" id="idaevolta" name="drone" value="idaevolta" />
                        <label for="idaevolta">Ida e volta</label>

                        <input type="radio" id="ida" name="drone" value="ida" />
                        <label for="ida">Só ida</label>
                    </div>
                    <div>
                        <label for="passageiros" id="passageiros"> Passageiros: </label>
                        <input type="number" name="passageiros" id="passageiros" />
                        <div>
                            
                        </div>
                        <br />
                        <br />
                        <div>
                            <label for="site-search">Origem</label>
                            <br />
                            <input type="search" id="site-search" name="origem" />
                        </div>

                        <div>
                            <label for="site-search">Destino</label>
                            <br />
                            <input type="search" id="site-search" name="destino" />
                        </div>

                        <div>
                            <label for="dataIda">Data de ida</label>
                            <br />
                            <input type="datetime-local" name="dataIda" id="data" />
                        </div>
                        <div>
                            <label for="dataVolta">Data de volta</label>
                            <br />
                            <input type="datetime-local" name="dataVolta" id="data" />
                        </div>
                        <br />
                        <input type="button" id="btn-pesquisar" value="Pesquisar" />
                    </div>
                </div>
            </div>

            <div class="painel1">
                <div class="painel2">
                    <div class="boxImgs">
                        <div class="imgsDestinos">
                            <img src={Recife} alt="Recife - Pernambuco" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={Teresina} alt="Teresina - Píaui" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={JoaoPessoa} alt="João Pessoa - Paraíba" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={SaoLuis} alt="São Luis - Maranhão" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
            );
}

export default Destinos;