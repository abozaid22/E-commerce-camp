
import imgPeople1 from './../../assets/people/1.png';
import imgPeople2 from './../../assets/people/2.png';
import imgPeople3 from './../../assets/people/3.png';

export default function FormContact() {
  return (
    <>
    <section id="form_deatails" className="section-p1">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We Love To Hear From You</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10"  placeholder="TYour Message"></textarea>
            <button type='button' className="normal">Submit</button>
        </form>

        <div className="people">
            <div>
                <img src={imgPeople1} alt="imgPeople1"/>
                <p>
                    <span>John Doe</span>
                    <br/> Senior Marketing Manager
                    <br/> Phone: +0001230007788
                    <br/> Email: Concate@gmail.com
                </p>
            </div>

            <div>
                <img src={imgPeople2} alt="imgPeople2"/>
                <p>
                    <span>Wiliam Smith</span>
                    <br/> Senior Marketing Manager
                    <br/> Phone: +0001230007788
                    <br/> Email: Concate@gmail.com
                </p>
            </div>

            <div>
                <img src={imgPeople3} alt="imgPeople3"/>
                <p>
                    <span>Emama Stone</span>
                    <br/> Senior Marketing Manager
                    <br/> Phone: +0001230007788
                    <br/> Email: Concate@gmail.com
                </p>
            </div>
        </div>
        
     </section>
    </>
  )
}
