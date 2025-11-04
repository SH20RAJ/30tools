"use client";

import { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <blockquote 
        className="instagram-media" 
        data-instgrm-permalink="https://www.instagram.com/p/DP54XyukaCD/?img_index=1" 
        data-instgrm-version="14" 
        style={{ background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'calc(100% - 2px)'}}>
    </blockquote>
  );
};

export default InstagramEmbed;