# SFZC_event_interface
>Admin interface to post, edit and delete events on SFZC calendar 

This is a full-stack MVC-style project providing an admin view of the events in the San Francisco Zen Center calendar. 
The backend is built with Node JS and has a PostgreSQL database, the interface is made pretty with Bootstrap while Ajax calls are handled by Axios. 

Users can:

* view all activities in a list view
* edit and delete existing activities in the database
* add new activites to the database
* fill in details with a pre-populated form and options

![](sfzc_admin-interface.jpg)
> [Demo here](http://sfzc-admin-interface.surge.sh/)
(beware: first time loading is slow)

## Next Steps 

* Connect the admin interface to the calendar view
* Automatically populate recurring events
* Filter list view by center, event type and date
