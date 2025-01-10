import { FaHeart } from "react-icons/fa";

function Contact(){
    return(
      <div className="ContactContainer">
         <div id="contact" class="py-5 text-white">    
        <div class="container text-center">
            <h2 class="mb-4">Contact</h2>
            <form>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" placeholder="Your Name" required=""/>
                    </div>
                    <div class="col-md-6 mb-3">
                        <input type="email" class="form-control" placeholder="Your Email" required=""/>
                    </div>
                </div>
                <textarea class="form-control mb-3" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    </div>
    <div id="footerdiv">
        <footer class="text-center py-3 bg-dark text-white">
         <p>© 2024 Cristiano Ronaldo Portfolio | Designed with <FaHeart class="text-danger"/></p>
         </footer>
    </div>
</div>


    
    )
}export default Contact