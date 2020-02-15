  
function validate() 
{
    var errorlog = "";
    var eventType = true;
    if (document.getElementById("eventType").value == "invalid")
    {
        eventType = false;
        errorlog = errorlog + "<br>Please enter a valid Event Type";
    }

    var eventTitle = true;
    if (document.getElementById("eventTitle").value == "") 
    {
        eventType = false;
        errorlog = errorlog + "<br>Please enter a valid Event Title";
    }

    var eventDate = true;
    if (document.getElementById("eventStart").value > document.getElementById("eventEnd").value || document.getElementById("eventStart").value == "" || document.getElementById("eventEnd").value == "")
    {
        eventDate = false;
        errorlog = errorlog + "<br>Please enter a valid Event Dates";
    }

    var postingDate = true;
    if (document.getElementById("postDate").checkValidity() == false) 
    {
        postingDate = false;
        errorlog = errorlog + "<br>Please enter a valid Posting Date";
    }
    
    var checkBox = true;
    var a = 0;
    for (var b = 1; b <= 5; b++)
    {
        if (document.getElementById("question" + b).checked) a++;
    }

    if (a == 0) 
    {
        errorlog = errorlog + "<br>Please choose an option in the check boxes before submitting";
    }

    if (eventType && eventTitle && eventDate && postingDate) 
    {
        document.getElementById("errorLog").innerHTML = "Your entry has been created.";
    }

    else 
    {
        document.getElementById("errorLog").innerHTML = errorlog;
        return false;
    }
}

function clearForm()
 {
    document.getElementById("eventType").value = "invalid";
    document.getElementById("eventTitle").value = "";
    document.getElementById("eventStart").value = "";
    document.getElementById("eventEnd").value = "";
    document.getElementById("postDate").value = "";
    document.getElementById("errorLog").innerHTML = "Your entry has been cancelled."
}
