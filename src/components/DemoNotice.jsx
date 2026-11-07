import React from 'react';
import { ShieldCheck } from 'lucide-react';

/** Reusable disclosure: this project is a frontend demonstration, not an official service. */
export default function DemoNotice({ children = 'Namoyish uchun demo ma’lumot. Haqiqiy davlat xizmatiga murojaat yuborilmaydi.' }) {
  return <aside className="demo-disclosure" role="note"><ShieldCheck size={17}/><span>{children}</span></aside>;
}
