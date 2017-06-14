import { h, Component } from 'preact';
import style from './style';

export default class Lesson extends Component {
    render({ name }) {
        return (
            <div class={style.lesson}>
                <p>My Lesson {name}</p>
            </div>
        );
    }
}
