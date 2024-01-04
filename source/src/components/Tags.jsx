import React from "react";
import { Link } from "react-router-dom";

export default function Tags() {
  return (
    <div className="nav tag-cloud">
      <Link to="/blog-post-2">Design</Link>
      <Link to="/blog-post-4">Development</Link>
      <Link to="/blog-post-1">Travel</Link>
      <Link to="/blog-post-5">Web Design</Link>
      <Link to="/blog-post-2">Marketing</Link>
      <Link to="/blog-post-3">Research</Link>
      <Link to="/blog-post-6">Managment</Link>
    </div>
  );
}
