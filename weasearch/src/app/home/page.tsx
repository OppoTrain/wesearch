import NavBar from "./components/NavBar";
import './home.css';

export default function MyComponent({ params }: { params: { productId: string } }) {
  return (
    <div>
      <NavBar />
      <div className="center-container">
        <h3>Shape your Career in Tech</h3>
        {/* <p>
        We’re on a mission to make tech careers more attainable through free, on-demand mentorship.
        </p> */}
      </div>
    </div>
  );
}
