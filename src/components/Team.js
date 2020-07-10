import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Team = () => {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contactEmail, setContactEmail] = useState(""); 

    const sendEmail = async(e) =>{
        e.preventDefault();

        let email = {
            title,
            content,
            contactEmail
        }

        console.log("sending email", email);
    }


    return(
        <React.Fragment>
           {/* <button className="back" onClick={goBack}> &larr; Back</button> */}

           
                <section className="services">
                     <h2>Meet the Team</h2>
                     <table border="1">
                            <tr>
                                <td>6</td>
                                <td>6</td>
                                <td>6</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>7</td>
                                <td>7</td>
                                <td>7</td>
                            </tr>
                        </table>
                        <br/>
                     <div className="service-container">
                        

                         <div className="services-card service-one"></div>
                         <div>yyy</div>
                         <div className="service-description">

                            <h3>SEO Friendly Apps.</h3>
                            <br></br>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Clear &amp; Optimized Code.</h3>
                          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Support 24 hours.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                        </div>
                      
                    </div>
                </section>

                
            
        </React.Fragment>
    )

}


export default Team;