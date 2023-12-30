import react from "react";
import Card from "./card";
const Section3 = () => {
  return (
    <>
      <section id="khatam">
        <div className="last">
          <h1>Innovative Knowledge graphs</h1>
          <p>
            w you to efficiently gain insights and extract information from
            research papers. Whether you're conducting interdisciplinary
            research or focusing on a specific field, our tool will
            revolutionize the way you work.
          </p>
        </div>
        <div className="huzaifa">
          <Card
            title="Interactive exploration"
            text="
          Our interactive knowledge graphs allow you to explore the connections between different concepts in a research paper in a visual and intuitive way. This feature enhances your understanding and makes your research process more engaging"
          />
          <Card
            title="Custom Graphs from your pdfs"
            text="
          You can create custom knowledge graphs from your own PDFs, making our tool perfect for interdisciplinary research. This feature allows you to visualize the connections between different concepts in your own research papers."
          />
          <Card
            title=" Adjustable clustering"
            text=" Our fully customizable clustering allows you to change the way you group related papers together, enabling you to explore a topic in as depth or breadth as you require.
          Features bg"
          />
        </div>
        <div className="container my-4">
          <h1> Stay updated with Graff!</h1>
          <p>
            Sign up for our newsletter, and you'll be the first to know about
            our closed beta test!
          </p>
          <div>
            <input className="mx-3" type={"email"} value="Your email.." />
            <button className="mx-2">Subscribe</button>
          </div>
          <p className="my-2">
            (No Spam, I promise,You can Unsubscribe at any time.)
          </p>
        </div>
      </section>
    </>
  );
};
export default Section3;
