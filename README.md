# Job Application Tracker

## Description
A simple Job Application Tracker where you can manage jobs by marking them as Interview or Rejected. The dashboard updates dynamically, and jobs can be filtered by tabs or deleted. The site is fully responsive for mobile devices.

## Features
- Responsive Dashboard with Total, Interview, and Rejected counts
- Tabs: All / Interview / Rejected
- Minimum 8 meaningful job cards with:
  - companyName, position, location, type, salary, description
  - 2 buttons: Interview, Rejected
- Dynamic status update: Interview / Rejected
- Dashboard counts update automatically
- Tab-wise jobs count display
- Delete job cards functionality
- No Lorem Ipsum text; all text meaningful

## How to Run
1. Clone the repository  
2. Open `index.html` in a browser  
3. Interact with the dashboard and jobs  



### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById → Returns single element by ID  
- getElementsByClassName → Returns all elements with a class  
- querySelector → Returns first element matching a CSS selector  
- querySelectorAll → Returns all elements matching a CSS selector  

### 2. How do you create and insert a new element into the DOM?
```javascript
const div = document.createElement('div');
div.textContent = "Hello World";
document.body.appendChild(div);


3. What is Event Bubbling? And how does it work?

Event triggered on a child element propagates (bubbles) up to parent elements

4. What is Event Delegation in JavaScript? Why is it useful?

Attach an event listener on a parent to handle events on child elements

Useful for dynamic elements and reducing multiple listeners

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → Stops default browser action (like link navigation)

stopPropagation() → Stops event from bubbling up or capturing further