import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Momo App</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
					<Link activeClassName={style.active} href="/lessons">Lessons</Link>
					<Link activeClassName={style.active} href="/lesson/foo">Foo</Link>
				</nav>
			</header>
		);
	}
}
