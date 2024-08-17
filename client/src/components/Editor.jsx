import React, { useEffect } from 'react'
import Quill from 'quill'

import 'quill/dist/quill.snow.css'

const Editor = () => {
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ];
    useEffect(() => {
        const quillServer = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: toolbarOptions
            },
        })
    })
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <div className="bg-white w-[60vw] mx-auto min-h-[100vh] mt-10 shadow-2xl text-black z-2 p-16" id="editor"></div>
    </div>
  );
}

export default Editor