public class Carne extends Recheio{

    private $sanduiche
    public function __construct(Sanduiche $sanduiche) {
        $this -> sanduiche = $sanduiche;

    }
    public function getNome(){
        return $this -> sanduiche -> getNome(). "Carne";
    }

    public function valor(); {
        return 5 $this->sanduiche->valor();
    }
     
    
}
