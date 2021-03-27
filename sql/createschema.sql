CREATE TABLE Events (
	event_id varchar(80),
	eventTitle varchar(80),
	eventStart datetime, 
	eventEnd datetime,
	is_complete BOOL,
	PRIMARY KEY (event_id)

);
