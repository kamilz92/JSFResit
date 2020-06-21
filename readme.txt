http://files.noroff.no/lc/feu/courses/jsframeworks/caresit.html
###
Level 1 Process
https://api.pokemontcg.io/v1/cards?setCode=base1

Given the following API, please create a functional website:

Layout
Create a header for the website. It should have a menu, the menu should have three links inside it. Home, grass and contact.
The home link should take you to the home page.
The grass link should take you to a grass page where we will only display grass type Pokémon.
The contact link should take you to the contact us page.
Please create a footer section for this website.
Home page
It should display all images of cards from the Pokémon API.
There should a button at the bottom of each card which should take it to a Pokémon specific page.
On top of the page please add a search box with a button.
The search criteria should update when a single character is entered in the search box. You should mimic this functionality. (https://twitter.github.io/typeahead.js/examples/)
If you click on one of the items when the search bar drops down, it should take you the Pokémon specific page.
Please create a smart component for the home page and each card, for the homepage, should be a dumb component.
The search area should be in a dumb component and all values should be emitted to its parent page (Smart Home component).
Pokémon Specific page
Please display all information relevant to its card. You will have the image and the name of the Pokémon as an initial display.
Underneath the name of the Pokémon, you are going to have a read more button.
When you click on this read more button it should reveal ALL the information for that specific Pokémon.
You will need to create a dumb component for the read more section.
Grass Type page
On this page you are going to make an API call and use a filter function to only display grass type Pokémon.
This page should mimic the homepage and should make use of the dumb card component that you created.
These cards should also link to the Pokémon specific page.
Contact Page
There should be 4 form elements on this page.
Name (textbox)
Telephone number (textbox)
Query type (drop down) It should have 4 options (Enquiry, Complaint, Compliment, General Message)
The last should be a text area where the user can type a message in.
The name textbox should not be empty.
The telephone textbox should use regex to test for a certain telephone number pattern.
The drop down needs to have one option selected.
The message textbox should not be empty.
When the form is submitted a success message should be displayed and the form should be hidden.
If there are any errors on the form it should not be submitted.
General
You may ONLY make use of React, Angular or Vue.
Please make sure you use smart and dumb components.
All HTML should be semantically correct.
Set up a CSS pre-processor (Less, Sass or Stylus).
Remember to make use of BEM and [] to logically separate your classes.
This app should be styled correctly marks will be deducted for bad design concepts.
Marking Criteria
The candidate has knowledge of industry-relevant JavaScript frameworks, such as Angular and React
The candidate can plan and carry out digital solutions developed with JavaScript frameworks
The candidate can find and apply relevant JavaScript frameworks best suited for solving specific assignments
Submission
Please create a new Git Hub repository called Noroff JSFResit. You will need to commit regularly to this repository.
Please submit the link to your repo.