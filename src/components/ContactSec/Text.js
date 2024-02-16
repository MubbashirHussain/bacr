import ct1 from './bacr certificates/1.png'
import ct2 from './bacr certificates/12.jpg'
import ct3 from './bacr certificates/1.png'
import ct5 from './bacr certificates/10.jpg'
import ct4 from './bacr certificates/111.jpg'
import './Text.css'
function Text() {
    return (
        <div id="carouselExampleInterval" className="carousel slide certi my-5" style={{ background: "none" }} data-bs-ride="carousel">
            <div className="carousel-inner" style={{ background: "none" }}>
                <div className="carousel-item active" data-bs-interval="10000" style={{ background: "none" }}>
                    <img src="https://images.squarespace-cdn.com/content/v1/5e0e71d3e14f1117f09e6270/1586465160611-OZSCG1CREEPZ5PEIUAMX/Will+Testimonial.png" className="d-block w-100" alt="..." />
                    {/* <h1>HASSANSA KASDHELR</h1> */}
                </div>
                <div className="carousel-item" data-bs-interval="20000">
                    <img src="https://images.squarespace-cdn.com/content/v1/5e0e71d3e14f1117f09e6270/1586465160611-OZSCG1CREEPZ5PEIUAMX/Will+Testimonial.png" className="d-block w-100" alt="..." />
                    {/* <h1>HASSANSA 646444</h1> */}
                </div>
                <div className="carousel-item">
                    <img src="https://images.squarespace-cdn.com/content/v1/5e0e71d3e14f1117f09e6270/1586465160611-OZSCG1CREEPZ5PEIUAMX/Will+Testimonial.png" className="d-block w-100" alt="..." />
                    {/* <h1>AZIA SDWUEWI0 646444</h1> */}

                </div>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Text;