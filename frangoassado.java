class FrangoAssado extends Recheio {
   private $sanduiche
   public function __construct(Sanduiche $sanduiche) {
       $this -> sanduiche = $sanduiche;

   }
   public function getNome(){
       return $this -> sanduiche -> getNome(). "Frango Assado";
   }

   public function valor();{
      return 4,5 $this->sanduiche->valor();


   }
    

   

   }

   /*public function valor(){
    return "R$"4,5 ; */
 