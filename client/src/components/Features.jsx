import {
  Bot,
  Zap,
  Download,
  Heart,
  Smartphone,
  Palette
} from "lucide-react";

import "./Features.css";


export default function Features() {

  const features = [
    {
      icon:<Bot />,
      title:"AI Generated Designs"
    },
    {
      icon:<Zap />,
      title:"Generate in Seconds"
    },
    {
      icon:<Download />,
      title:"Download HD Images"
    },
    {
      icon:<Heart />,
      title:"Save Your Designs"
    },
    {
      icon:<Smartphone />,
      title:"Mobile Friendly"
    },
    {
      icon:<Palette />,
      title:"Unlimited Creativity"
    }
  ];


  return (

    <section className="features">

      <h2>
        Why Choose AI Card Generator?
      </h2>


      <div className="feature-grid">

        {
          features.map((item,index)=>(

            <div key={index}>

              {item.icon}

              <span>
                {item.title}
              </span>

            </div>

          ))
        }

      </div>

    </section>

  );
}