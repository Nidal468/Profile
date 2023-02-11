import home from '../styles/Home.module.css'
import data from '../data/data.json';
import projects from '../data/project.json';
import {Nav} from './components/basic';

export default function Home() {
  return (
    <div className={home. 
		container}>
			<Nav/>
			<div className={home.home_bg}>
				<span id={home.left}>
					<h1>Abu Saleh</h1>
					<h2>I mainly work as a Frontend developer</h2>
					<p>I like to build clean and scalable frontend products which will provide great user experience</p>
					<ul>
						<li><p>Skilled in making clean code and designing UI</p></li>
						<li><p>Fluent in English and fast response time for a better client experience</p></li>
					</ul>
				</span>
				<span id={home.right}>
					
				</span>
				<span id={home.img}><img/></span>
			</div>
			<div className={home.about}>
				<div className={home.point}><h4>01.</h4><h3>About me</h3><span></span></div>
				<p>{data[0].about_me}<a style={{color:'#32CD30'}} href="#">Node JS.</a>{data[0].about_me_2nd}<a style={{color:'#32CD30'}} href="#">Java Script </a>, <a style={{color:'#32CD30'}} href="#">React JS </a>, <a style={{color:'#32CD30'}} href="#">Next JS </a> and many more and after that I started building different types of projects then at 2021 I joined fiverr and posted my first gig. </p>
			</div>
			<div className={home.skill}>
					<div className={home.point}><h4>02.</h4><h3>Languages</h3><span></span></div>
					<ul>
						<li><a>Java Script(ES6+)</a></li>
						<li><a>React JS</a></li>
						<li><a>Next JS</a></li>
						<li><a>Wordpress</a></li>
						<li><a>Node JS</a></li>
						<li><a>Typescript</a></li>
					</ul>
				</div>
			<div className={home.project}>
				<div className={home.point}><h4>03.</h4><h3>Projects</h3><span></span>
				</div>
				{projects.map(project => {
			return(
				<div className={home.file} key={project.id}>
					<div className={home.icon}>
						<i className="fi fi-rr-folder" style={{color:'#FDA500'}}></i><span><i className="fi fi-brands-github"></i><i className="fi fi-rr-link"></i></span></div>
					<h2>{project.title}</h2>
					<p>{project.info}</p>
					<div className={home.used}>
						<span>{project.skill_1}</span><span>{project.skill_2}</span><span>{project.skill_3}</span><span>{project.skill_4}</span>
					</div>
				</div>
				)
				})}
			</div>
			<footer className={home.footer}>
				<p></p>
				<img/>
			</footer>
		</div>
  )
}
