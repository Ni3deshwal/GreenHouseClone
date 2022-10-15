
  // open job roles
  let openjobs = {
    roles: [
      {
        image:
          "https://sharp.services.greenhouse.io/production/resources/Man-working-on-laptop-at-home.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a211b673e1b37c8bbc8485097f6c0dd1c720a996d8b0c39c3edb3f9783ba7916",
        role: "Java Developer",
        company: "Adobe",
        place: "British Columbia",
        content:
          "We provide stability, product development best practices, and an environment where every engineer directly impacts the success of our software. As a member of the engineering team, you will be the driver of a swift software release cycle and be given the ability to select which projects you’ll work on based on its value added.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElsEwLKOTemqJgMi18qQBTB4p0X8iSF2xtg&usqp=CAU",
        role: "JavaScript Developer",
        company: "Uber",
        place: "British Columbia",
        content:
          "We provide stability, product development best practices, and an environment where every engineer directly impacts the success of our software. As a member of the engineering team, you will be the driver of a swift software release cycle and be given the ability to select which projects you’ll work on based on its value added.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1577071835592-d5d55ffef660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        role: "JavaScript Developer",
        company: "Google",
        place: "British Columbia",
        content:
          "We provide stability, product development best practices, and an environment where every engineer directly impacts the success of our software. As a member of the engineering team, you will be the driver of a swift software release cycle and be given the ability to select which projects you’ll work on based on its value added.",
      },
      {
        image:
          "https://sharp.services.greenhouse.io/production/resources/Man-working-on-laptop-at-home.jpg?auto=format&fit=max&lossless=true&q=90&w=1440&s=a211b673e1b37c8bbc8485097f6c0dd1c720a996d8b0c39c3edb3f9783ba7916",
        role: "Java Developer",
        company: "Microsoft",
        place: "British Columbia",
        content:
          "We provide stability, product development best practices, and an environment where every engineer directly impacts the success of our software. As a member of the engineering team, you will be the driver of a swift software release cycle and be given the ability to select which projects you’ll work on based on its value added.",
      },
    ],
  };

  let openJobsArr = openjobs.roles;

  document.querySelector(".icon").addEventListener("click", filterData);

  function filterData(event) {
    event.preventDefault();
    let position = document.querySelector(".srvinput").value;

    let filteredArr = openJobsArr.filter(function (ele) {
      return ele.role == position;
    });

    display(filteredArr);
    // localStorage.setItem("ghJobList", JSON.stringify(filteredArr));
  }

  function display(filteredArr) {
    document.querySelector(".showPositions").innerHTML = "";

    if (filteredArr.length == 0) {
      let div = document.createElement("p");
      div.innerText = "No Results";
      div.setAttribute("class", "error-message");
      document.querySelector(".showPositions").append(div);
    } else {
      filteredArr.map(function (ele) {
        // data section
        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class", "dataDiv");

        let role = document.createElement("p");
        role.setAttribute("class", "role");
        role.innerHTML = ele.role;

        let company = document.createElement("p");
        company.setAttribute("class", "company");
        company.innerHTML = ele.company;

        let place = document.createElement("p");
        place.setAttribute("class", "place");
        place.innerHTML = ele.place;

        let content = document.createElement("p");
        content.setAttribute("class", "content");
        content.innerHTML = ele.content;

        let btn = document.createElement("BUTTON");
        let t = document.createTextNode("Apply");
        btn.setAttribute("class", "apply-button");
        btn.append(t);
        btn.addEventListener("click", function () {
          addToAppliedJobs(ele);
          btn.style.backgroundColor = "#58D68D";
          btn.innerText = "Applied";
        });

        dataDiv.append(role, company, place, content, btn);

        //image section
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "imageDiv");

        let img = document.createElement("img");
        img.setAttribute("class", "image");
        img.setAttribute("src", ele.image);

        imgDiv.append(img);

        //   append both div content and image
        let eachPosition = document.createElement("div");
        eachPosition.setAttribute("class", "each-position");
        eachPosition.append(dataDiv, imgDiv);

        document.querySelector(".showPositions").append(eachPosition);

        // append horizontal rule
        let hr = document.createElement("hr");
        hr.setAttribute("class", "hr");
        document.querySelector(".showPositions").append(hr);
      });
    }
  }

  //   onclicking apply button
  function addToAppliedJobs(ele) {
    let ghAppliedJobsArr =
      JSON.parse(localStorage.getItem("ghAppliedJobs")) || [];

    //   getting todays date
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //As January is 0.
    let yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    let date = dd + "-" + mm + "-" + yyyy;
    //   adding date to obj
    ele.date = date;

    ghAppliedJobsArr.push(ele);

    localStorage.setItem("ghAppliedJobs", JSON.stringify(ghAppliedJobsArr));
  }

  //   search bar start
  let suggestions = [
    "Web Designer",
    "Web Developer",
    "Full Stack Developer",
    "Mearn Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Java",
    "Java Developer",
    "JavaScript",
    "JavaScript Developer",
  ];

  // getting all required elements
  const searchWrapper = document.querySelector(".search-input");
  const inputBox = searchWrapper.querySelector("input");
  const suggBox = searchWrapper.querySelector(".autocom-box");
  const icon = searchWrapper.querySelector(".icon");
  let linkTag = searchWrapper.querySelector("a");
  let webLink;

  // if user press any key and release
  inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data) => {
        // passing return data inside li tag
        return (data = `<li>${data}</li>`);
      });
      searchWrapper.classList.add("active"); //show autocomplete box
      showSuggestions(emptyArray);
      let allList = suggBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
        //adding onclick attribute in all li tag
        allList[i].setAttribute("onclick", "select(this)");
      }
    } else {
      searchWrapper.classList.remove("active"); //hide autocomplete box
    }
  };

  function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    // filterData();
    searchWrapper.classList.remove("active");
  }

  function showSuggestions(list) {
    let listData;
    if (!list.length) {
      userValue = inputBox.value;

      listData = `<li>${userValue}</li>`;
    } else {
      listData = list.join("");
    }
    suggBox.innerHTML = listData;
  }
  // search bar end