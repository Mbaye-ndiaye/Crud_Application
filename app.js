// fontion
function validateForm() {
    var fisrtName = document.getElementById("name").value;
    var lastName = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // condition

    if (fisrtName == "") {
        alert('name is required')
        return false;
        
    }
    if (lastName == "") {
        alert('lastName is required')
        return false
    }

    if (email == "") {
       alert('Adress is required') 
       return false
    }

    else if(!email.includes('@')){
     alert('Invalid email adress')   
     return false;

    }

    if (phone == "") {
        alert('Phone is required')
        return false
    }
    return true;
     
}

function showData() {
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];

    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";
    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<tr>" + element.fisrtName + "</td>";
        html += "<td>" + element.lastName + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData(' + 
        index + 
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + 
        index + 
        ')" class="btn btn-warning m-2">Edit</button></td>';

        html +="</tr>"

    });

    document.querySelector("#crudTable tbody").innerHTML = html;
    
}

// load All data when document or page loaded

document.onload = showData();

// function to add data

function AddData() {
    // if form is validate

    if (validateForm() == true) {
        var fisrtName = document.getElementById("name").value;
        var lastName = document.getElementById("nom").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];

        } else {
            peopleList = JSON.parse(localStorage.getItem
                ("peopleList"))
        }

        peopleList.push({
           fisrtName : fisrtName,
            lastName : lastName,
            email : email,
            phone : phone,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();

        document.getElementById("name").value;
        document.getElementById("nom").value;
        document.getElementById("email").value;
        document.getElementById("phone").value;

    }


    
}

