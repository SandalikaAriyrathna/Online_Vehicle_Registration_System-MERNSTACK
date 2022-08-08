import React  from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'






export default function ContactUs() {

    return (
        <div>
              <Header/>
              <div
  className=""
  style={{backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80')",height:"100vh",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover"}}>
<section className="background-radial-gradient overflow-hidden">



  <div className="container px-4 py-5 px-md-5 text-center ">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
        <h1 className="display-5 fw-bold ls-tight text-lg-start " style={{color: "hsl(218, 81%, 95%)"}}>
          Hello User,  <br />
          <span style={{color: "hsl(218, 81%, 95%)"}}>Contact with Us</span>
        </h1>
       
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

  <div className="card" style={{background: "linear-gradient(140deg, rgba(72, 115, 150, 1) 50%, rgba(57, 108, 150, 0.65) 65%, rgba(42, 102, 150, 0.6) 50%, rgba(27, 95, 150, 0.95) 80%, rgba(12, 88, 150, 1) 90%, rgba(0, 83, 150, 0.8) 70%)"}}>
        <div className="card-body px-4 px-md-5">
          

         
<section className="mb-4">

   
    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{color: "hsl(218, 81%, 95%)"}}>Contact us</h2>
    
  
    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

           
                <div className="row">

                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="" style={{color: "hsl(218, 81%, 95%)"}}>Your name</label>
                        </div>
                    </div>
                   
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="" style={{color: "hsl(218, 81%, 95%)"}}>Your email</label>
                        </div>
                    </div>
                   

                </div>
             
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="" style={{color: "hsl(218, 81%, 95%)"}}>Subject</label>
                        </div>
                    </div>
                </div>
               

                
                <div className="row">

                
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="7" className="form-control md-textarea"></textarea>
                            <label htmlFor="message" style={{color: "hsl(218, 81%, 95%)"}}>Your message</label>
                        </div>

                    </div>
                </div>
            

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-warning" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x" style={{color: "hsl(218, 81%, 95%)"}}></i>
                    <p style={{color: "hsl(218, 81%, 95%)"}}>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x" style={{color: "hsl(218, 81%, 95%)"}}></i>
                    <p style={{color: "hsl(218, 81%, 95%)"}}>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x" style={{color: "hsl(218, 81%, 95%)"}}></i>
                    <p style={{color: "hsl(218, 81%, 95%)"}}>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        
        

    </div>

</section>

</div></div>
      
      </div>
    </div>
  </div>
</section>

      
        
</div>
          
        

  
              <Footer/>
             

        </div>
          
    )
}