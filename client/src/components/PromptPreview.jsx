import {
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

import { useState } from "react";

export default function PromptPreview({

generatedPrompt,

loading

}){

const[copied,setCopied]=useState(false);

const copyPrompt=()=>{

navigator.clipboard.writeText(generatedPrompt);

setCopied(true);

setTimeout(()=>{

setCopied(false);

},2000);

};

return(

<div className="prompt-preview">

<div className="preview-header">

<div className="title">

<Sparkles size={20}/>

<h2>AI Enhanced Prompt</h2>

</div>

<button

className="copy-btn"

onClick={copyPrompt}

disabled={!generatedPrompt}

>

{

copied

?

<>

<Check size={18}/>

Copied

</>

:

<>

<Copy size={18}/>

Copy

</>

}

</button>

</div>

{

loading

?

<div className="loading-box">

<div className="loader"></div>

<h3>Enhancing Prompt...</h3>

<p>

AI is creating a professional image prompt.

</p>

</div>

:

generatedPrompt

?

<div className="preview-box">

<textarea

readOnly

rows={14}

value={generatedPrompt}

/>

</div>

:

<div className="empty-preview">

<h3>

No Prompt Generated

</h3>

<p>

Fill the form and click

<strong>

 Generate AI Prompt

</strong>

to see the enhanced prompt.

</p>

</div>

}

</div>

)

}