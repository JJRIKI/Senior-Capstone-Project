'use strict';

// var calendarEl = document.getElementById('calendar');
// let calendar = new Calendar(calendarEl, {
//     plugins: [ timeGridPlugin ],
//     initialView: 'timeGridWeek'
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         plugins: [ timeGridPlugin ],
//         initialView: 'timeGridWeek'
//     });
//     calendar.render();
//   });

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'PST',
        initialView: 'timeGridWeek',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
    },
    events: './events.json'

    });

        calendar.render();
    });

    

    const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
    super(props);
    this.state = { liked: false };
  }

    render() {
        if (this.state.liked) {
        return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
