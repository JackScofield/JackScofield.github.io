import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");
  
    useEffect(() => {
      fetch(`/posts/${slug}.md`)
        .then((res) => res.text())
        .then(setContent);
    }, [slug]);
  
    return (
      <div className="markdown-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    );
}


export default BlogPost;