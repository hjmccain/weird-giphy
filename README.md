## Overview
In this code challenge, we will be testing your ability to interpret user requirements, come up with a viable implementation, write code, and communicate the benefits and shortcomings of your solution. We will provide you with the product requirements and a low-fidelity mockup of the user interface for you to use as a guide and starting point. 

While we appreciate a good sense of aesthetic UI design, we won’t be putting much weight on that in our evaluation. We recommend that you keep the design simple and closely resembling the mockup provided. On the other hand, we expect to see a mindful and intuitive user experience. This includes loading indicators, error states, and input validation. We often work in close collaboration with other developers, so we expect to see clean and legible code, organized file structures, common coding patterns, and a clean commit history on github.

## The app
The app you will be asked to develop is a weirdness calculator. You will be required to use the Giphy API to show users several GIFs that range from 0-10 on Giphy’s weirdness scale. Users will be asked to enter a search term and the app will display a matching GIF starting on 0 weirdness. Using a slider, users should be able to then increase the weirdness and receive weirder and weirder results. When a user finds a GIF they like, they can add it to their list of favorite GIFs by pressing the Like button. Once a user selects their 5 favorite GIFs, they will be prompted to see their result telling them how weird they are.

## User story
- I enter a search term and I get one gif returned with a weirdness of 0.
- If I want a weirder gif, I can use a slider to increase the weirdness, up to 10. (I only ever want to see one gif at a time.)
- When I've landed on one that I like, I can "favorite" the gif.
- After I have selected 5 gifs, I want to know my average weirdness rating.

## Requirements
Requirements
●	Use React for the UI
●	Use Redux to manage your app’s state
●	Your commit history should be tracked on a public Github repository that we can access for review
●	We should be able to run your app locally by cloning your Github repo and using a package manager to download all of the required dependencies
●	Use the Giphy API to fetch GIF results that match user specified search terms and weirdness (https://developers.giphy.com/docs/#operation--gifs-translate-get)
●	Users should be able to enter a search term on an input field to receive matching GIFs
●	Users should be able to change the weirdness of their results by moving a slider control in the UI
●	Allow users to like a GIF to their favorites
●	Only allow one liked GIF per search term
●	Prompt users to submit new search terms when they are done liking a favorite on a particular search term
●	Allow users to unlike a GIF
●	When users click the “Calculate…” button, they should see their average “weirdness”, to the nearest whole number, on a new route (e.g. “/results”)

Other specifications
●	You are not required to deploy the app on a public server. As long as we can view it locally with instructions from a README, you’re good to go
●	The app’s layout does not need to be responsive but should fit comfortably on an average desktop viewport
●	The app only needs to run on the latest version of Chrome
●	You can use any library or package you like
●	You are allowed to use any learning resource at your disposal except for direct help from another person
●	None of the results need to survive a refresh. Redux should be the only thing that keeps track of liked GIFs in browser state
●	It’s fine if a user goes back to a previous weirdness score and a different GIF appears
●	It’s fine if no results show for a given GIF request as long as the UI indicates so
●	If you’re not able to complete all the requirements by the deadline, still send us what you were able to complete.
