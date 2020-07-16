var fs = require("fs");



function pf(obj){
    let path = "./"+obj.name;
    fs.mkdirSync(path);

    var ed = "";
    var sk = "";

    for(e in obj.education){
        ed = ed +`<li><h3>${obj.education[e][0]}</h3><p>${obj.education[e][1]}</p></li>`
    }

    for(s in obj.skills){
        sk = sk+`<li><h3>${obj.skills[s]}</h3></li>`
    }

    fs.writeFileSync(path+"/index.html",
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat+Subrayada:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">

    <style>

        *{
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body{
             margin:0;
             padding: 0;
        }

        .navbar{
            background: black;
            position: fixed;
            top: 0;
            width: 100vw;
            height: 4rem;
            text-align: center;
        }

        a{  display: inline-block;
            color: white!important;
            font-size: 1.5rem;
            margin-left: 1rem;
            text-decoration: none;
            margin-top:0.5rem;
            font-family: 'Roboto', sans-serif;
            padding:0.5rem;
        }

        a:hover{
            background: white;
            color: black!important;
        }

        .pagePartContainer{
            margin-top:2.5rem;
            height: calc(100vh - 2.5rem);
            padding: 2rem;
        }

        h1{
            text-align:center;
            font-size: 4rem;
            font-family: 'Montserrat Subrayada', sans-serif;
        }

        span{
            display: inline-block;
        }

        .heroText{
            padding-top: 8rem;
            padding-left: 8rem!important;
            padding-right: 8rem!important;
            text-align: justify;
            color: white;
            font-family: 'Bebas Neue', cursive;
        }

        .List{
            box-shadow: 0px 0px 8px 2px #aaa;
            padding: 2rem;
            padding-left: 4rem;
            font-family: 'Raleway', sans-serif;
        }

        .footer{
            background: black;
            color: white;
            font-size: 1.5rem;
            text-align: center;
        }

        .contactSub{
            width: 50%;
            height: 100%;
            border: 1px solid;
            border-radius: 10px;
            background: white;
            padding:2rem;
            font-family: 'Raleway', sans-serif;
            font-size:2rem;
        }

    </style>
    

</head>
<body>
    <div class="navbar">
        <span><a href="#home">Home</a></span>
        <span><a href="#education">Education</a></span>
        <span><a href="#skills">Skills</a></span>
        <span><a href="#contact">Contact</a></span>
        
    </div>

    <span id="home"></span>
    <div class="pagePartContainer" style="background-image: url('https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80');">
        <h1 class="heroText">It is better to fail in <span style="background:white;color: black;padding-left: 0.4rem;padding-right: 0.4rem;">originality</span> than to succeed in imitation.</h1>
    </div>

    <span id="education"></span>
    <div class="pagePartContainer" >
        <h1>Education:</h1>
        <ul class="List">
            ${ed}
        </ul>
    </div>

    <span id="skills" ></span>
    <div class="pagePartContainer" >
        <h1>Skills:</h1>
        <ul class="List">
           ${sk}
        </ul>
    </div>

    <span id="contact"></span>
    <div class="pagePartContainer" style="display: flex;justify-content: space-around;background:black;padding: 8rem;">

        <div class="contactSub">
            <img src="../c.svg" alt="" style="height: 100%;width: 100%;">
        </div>
        <div class="contactSub" style="padding-top: 0rem;">
            <p>Name:<br> ${obj.name}</p>
            <p>Email:<br> ${obj.email}</p>
            <p>Phone:<br> ${obj.phone}</p>
        </div>

    </div>

   

    <div class="footer"> &copy; ${obj.name} 2020</div>

</body>
</html>

    `
    
    );

}

let users = require("./users")

for(x in users){
    pf(users[x]);
}



