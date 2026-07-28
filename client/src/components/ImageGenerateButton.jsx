import {
  Sparkles
} from "lucide-react";

import "./ImageGenerateButton.css";


export default function ImageGenerateButton({
  loading,
  onClick,
  text,
  disabled
}){

return (

<button

className="generate-image-btn"

disabled={loading || disabled}

onClick={onClick}

>

<Sparkles size={20}/>

{

loading

?

"Creating..."

:

text || "Generate AI Image"

}

</button>

);

}