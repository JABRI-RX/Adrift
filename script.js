//hover nav
function start(check)
{
    if(check == 0)
    {
        document.getElementById('hover-services').style.width = "100%";
    }
    else if(check == 1)
    {
        document.getElementById('hover-skills').style.width = "100%";
    }
    else if(check == 2)
    {
        document.getElementById('hover-about').style.width = "100%";
    }
}
function end(check)
{
    if(check == 0)
    {
        document.getElementById('hover-services').style.width = "0%";
    }
    else if(check == 1)
    {
        document.getElementById('hover-skills').style.width = "0%";
    }
    else if(check == 2)
    {
        document.getElementById('hover-about').style.width = "0%";
    }
}
//end
//scrolling 
//this is for the cards to show when the user scrools to them
function ShowServices()
{
    var style = document.getElementById('services');
    style.style.transition = "0.6s ease";
    //console.log(`${document.documentElement.scrollTop}\t\t${child.offsetTop}`);
    if(document.documentElement.scrollTop+300 >=style.offsetTop)
    {
        style.style.opacity = "1";
        style.style.transform = "translateY(0px)";
    }
}
//end
//this is for showing the progress bar for skills
function ShowSkills()
{
    //getting the data
    var skills = document.getElementById('skills')
    if(document.documentElement.scrollTop+600 >=skills.offsetTop)
    {
        //for computer science
        document.getElementById('frontend').style.width = "4em";
        document.getElementById('mobilebar').style.width = "0.3em"
        document.getElementById('dekstopbar').style.width = "8em";
        document.getElementById('automatebar').style.width = "7em";
        //for internalperosnal
        document.getElementById('problembar').style.width ="10em";
        document.getElementById('activebar').style.width ="12em";
        document.getElementById('combar').style.width ="7em";
        document.getElementById('teambar').style.width ="7em";
        //for motion graphics
        document.getElementById('aebar').style.width = "10em";
        document.getElementById('ppbar').style.width = "4em";
        document.getElementById('psbar').style.width = "4em";
        document.getElementById('c4bar').style.width = "2em";
        //for languages
        document.getElementById('englishbar').style.width = "7em";
        document.getElementById('germanbar').style.width = "0.5em";
        document.getElementById('arabicbar').style.width = "2em";
        document.getElementById('frenshbar').style.width = "1em";
    }
}
//end
function scrolle()
{
    //show service when user scrolls there
    ShowServices();
    //end
     ShowSkills()
   
    //show skills when user scrolls there
}
//end
// show youtube channel
function showytname(check) {
    var letotext = document.getElementById('leto-text');
    if(check == 1)
    {
        letotext.style.opacity = "1";
        letotext.style.padding = "00px 20px";
    }
    else{
        letotext.style.opacity = "0";
        letotext.style.padding = "0px 0px";

    }
}
//end

// show github name
function showghname(check) {
    var multiext = document.getElementById('multi-text');
    if(check == 1)
    {
        multiext.style.opacity = "1";
        multiext.style.padding = "15px 13px ";
    }
    else{
        multiext.style.opacity = "0";
        multiext.style.padding = "15px 0px ";

    }
}
//end
//move social 
var on = true;
function movesocial()
{
    var social = document.getElementById('social-icons');
    var left = document.getElementById('lefti')
    social.style.transition = "1s cubic-bezier(0.09, 0.92, 0.25, 1.13)";
    left.style.transition = "0.9s cubic-bezier(0.09, 0.92, 0.25, 1.13)";
    if(on)
    {
        social.style.marginLeft = "-80px ";
        left.style.transform = "scaleX(-1)";
        left.style.backgroundColor = "white";
        left.style.color = "#3273a8"
        on = false;
    }
    else{
        social.style.marginLeft = "0px";
        left.style.transform = "scaleX(1)";
        left.style.backgroundColor = "#3273a8";
        left.style.color = "white";
        on = true;

    }
}