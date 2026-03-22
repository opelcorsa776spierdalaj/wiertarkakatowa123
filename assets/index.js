var selector = document.querySelector(".selector_box");
selector.addEventListener('click', () => {
    if (selector.classList.contains("selector_open")){
        selector.classList.remove("selector_open")
    }else{
        selector.classList.add("selector_open")
    }
})

document.querySelectorAll(".date_input").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector(".date").classList.remove("error_shown")
    })
})

var sex = "m"

document.querySelectorAll(".selector_option").forEach((option) => {
    option.addEventListener('click', () => {
        sex = option.id;
        document.querySelector(".selected_text").innerHTML = option.innerHTML;
    })
})

var upload = document.querySelector(".upload");

var imageInput = document.createElement("input");
imageInput.type = "file";
imageInput.accept = ".jpeg,.png,.gif";

document.querySelectorAll(".input_holder").forEach((element) => {

    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    })

});

upload.addEventListener('click', () => {
    imageInput.click();
    upload.classList.remove("error_shown")
});

imageInput.addEventListener('change', (event) => {

    upload.classList.remove("upload_loaded");
    upload.classList.add("upload_loading");

    upload.removeAttribute("selected")

    var file = imageInput.files[0];
    var data = new FormData();
    data.append("image", file);

    fetch("https://api.imgur.com/3/image/" ,{
        method: 'POST',
        headers: {
            'Authorization': 'Client-ID c 27369172c61327'
        },
        body: data
    })
    .then(result => result.json())
    .then(response => {
        
        var url = response.data.link;
        upload.setAttribute("selected", url);
        upload.classList.add("upload_loaded");
        upload.classList.remove("upload_loading");
        upload.querySelector(".upload_uploaded").src = url;

    })

})

document.querySelector(".go").addEventListener('click', () => {

    var params = new URLSearchParams();

    params.set("sex", sex);

    if (upload.hasAttribute("selected")){
        params.set("image", upload.getAttribute("selected"))
    }

    var birthday = "";
    document.querySelectorAll(".date_input").forEach((element) => {
        birthday = birthday + "." + element.value
    })

    birthday = birthday.substring(1);
    params.set("birthday", birthday);

    document.querySelectorAll(".input_holder").forEach((element) => {
        var input = element.querySelector(".input");
        params.set(input.id, input.value)
    })

    forwardToId(params);

});

function forwardToId(params){
    location.href = "/id?" + params
}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})var selector = document.querySelector(".selector_box");
selector.addEventListener('click', () => {
    if (selector.classList.contains("selector_open")){
        selector.classList.remove("selector_open")
    }else{
        selector.classList.add("selector_open")
    }
})

document.querySelectorAll(".date_input").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector(".date").classList.remove("error_shown")
    })
})

var sex = "m"

document.querySelectorAll(".selector_option").forEach((option) => {
    option.addEventListener('click', () => {
        sex = option.id;
        document.querySelector(".selected_text").innerHTML = option.innerHTML;
    })
})

var upload = document.querySelector(".upload");

var imageInput = document.createElement("input");
imageInput.type = "file";
imageInput.accept = ".jpeg,.png,.gif";

document.querySelectorAll(".input_holder").forEach((element) => {

    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    })

});

upload.addEventListener('click', () => {
    imageInput.click();
    upload.classList.remove("error_shown")
});

imageInput.addEventListener('change', (event) => {

    upload.classList.remove("upload_loaded");
    upload.classList.add("upload_loading");

    upload.removeAttribute("selected")

    var file = imageInput.files[0];
    var data = new FormData();
    data.append("image", file);

    fetch("https://api.imgur.com/3/image/" ,{
        method: 'POST',
        headers: {
            'Authorization': 'Client-ID c 27369172c61327'
        },
        body: data
    })
    .then(result => result.json())
    .then(response => {
        
        var url = response.data.link;
        upload.setAttribute("selected", url);
        upload.classList.add("upload_loaded");
        upload.classList.remove("upload_loading");
        upload.querySelector(".upload_uploaded").src = url;

    })

})

document.querySelector(".go").addEventListener('click', () => {

    var params = new URLSearchParams();

    params.set("sex", sex);

    if (upload.hasAttribute("selected")){
        params.set("image", upload.getAttribute("selected"))
    }

    var birthday = "";
    document.querySelectorAll(".date_input").forEach((element) => {
        birthday = birthday + "." + element.value
    })

    birthday = birthday.substring(1);
    params.set("birthday", birthday);

    document.querySelectorAll(".input_holder").forEach((element) => {
        var input = element.querySelector(".input");
        params.set(input.id, input.value)
    })

    forwardToId(params);

});

function forwardToId(params){
    location.href = "/id?" + params
}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})
