
import { Link } from 'react-router-dom'
import img1 from '../../assets/products/f1.jpg'
import img2 from '../../assets/products/f2.jpg'
import img3 from '../../assets/products/f3.jpg'

export default function CartProd() {
  return (
    <>
    <section id="cart" className="section-p1 tableDesign" >
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Imag</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>SubTotal</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><Link to="#"><i className="far fa-times-circle"></i></Link></td>
                    <td><img src={img1} alt="img1"/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>

                <tr>
                    <td><Link to="#"><i className="far fa-times-circle"></i></Link></td>
                    <td><img src={img2} alt="img2"/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>
                
                <tr>
                    <td><Link to="#"><i className="far fa-times-circle"></i></Link></td>
                    <td><img src={img3} alt="img3"/></td>
                    <td>Cartoon Astrount T-Shirt</td>
                    <td>$118.19</td>
                    <td><input type="number" value='1'/></td>
                    <td>$118.19</td>

                </tr>

            </tbody>
        </table>

    </section>
    </>
  )
}
