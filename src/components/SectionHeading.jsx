import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SectionHeading({ kicker, title, link, to = '/' }) {
  return <div className="sectiontitle"><div><span className="eyebrow">{kicker}</span><h2>{title}</h2></div>{link && <Link className="textlink" to={to}>{link}<ArrowRight size={16}/></Link>}</div>;
}
