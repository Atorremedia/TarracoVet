const inputs= document.getElementsByClassName("form__input");
for (let i = 0;i<inputs.length;i++){
    inputs[i].addEventListener("keyup",function(){
        if (this.value.length>=1){
            if (this.nextElementSibling.classList.contains('arealabel')){this.nextElementSibling.classList.add("fijararea")};
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");
            if (this.nextElementSibling.classList.contains('arealabel')){this.nextElementSibling.classList.remove("fijararea")};

        }

    });

}