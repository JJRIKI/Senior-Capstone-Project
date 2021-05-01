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
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'nimble'
// });
// $(document).ready(()=>{
//   $('#my-draggable').draggable();
// });




document.addEventListener('DOMContentLoaded', function() {
  // Backlog Draggable functionality

  // var ThirdPartyDraggable = FullCalendar.ThirdPartyDraggable;  
  // var interactionPlugin =  new FullCalandar.interactionPlugin;
  
  // let containerEl = document.getElementById('backlog');
  // var backlog = document.getElementById('backlog');
   
  // let drake = dragula({
  //   containers: [ containerEl ],
  //   copy: true
  // });

  // new ThirdPartyDraggable(containerEl, {
  //   itemSelector: '.my-item',
  //   mirrorSelector: '.gu-mirror', // the dragging element that dragula renders
  //   eventData: function(eventEl) {
  //     return {
  //       title: eventEl.innerText
  //     };
  //   }
  // });

    // connection.query("SELECT * FROM Backlog", function (err, result2, fields) {
    //   if (err) throw err;
    //   console.log(result2);
    //   return result2;
    // });

    // new Draggable(backlog,{
    //   itemSelector: '.item-class',
    //   eventData: function(eventEl){
    //     return{
    //       title: eventEl.innerText
    //     };
    //   }
    // });

    var calendarEl = document.getElementById('calendar');


 

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'PST',
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'addEventButton removeEventButton',
        right: 'timeGridWeek,timeGridDay'
      },
      editable: true,
      droppable: true,
      events: 'events.json',
      customButtons: {
        addEventButton: {
          text: 'add event...',
          click: function() {
            var id, allDay, timeStr, titleStr, datestr, allDaystr;
            titleStr = prompt('Enter a title');
            id = titleStr;
            datestr = prompt('Enter a date in YYYY-MM-DD format');
            allDaystr = prompt('Is your event all day?');
            if(allDaystr === 'yes') {
              allDay = true;
              timeStr = '00:00'
            }
            else {
              allDay = false;
              timeStr = prompt('Enter a time hour:min');
            }
            var date = new Date(datestr + 'T' + timeStr + ':00');
            if (!isNaN(date.valueOf())) { // valid?
              calendar.addEvent({
                id: id,
                title: titleStr,
                start: date,
                allDay: allDay
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        },
        removeEventButton: {
          text: 'remove event...',
          click: function() {
            var id = prompt('Type in the event you want to remove');
            var re = calendar.getEventById(id);
            if(re !== 'null') {
              re.remove();
              alert('We attempted to remove your event');
            }
            else {
              alert('No event with that ID');
            }
          }
        }
      }
    });



    calendar.render();

    // new Draggable(backlog);
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