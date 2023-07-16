let tar=window.location.href;
tar = tar.replace(/%20/g, "");
tar = tar.toLowerCase();
console.log(tar);
if (tar.includes("aboutme")){
    switch(tar){
        case tar.includes("https://viantetech.github.io"):
            location.replace("https://viantetech.github.io/aboutme");
            break;
        case tar.includes("https://thuongdev.pages.dev"):
            location.replace("https://thuongdev.pages.dev/aboutme");
            break;
    }
}
else if (tar.includes("home")){
    switch(tar){
        case tar.includes("https://viantetech.github.io"):
            location.replace("https://viantetech.github.io/home");
            break;
        case tar.includes("https://thuongdev.pages.dev"):
            location.replace("https://thuongdev.pages.dev/home");
            break;
    }
}
else if (tar.includes("contact")){
    switch(tar){
        case tar.includes("https://viantetech.github.io"):
            location.replace("https://viantetech.github.io/contacts");
            break;
        case tar.includes("https://thuongdev.pages.dev"):
            location.replace("https://thuongdev.pages.dev/contacts");
            break;
    }
}
else if (tar.includes("myproject")){
    switch(tar){
        case tar.includes("https://viantetech.github.io"):
            location.replace("https://viantetech.github.io/myprojects");
            break;
        case tar.includes("https://thuongdev.pages.dev"):
            location.replace("https://thuongdev.pages.dev/myprojects");
            break;
    }
}
else if (tar.includes("rick")||tar.includes("roll")){
    switch(tar){
        case tar.includes("https://viantetech.github.io"):
            location.replace("https://viantetech.github.io/rickroll");
            break;
        case tar.includes("https://thuongdev.pages.dev"):
            location.replace("https://thuongdev.pages.dev/rickroll");
            break;
    }
}
else if (tar.includes("readme")){
    switch(tar){
        case tar.includes("https://viantetech.github.io"):
            location.replace("https://viantetech.github.io/README");
            break;
        case tar.includes("https://thuongdev.pages.dev"):
            location.replace("https://thuongdev.pages.dev/README");
            break;
    }
}