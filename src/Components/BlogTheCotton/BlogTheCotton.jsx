
import { Link } from "react-router-dom"
import imgBlog1 from "../../assets/blog/b1.jpg"
import imgBlog2 from "../../assets/blog/b2.jpg"
import imgBlog3 from "../../assets/blog/b3.jpg"
import imgBlog4 from "../../assets/blog/b4.jpg"
import imgBlog5 from "../../assets/blog/b5.jpg"
import imgBlog6 from "../../assets/blog/b6.jpg"
import imgBlog7 from "../../assets/blog/b7.jpg"
import Form from "../Form/Form"

export default function BlogTheCotton() {
  return (
    <>
    {/*  Start Section Blog  */}

    <section id="blog">
        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog1} alt="imgBlog1"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog2} alt="imgBlog2"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog3} alt="imgBlog3"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog3} alt="imgBlog3"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog4} alt="imgBlog4"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog5} alt="imgBlog5"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog6} alt="imgBlog6"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>

        <div className="blog-box">
            <div className="blog-imag">
                <img src={imgBlog7} alt="imgBlog7"/>
            </div>

            <div className="blog-details">
                <h4>The Cotton-Jesrey Zip-UP Hoodie</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa fuga laborum velit aut, ut, hic ducimus nesciunt temporibus commodi placeat earum, doloremque deserunt. Aliquam animi explicabo cupiditate optio! Maiores.</p>
                <Link to="#">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
        

    </section>

    {/*  Start Section Pagination  */}
    
    <section id="Pagination" className="section-p1">
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#"><i className="fa-solid fa-arrow-right"></i></Link>
    </section>

    {/* Form */}
    
    <Form />
    </>
  )
}
