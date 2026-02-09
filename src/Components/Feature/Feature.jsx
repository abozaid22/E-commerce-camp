
import imgf1 from '../../assets/features/f1.png';
import imgf2 from '../../assets/features/f2.png';
import imgf3 from '../../assets/features/f3.png';
import imgf4 from '../../assets/features/f4.png';
import imgf5 from '../../assets/features/f5.png';
import imgf6 from '../../assets/features/f6.png';

export default function Feature() {
  return (
    <>
    <section id="Features" class="section-p1">
        <div class="fe-box">
            <img src={imgf1} alt="imgf1"/>
            <h6>Free Shiping</h6>
        </div>

        <div class="fe-box">
            <img src={imgf2} alt="imgf2"/>
            <h6>Online Order</h6>
        </div>

        <div class="fe-box">
            <img src={imgf3} alt="imgf3"/>
            <h6>Save Money</h6>
        </div>

        <div class="fe-box">
            <img src={imgf4} alt="imgf4"/>
            <h6>Promotions</h6>
        </div>

        <div class="fe-box">
            <img src={imgf5} alt="imgf5"/>
            <h6>Happy Sall</h6>
        </div>

        <div class="fe-box">
            <img src={imgf6} alt="imgf6"/>
            <h6>F24/7 Support</h6>
        </div>

    </section>
 
    </>
  )
}
