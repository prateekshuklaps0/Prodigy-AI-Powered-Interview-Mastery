import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Clipboard } from 'lucide';
const ResponseBox = () => {
  const [textToCopy, setTextToCopy] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    },500);
  };

  const handleTextareaInput = (e:any) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className='border-2 w-1/2 m-auto text-right'>
      <div className='  w-8 cursor-pointer'>
        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
      <i className="fa-regular fa-clipboard text-zinc-200"></i>
        </CopyToClipboard>
      </div>
        {isCopied ? <span style={{ color: 'green' }}>Copied!</span> : null}
      <div>
      <textarea
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
        onInput={handleTextareaInput}
        className="text-left border-2 outline-none min-h-19 h-auto w-4/5 text-zinc-100 resize-y"
        style={{ overflowX: 'hidden', overflowY: 'hidden',backgroundColor:"#7b2cbf" }}
      />
      <br />
        {/* <button className="border-2 p-2 pl-10 pr-10 text-white font-medium rounded-md bg-indigo-400 hover:bg-indigo-500">Copy to Clipboard</button> */}
    </div>
    </div>
  );
};

export default ResponseBox;
