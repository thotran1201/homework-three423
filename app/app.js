function initListeners() {
    $("#submit").click((e) => {
        e.preventDefault();

        let allUsers = JSON.parse(localStorage.getItem("Person"));

        let fn = $("#firstName").val();
        let ln = $("#lastName").val();
        let sAge = $("#studentAge").val();
        let pNumber = $("#phoneNumber").val();
        let eAddress = $("#emailAddress").val();
        let sClass = $("#studentClass").val();

        if(fn != "" && ln != "" && sAge != "" && pNumber != "" && eAddress != "" && sClass != "") {
            let userObj = {
                fname: fn,
                lname: ln,
                age: sAge,
                number: pNumber,
                email: eAddress,
                class: sClass,
            };
            allUsers.push(userObj);
            //console.log(users);
            localStorage.setItem("Person", JSON.stringify(allUsers));
            // console.log(localStorage.getItem("Person"));

            $("#firstName").val("");
            $("#lastName").val("");
            $("#studentAge").val("");
            $("#phoneNumber").val("");
            $("#emailAddress").val("");
            $("#studentClass").val("");
        } else {
            alert("Enter your first and last name, along with your age, number, email, and class");
        }
    });

    $("#getName").click((e) => {
        e.preventDefault();
        $("#app").html("");
        console.log("hello");
        let allUsers = JSON.parse(localStorage.getItem("Person"));

        $.each(allUsers, function (idx, user) {
            console.log(user.fname);
            $("#app").append(`<p> name: ${user.fname} ${user.lname}</p> <p>age: ${user.age}</p> <p>number: ${user.number}</p> <p>email: ${user.email}</p> <p>class: ${user.class}</p><br>`);
        });
        // for (let i = 0; i < allUsers.length; index++) {
        //     console.log(allUsers[i].fName);
        //     console.log(allUsers[i].lName);
        // }
    });
}

function initSite() {
    if (localStorage) {
        let people = localStorage.getItem("Person");
        //console.log(people);
        if (people) {
            let persons = JSON.parse(localStorage.getItem("Person"));
            console.log(persons);
        } else {
            localStorage.setItem("Person", "[]");
            alert("No people added yet");
        }
        // console.log("I have it!");
        // localStorage.setItem("Person", JSON.stringify(userObj));
        // console.log(localStorage.getItem("Person"));
        // let retrievedObj = JSON.parse(localStorage.getItem("Person"));
        // console.log(retrievedObj);
    } else {
        console.log("No Localstorage");
    }
}

$(document).ready(function () {
    initListeners();
    initSite();
});
