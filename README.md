# RESTFUL-API
This repository contains sample source  on how to make a RESTful POST & GET call from a Panther Web application. Data is returned to JSP in JSON format

# Pre-Requisite:
  * Panther Servlet/Apache
  * Panther Web ini file for thed application

# Contents of the demo:
  * Demo.jsp
  * datatabl.js
  * dataTables.editor.js
  * dataTables.editor.min.js
  * editabl.js
  * soap_test
  * soap_test.html
  
# Demo.jsp
The "Customer Details" button returns bootstrap data tables based on the JavaScript function in datatabl.js (involves datables editor libraries).

# Datatabl.js
Contains AJAXcalls for GET, PUT, DELETE and POST to the Panther servlet based on the button clicks for each REST call method.

# soap_test
Panther client screen containing JPL code which callsthe Java class called "Json Utils". It also managers  the REST calls and performs their respective operations.

# soap_test.html
This has raw Multi Line Text field which returns the JSON formatted response  back to the client.

Video Tutorial: https://www.youtube.com/watch?v=l_tvjs7N83w  contains details of the demo.

For further queries: support@prolifics.com
