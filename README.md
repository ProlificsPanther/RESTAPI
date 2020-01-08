# RestfulAPI
Panther screens data is returned in a JSON format using which a data table is created.

# Prerequisite:
  * Panther Web Application/Panther 5.5*
  * Apache Web Server

# Contents of the demo:
  * Demo.jsp
  * datatabl.js
  * dataTables.editor.js
  * dataTables.editor.min.js
  * editable.css
  * customer
  * customer.html
  * videobiz (jdb database)
  * connect.jpl (SMINIT)
  
# Demo.jsp
This JSP file contains a "Customer Details" button, When clicked returns a bootstrap data table based on the JavaScript function in datatabl.js.  

# Datatabl.js
Contains AJAX calls for GET, PUT, DELETE and POST to the Panther servlet.

# dataTables.editor.js & dataTables.editor.min.js
The latest files can be downloaded from the link (https://editor.datatables.net/download/) you need to have these for the dataTable actions.

# editable.css
CSS for dataTables

# customer
Panther client screen containing JPL code which calls the Java class  "JsonUtils" (You can find this Java class and the required external jars with Panther552/samples/auth0/jsonUtils). It also manages the REST calls and performs their respective operations.

# customer.html
Contains a raw Multi Line Text field tag, which has the JSON formatted data.

# videobiz
This database comes with our panther product (/SMBASE/vidstore) , this is used as the working database for CRUD operations.

# connect.jpl
This is SMINIT file in your .ini file which has the connection string jpl to your database.

Video Tutorial: https://www.youtube.com/watch?v=l_tvjs7N83w  contains details of the demo.

Need a Panther Web 552 Redhat Image? [Click Here](https://hub.docker.com/r/prolificspanther/pantherweb)

[Click Here](https://www.prolifics.com/panther-trial-license-request) for a 45 day license.

How to setup a Panther Servlet Web Application? [Click Here](https://github.com/ProlificsPanther/PantherWeb/releases)
