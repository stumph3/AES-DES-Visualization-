This is the README file for the second Web Programming project group, Andrew Blaskovic, Alexander Napier, Joshua Lefeld, Ryan Fisher, and Taylor Galloway



HTML: Used to establish the web application and create buttons and textboxes.
CSS: Used to give style and decoration to the web application as well as the buttons and text.
JavaScript:Used to create functions that check the files and implement the encryption and decryption methods.

Getting Started:
To get started the user will choose whether they would like to encrypt or decrypt a file as well as select to hash the file. The user will then choose any file on their computer for the web application. From there they will type any keyword for their encryption/decryption. The keyword can only have a letter appear once in the word and there should be no numbers or special characters. The user will then select any of the five encryption methods including: DES, AES, MD5, SHA256, and Keyword Cipher. Once the user has selected their options they will be able to press submit to encrypt/decrypt the file. At the bottom the user will be able to view the hash, public key, and keyword as well as download their newly encrypted/decrypted file.

●	HTML Explanation:
○	On the HTML side of our project we used <div> tags to divide up the different sections of our actual website. The encryption methods, the input files section, the outputs file section, the progress bar, and the output for hashes and keys.
○	We used the <progress> tag to set up the progress bar we have in our web app. This is to show how far along the encryption/decryption process has come.
The <input type=”radio”> tags were used for the selection processes. This allows the user to select whether to encrypt or decrypt, and what types of encryption method is to be used.
●	The <input type=”file”> tag was used to allow the user to upload their data file of choice. 
●	The <input type=”button”> tag was used to have the user submit their uploaded file to be processed, and for when the user wants to download their outputted file.
●	The <label> tag was used to assign a label for all of the different form tags used for the web app. This gives them their different names like, submit, AES, or Decryption.
●	The <script> tag was used to import the different sources we used in this web app, our JavaScript file, the CryptoJS source, and the jQuery source file.
●	The <link> tag is used to import our CSS file, style.css. 
●	The <h1> and <h2> tags are used to denote titles and headers in the web app. 
●	The <br> tag is used as line breaks for any text in the web app. 
●	The <head> tag is used to differentiate the header text from the rest of the text in the web app.
●	The <title> tag is used to differentiate the title text from the rest of the text in the web app.
●	The <body> tag is used to differentiate the body text from the rest of the text in the web app.


●	CSS Explanation:
○	In the body{} section, background-color: is used to change the color of the web apps background. We used rgb(104, 19, 19) for our background.
○	In the div{} section, color: is used to change the color of all of the elements in the HTML div tags to white.
○	In the h1{} section, color: is used to change the h1 elements to white. Text-align: is used to align the h1 elements to the center of the web app.
○	In the #submit{} section background-color: is used to make the background color of the submit button, #be9b25. Font-size: is used to change the text font size to 24 pixels. Margin: is used to set the margin to 0 and auto. The display: is used to make the submit button block.
○	In the #filesubmit{} section, text-align: is used to align the text in that element to the left. The font-size: is used to set the font size for the text to 24 pixels. The width: is used to set the width of the element to 200 pixels. The height: is used to set the height to 75 pixels. And the margin-left: is used to set the margin to the left 10 pixels.
○	In the P{} section, text-decoration: was used. It underlined the text in the p tag
○	In the h2{} section, text-align: was used. It aligned the text to the right.
○	In the #progress{} section, text-align was used. It aligned the text to the right.
○	In the #key{} section, text-align: and font-size: was used. It aligned the text to the left, and made the font size to 24 pixels.
○	In the #output{} section, text-align was used. It aligned the text to the right.
○	In the #outputfile{} section, text-align was used. It aligned the text to the center.
○	In the #keyword{} section, text-align, width, height, and margin-left was used. It aligned the text to the center, made the width 300 pixels, made the height 50 pixels, and the left margin -200 pixels.
○	In the #Outputhash{} section, margin-right: was used. It made the right margin 180 pixels.
○	In the #OutputPubKey{} section, margin-right: is used. It made the right margin 120 pixels.
○	In the #OutputKeyWord{} section, margin-right is used. It made the right margin 137 pixels.
○	In the #download{} section, background-color:, font-size:, text-align:, color:, margin:, and border: is used. It made the background color rgb(110, 17, 177), the font size is made to be 24 pixels, it aligned the text to the center of the web app, it made the text color black, and made the margin 0 and auto, and it made the download border blue, with a size of 40 x 20 x 40 x 20.




●	Javascript Explanation: 
●	For our javascript we added a constant alphabet to accept those given letters as a keyword
●	Next we created a function that makes the cipher for keyword cipher
●	Then we used for and if loops to make the cipher
●	Next we added a function that decodes the keyword cipher file and used a file reader to read the file’s context.
●	At line 45 we created a download function that created a new download file
●	At line 76 a function was created to get the filetype of the file uploaded
●	We then created a document.onload function that holds multiple if statements
●	Next a function was created at line 87 that checks the radio buttons to determine what to do
●	Inside the function holds multiple if statements that checks what button is pressed and each button corresponds to each if statement that checks for encryption, checks for DES encryption, checks for AES encryption, and checks for keyword cipher encryption 
●	Line 105 is where the if statements begin to check for decryption.
●	The first if statement checks for decryption, from there the if statements check for des decryption, aes decryption, and checks for keyword cipher decryption.
●	The last three if statements check for hashing, hashes a file with mda and hashes a file with sha256 
