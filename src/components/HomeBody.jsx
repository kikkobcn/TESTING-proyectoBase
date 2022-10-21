import img1 from '../../src/imagenes/imgCar1.jpg';
import img2 from '../../src/imagenes/imgCar2.jpg';
import img3 from '../../src/imagenes/imgCar3.jpg';
import Carousel  from 'react-bootstrap/Carousel';

export const HomeBody = () => {
        return (
            <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-70" src={img1} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-70" src={img2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                    
                <Carousel.Item>
                    <img className="d-block w-70" src={img3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}




