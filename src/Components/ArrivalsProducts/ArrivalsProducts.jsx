
import imgProN1 from '../../assets/products/n1.jpg'
import imgProN2 from '../../assets/products/n2.jpg'
import imgProN3 from '../../assets/products/n3.jpg'
import imgProN4 from '../../assets/products/n4.jpg'
import imgProN5 from '../../assets/products/n5.jpg'
import imgProN6 from '../../assets/products/n6.jpg'
import imgProN7 from '../../assets/products/n7.jpg'
import imgProN8 from '../../assets/products/n8.jpg'
import { Link } from 'react-router-dom';

export default function ArrivalsProducts() {
  return (
    <>
      <section id="Product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>

        <div className="pro_container">
            <div className="pro">
                <img src={imgProN1} alt="imgProN1"/>
                <div className="descreption">
                    <span>adidas</span>
                    <h5>Carton Astrount T-Shirts</h5>
                    <div className="star">
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>$90</h4>
                </div>
                <Link to="#"><i className="fa-solid fa-cart-plus cart   "></i></Link>
            </div>

            <div className="pro">
                <img src={imgProN2} alt="imgProN2"/>
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
                <img src={imgProN3} alt="imgProN3"/>
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
                <img src={imgProN4} alt="imgProN4"/>
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
                <img src={imgProN5} alt="imgProN5"/>
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
                <img src={imgProN6} alt="imgProN6"/>
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
                <img src={imgProN7} alt="imgProN7"/>
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
                <img src={imgProN8} alt="imgProN8"/>
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

