import "./testimonials.scss";
import avatar1 from "../../assets/avataaars (1).png";
import avatar2 from "../../assets/avataaars (2).png";
import avatar3 from "../../assets/avataaars (3).png";
import upwork_img from "../../assets/upwork.png";


export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Upwork Client",
      img: avatar1,
      icon: upwork_img,
      desc: "He is skilled and always ready to work",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Upwork Client",
      img: avatar2,
      icon: upwork_img,
      desc: "Tyrel is diligent and enthusiastic about developing software in this area of work!",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "Upwork Client",
      img: avatar3,
      icon: upwork_img,
      desc: "Great work Tyrel. Thank you for completing the A.I. writing project.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <a href="https://www.upwork.com/freelancers/~01c7e04a899e99282b">
                <img className="right" src={d.icon} alt="" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
