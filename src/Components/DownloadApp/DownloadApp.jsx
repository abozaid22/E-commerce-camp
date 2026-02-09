import { Link } from "react-router-dom";
import vApp from "../../assets/about/1.mp4"

export default function DownloadApp() {
  return (
    <>
        <section id="about_app"  className="section-p1 ">
            <h1>Download Our 
                <Link to="#">App</Link>
            </h1>
            
            <div className="video" >
                <video autoPlay muted loop playsInline src={vApp}></video>
            </div>
        </section>
    </>
  )
}
