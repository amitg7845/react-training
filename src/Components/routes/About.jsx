import img1 from "../../../src/Pets-imgs/img1.webp";
import img2 from "../../../src/Pets-imgs/img2.jpg";
import img3 from "../../../src/Pets-imgs/img3.jpg";
import img4 from "../../../src/Pets-imgs/img4.jpg";
import img5 from "../../../src/Pets-imgs/img5.jpg";
import { LazyImage } from "react-lzy-img";
function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>Lazy Loading</p>
      <div className="lazy-img-wrp">
        <LazyImage
          src={img1}
          alt="Description"
          // placeholder="/thumb.jpg"
          width={600}
          height={400}
          onLoad={() => console.log("✅ Lazy image loaded:", img1)}
        />
        <LazyImage
          src={img2}
          alt="Description"
          // placeholder="/thumb.jpg"
          width={600}
          height={400}
          onLoad={() => console.log("✅ Lazy image loaded:", img2)}
        />
        <LazyImage
          src={img3}
          alt="Description"
          // placeholder="/thumb.jpg"
          width={600}
          height={400}
          onLoad={() => console.log("✅ Lazy image loaded:", img3)}
        />
        <LazyImage
          src={img4}
          alt="Description"
          // placeholder="/thumb.jpg"
          width={600}
          height={400}
          onLoad={() => console.log("✅ Lazy image loaded:", img4)}
        />
        <LazyImage
          src={img5}
          alt="Description"
          // placeholder="/thumb.jpg"
          width={600}
          height={400}
          onLoad={() => console.log("✅ Lazy image loaded:", img5)}
        />
      </div>
    </div>
  );
}

export default About;
