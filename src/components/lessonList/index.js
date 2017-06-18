import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';

export default class LessonListNav extends Component {

    lesssons = [
        {
            name: 'foo',
            label: 'foo',
        },
        {
            name: 'blah',
            label: 'blah',
        },
        {
            name: 'ta',
            label: 'ta',
        },
        {
            name: 'mu',
            label: 'mu',
        },
    ];
    render() {
        return (
            <div class={style.lessonListNav}>
                <h1>Please select your lesson</h1>
                <nav>
                    <Link activeClassName={style.active} href="/lesson/foo">Foo</Link>
                    <Link activeClassName={style.active} href="/lesson/foo">Bar</Link>
                    <Link activeClassName={style.active} href="/lesson/foo">Mo</Link>
                    <Link activeClassName={style.active} href="/lesson/foo">Blah</Link>

                    {/*{
                        this.lesssons.forEach(lesson => {
                            console.log(lesson);
                            const href = `/lesson/${lesson.name}`;
                            <Link activeClassName={style.active} href> lesson.label</Link>
                        })
                    }*/}
                </nav>
            </div>
        );
    }
}
