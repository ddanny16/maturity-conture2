import React from 'react'
import "./ContactStyle.css"
import { FaHome, FaMailBulk, FaPhone, } from "react-icons/fa"


const Contacttop = () => {
  return (
    <div>
      <section className="conty">
        <div className="heading">

        </div>
        <div className="footer">
          <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                <div>
                  <p><h4>Address</h4> </p>
                  <p>
                    <li>   Lagos State:</li>
                    <li>   Ogun State:</li>
                    <li> Ondo State:</li>

                  </p>
                </div>
              </div>
              <div className="phone">
                <h4>
                  <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                  +234 80 3387 3112,
                </h4>
              </div>
              <div className="email">
                <h4>
                  <a href="mailto:temmydammy16@gmail.com"> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    maturitycouture@gmail.com</a>
                </h4>
              </div>


            </div>

            <div className="right">
              <h4>
                Working Hours: 9:00AM-6:00PM (Monday – Friday)
              </h4>
              <p>
                We will reply you within 2 hours in our working time once we receive your e-mail. Please add the Read Receipt Request when you send the e-mail to us.
                Regarding the e-mail reply.
              </p>
             
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Contacttop
