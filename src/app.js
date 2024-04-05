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
const years_dom = document.getElementsByClassName("year_span")[0]
const month_dom = document.getElementsByClassName("month_span")[0]
const day_dom = document.getElementsByClassName("day_span")[0]

const daysinamonth = {
    1: 31,2:28,3: 31,4: 30,5: 31,6: 30,
    7: 31,8: 31,9: 30,10: 31,11: 30,12: 31
}

const isleap = (year)=> new Date(year,1,29).getDate() === 29

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
const requiredinputmissing = ()=>{
    let error = "required"
    let element = []
    let response = true;
    if(day_input.value === ""){
        element.push("day")
        changetored()
        errormessage(error,element)
        element.pop()
        response = false;
    }
    if(month_input.value === ""){
        element.push("month")
        changetored()
        errormessage(error,element)
        element.pop()
        response = false
    }
    if(year_input.value === ""){
        element.push("year")
        changetored()
        errormessage(error,element)
        element.pop()
        response = false
    }
    return response
}
// invalid input
const invalidinputlogic = ()=>{

    //current date
    let date = new Date()
    let cur_year = date.getFullYear()
    let cur_month = date.getMonth() + 1
    let cur_day = date.getDate()
    let elem = []

    // inputted values
    let inp_year = Number(year_input.value)
    let inp_month = Number(month_input.value)
    let inp_day = Number(day_input.value)

    // validated outputs
    let year_value = undefined
    let month_value = undefined
    let day_value = undefined

    // validating year
    if (cur_year - inp_year >= 0){
        year_value = inp_year
    } else {
        elem.push("year")
        changetored()
        errormessage("invalid",elem)
        elem.pop()
    }

    // validating month
    if (inp_month > 0 && inp_month <= 12){
        if (cur_year === inp_year){
            if (cur_month - inp_month >= 0){
                month_value = inp_month
            } else {
                elem.push("month")
                changetored()
                errormessage("invalid",elem)
                elem.pop()
            }  
        } else{
            month_value = inp_month
        }
    } else {
        elem.push("month")
        changetored()
        errormessage("invalid",elem)
        elem.pop()
    }
    // validating day 
    if (inp_day >= 1){
        if(isleap(year_value)){
            if(month_value === 2){
                if (cur_day <= 29){
                    day_value = inp_day
                } else{
                    elem.push("day")
                    changetored()
                    errormessage("invalid",elem)
                    elem.pop("day")
                }
            } else{
                day_value = inp_day
            }
        } else{
            if (inp_day <= daysinamonth[month_value]){
                day_value = inp_day
            } else{
                elem.push("day")
                changetored()
                errormessage("invalid",elem)
                elem.pop("day")
            }
        }
    } else {
        elem.push("day")
        changetored()
        errormessage("invalid",elem)
        elem.pop("day")
    } 

    if (day_value != undefined && month_value != undefined && year_value != undefined){
        return true
    } else{
        return false
    }
}
// output
const result = ()=>{

    // modifying dom 
    const modifyDom = (elem,value)=>{
        elem.innerHTML = value
    }

    // old date
    let old_year = Number(year_input.value)
    let old_month = Number(month_input.value)
    let old_day = Number(day_input.value)
    // current date
    let curr_date = new Date()
    let curr_year = curr_date.getFullYear()
    let curr_month = curr_date.getMonth() + 1
    let curr_day = curr_date.getDate()
    // outputs
    let day_value = 0
    let month_value = 0
    let year_value = 0

    // calculating day manually
    if (curr_day < old_day){
        curr_month = curr_month - 1
        if (isleap(old_year)){
            if(old_month === 3){
                day_value = (curr_day + (daysinamonth[ curr_month]+1)) - old_day
            }
            if(old_month === 1){
                day_value = (curr_day + (daysinamonth[12])) - old_day
            }
            day_value = day_value = (curr_day + (daysinamonth[curr_month])) - old_day
        } else {
            if(old_month === 1){
                day_value = (curr_day + (daysinamonth[12])) - old_day
            }
            day_value = (curr_day + (daysinamonth[curr_month])) - old_day
        }
    } else {
        day_value = curr_day - old_day
    }
    
    // calculating month manually
    if (curr_month < old_month){
        curr_year = curr_year - 1
        month_value = (curr_month + 12) - old_month
    } else {
        month_value = curr_month - old_month
    }

    // calculating year manually
    year_value = curr_year - old_year

    // presenting result
    modifyDom(years_dom,year_value)
    modifyDom(month_dom,month_value)
    modifyDom(day_dom,day_value)

}

// // The machine // //

// when submit button is clicked //
submit.addEventListener("click",() => {

    // Error handling //

    error_cleanup()
    // Required input missing
    requiredinputmissing()
    //invalid input 
    invalidinputlogic()

    // output //
    //  true being that input is not missing and is a valid input
    console.log(requiredinputmissing())
    console.log(invalidinputlogic())
    if (requiredinputmissing() && invalidinputlogic()){
        changetooriginal()
        result()
    }
})





