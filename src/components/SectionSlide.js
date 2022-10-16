import React from 'react'
import { Link } from "react-router-dom";
import "./SectionSlideStyle.scss"
import Carousel from 'better-react-carousel'
import Busines from "../assets/img/Businesscard (2).png"
import Barmat from "../assets/img/BarMat (2).png"
import Berret from "../assets/img/Berret (2).png"
import Btn from "../assets/img/Btns (2).png"
import Drive2 from "../assets/img/2dflashdrive (1).png"
import Caf from "../assets/img/CAF (1).png"
import Cardigan from "../assets/img/Cardigan (1).jpg"
import Carshades from "../assets/img/CarShades (1).png"
import Cmug from "../assets/img/Cmug (1).png"
import Cufflinks from "../assets/img/cufflinks (1).jpg"
import Facecap from "../assets/img/Facecap (1).png"
import Flag from "../assets/img/Flag (1).png"
import Fridgemag from "../assets/img/Fridgemagnet (1).png"
import Handfan from "../assets/img/handfan (1).png"
import Inflatable from "../assets/img/Inflateable (1).png"
import Keychaina from "../assets/img/KeychainA (2).png"
import Keychainf from "../assets/img/KeychainF (1).png"
import Keychainl from "../assets/img/KeyChainL (1).png"
import Ltag from "../assets/img/labelntag (1).jpg"
import Lanyards from "../assets/img/Lanyards (1).png"
import Lapelpins from "../assets/img/Lapelpins (1).png"
import Mousepads from "../assets/img/Mousepads (1).png"
import Nonwovenbags from "../assets/img/Nonwivenbags (1).png"
import Normflash from "../assets/img/NormFlash (1).png"
import Notepad from "../assets/img/notepadmemo.png"
import Paperbags from "../assets/img/Paperbags (1).png"
import Pens from "../assets/img/Pens (1).png"
import Plasticwaterb from "../assets/img/plasticwaterb (1).png"
import Pmug from "../assets/img/Pmug (1).png"
import Rollupban from "../assets/img/Rollupbanner (2).png"
import Scarfmuf from "../assets/img/scarfnmuffler (1).png"
import Smug from "../assets/img/Smug (1).png"
import Soccer from "../assets/img/Soccerball (1).png"
import Sock from "../assets/img/socks (1).png"
import Sportswear from "../assets/img/Sportswear (1).png"
import Stainless from "../assets/img/stainlesswaterb (1).png"
import Stickypad from "../assets/img/stickynotepad (2).png"
import Tshirts from "../assets/img/t-shirts (1).jpg"
import Tableclock from "../assets/img/tablecloxk (1).png"
import Ties from "../assets/img/Ties (1).png"
import Tieclip from "../assets/img/Tie Clip.jpg"


const SectionSlide = () => {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '8px' : '5px',
        width: isActive ? '8px' : '5px',
        background: '#1890ff'
      }}
    ></span>
  )

  return (
    <div>
      <h2 className='h2_nill'>
        A view of some of our products
      </h2>
      <Carousel dot={MyDot} cols={6} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" height="100%" src={Drive2} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Barmat} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Berret} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Btn} alt="/" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Caf} alt="/" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" height="100%" src={Busines} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Carshades} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Cmug} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Cufflinks} alt="/" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Cardigan} alt="/" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" height="100%" src={Facecap} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Flag} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Fridgemag} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Handfan} alt="/" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Inflatable} alt="/" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" height="100%" src={Keychaina} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Keychainf} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Keychainl} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Ltag} alt="/" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Lanyards} alt="/" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" height="100%" src={Lapelpins} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Mousepads} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Rollupban} alt="lol" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Nonwovenbags} alt="lol" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Normflash} alt="/" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" height="100%" src={Notepad} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Paperbags} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Pens} alt="pad" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Plasticwaterb} alt="/" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Pmug} alt="/" />
        </Carousel.Item>

        <Carousel.Item>
          <img width="100%" height="100%" src={Scarfmuf} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Smug} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Soccer} alt="pad" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Sock} alt="/" />      </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Sportswear} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Stainless} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Stickypad} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Tshirts} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Tableclock} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Ties} alt="/" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" height="100%" src={Tieclip} alt="/"/>
        </Carousel.Item>
        <Carousel.Item>
          <div className="mini">
            <h3 className="h3_text">
              See more on our product page
            </h3>
            <button className="btn1">
              <Link to="/project">Products</Link>
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SectionSlide
