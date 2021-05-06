const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function makeKeywordCipher(keyword)//makes the cipher for the keyword cipher
{
   //make cipher
   let code = document.getElementById("keywd");
   let cipher;
   for(let x = 0; x < alphabet.length(); x++)
   {
      if(keyword.indexOf(alphabet[x]) != -1)
      {
          code = code + alphabet[x];//makes a string version of the cipher
      }
   }
   for(let i = 0; i < code.length();i++)
   {
       cipher.push(code.charAt(i)); 
       cipher.push(code.charAt(i).toUpperCase()); 
       //makes an array of the cipher
   }
   return cipher;
}
function encodeKeyword(keywordarray, textfile)//decode a keyword cipher file
{
  let fr = new FileReader();
  let rawtext = fr.result();//reads the file's content
  for (let x = 0;x < cipher.length();x++)
  {
    rawText = rawText.replaceAll(alphabet[x],cipher[x]);//switch alphabet and cipher for encode
  }
  return rawText;
}
function decodeKeyword(keywordarray, textfile)//decode a keyword cipher file
{
  let fr = new FileReader();
  let rawtext = fr.result();
  for (let x = 0;x < cipher.length();x++)
  {
    rawText = rawText.replaceAll(cipher[x],alphabet[x]);//switch alphabet and cipher for decode
  }
  return rawText;
}

function download(data, filename, type)//Creates the new file for download 
{
  //I have not tested this, try it at own risk.
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}
function getUserFileName()//Gets the name of the file uploaded
{
  var fullPath = document.getElementById('file').value;
  if (fullPath) {
     var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      var filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
      }
  return filename;
  }
}
function getoutput()//Gets the filetype of the file uploaded 
{
  return document.getElementById("file").value.split('.')[1];
}
document.onload() = function()
{
  document.getElementById("keyciph").onclick = function()//adds the required pattern for the keyword cihper
  {
    document.getElementById("keywd").style.display = "block";
    document.getElementById("keywd").pattern = "(?!.*[Aa].*[Aa])(?!.*[Bb].*[Bb])(?!.*[Cc].*[Cc])(?!.*[Dd].*[Dd])(?!.*[Ee].*[Ee])(?!.*[Ff].*[Ff])(?!.*[Gg].*[Gg])(?!.*[Hh].*[Hh])(?!.*[Ii].*[Ii])(?!.*[Jj].*[Jj])(?!.*[Kk].*[Kk])(?!.*[Ll].*[Ll])(?!.*[Mm].*[Mm])(?!.*[Nn].*[Nn])(?!.*[Oo].*[Oo])(?!.*[Pp].*[Pp])(?!.*[Qq].*[Qq])(?!.*[Rr].*[Rr])(?!.*[Ss].*[Ss])(?!.*[Tt].*[Tt])(?!.*[Uu].*[Uu])(?!.*[Vv].*[Vv])(?!.*[Ww].*[Ww])(?!.*[Xx].*[Xx])(?!.*[Yy].*[Yy])(?!.*[Zz].*[Zz])[A-Za-z]{0,26}";
  }
  document.getElementById("submit").onClick() = function()//checks the radio buttons to determine what to do
  {
    if(document.getElementById("encry").checked == true)//checks for encryption
    {
      if(document.getElementById("des").checked == true)//des encryption
      {

      }
      if(document.getElementById("aes").checked == true)//aes encryption
      {

      }
      if(document.getElementById("keyciph").checked == true)//keyword cipher encryption
      {
        let fileData = encodeKeyword(makeKeywordCipher(code), document.getElementById("file").value());
        download(fileData,getUserFileName(),getoutput());
      }
    }
    if(document.getElementById("decry").checked == true)//checks for decryption
    {
      if(document.getElementById("des").checked == true)//des decryption
      {

      }
      if(document.getElementById("aes").checked == true)//aes decryption
      {

      }
      if(document.getElementById("keyciph").checked == true)//keyword cipher decryption
      {
        let fileData = decodeKeyword(makeKeywordCipher(code), document.getElementById("file").value());
        download(fileData,getUserFileName(),getoutput());
      }
    }
    if(document.getElementById("hash").checked == true)//checks for hashing
    {
      if(document.getElementById("md5").checked == true)//hashing of a file with md5
      {

      }
      if(document.getElementById("sha256").checked == true)//hashing of a file with sha256
      {

      }
    }
  }
}