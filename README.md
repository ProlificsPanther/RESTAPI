# RESTFUL-API
This repository contains sample source  on how to make a RESTful POST & GET call from a Panther Web application. Data is returned to a JSP in JSON format

# Pre-Requisite:
  * Panther Web Application
  * Apache Web Server

# Contents of the demo:
  * Demo.jsp
  * datatabl.js
  * dataTables.editor.js
  * dataTables.editor.min.js
  * editabl.js
  * soap_test
  * soap_test.html
  
# Demo.jsp
This is a JSP that contains a"Customer Details" button. When this button in clicked, it returns bootstrap data tables based on the JavaScript function in datatabl.js.  

# Datatabl.js
Contains AJAX calls for GET, PUT, DELETE and POST to the Panther servlet based on the button clicks for each REST call method.

# soap_test
Panther client screen containing JPL code which calls the Java class  "JsonUtils". It also managers the REST calls and performs their respective operations.

# soap_test.html
Contains raw Multi Line Text field which returns the JSON formatted response  back to the client.

Video Tutorial: https://www.youtube.com/watch?v=l_tvjs7N83w  contains details of the demo.

Need a Panther Web 551 Redhat Image? [Click Here](https://hub.docker.com/r/prolificspanther/panther/)

Contact support@prolifics.com for a 45 day license included.

For further queries: support@prolifics.com
