import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";
const Main = () => {
  return (
    <div className="main">
      {data.map((item, index) => {
        return (
          <div className="card">
            <Card
              {...item}
              key={index}
              // id={id} title={title} date={date} desc={desc} img={image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
