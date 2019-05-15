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
