<img alt="Image" src="/shorts_generator-1.png">

# Inspiration

<p>Recently, I've come across quite a number of reddit storytime videos, which piqued my interest - Afterall, there are tons of similarities in every video, so much so that I thought of the brilliant idea of AUTOMATING the generation them.</p>

<p>I set out on this journey but starting out wita list of tasks I would have to achieve, as well as the various APIs and libraries I would be using.</p>

# Programming

<p>Now, for this project, I will be using PRAW (Python Reddit API Wrapper) for dealing with reddit, Selenium for web-scraping (essentially screenshotting), and Moviepy for generating the video.</p>

<p>Using PRAW, I make an API request to reddit to fetch the top posts of the day from a subreddit. Looping through the list, I check for these conditions: <li>Not NSFW</li> <li>Contains certain number of comments - and that the comments are not just a link</li></p>
<p>For the first condition, I can just access the `over_18` attribute of the post. Now comes the tricky part...How would I go about detecting links. Well, I resorted to using a regex (regular expression) pattern.</p>
<p>Now that I had validated, I feed that post into another function, to retrieve details of the post - id, title, comments. I looped through all comments of the post, and did a second round of validation, this time to clean up the comments. By splitting up the body of the comment and using the aforementioned regex pattern, I deleted any element that was either a link (`https`, `http`) or had markdown link syntax, `[text](link)`. Returning it as a class object made it easier for me to access the attributes.</p>
<p>For screenshotting, I used Selenium. The Selenium driver opened up the link of the post. Firstly, the driver screenshots the title. Then, it locates the element with a CSS Selector. Since the CSS selector on each comment was different, I derived a pattern to find each comment.</p>
<img alt="Image" src="/shorts_generator-2.png">
<p>Yes, the nth-child pseudo class is used to match the element based on its index. With that, I just had to add more code into the comment validation loop to get the index of the comment. The logic goes as such - according to the documentation, replies have ids prefixed with `t1_` while comments are prefixed with `t3_`. So, for each time the comment id is prefixed with `t1_`, skip to next iteration, and when it is prefixed with `t3_`, an index is assinged.</p>
<p>Below shows an example of a screenshot.</p>
<img alt="Image" src="/shorts_generator-3.png">
<p>However, there seems to be another problem. Some comments are automatically collapsed when the page opens. That means the screenshot would be messed up. Below shows an example.</p>
<img alt="Image" src="/shorts_generator-4.png">
<p>Well, it was a pretty difficult problem to solve, but upon digging, I realised that collapsed comments have the css attribute of `collapsed`. So essentially, my plan was to remove the `collapsed` attribute.</p>
<img alt="Image" src="/shorts_generator-5.gif">
<p>As you can see it works! So, converting that into code, that solves all problems pertaining to screenshotting</p>
<p>Now for the generation of video, it was pretty easy. I just had to loop through all the comments in the post, generate a text clip and text to speech to overlay on top. Luckily, I found a python script that generates text to speech with Tiktok's API so I decided to use that. Lastly, I just needed to set the background as some Minecraft Parkour footage and add some spicy Phonk.</p>

<video controls>
  <source src="/shorts_generator-6.mp4" type="video/mp4">
</video>

<p><a className="dark:text-secondary-dark text-secondary-light" href="https://instagram.com/daily_reddit_01">Here</a> are some of the videos generated with this script. You can find the code <a className="dark:text-secondary-dark text-secondary-light"
 href='https://github.com/caffeinated01/ShortsGenerator'>here</a></p>
