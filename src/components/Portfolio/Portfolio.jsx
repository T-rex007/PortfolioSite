import React, {useEffect,useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { contentPortfolio, designPortfolio, mobilePortfolio, webPortfolio, featuredPortfolio } from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "CV",
      title: "Computer Vision",
    },
    {
      id: "webautomation",
      title: "Web Automation",
    },
    {
      id: "iot",
      title: "IoT",
    },
    {
      id: "robot",
      title: "Robotics",
    },
  ];
  useEffect(() =>{
    switch(selected){
      case"featured":
        setData(featuredPortfolio);
        break;
      case"webautomation":
        setData(webPortfolio);
        break;
      case"CV":
        setData(mobilePortfolio);
        break;
      case"iot":
        setData(designPortfolio);
        break;
      case"robot":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
     }
   }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList 
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        />
        ))}
      </ul>
      <div className="container">
        {data.map((d) =>(<div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>))}
      </div>
    </div>
  );
}
