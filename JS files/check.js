let tar=window.location.href;
tar = tar.replace(/%20/g, "");
tar = tar.toLowerCase();
if (tar==="https://thuongdev.pages.dev/new/aboutme"){
    location.replace("https://thuongdev.pages.dev/improve/caoxuanthuong.dev/aboutme");
}
else if (tar==="https://viantetech.github.io/new/aboutme"){
    location.replace("https://viantetech.github.io/improve/caoxuanthuong.dev/aboutme");
}
else if (tar.includes("aboutme")){
    if(tar.includes("https://viantetech.github.io")){
        window.location.replace("https://viantetech.github.io/aboutme");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        window.location.replace("https://thuongdev.pages.dev/aboutme");
    }
}
else if (tar.includes("home")){
    if(tar.includes("https://viantetech.github.io")){             
        window.location.replace("https://viantetech.github.io/home");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        window.location.replace("https://thuongdev.pages.dev/home");
    }
}
else if (tar.includes("contact")){
    if(tar.includes("https://viantetech.github.io")){   
        location.replace("https://viantetech.github.io/contacts");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/contacts");
    }
}
else if (tar.includes("myproject")){
    if(tar.includes("https://viantetech.github.io")){    
        location.replace("https://viantetech.github.io/myprojects");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/myprojects");
    }
}
else if (tar.includes("rick")||tar.includes("roll")){
    if(tar.includes("https://viantetech.github.io")){             
        location.replace("https://viantetech.github.io/rickroll");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/rickroll");
    }
}
else if (tar.includes("readme")){
    if(tar.includes("https://viantetech.github.io")){             
        location.replace("https://viantetech.github.io/README");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/README");
    }
}
else if (tar.includes("setting")){
    if(tar.includes("https://viantetech.github.io")){             
        location.replace("https://viantetech.github.io/settings");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/settings");
    }
}
else if (tar.includes("aboutme/programminglanguage")){
    if(tar.includes("https://viantetech.github.io")){             
        location.replace("https://viantetech.github.io/aboutme/programminglanguages");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/aboutme/programminglanguages");
    }
}
else if (tar.includes("info")){
    if(tar.includes("https://viantetech.github.io")){             
        location.replace("https://viantetech.github.io/shop");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/shop");
    }
}
else if (tar.includes("new")){
    if(tar.includes("https://viantetech.github.io")){             
        location.replace("https://viantetech.github.io/improve/caoxuanthuong.dev");
    }
    else if(tar.includes("https://thuongdev.pages.dev")){ 
        location.replace("https://thuongdev.pages.dev/improve/caoxuanthuong.dev");
    }
}