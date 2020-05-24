// How to create a contact form:
// Start from base empty express app with body parser
// Set up your view renderer (ejs)
// Set up your views and partials (page-open and page-close)
// Set up a new view for the contact page and a new route handler
// Add a form to the contact page with a name field, email field, and text area (comment) field.
// Add a post route for the contact page. It should render the contact page again, but should pass some context to the view that says the form was submitted
// Add some ejs logic to conditionally render your contact form. If it has been submitted, you should show a thank you card.