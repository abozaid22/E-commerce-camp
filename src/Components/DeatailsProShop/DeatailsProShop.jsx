
import { Link } from 'react-router-dom'
import imgDeatailsF1 from '../../assets/products/f1.jpg'
import imgDeatailsF2 from '../../assets/products/f2.jpg'
import imgDeatailsF3 from '../../assets/products/f3.jpg'
import imgDeatailsF4 from '../../assets/products/f4.jpg'
import imgDeatailsN1 from '../../assets/products/n1.jpg'
import imgDeatailsN2 from '../../assets/products/n2.jpg'
import imgDeatailsN3 from '../../assets/products/n3.jpg'
import imgDeatailsN4 from '../../assets/products/n4.jpg'
import Form from '../Form/Form'

export default function DeatailsProShop() {
  return (
    <>
    {/* Start Section Products Deatails */}
     <section id="proDeatails" className="section-p1">
        <div className="single_pro_image">
            
            <img src={imgDeatailsF1} width="100%" id="MainImage" alt="imgDeatailsF1"/>

            <div className="small-img-group">

                <div className="small-image-col">
                    <img src={imgDeatailsF1} width="100%" className="small_img" alt="imgDeatailsF1"/>
                </div>

                <div className="small-image-col">
                    <img src={imgDeatailsF2} width="100%" className="small_img" alt="imgDeatailsF2"/>
                </div>

                <div className="small-image-col">
                    <img src={imgDeatailsF3} width="100%" className="small_img" alt="imgDeatailsF3"/>
                </div>

                <div className="small-image-col">
                    <img src={imgDeatailsF4} width="100%" className="small_img" alt="imgDeatailsF4"/>
                </div>
            </div>
        </div>

        <div className="single_pro_deatails">
            <h6>Home / T-Shirt</h6>
            <h4>Men's Fashion T-Shirt</h4>
            <h2>$139.00</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
                <option>X Large</option>
            </select>
            
            <input type="number" value="1"/>
            <button className="normal">Add To Cart</button>
            <h4>Product Details </h4>
            
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id beatae veritatis dolor pariatur iusto autem quod dolore, quaerat assumenda itaque sed quos corporis a, enim saepe expedita officia delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id beatae veritatis dolor pariatur iusto autem quod dolore, quaerat assumenda itaque sed quos corporis a, enim saepe expedita officia delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id beatae veritatis dolor pariatur iusto autem quod dolore, quaerat assumenda itaque sed quos corporis a, enim saepe expedita officia delectus.</span>

        </div>
    </section> 

    {/*  Start Arrivals Product Section  */}
     <section id="Product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>

        <div className="pro_container">
            <div className="pro">
                <img src={imgDeatailsN1} alt="imgDeatailsN1"/>
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
                <img src={imgDeatailsN2} alt="imgDeatailsN2"/>
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
                <img src={imgDeatailsN3} alt="imgDeatailsN3"/>
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
                <img src={imgDeatailsN4} alt="imgDeatailsN4"/>
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

    {/* form */}
    <Form />
    
    </>
  )
}
