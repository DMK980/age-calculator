/////// Logic for age calculator  ///////

// variables //

// inputs 
// day input container,label,input
const day_input_container = document.getElementsByClassName("day_input_container")[0];
const day_label = document.getElementsByClassName("day_label")[0];
const day_input = document.getElementById("day");
// Month input container,label,input
const month_input_container = document.getElementsByClassName("Month_input_container")[0];
const month_label = document.getElementsByClassName("Month_label")[0];
const month_input = document.getElementById("Month");
// Year input container,label,input
const year_input_container = document.getElementsByClassName("Year_input_container")[0];
const year_label = document.getElementsByClassName("Year_label")[0];
const year_input = document.getElementById("Year");

const containers = {
    "day" : day_input_container,
    "month" : month_input_container,
    "year" : year_input_container
}


// submit button
// arrow button 
const submit = document.getElementsByClassName("divider_container")[0];


// outputs
const years = document.getElementsByClassName("year_span")[0]
const month = document.getElementsByClassName("month_span")[0]
const day = document.getElementsByClassName("day_span")[0]

// logic //

// changing color to red 
const changetored = ()=>{
    // changing color to red 
    day_input.classList.add("error_border")
    day_label.classList.add("error_color")

    month_input.classList.add("error_border")
    month_label.classList.add("error_color")

    year_input.classList.add("error_border")
    year_label.classList.add("error_color") 
}
// changing back to original colour
const changetooriginal = ()=>{
    // changing back to original colour
    day_input.classList.remove("error_border")
    day_label.classList.remove("error_color")

    month_input.classList.remove("error_border")
    month_label.classList.remove("error_color")

    year_input.classList.remove("error_border")
    year_label.classList.remove("error_color") 
}
// required error
const requirederror = (element)=>{
    let reqerror = document.getElementById(`${element}_required_error`)
    let inverror = document.getElementById(`${element}_invalid_error`)
    let error_text = document.createTextNode(`This field is required`)

    if (reqerror === null){
        if (inverror !== null){
            inverror.remove();
        }
        let error_req = document.createElement("p")
        error_req.classList.add("error_color","error_font")
        error_req.id = `${element}_required_error`
        error_req.appendChild(error_text)
        containers[element].appendChild(error_req)
    }
}
// invalid error
const invaliderror = (element)=>{
    let inverror = document.getElementById(`${element}_invalid_error`)
    let reqerror = document.getElementById(`${element}_required_error`)
    let error_text = document.createTextNode(`Must be a valid ${element}`)
    let error_text_yr = document.createTextNode("Must be in the past")
    if (element === "year"){
        if (inverror === null){
            if (reqerror !== null){
                reqerror.remove();
            }
            let error_inv = document.createElement("p")
            error_inv.classList.add("error_color","error_font")
            error_inv.id = `${element}_invalid_error`
            error_inv.appendChild(error_text_yr)
            containers[element].appendChild(error_inv)
        }
    } else {
        if (inverror === null){
            if (reqerror !== null){
                reqerror.remove();
            }
            let error_inv = document.createElement("p")
            error_inv.classList.add("error_color","error_font")
            error_inv.id = `${element}_invalid_error`
            error_inv.appendChild(error_text)
            containers[element].appendChild(error_inv)
        }   
    }  
}
// error cleanup
const error_cleanup = ()=>{
    let input_elements = ["day","month","year"]
    for ( i in input_elements){
        if (input_elements[i] === "day"){
            if (document.getElementById(`${input_elements[i]}_required_error`) !== null){
                document.getElementById(`${input_elements[i]}_required_error`).remove()
            }
            if(document.getElementById(`${input_elements[i]}_invalid_error`) !== null){
                document.getElementById(`${input_elements[i]}_invalid_error`).remove()
            }
        } else if (input_elements[i] === "month"){
            if (document.getElementById(`${input_elements[i]}_required_error`) !== null){
                document.getElementById(`${input_elements[i]}_required_error`).remove()
            } else if(document.getElementById(`${input_elements[i]}_invalid_error`) !== null){
                document.getElementById(`${input_elements[i]}_invalid_error`).remove()
            }
        } else if (input_elements[i] === "year"){
            if (document.getElementById(`${input_elements[i]}_required_error`) !== null){
                document.getElementById(`${input_elements[i]}_required_error`).remove()
            } else if(document.getElementById(`${input_elements[i]}_invalid_error`) !== null){
                document.getElementById(`${input_elements[i]}_invalid_error`).remove()
            }
        }
    }
}
// error message 
const errormessage = (error,element)=>{
    for (i in element){
        if (element[i] === "day"){
            if (error === "required"){
                requirederror(element[i])
            } else if(error === "invalid"){
                invaliderror(element[i])
            }
        } else if(element[i] === "month"){
            if (error === "required"){
                requirederror(element[i])
            } else if(error === "invalid"){
                invaliderror(element[i])
            }
        } else if(element[i] === "year"){
            if (error === "required"){
                requirederror(element[i])
            } else if(error === "invalid"){
                invaliderror(element[i])
            }
        }
    }
}
// Required input missing logic 
const requiredinputmissing = (error,element)=>{
    if(day_input.value === ""){
        element.push("day")
        changetored()
        errormessage(error,element)
        element.pop()
    }
    if(month_input.value === ""){
        element.push("month")
        changetored()
        errormessage(error,element)
        element.pop()
    }
    if(year_input.value === ""){
        element.push("year")
        changetored()
        errormessage(error,element)
        element.pop()
    }
}

// when submit button is clicked
submit.addEventListener("click",() => {

    // types of errors
    let errors = ["required","invalid"]
    // elements with the error
    let element = []

    // Error handling

    error_cleanup()
    // Required input missing
    requiredinputmissing("required",element)

})





