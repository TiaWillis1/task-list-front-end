
TaskList Front-End Wave 1 Questions

1.	What props does Task have? Where do they come from?
Id, title, and isComplete. The tasks props are coming from the TaskList component when the task component is being called. 

2.	The Task component uses destructuring to read in the props const Task = ({ id, title, isComplete }) => {...
-	How would the code change if {id, title, isComplete} were replaced with props?
The code would change in the sense that everywhere we called id, title, and isComplete we would have to use “props.” In front of the props (ex. “props.title”)

3.	How is the strikethrough style applied when the task title is clicked?
Task.css on line 20 in the class named .tasks__item__toggle—completed, were applying this class to the html in the task.js file when the variable buttonClass is set to true using onClick.

4.	What props does TaskList have? Where do they come from?
TaskList has Tasks as a prop, TaskList is being called in the app.js file.

5.	Where is the function getTaskListJSX called in TaskList?
On line 19
-	How would the code change without this helper function?
Without this helper we would have to tasks.map inside of the ul element.

6.	What component is TASKS passed to in App?
TASKS is passed to the TaskList component in app.
-	How does the component pass TASKS?
TaskList passes TASKS as a prop.
-	What element is the component wrapped in?
The component is wrapped inside of a div element.
