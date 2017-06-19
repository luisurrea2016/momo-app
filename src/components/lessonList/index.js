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
          {
            this.lesssons.map(lesson =>
              <Link activeClassName={style.active} href={`/lesson/${lesson.name}`}>{lesson.label}</Link>
            )
          }
        </nav>
      </div>
    );
  }
}
