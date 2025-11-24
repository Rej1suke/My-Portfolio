import React from 'react';


const About = () =>  {
return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
<div className="lg:col-span-2 space-y-6">
<h2 className="text-3xl font-bold">About Me</h2>


<p className="text-slate-300">I am currently a Full-Stack Developer focused on building scalable and accessible web applications. I enjoy working across the stack but have a particular passion for frontend engineering — crafting interfaces that are fast, accessible, and delightful to use.</p>


<p className="text-slate-300">My journey into web development began with small personal projects and gradually grew as I contributed to open-source and built production apps. I've completed coursework in computer science fundamentals and regularly study modern frontend patterns and performance optimization.</p>


<p className="text-slate-300">My development philosophy centers on clarity: clean code, clear UX, and predictable behavior. I believe in testing assumptions early, iterating quickly, and keeping performance and accessibility top-of-mind.</p>


<p className="text-slate-300">Outside of coding, I enjoy photography, climbing, and exploring new coffee shops — things that keep my creative energy flowing and help me approach problems from different perspectives.</p>
</div>


<aside className="p-6 bg-white/5 rounded-md">
<h3 className="font-semibold">Profile</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li><strong>Location:</strong> Iloilo City, Philippines</li>
<li><strong>Education:</strong> BS Computer Science</li>
<li><strong>Availability:</strong> Open to opportunities</li>
<li><strong>Contact:</strong> reggiemanero25@gmail.com</li>
</ul>
</aside>
</div>
);
}

export default About;