public class QueijoMussarelaRalado extends Ingredienteadd{
    private $sanduiche
    public function __construct(Sanduiche $sanduiche) {
        $this -> sanduiche = $sanduiche;

    }
    public function getNome(){
        return $this -> sanduiche -> getNome(). "Queijo Mussarela Ralado";
    }

    public function valor(); {
        return 2,00 $this->sanduiche->valor();
    
    
}
