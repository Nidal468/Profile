import {useState} from 'react';
import {nav, load} from '/styles/style';

export function Nav(){
	const [isMenu, setIsMenu] = useState(false);

	return(
		<nav className={nav.body}>
			<img/><span className={isMenu? nav.close:nav.menu} onClick={() => setIsMenu(current =>! current)}></span>
			<div className={nav.menu_body} style={{display: isMenu? "":"none"}}>
			
			</div>
		</nav>
	)
}
export function Loading(props) {
	return(
   <div className={load.body} style={{display : props.display}}>
		 <div className={load.box}>
			 <div className={load.section} style={{transform: 'rotate(90deg)'}}>
			 <span className={load.first}></span>
			 <span className={load.second}></span>
				 </div>
			 <div className={load.section} style={{transform: 'rotate(0deg)'}}>
			 <span className={load.third}></span>
			 <span className={load.fourth}></span>
				 </div>
			 <div className={load.section} style={{transform: 'rotate(45deg)'}}>
			 <span className={load.fifth}></span>
			 <span className={load.sixth}></span>
				 </div>
			 <div className={load.section} style={{transform: 'rotate(135deg)'}}>
			 <span className={load.seventh}></span>
			 <span className={load.eighth}></span>
				 </div>
			 <h1>S</h1>
		 </div>
	 </div>
		) 
}

