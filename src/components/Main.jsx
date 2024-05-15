import "./Main.css";
import flipkart from "../images/flipkart.png";
import amazon from "../images/amazon.png";
import main_image from "../images/main-image.png";

function Main() {
    return (
        <div className="main-container">
            <div className="main-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>

                <div className="main-btn">
                    <button>Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="shopping-icons">
                        <img src={flipkart} alt="Flipkart" />
                        <img src={amazon} alt="Amazon" />
                    </div>
                </div>

            </div>
            <div className="main-image">
                <img src={main_image} alt="Main-Image" />
            </div>
        </div>
    );
}
export default Main;