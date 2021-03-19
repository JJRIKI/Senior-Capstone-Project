Create TABLE tableName (
	event_id int AUTO_INCREMENT,
	eventName varchar(80),
	eventStart smalldatetime, 
	eventEnd smalldatetime,
	is_complete NUMBER(1),
	PRIMARY KEY (event_id)

);
