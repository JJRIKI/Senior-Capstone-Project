(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';
var fs = require('fs');



// var mysql = require('mysql');
// const fs = require('fs');
// var con = mysql.createConnection({
//   host: "localhost", //TODO docker host server
//   user: "root",
//   password: "root",
//   database: "nimble"
// });

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

              var newEventString = ', { "id": "' + id + '", "title": "' + titleStr + '", "start": "' + date + '"} ';
              console.log(newEventString);

              var jsonData = JSON.parse(fs.readFileSync('./public/events.json', 'utf8'));
              var data = JSON.stringify(jsonData);
              data = data.slice(1,-1);
              var halp = '[' + data + newEventString + ']';
              console.log(halp);

              //alert('Great. Now, update your database...');
              /*$.getScript("pshEvent.js", function() {
                con.connect(function(err) {
                  if (err) throw err;
                    con.query("INSERT INTO Events (id, title, start) VALUES (\'" + id + "\',  \'" + title + "\', \'" + start + "\')", function (err, result, fields) {
                    if (err) throw err;
                    });
                });
                alert("Script loaded but not necessarily executed.");
              });*/
              
              //con.query("INSERT INTO Events (id, title, start) VALUES (\'" + id + "\',  \'" + title + "\', \'" + start + "\')");
              // con.connect(function(err) {
              //   if (err) throw err;
              //   con.query("INSERT INTO Events (id, title, start) VALUES (\'" + id + "\',  \'" + title + "\', \'" + start + "\')", function (err, result, fields) {
              //     if (err) throw err;

              //   });
              // });
            
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

              //con.query("DELETE FROM Events WHERE id = " +id);
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
},{"fs":1}]},{},[2]);
