# 4th - Secondary; 13th - Overall (TBC)

<p>
HACK@AC is a Capture-The-Flag competition, where participants play to earn points by solving problems relating to cryptography, data security, and other prominent cybersecurity issues.
<img alt="Image" src="/hac-1.png">
</p>
<p>The event lasted for 12 hours, from 8am to 8pm. This tested our resilience and pushed us the limits.</p>
<p>
This being my second online CTF, I did better than previous attempts at CTFs. I could virtually understand the questions, providing info on challenges I found and even solving some myself.
</p>
<img alt="Image" src="/hac-2.png">
# Writeup, "Txt2SVG"
<p>Challenge description: <br>I made a webapp which can convert your text into a styled svg picture, but for some reason the comments that you can put in aren't in the final result. Why?</p>
<p>Source structure: <br></p>
<Code language="txt">
.
├── Dockerfile
├── app.py
├── docker-compose.yml
├── flag.txt
├── generatesvg.py
├── images
│   └── f933cfc7-b07e-4d78-a79c-73c92fddeb49.svg
└── templates
    ├── index.html
    └── template.svg

4 directories, 9 files
</Code>

<p>Webpage: </p>
<img alt="Image" src="/hac-txt2svg-2.png">
<p>Intitially, I tried to input "Hello World", 14, 500, 500, `<!--Hello World-->`, but when looking at the "Elements" tab of dev tools, the comment doesn't seem to render. That's weird.</p>
<img alt="Image" src="/hac-txt2svg-3.png">
<p>Upon further digging, in `generate_svg.py`, we see the template the svg is generated from.</p>
<img alt="Image" src="/hac-txt2svg-4.png">
<p>We see that the comment element is placed above the svg generated, that's why it didn't appear.</p>
<p>I remember an exploit called XXE. XML external entity injection (also known as XXE) is a web security vulnerability that allows an attacker to interfere with an application's processing of XML data. It often allows an attacker to view files on the application server filesystem, and to interact with any back-end or external systems that the application itself can access. (https://portswigger.net/web-security/xxe). Since the file `flag.txt` exists on the same path as `app.py`, which is the main flask file, we can use XXE to get the flag.</p>
<img alt="Image" src="/hac-txt2svg-5.png">
<p>This time, my inputs are: `&xxe;`, 14, 500, 500, and most importantly, `<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "flag.txt"> ]>`. In this case, we have an entity called xxe, and is used in the 'Text' field. This entity uses the keyword 'SYSTEM' to tell the XML parser that the entity is a type external, telling it to fetch the external resource, `flag.txt`, and storing it in the entity.</p>
<p>Lo and behold, we get the flag.</p>
<img alt="Image" src="/hac-txt2svg-1.png">
