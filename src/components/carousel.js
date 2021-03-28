import {Carousel} from "react-bootstrap";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ControlledCarousel({jsonData}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}  className="w-75 h-100 m-4 border-light border p-3" fade >
            {jsonData.map(data => {
                if (data.url.endsWith('.jpg')|| data.url.endsWith('.png')){
                return <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={data.hdurl}
                        alt={data.title}
                        width="10vw"
                        height="500vh"
                    />
                    <Carousel.Caption>

                        <p>{data.title}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            }})}

        </Carousel>
    );
}

export default ControlledCarousel;