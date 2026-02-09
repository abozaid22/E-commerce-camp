
import { Link } from 'react-router-dom'
import imgProF1 from '../../assets/products/f1.jpg'
import imgProF2 from '../../assets/products/f2.jpg'
import imgProF3 from '../../assets/products/f3.jpg'
import imgProF4 from '../../assets/products/f4.jpg'
import imgProF5 from '../../assets/products/f5.jpg'
import imgProF6 from '../../assets/products/f6.jpg'
import imgProF7 from '../../assets/products/f7.jpg'
import imgProF8 from '../../assets/products/f8.jpg'

export default function Product() {
  return (
    <>
      <section id="Product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>

        <div className="pro_container">
            <div className="pro">

            <img src={imgProF1} alt="imgProF1"/>

            <div className="descreption">

            <span>adidas</span>
            <h5>Carton Astrount T-Shirts</h5>

            <div className="star">
            <Link to="#" className="hvr-icon-pop">
            <i className="fa fa-star hvr-icon"></i>
            </Link>      
            <Link to="#" className="hvr-icon-pop">
            <i className="fa fa-star hvr-icon"></i>
            </Link>    
            <Link to="#" className="hvr-icon-pop">
            <i className="fa fa-star hvr-icon"></i>
            </Link>      
            <Link to="#" className="hvr-icon-pop">
            <i className="fa fa-star hvr-icon"></i>
            </Link>      
            <Link to="#" className="hvr-icon-pop">
            <i className="fa fa-star hvr-icon"></i>
            </Link>

            </div>
            <h4>$90</h4>
            </div>
             
            <i className="fa-solid fa-cart-plus cart hvr-icon"></i>
				 
            </div>

            <div className="pro">
                <img src={imgProF2} alt="imgProF2"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


            <div className="pro">
                <img src={imgProF3} alt="imgProF3"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


            <div className="pro">
                <img src={imgProF4} alt="imgProF4"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


            <div className="pro">
                <img src={imgProF5} alt="imgProF5"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


            <div className="pro">
                <img src={imgProF6} alt="imgProF6"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


            <div className="pro">
                <img src={imgProF7} alt="imgProF7"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


            <div className="pro">
                <img src={imgProF8} alt="imgProF8"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart"></i></Link>
            </div>


        </div>
    </section>
    </>
  )
}

