# EPIC BLOG INSTRUCTIONS

NOTE: this site be on what ever you want - but think of something for CRUD - blog/forum/online-store/etc
1. 2 separate folders - one for the front end and the other for back end (call folders UI and API)
2. in /API/ make a class called DataRepository - define a list in a field/property in this class (this represents your database)
     - add to DI container and inject into API endpoints (you read/update data in this class from your endpoints)
3. in /API/ add some CRUD API endpoints (HINT: use your DataRepository to create/read/update/delete data)
4. in /UI/ add CRUD pages (HINT: you'll need to call your API endpoints)
5. in /UI/ - the UI should be responsive and all pages should look consistent (the header and footer needs to be the same or very similar across the front end application)
6. in /API/ - make middleware to log the IP address of the client using ILogger<T> (HINT: you can inject it via DI)
7. (EXTRA /API/) open/install postman - test out your API endpoints from postman
8. (EXTRA /API/+ SWAG) add swagger to your minimal API project (generates API interactive documentation and serves it at <ApiBaseUrl>/swagger)
9. (EXTRA /UI/) store the "read" calls of the APIs into localstorage 
9.5 (EXTRA /UI/) when the user "disconnects" from the internet, show the data that is stored in localstorage

NOTE:
- you can serve/host your front-end application via the live server extension in VsCode
- you can run your API via F5 in VisualStudio or dotnet run command
- you should use Git
- you should be HYPE