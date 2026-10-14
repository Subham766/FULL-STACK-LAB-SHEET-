LAB SHEET 7 - RUN IN VS CODE (MYSQL)

REQUIREMENTS
1. Install MySQL Server and make sure the MySQL service is running.
2. Install VS Code.
3. In VS Code Extensions, install a MySQL-compatible extension such as SQLTools
   plus SQLTools MySQL/MariaDB driver, or the MySQL extension you use in class.
4. Connect the extension to your local MySQL server (usually host 127.0.0.1,
   port 3306, your MySQL username and password).

RUN
1. Extract the ZIP.
2. Open the extracted LabSheet7-VSCode folder in VS Code.
3. Open LabSheet7.sql.
4. Connect/select your MySQL connection in the SQL extension.
5. Execute the script or select a section and use the extension's Run Query command.
6. Verify setup with: SELECT * FROM students; (should return 8 initial rows).

IMPORTANT
- This is SQL, not a Node.js/Python program. Do not run it with `node` or `python`.
- SQL needs a running database server; VS Code alone does not execute SQL.
- The script is written for MySQL syntax.
- The setup section drops and recreates these lab tables each time you run it.
  This resets their data. If you want to preserve your own changes, run only the
  specific query section rather than the entire file.
- The intentional age-15 test is commented out so the main script can complete.
  Uncomment and run it separately to see the CHECK constraint error.
- Run G5 (ROLLBACK) and inspect the mark before running G6 (COMMIT), since G6
  permanently changes the mark for student 101/course 201.
