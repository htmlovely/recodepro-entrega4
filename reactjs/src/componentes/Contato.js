import whatsapp from '../imgs/whatsapp.png';

const Contato = () => {
  
  return (
        <div class="painel1">
            <div class="painelContato">
                <div class="divContato">
                    <h2>Onde estamos</h2>
                    <p>Travessa Latânia 13 - VK</p>
                    <p>Rio de Janeiro - RJ</p>
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=558108132279498">
                        <img src={whatsapp} width="20px"/>
                        (81) 3227-9498
                    </a>
                </div>
                <div class="divContato">
                    <form>
                        <h3>Fale conosco</h3>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Contato;
