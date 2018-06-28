import React from "react";
import Image4 from "./desktop-tablet-laptop.jpg";
const RecycleEwaste = () => (
  <div>
    <h2 className="Recycleable">Recycleable E-Wastes</h2>
    <p className="Recycleable">
      Desktop, laptop and tablet computers and batteries
    </p>
    <img className="contact-image" src={Image4} />
    <p className="Recycleable"> Mobile phones and mobile phone batteries</p>
    <img className="contact-image" src={Image4} />
    <p className="Recycleable">
      Peripherals and accessories such as keyboards, modems, monitors, computer
      mice, docking stations, hard disk drives, printed circuit boards, battery
    </p>
    <img className="contact-image" src={Image4} />
    <p className="Recycleable">
      TVs, fridges, air conditioners, washing machines, rice cookers, microwave
      and toaster ovens, electric kettles, food processors and blenders,
      electric fans, DVD/video/music players, radios, hi-fis, vacuum cleaners,
      etc.
    </p>
    <img className="contact-image" src={Image4} />
  </div>
);

export default RecycleEwaste;
