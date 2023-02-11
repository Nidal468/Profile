import {useState} from 'react';
import nav from '/styles/nav.module.css';

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
