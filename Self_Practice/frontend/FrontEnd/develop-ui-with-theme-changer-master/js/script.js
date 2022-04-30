/* the themes object declared below contains theme properties with 
 backgroundColor and color values

 the theme property names are matched with ids of UI input elements of type 'radio' 
 available on the index.html page

 based on the radio button selected the theme property should be selected 
 and its values should be used to style the document
*/

const themes = {
    "bright": {
        "backgroundColor": "lightyellow",
        "color": "darkgreen"
    },
    "cool": {
        "backgroundColor": "lightgray",
        "color": "indigo"
    },
    "fiery": {
        "backgroundColor": "chocolate",
        "color": "lightgoldenyellow"
    }
}

function changeTheme(event) {
    let x = event.target;
    if(x.id === "bright"){
        document.body.style.backgroundColor="lightyellow";
        document.body.style.color="darkgreen";
    }
    else if(x.id === "cool"){
        document.body.style.backgroundColor="lightgray";
        document.body.style.color="indigo";
    }
    else if(x.id === "fiery"){
        document.body.style.backgroundColor="chocolate";
        document.body.style.color="lightgoldenyellow";
    }
    done();
}

module.exports = changeTheme