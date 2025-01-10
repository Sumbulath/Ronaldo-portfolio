import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
function Achievements(){
    return(
        
       <div className='container'>
         <h1 class="text-center my-5">Achievements</h1>
         <div className="row">
         <div className="col-md-4">
         <Card>
           
           <Card.Body class="text-center p-4 py-3 shadow-sm rounded">
           <Card.Title ><FaTrophy class="trophy text-warning"/></Card.Title>
           <Card.Title>5 Ballon d'Or</Card.Title>
           <Card.Text>
           Awarded for his outstanding football career.
           </Card.Text>
           
      </Card.Body>
    </Card>

   </div>
   <div className="col-md-4">
   <Card>
           
           <Card.Body class="text-center p-4 shadow-sm rounded">
           <Card.Title ><FaStar  class="trophy text-primary"/></Card.Title>
           <Card.Title>UEFA Champions League</Card.Title>
           <Card.Text>
           Won 5 UEFA Champions League titles.
           </Card.Text>
           
      </Card.Body>
    </Card>
   </div>
   <div className="col-md-4">
         <Card>
           
           <Card.Body class="text-center p-4 shadow-sm rounded">
           <Card.Title ><FaCrown class="trophy text-success"/></Card.Title>
           <Card.Title>European Champion</Card.Title>
           <Card.Text>
           Led Portugal to victory in Euro 2016.
           </Card.Text>
           
      </Card.Body>
    </Card>

   </div>
         </div>
      
    
    </div>
    )
}export default Achievements