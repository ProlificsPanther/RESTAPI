# Web
Panther screen is populated with JSON data from a Web Service.

# Prerequisite:
  * Panther Web Application/Panther 5.5*
  * Apache Web Server

# Contents of the demo:
  * demo.jsp -    Customer Details" button is clicked on, a Bootstrap datatable is returned (JS function in datatabl.js).
  * datatabl.js - AJAX calls for GET, PUT, DELETE and POST to the Panther web application.
  * dataTables.editor.js , dataTables.editor.min.js  -The latest files can be downloaded from the link (https://editor.datatables.net/download/) 
    you need to have these for the datatable actions, using the 15 day trial version.  
  * editable.css -CSS for dataTables
  * customer - Panther client screen containing JPL code which calls the Java class  "JsonUtils" (You can find this Java class and the required external jars with
    Panther552/samples/auth0/jsonUtils). It also manages the REST calls and performs their respective operations.
  * customer.html - Contains a raw Multi Line Text field tag, which has the JSON formatted data.
  * videobiz (jdb database) - This database comes with our panther product (/SMBASE/samples/vidstore) , this is used as the working database for CRUD operations.
  * connect.jpl - Assign SMINITJPL to  connect.jpl in  the ini file. It contains information to connect to the database.

# Video Tutorial
   * https://www.youtube.com/watch?v=l_tvjs7N83w contains details of the demo

How to configure your Panther Servlet Web Application? [Click Here](https://github.com/ProlificsPanther/PantherWeb/releases)
