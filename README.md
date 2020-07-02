# ClientServer
This repository demonstrates how to call a  3rd Party REST service from a Panther Desktop Client.

Calling a Rest Service from a Panther Desktop Client

This sample demonstrates how to call a REST Service (workclockapi.com) from a Panther Desktop Client (prodev). This REST service will return the current date/time in JSON format for any registered time zone.

1.	Extract the contents of the zip file to your Test folder; example C:\Temp

2.	Set the below in your Panther environment; JAVA_HOME, SMJAVALIBRARY & CLASSPATH

    a)	Configure in your prol5w32.ini file

      JAVA_HOME= C:\Program Files\Java\jdk1.8.0_162 (use the latest)

      CLASSPATH=C:\Temp\RestDemo\pro5.jar;C:\Temp\RestDemo\java- json.jar;C:\Temp\RestDemo\Test\bin
  
     b)	Configure in your smvars, then convert to binary using var2bin utility

      SMJAVALIBRARY= C:\Program Files\Java\jdk1.8.0_162\jre\bin\server\jvm.dll
  
3. Please create a folder called “logger” (C:\logger). This file writes requests/responses data to these logs.

4. The zip file contains a test screen called “timezone”. From your Panther development environment, add the screen to your Panther library and test it by entering "est" or "pst" in the topmost field, then TAB out of it.


Video Tutorial: https://www.youtube.com/watch?v=87rFIvrWd6Y

Need a Panther Web 552 Redhat Image? [Click Here](https://hub.docker.com/r/prolificspanther/pantherweb "Named link title") 

How to set up a Panther Servlet Web Application? [Click Here](https://github.com/ProlificsPanther/PantherWeb/releases "Named link title")

Read our Documentation [here](https://docs.prolifics.com)
