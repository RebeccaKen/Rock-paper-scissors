
<h1>Rock, Paper, Scissors</h1>
<p>A rock, paper, scissors game build using HTML, CSS and JavaSript. This site is intended to allow the user to select one of three buttons: rock, paper or scissors. This selection and subsequent click will signal the Javascript to generate it's own random choice. Those two choices are then compared. The scoreboard will then showcase the user's choice, the Javascript random choice and the result of the game. </p>
<br>

<img src="assets/images/responsive-screenshot.jpg" alt="An-image-of-website-across-screen-sizes">


<h2>Live Site</h2>
<ul>
<b><a href="https://rebeccaken.github.io/Rock-paper-scissors/">Rock, Paper, Scissors</a></b>

<h2>UX User Experience</h2>
<ul>

<h3>Wireframes</h3>
<p>The Wireframes were produced using Balsamiq. The final site varies from the wireframes due to developments that occurred during the evolution of the website.</p>
<br>
<p><b>Mobile screen:</b></p>

![mobile(portrait) - rock paper scissors ](https://user-images.githubusercontent.com/109537725/197852365-ebbcaca1-3faf-42c5-9b54-2a70d317abed.png)

![mobile(landscape) - rock paper scissors](https://user-images.githubusercontent.com/109537725/197849444-32fc0510-8567-46f1-9753-678146a84d4d.png)

<br>
<p><b>Tablet screen:</b></p>

![tablet(portrait) - rock paper scissors](https://user-images.githubusercontent.com/109537725/197852972-1a372dc2-ec61-48a2-9c79-bb9c2b3825e3.png)

![tablet(landscape) - rock paper scissors ](https://user-images.githubusercontent.com/109537725/197850680-cb1312e1-de85-440e-96cc-f0684e2a7fb9.png)

<br>
<b>Desktop:</b>

![desktop - rock paper scissors](https://user-images.githubusercontent.com/109537725/197845013-e7694ac9-0b4b-42a5-ba5c-e38405ee274d.png)

<b>Colour Palette:</b>
<p>The colour scheme that I choose for the buttons of this project is a simple mix of red, blue and green. I choose this selection of colours because they are easy to see and they are complimentary. I used a light grey to define the background of the game-area and a darker grey for the text as I believe these grey shades go well with the bold colour selection of the buttons.</p>
 
 ![Colour Palette ](https://user-images.githubusercontent.com/109537725/197857263-70bb882b-15c5-4d36-b06e-042ec6dd0b6f.png)
 
 <br>
 
 ![Colour Palette](https://user-images.githubusercontent.com/109537725/197855586-10e94f7f-fc9c-4155-b844-262804039e11.png)
 
<h3>Typograpghy:</h3>

<p>The fonts used in this project were imported into the css from google fonts. I choose Roboto as a main font because it is both professional and positive. I choose Sans-sarif as back-up font because it is understated and friendly.</p>

<h2>Accessibility</h2>
<ul>
<br>
<b>Lighthouse Report:</b>
<br>
<br>
<img src="assets/images/lighthouse.jpg" alt="An-image-of-lighthouse-report">


<br>

<h2>Features</h2>

<b>Heading</b> - <p>The heading contains the name of the game 'Rock Paper Scissors' in the font Roboto.</p>

<br>

![Screenshot 2022-10-27 at 22-53-20 Rock Paper Scissors Game](https://user-images.githubusercontent.com/109537725/198405951-537e3882-5781-4694-b1ae-b0b9c26da8db.png)

<br>

<b>Submit Name</b> -<p>This feature allows the user to enter their name and be greeted with a welcome message.</p>

<img src="assets/images/submit-feature.jpg" alt="An-image-of-submit-feature">

<br>

<b>Points Counter</b>-<p>The points counter documents how many points the player and computer have.</p>

<img src="assets/images/points-counter.jpg" alt="An-image-of-points-counter-feature">

<br>

<b>Responsive Buttons</b> -<p>Each button has a icon that represents either rock, paper or scissors. The buttons are responsive and signify which of the buttons was selected and clicked by the user.</p>

<br>

![responsive-buttons](https://user-images.githubusercontent.com/109537725/198050158-8955c138-f37f-4d7c-bd0d-317bc56c9e4d.png)

<br>

<b>Scoreboard</b> -<p>The scoreboard lists the user selected icon, the icon the computer has choosen at random and the result of the game as either 'loser', 'winner' or 'draw'.</p>

![responsive-scoreboard](https://user-images.githubusercontent.com/109537725/198050801-63d0629a-51e6-47d3-9a42-fed13cef6215.png)

<br>

<b>Rules</b> -<p> The rules section is a written guide to help the user understand the rules of rock, paper and scissors.</p>

![rules-section](https://user-images.githubusercontent.com/109537725/198051050-9a068cd8-cb61-45b0-a570-151b2d3e5d72.png)

<br>

<h2>Testing & Bugs</h2>
<br>
<b>Validator Errors</b>
<br>
<br>
<b>HTML:</b>

![html-errors](https://user-images.githubusercontent.com/109537725/198034351-c38de4b2-9b78-4724-97f2-db050973ac45.png)
<br>

<b>Resolved HTML Errors:</b>
<br>
![html - resolved errors](https://user-images.githubusercontent.com/109537725/198034837-dab627aa-0d51-4d3d-b1bc-2b5273944903.png)
<br>

<b>CCS:</b>

![Css errors](https://user-images.githubusercontent.com/109537725/198035765-50a2fc35-f7ba-433d-a48f-b19ca0c98d6d.png)
<br>
<b>Resolved CSS Errors:</b>
<br>

![Css - errors resolved ](https://user-images.githubusercontent.com/109537725/198036206-d528b404-d12a-4064-990a-0bf3210c886b.png)
<br>


<b>Javascript Errors:</b>

<br>

<img src="assets/images/javascript-bugs.jpg" alt="An-image-of-javascript-errors">

<br>

<b>Resolved javascript Errors:</b>

<br>

<img src="assets/images/javascript-bugs-corrected.jpg" alt="An-image-of-javascript-errors-resolved">
<br>
<br>
<h3>Code Bug</h3>
<br>
<img src="assets/images/submit-bug.jpg" alt="An-image-of-submit-bug">
<br>
<b>The Issue:</b>
<p>This bug was very difficult to get to the bottom off. When the player entered their name, the ‘You’ area would print ‘Submit’. I could not understand why this was happening. After much research, and some time spent with a tutor named Ed, the reason for the bug came to light. The error was caused by my querySelectorAll. Originally, the code was:</p> 
<br>
<img src="assets/images/submit-bug-code.jpg" alt="An-image-of-submit-bug-code">
<br>
<b>The Resolution:</b>
<p>Because the selector was set to ‘button’, it was picking up all the buttons and throwing off both the scoreboard display and the score. It was causing the submit button on the greeting name function to be counted as a button, therefore the function I wrote to generate a random number was working with four numbers, not the intended three. I resolved the issue by making the CSS selector more specific, so it only targeted the buttons within the control area:</p>
<br>
<img src="assets/images/submit-bug-solution.jpg" alt="An-image-of-submit-bug-solution">
</p>
<br>
<h3>Unresolved bug</h3>
<br>
<img src="assets/images/unresolved-bug.jpg" alt="An-image-of-unresolved-bug">
<br>
<h2>Deployment</h2>
<p>This website was deployed using Github pages.</p>

<li>Navigate to the settings tab on the Github repository.</li>
<li>In settings, navigate to the left-hand side of menu and click ‘Pages’.</li>
<li>Navigate to the ‘Branch’ section of ‘Pages’ and select ‘Main’ branch and hit ‘Save’.</li>
<li>Navigate to deployment link at the top of the page and click the link.</li>

<br>

![DP1](https://user-images.githubusercontent.com/109537725/198046708-3080351c-fd89-43e5-b762-09daed1c8fac.jpg)

<br>

![DP2](https://user-images.githubusercontent.com/109537725/198047022-244eaa0e-eb4a-4ddb-9807-edb0e2035dec.jpg)

<br>

![DP3](https://user-images.githubusercontent.com/109537725/198047500-bca5969f-7821-44f8-953e-facdfa6de3b1.jpg)

<br>

![DP4](https://user-images.githubusercontent.com/109537725/198048690-202112d9-7ff2-4a7b-9bbf-1aa4714f1a6f.jpg)


<h2>Credits</h2>
<ul>

<h3>Media</h3>

<b>Styling</b>

The styling for the Rock Paper Scissors game was inspired by the clear, clean styling of the 'Love Maths' project on the Code Insititute's website: 

https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/234519d86b76411aa181e76a55dabe70/


<b>Text Content</b>

<p>The text for the rules section of Rock, Paper, Scissors were taken from the webpage 'Rock-Paper-Scissors' on the website 'Play and Playground Encyclopedia':</p>

https://www.pgpedia.com/r/rock-paper-scissors

<b>Javascript</b>

<p>The javascript was built with code from Ania Kubow's tutorial '3 ways to code Rock Paper Scissors in JavaScript (Beginner to Intermediate to Advanced!)' on her YouTube channel 'Code with Ania Kubów':</p>

https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=1044s


<b>Button Icons</b>

<p>Button icons were acquired from the Font Awesome Website: https://fontawesome.com/</p>

<h2>Acknowledgements</h2>
<ul>
<p>I would like to thank my tutor Harry Dhillion for the advice and everyone on the Code Institute slack channels for the encouragement.</p>

