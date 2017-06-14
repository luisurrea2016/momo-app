import { h, Component } from 'preact';
import style from './style';

import Lesson from '../../components/lesson';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>Chinese Lessons Apps</p>
				<Lesson name='Foo'/>
			</div>			
		);
	}
}
