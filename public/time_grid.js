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
$(document).ready(()=>{
  $('#my-draggable').draggable();
});

function othername() {
  var input = document.getElementById("formGroupBacklogInput").value;
    
    $('#backlog').html('<div class=\'fc-event item-class fc-h-event fc-daygrid-event fc-daygrid-block-event\'><div id=\'my-draggable\' class=\'fc-event-main\'>' + input + '</div></div>');

}


document.addEventListener('DOMContentLoaded', function() {
  var Draggable = FullCalendar.Draggable;  
  
  var calendarEl = document.getElementById('calendar');
  var backlog = document.getElementById('backlog');
    

    // connection.query("SELECT * FROM Backlog", function (err, result2, fields) {
    //   if (err) throw err;
    //   console.log(result2);
    //   return result2;
    // });

    new Draggable(backlog,{
      itemSelector: '.item-class',
      eventData: function(eventEl){
        return{
          title: eventEl.innerText
        };
      }
    });

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'PST',
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      editable: true,
      droppable: true,
      events: 'events.json'
    });



    calendar.render();

    new Draggable(backlog);
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