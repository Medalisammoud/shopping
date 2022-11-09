import React from "react";


import slide1 from "../../assets/Slide1.jpg"
import slide2 from "../../assets/Slide2.jpg"
import slide3 from "../../assets/Slide3.jpg"
import slide4 from "../../assets/Slide4.jpg"


const Slide = () => {
  return (
    
	<div className="container">
		<div className="carousel slide" id="main-carousel" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#main-carousel" data-slide-to="0" className="active"></li>
				<li data-target="#main-carousel" data-slide-to="1"></li>
				<li data-target="#main-carousel" data-slide-to="2"></li>
				<li data-target="#main-carousel" data-slide-to="3"></li>
			</ol>
			
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img className="d-block img-fluid" src={slide1} alt="volleyball" />
				</div>
				<div className="carousel-item">
					<img className="d-block img-fluid"  src={slide2} alt="boxing" />
				</div>
				<div className="carousel-item">
					<img className="d-block img-fluid" src={slide3} alt="sport" />
				</div>
				<div className="carousel-item">
					<img src={slide4} alt="football" className="d-block img-fluid" />
				</div>
			</div>
			
			<a href="#main-carousel" className="carousel-control-prev" data-slide="prev">
				<span className="carousel-control-prev-icon"></span>
				<span className="sr-only" aria-hidden="true">Prev</span>
			</a>
			<a href="#main-carousel" className="carousel-control-next" data-slide="next">
				<span className="carousel-control-next-icon"></span>
				<span className="sr-only" aria-hidden="true">Next</span>
			</a>
		</div>
	</div>
  );
};

export default Slide;
