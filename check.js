let tar=window.location.href;
tar = tar.replace(/%20/g, "")
console.log(tar);
switch(tar){
    case tar.toLowerCase().includes("aboutme"):
        switch(tar){
            case tar.toLowerCase().includes("https://viantetech.github.io"):
                location.replace("https://viantetech.github.io/aboutme");
                break;
            case tar.toLowerCase().includes("https://thuongdev.pages.dev"):
                location.replace("https://thuongdev.pages.dev/aboutme");
                break;
        }
    case tar.toLowerCase().includes("home"):
        switch(tar){
            case tar.toLowerCase().includes("https://viantetech.github.io"):
                location.replace("https://viantetech.github.io/home");
                break;
            case tar.toLowerCase().includes("https://thuongdev.pages.dev"):
                location.replace("https://thuongdev.pages.dev/home");
                break;
        }
    case tar.toLowerCase().includes("contact"):
        switch(tar){
            case tar.toLowerCase().includes("https://viantetech.github.io"):
                location.replace("https://viantetech.github.io/contacts");
                break;
            case tar.toLowerCase().includes("https://thuongdev.pages.dev"):
                location.replace("https://thuongdev.pages.dev/contacts");
                break;
        }
    case tar.toLowerCase().includes("myproject"):
        switch(tar){
            case tar.toLowerCase().includes("https://viantetech.github.io"):
                location.replace("https://viantetech.github.io/myprojects");
                break;
            case tar.toLowerCase().includes("https://thuongdev.pages.dev"):
                location.replace("https://thuongdev.pages.dev/myprojects");
                break;
        }
    case tar.toLowerCase().includes("rick")||tar.toLowerCase().includes("roll"):
        switch(tar){
            case tar.toLowerCase().includes("https://viantetech.github.io"):
                location.replace("https://viantetech.github.io/rickroll");
                break;
            case tar.toLowerCase().includes("https://thuongdev.pages.dev"):
                location.replace("https://thuongdev.pages.dev/rickroll");
                break;
        }
    case tar.toLowerCase().includes("readme"):
        switch(tar){
            case tar.toLowerCase().includes("https://viantetech.github.io"):
                location.replace("https://viantetech.github.io/README");
                break;
            case tar.toLowerCase().includes("https://thuongdev.pages.dev"):
                location.replace("https://thuongdev.pages.dev/README");
                break;
        }            
}
