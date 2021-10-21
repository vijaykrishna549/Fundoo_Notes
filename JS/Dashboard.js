window.addEventListener('DOMContentLoaded', function () {
    let Tdiv;



    console.log($)

    const Notes1 = document.getElementById('notes1');
    const TakeNote1 = document.getElementById('takeNote1');
    const TakeNote2 = document.getElementById('takeNote2');
    const MainContainer = document.getElementById('main-container')
    const CloseButton = document.getElementById('close-button')
    const Title = document.getElementById('title2');
    const TitleNote = document.getElementById('title-notes')
    const Archive = document.getElementById('archive')
    const CollabContainer = document.getElementById('collabContainer')
    const Collab = document.getElementById('collab')
    const CancelButton = document.getElementById('cancelButton')
    const SaveButton = document.getElementById('saveButton')
    const AddColors = document.getElementById('color-popup')
    const Popup = document.getElementById("myPopup");

    const NotesContainer = document.getElementById('flex-container')
    const NotesDiv = document.querySelector('.notes-div')
    const IconDiv = document.getElementsByClassName('iconDiv')
    const NoteArchive = document.querySelector("#Iarchive")
    const NoteTrash = document.querySelector("#Itrash")

    const Trash1 = document.querySelector("#trash2")
    const Archive1 = document.querySelector("#archive2")
    const Notes2 = document.querySelector("#exnotes")

    const expandSidebar = document.querySelector('.expand-sidebar')
    const shrinkSidebar = document.querySelector('.shrink-sidebar')

    const shrinkTrash = document.querySelector("#sh")
    const shrinkArchive = document.querySelector("#shrinkArchive")

    const collabInput = document.querySelector("#collabInput")
    const Colt = document.querySelector('.colt')
    const Owners = document.querySelector('.owners')
    const collabArray1 = [];
    const collabDiv = document.querySelector(".collabDiv")
    const timeReminder = document.querySelector("#timeReminder")
    const timePopper = document.querySelector('.timePopper')
    // const saveTime = document.querySelector('.saveTime')
    const dypop = document.querySelector('.dypop')
    const mcloseButton = document.getElementById('mclose-button')
    const modal = document.querySelector(".modal")
    const modalTitle = document.getElementById('modal-title')
    const modalNotes = document.getElementById('modal-notes')
    const datepicker = document.getElementById('datepicker')
    const timepicker = document.getElementById('timepicker')
    const saveTime = document.getElementById('saveTime')
    const ownerMap = document.querySelector('.ownerMap')
    const colors = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]

    let nts = [];
    // const obj = {...names};

    function ajaxGet(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                    // console.log(xhr.response, xhr.responseXML);
                    resolve(xhr.response)
                }
            };
            xhr.open('GET', url, true);
            xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onerror = reject;

            xhr.send()

        });
    }

    ajaxGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
        .then(function (result1) {
            console.log("hello")
            // console.log(result1)
            let Res = JSON.parse(result1);
            //   console.log(Res.data.data);
            let Response = Res.data.data;
            console.log(Response)



            let notesArray = Response.filter(data => data.isArchived == false && data.isDeleted == false)
            nts = notesArray
            // nts = {...notesArray};
            console.log(nts);

            console.log(notesArray)
            NotesContainer.innerHTML = notesArray.map((note) =>
                `<div class ="note" id =${note.id} style="background-color:${note.color}"; > 
              
                              <div class="dypop" id=${note.id}>
              
                              </div>
              
                             
                             <div class ="tDiv" id =${note.id}>
                             <div>${note.title}</div>
                             </div>
              
                             <div class ="dDiv" id =${note.description}>
                             ${note.description}
                             </div>
              
                             <div class= "ownerListing"> ${note.collaborators.map(user => `
                             
                             <i class="material-icons 
                                 small">account_circle</i>
                                 `)}
                             
                             </div>
              
                             <div class="remiderListing"> 
                             ${note.reminder.map(rem => `
                                 
                             <div class ="chip">
                             <i class="material-icons small" id ="sTime">access_time</i>    ${note.reminder}</div>    
                           
                             `)}
                             
                             </div>
              
              
                             <div class ="iconDiv" id ="iii">
                             <div class="ex ">
                                  <i class="material-icons">notifications</i>
                              </div>
              
                              <div class="ex ">
                              <i class="material-icons">person_add</i>
                             </div>
              
                              <div class="Icolor" id=${note.id}>
                               <i class="material-icons" id =${note.id}>color_lens</i>
                             </div>
              
                             <div class="ex ">
                              <i class="material-icons">insert_photo</i>
                              </div>
              
                             <div class="ex" id= "Iarchive">
                                 <i class="material-icons" id =${note.id}>archive</i>
                              </div>
              
                              <div class="ex" id="Itrash">
                              <i class="material-icons" id =${note.id}>delete</i>
                          </div>
              
                          <div class="ex" >
                          <i class="material-icons" id =${note.id}>more_vert</i>
                       </div>
              
                             </div>
                            
                          
                   
              
              
                            
                            
                             
                             </div>`
            ).join('');


        })



    //   .catch(function(error) {
    //     console.log(error)
    //   // An error occurred
    // });


    // requirejs(['../service/DataService.js'], (methods) => {

    //     methods.getNotes().then(function (getResponse) {
    //         let Responsee = getResponse.data.data.data;
    //         console.log(Responsee);
    //         let notesArray = Responsee.filter(data => data.isArchived == false && data.isDeleted == false)
    //         nts = notesArray
    //         // nts = {...notesArray};
    //         console.log(nts);

    //         console.log(notesArray)
    //         NotesContainer.innerHTML = notesArray.map((note) =>
    //             `<div class ="note" id =${note.id} style="background-color:${note.color}"; > 

    //             <div class="dypop" id=${note.id}>

    //             </div>


    //            <div class ="tDiv" id =${note.id}>
    //            <div>${note.title}</div>
    //            </div>

    //            <div class ="dDiv" id =${note.description}>
    //            ${note.description}
    //            </div>

    //            <div class= "ownerListing"> ${note.collaborators.map(user => `

    //            <i class="material-icons 
    //                small">account_circle</i>
    //                `)}

    //            </div>

    //            <div class="remiderListing"> 
    //            ${note.reminder.map(rem =>`
    //            <i class="material-icons small">access_time</i>         
    //            ${note.reminder}
    //            `)}

    //            </div>


    //            <div class ="iconDiv" id ="iii">
    //            <div class="ex ">
    //                 <i class="material-icons">notifications</i>
    //             </div>

    //             <div class="ex ">
    //             <i class="material-icons">person_add</i>
    //            </div>

    //             <div class="Icolor" id=${note.id}>
    //              <i class="material-icons" id =${note.id}>color_lens</i>
    //            </div>

    //            <div class="ex ">
    //             <i class="material-icons">insert_photo</i>
    //             </div>

    //            <div class="ex" id= "Iarchive">
    //                <i class="material-icons" id =${note.id}>archive</i>
    //             </div>

    //             <div class="ex" id="Itrash">
    //             <i class="material-icons" id =${note.id}>delete</i>
    //         </div>

    //         <div class="ex" >
    //         <i class="material-icons" id =${note.id}>more_vert</i>
    //      </div>

    //            </div>








    //            </div>`
    //         ).join('');


    //     })
    // })




    let TITLE;
    let TITLENOTES;
    let isArchive = false;
    let isDeleted = false;
    let COLOR = "";
    let mTitle;
    let mNotes;
    let Time;
    let Date;
    let TimeAndDate;
    // let isTrash = false;


    Notes2.addEventListener('click', function () {
        document.querySelector(".keep").innerHTML = "Keep";
        requirejs(['../JS/mappingNotes.js'], (mapArray) => {
            mapArray.mapNotes('notes')
        })
    })


    Archive1.addEventListener('click', function () {
        console.log('clicked Archive')
        document.querySelector(".keep").innerHTML = "Archive";
        requirejs(['../JS/mappingNotes.js'], (mapArray) => {
            mapArray.mapNotes('archieve')

        })
    })

   
    // document.addEventListener('click', function(event){
    //     if(event.target.closest('#takeNote1')){
    //         TakeNote1.style.display = 'none';
    //         TakeNote2.style.display = 'block';
    //     }
         
    //     else{
    //         TakeNote1.style.display = 'block';
    //         TakeNote2.style.display = 'none';
        
    //  }
    //  })



    Trash1.addEventListener('click', function () {
        document.querySelector(".keep").innerHTML = "Trash";
        requirejs(['../JS/mappingNotes.js'], (mapArray) => {
            mapArray.mapNotes('trash')
        })
    })


    // if (screen.width < 400) {
    //     expandSidebar.style.display = 'none';
    //     shrinkSidebar.style.display = 'flex';
        


    // }

    // shrinkTrash.addEventListener("mouseover", function(){
    //     console.log('hai')
    // })

    $("#sh").on("hover", function(event) {
        if(event.type == "mouseenter") {
            $("#sh").css("background-color", "yellow");
            console.log('moseEvent')
        }
        else if (event.type == "mouseleave") {
            $("p").css("background-color", "red");
          
        }
      });

    shrinkTrash.addEventListener('click', function () {
        console.log('shrink');

        document.querySelector(".keep").innerHTML = "Trash";
        requirejs(['../JS/mappingNotes.js'], (mapArray) => {
            mapArray.mapNotes('trash')
        })
    })

    shrinkArchive.addEventListener('click', function(){
        document.querySelector(".keep").innerHTML = "Archive";
        requirejs(['../JS/mappingNotes.js'], (mapArray) => {
            mapArray.mapNotes('archieve')

        })

    })


    // Archive.addEventListener('click', function () {
    //     isArchive = !isArchive;

    // })

    let archResponset = "";
    // document.querySelector(".profile-img").addEventListener('click', function () {
    //     console.log('profile')

    //     requirejs(['../service/DataService.js'], (methods) => {
    //         console.log(methods)
    //         methods.logout().then(function (outResponse) {
    //             location.reload();
    //             console.log(outResponse)
    //             console.log('haithere')
    //         })

    //     });
    // })

    $(document).on('click', '#Iarchive', function (event) {
        isArchive = !isArchive;
        console.log('archivetrue')
        console.log(event.target.id)

        let obj2 =
        {
            "noteIdList": [event.target.id],
            "isArchived": isArchive
        }

        console.log(obj2)
        let arObject = JSON.stringify(obj2);

        function ajaxPost(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('POST', url, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;

                xhr.send(arObject)

            });
        }

        function ajaxGet(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        // console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('GET', url, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;

                xhr.send()

            });
        }

        ajaxPost(`http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes`)
            .then(function (result) {
                console.log("hii")
                console.log(result);


                ajaxGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
                    .then(function (result1) {
                        console.log("hello")

                        let Res2 = JSON.parse(result1);
                        //   console.log(Res.data.data);
                        let Response2 = Res2.data.data;
                        console.log(Response2)
            
            
            
                        let notesArray2 = Response2.filter(data => data.isArchived == false && data.isDeleted == false)
                        nts2 = notesArray2
                        // nts = {...notesArray};
                        console.log(nts2);
            
                        console.log(notesArray2)
                        NotesContainer.innerHTML = notesArray2.map((note) =>
                            `<div class ="note" id =${note.id} style="background-color:${note.color}"; > 
                          
                                          <div class="dypop" id=${note.id}>
                          
                                          </div>
                          
                                         
                                         <div class ="tDiv" id =${note.id}>
                                         <div>${note.title}</div>
                                         </div>
                          
                                         <div class ="dDiv" id =${note.description}>
                                         ${note.description}
                                         </div>
                          
                                         <div class= "ownerListing"> ${note.collaborators.map(user => `
                                         
                                         <i class="material-icons 
                                             small">account_circle</i>
                                             `)}
                                         
                                         </div>
                          
                                         <div class="remiderListing"> 
                                         ${note.reminder.map(rem => `
                                             
                                         <div class ="chip">
                                         <i class="material-icons small" id ="sTime">access_time</i>    ${note.reminder}</div>    
                                       
                                         `)}
                                         
                                         </div>
                          
                          
                                         <div class ="iconDiv" id ="iii">
                                         <div class="ex ">
                                              <i class="material-icons">notifications</i>
                                          </div>
                          
                                          <div class="ex ">
                                          <i class="material-icons">person_add</i>
                                         </div>
                          
                                          <div class="Icolor" id=${note.id}>
                                           <i class="material-icons" id =${note.id}>color_lens</i>
                                         </div>
                          
                                         <div class="ex ">
                                          <i class="material-icons">insert_photo</i>
                                          </div>
                          
                                         <div class="ex" id= "Iarchive">
                                             <i class="material-icons" id =${note.id}>archive</i>
                                          </div>
                          
                                          <div class="ex" id="Itrash">
                                          <i class="material-icons" id =${note.id}>delete</i>
                                      </div>
                          
                                      <div class="ex" >
                                      <i class="material-icons" id =${note.id}>more_vert</i>
                                   </div>
                          
                                         </div>
                                        
                                                                             
                                         </div>`

                        ).join('');

                        // console.log(result1)
                    })

            }).catch(function (error) {
                console.log(error)
                // An error occurred
            });


    })


    $(document).on('click', '#Itrash', function (event) {
        isDeleted = !isDeleted;
        console.log('deletetrue')
        console.log(event.target.id)

        let obj3 =
        {

            "noteIdList": [event.target.id],
            // "isArchived" : isArchive,
            "isDeleted": isDeleted
        }

        console.log(obj3)




        let trObject = JSON.stringify(obj3);

        function ajaxPost(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('POST', url, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;

                xhr.send(trObject)

            });
        }

        function ajaxGet(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        // console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('GET', url, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;

                xhr.send()

            });
        }

        ajaxPost(`http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes`)
            .then(function (result) {
                console.log("hii")
                console.log(result);


                ajaxGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
                    .then(function (result1) {
                        console.log("hello")

                        let Res3 = JSON.parse(result1);
                        //   console.log(Res.data.data);
                        let Response3 = Res3.data.data;
                        console.log(Response3)
            
            
            
                        let notesArray3 = Response3.filter(data => data.isArchived == false && data.isDeleted == false)
                        nts3 = notesArray3
                        // nts = {...notesArray};
                        console.log(nts3);
            
                        console.log(notesArray3)
                        NotesContainer.innerHTML = notesArray3.map((note) =>
                            `<div class ="note" id =${note.id} style="background-color:${note.color}"; > 
                          
                                          <div class="dypop" id=${note.id}>
                          
                                          </div>
                          
                                         
                                         <div class ="tDiv" id =${note.id}>
                                         <div>${note.title}</div>
                                         </div>
                          
                                         <div class ="dDiv" id =${note.description}>
                                         ${note.description}
                                         </div>
                          
                                         <div class= "ownerListing"> ${note.collaborators.map(user => `
                                         
                                         <i class="material-icons 
                                             small">account_circle</i>
                                             `)}
                                         
                                         </div>
                          
                                         <div class="remiderListing"> 
                                         ${note.reminder.map(rem => `
                                             
                                         <div class ="chip">
                                         <i class="material-icons small" id ="sTime">access_time</i>    ${note.reminder}</div>    
                                       
                                         `)}
                                         
                                         </div>
                          
                          
                                         <div class ="iconDiv" id ="iii">
                                         <div class="ex ">
                                              <i class="material-icons">notifications</i>
                                          </div>
                          
                                          <div class="ex ">
                                          <i class="material-icons">person_add</i>
                                         </div>
                          
                                          <div class="Icolor" id=${note.id}>
                                           <i class="material-icons" id =${note.id}>color_lens</i>
                                         </div>
                          
                                         <div class="ex ">
                                          <i class="material-icons">insert_photo</i>
                                          </div>
                          
                                         <div class="ex" id= "Iarchive">
                                             <i class="material-icons" id =${note.id}>archive</i>
                                          </div>
                          
                                          <div class="ex" id="Itrash">
                                          <i class="material-icons" id =${note.id}>delete</i>
                                      </div>
                          
                                      <div class="ex" >
                                      <i class="material-icons" id =${note.id}>more_vert</i>
                                   </div>
                          
                                         </div>
                                                                 
                                         </div>`

                        ).join('');

                        // console.log(result1)
                    })

            }).catch(function (error) {
                console.log(error)
                // An error occurred
            });

    })






    $(document).on('click', '.test', function (event) {
        console.log('test1', event.target.id)
        COLOR = event.target.id
        document.getElementById('takeNote2').style.backgroundColor = COLOR

    })

    AddColors.addEventListener('click', function () {
        Popup.classList.toggle("show");
        if (document.querySelector(".show") != null) {
            document.querySelector(".show").innerHTML = colors.map(function (color) {
                return `<div class = "test"  id=${color}
                style="background-color:${color};  width:30px; height:25px; border-radius: 50%;
                  margin: 2px 2px 2px 2px;"></div>`;
            }).join(" ");

        }
    })



    $(document).on('click', '.dypop', function () {
        // document.getElementById('.note').style.backgroundColor = COLOR

        // console.log('pppppppplokjhgfcvh')
    })


    $(document).on("click", '.Icolor', function (event) {
        let a = "#" + event.currentTarget.id + ".dypop"
        // $(".dypop").show()
        $(a).css("display", "flex")


        console.log(event.target.id)
        let NOTEID = event.target.id
        console.log(NOTEID)

        // document.getElementById(a).getElementsByClassName("dypop")[0].innerHTML = "Goodbye world"

        $(a).html(`<div class="chooseColor color1" id="#fff" style="background-color:#fff"> </div>
        <div class="chooseColor color2" id="#f28b82"" style="background-color:#f28b82"> </div>
        <div class="chooseColor color3" id="#fbbc04" style="background-color:#fbbc04"> </div>
        <div class="chooseColor color4" id="#fff475" style="background-color:#fff475"> </div>
        <div class="chooseColor color5" id="#ccff90" style="background-color:#ccff90"> </div>
        <div class="chooseColor color6" id="#a7ffeb" style="background-color:#a7ffeb"> </div>
        <div class="chooseColor color7" id="cbf0f8" style="background-color:#cbf0f8"> </div>
        <div class="chooseColor color8" id="#aecbfa" style="background-color:#aecbfa"> </div>
        <div class="chooseColor color9" id="#d7aefb" style="background-color:#d7aefb"> </div>
        <div class="chooseColor color10" id="#fdcfe8" style="background-color:#fdcfe8"> </div>
        <div class="chooseColor color11" id="#e6c9a8" style="background-color:#e6c9a8"> </div>
        <div class="chooseColor color12" id="#e8eae" style="background-color:#e8eae"> </div>
        `)

        $(document).on('click', '.chooseColor', function (e) {
            updateColor = e.currentTarget.id
            console.log(e.currentTarget.id)
            console.log(updateColor)

            let obj4 = {

                noteIdList: [NOTEID],

                color: updateColor,

            }
            console.log(obj4)
            requirejs(['../service/DataService.js'], (methods) => {
                console.log(methods)
                methods.colorNotes(obj4).then(function (colorResponse) {
                    location.reload();
                    console.log(colorResponse)
                })

                methods.getNotes().then(function (getResponse) {
                    console.log(getResponse.data.data.data);
                })

            });

        })
    })









    Title.addEventListener('change', function () {
        TITLE = Title.value;
    })

    TitleNote.addEventListener('change', function () {
        TITLENOTES = TitleNote.value;
    })


    Notes1.addEventListener('click', function notes() {
        TakeNote1.style.display = "none"

        TakeNote2.style.display = "flex"
        NotesContainer.style.marginTop = "22%"
        TakeNote2.style.backgroundColor = "white"

        if (screen.width < 400) {
            NotesContainer.style.marginTop = "74%"
        }
        else if (screen.width < 800 && screen.width > 450) {
            NotesContainer.style.marginTop = "55%"
        }
    })



    timeReminder.addEventListener('click', function () {
        // console.log('hello')
        timePopper.style.display = "flex";
    })

    saveTime.addEventListener('click', function () {
        // console.log(Time + ' ' + Date)
        timePopper.style.display = "none"
        TimeAndDate = Time + ' ' + Date
        console.log(TimeAndDate)
        // timepicker.value = Time;
        // datepicker.value = Date;

        // console.log(Time)
    })


    
    timepicker.addEventListener('change', function () {
        Time = timepicker.value;
        console.log(Time)
    })
    datepicker.addEventListener('change', function () {
        Date = datepicker.value;
        console.log(Date)
    })






    Collab.addEventListener('click', function () {
        TakeNote2.style.display = 'none';
        TakeNote1.style.display = 'none'
        CollabContainer.style.display = "block"
        NotesContainer.style.marginTop = "25%"
        if (screen.width < 400) {
            NotesContainer.style.marginTop = "80%"
        }
        else if (screen.width < 800 && screen.width > 450) {
            NotesContainer.style.marginTop = "60%"
        }
    })



    CancelButton.addEventListener('click', function () {
        CollabContainer.style.display = "none"
        TakeNote2.style.display = "block"
        Colt.style.display = "none"
    })

    let art;



    SaveButton.addEventListener('click', function () {
        CollabContainer.style.display = "none"
        TakeNote2.style.display = "block"
        Colt.style.display = "none"

        let colArray = collabArray1.map(function (el) {
            return `<div class="own">
            
            <div class="col">
                    <i class="material-icons 
                        large">account_circle</i>

                </div>
        
            </div>`

        }).join(" ");

        Owners.innerHTML = colArray;
        // ownerMap.innerHTML =colArray;
        console.log(colArray)

    })

    // let art;



    collabInput.addEventListener('change', function () {
        Colt.style.display = "flex"
        // console.log("hellookjfhgvwqjb")


        let searchWord = collabInput.value
        let obj5 =
        {
            "searchWord": searchWord
        }

        // console.log(searchWord)
        console.log(obj5)
        requirejs(['../service/DataService.js'], (methods) => {
            console.log(methods)
            methods.collabNotes(obj5).then(function (collabResponse) {
                console.log(collabResponse)
                let Responsee2 = collabResponse.data.data.details;
                // console.log(Responsee2)



                let resArray = Responsee2.map(function (elemet) {
                    return `<div class ="tesdsd"  style="background-color:"; > 

               

                    <div class ="collabDiv" id =${elemet.email} >

                    <div class="collabList" id = ${elemet.email}>${elemet.email} </div>
                    </div>
     
                   
                    <div>`

                }).join(" ");


                Colt.innerHTML = resArray;
                $(document).on('click', '.collabList', function (event) {
                    let obj6 = Responsee2.find(user => user.email == event.target.id)
                    console.log(obj6)
                    collabArray1.push(obj6);
                    console.log(collabArray1)
                    console.log(obj6.email)

                    // collabInput.value = obj6.email

                    art = collabArray1.map(function(pop){

                        return `<div class="own">
            
                        <div class="col">
                                <i class="material-icons 
                                    large">account_circle</i>
                                    <div class = "owl" id="${pop.email}" > ${pop.email} </div>
            
                            </div>
                    
                        </div>`
                        
                        

                    }).join(' ');
                    // Colt.style.display = 'none';


                    ownerMap.innerHTML = art;


                    // map list of owners

                })




            })
        });


    })











    CloseButton.addEventListener('click', dataService);
    function dataService() {
        TakeNote1.style.display = "inherit";
        TakeNote2.style.display = "none"

        console.log("addNotes")
        // let obj1 =

        // {
        //     "title": TITLE,
        //     "description": TITLENOTES,
        //     "isArchived": isArchive,
        //     "color": COLOR
        // }
        const data = new FormData();
        data.append("title", TITLE);
        data.append("description", TITLENOTES);


        data.append("color", COLOR);
        data.append("reminder", TimeAndDate)

        data.append("collaberators", JSON.stringify(collabArray1));
        console.log(collabArray1);
        console.log(data);
        // document.getElemen




        requirejs(['../service/DataService.js'], (methods) => {

            console.log(methods)
            methods.addNotes(data).then(function (response) {
                location.reload();
                console.log(response)
                console.log(response.status)


            })

            methods.getNotes().then(function (getResponse) {
                let fg = getResponse.data.data.data
                console.log(fg);
            })

        });


    }









    modalTitle.addEventListener('change', function (event) {
        console.log('modaltitle change')
        mTitle = modalTitle.value
        console.log(event.currentTarget.id)
        console.log(mTitle)
    })

    modalNotes.addEventListener('change', function () {
        console.log('modalnotes change')
        mNotes = modalNotes.value
        console.log(mNotes)
    })





    function openModal(noteEl, modalEl, modalContainerEl) {

        // Compute and apply the transform to deform the modal to cover the note with a transition to make it animate
        const transform = computeTransform(noteEl);
        modalEl.style.transform = transform;
        modalEl.style.transition = 'transform 250ms';

        // Setup the modal background animate in too
        modalContainerEl.style.backgroundColor = 'transparent';
        modalContainerEl.style.transition = 'background-color 250ms';

        // Show the modal
        modalContainerEl.classList.add('modal-container--open');

        // Put the rest in a setTimeout to allow the styles applied above to take
        // affect and render before we overwrite them with new ones below
        setTimeout(function () {
            // Remove the transform to allow the modal to return to it's natural shape and position
            modalEl.style.transform = 'none';
            modalContainerEl.style.backgroundColor = 'rgba(33, 33, 33, 0.5)';
        }, 0)
    }

    function computeTransform(noteEl) {

        // Modal positions here are hardcoded to match styles set in CSS
        const modalTop = 150;
        const modalLeft = (document.body.offsetWidth / 2) - 300;
        const modalWidth = 600;
        const modalHeight = 150;

        // Get note div's position relative to the viewport
        const notePosition = noteEl.getBoundingClientRect();

        // Compute a CSS transform that moves the modal to match the note's position
        const translateX = notePosition.left - modalLeft;
        const translateY = notePosition.top - modalTop;
        const scaleX = notePosition.width / modalWidth;
        const scaleY = notePosition.height / modalHeight;

        return `translateX(${translateX}px) translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY})`;
    }

    // Handle click events using event delegation
    $(document).on('click', '.tDiv', function (event) {
        // const modalContainerEl = document.querySelector('.modal-container');
        //     const modalEl = document.querySelector('.modal');
        //     openModal(event.target, modalEl, modalContainerEl);

        let updateId = event.target.id;
        console.log(event.target.id);
        console.log(updateId);



        console.log("haiiikj")

        let object = nts.find(note => note.id == event.target.id)
        console.log(object);
        // const modaltitle = document.getElementById('modal-title')
        // modaltitle.value = object.title

        document.querySelector('#modal-title').value = object.title

        document.querySelector('#modal-notes').value = object.description


        const modalContainerEl = document.querySelector('.modal-container');
        const modalEl = document.querySelector('.modal');
        openModal(event.target, modalEl, modalContainerEl);

        // Handle click event on modal background element (close modal)
        if (event.target.classList.contains('modal-container')) {
            event.target.classList.remove('modal-container--open');
        }

        mcloseButton.addEventListener('click', function () {
            console.log('clickedddd')
            modal.style.display = "none"
            document.querySelector(".modal-container").style.display = "none"

            let obj7 =
            {
                noteId: updateId,
                title: mTitle,
                description: mNotes
            }

            console.log(obj7)



            requirejs(['../service/DataService.js'], (methods) => {

                console.log(methods)
                methods.updateNotes(obj7).then(function (updateResponse) {
                    location.reload();
                    console.log(updateResponse)
                    console.log(updateResponse.status)


                })

                methods.getNotes().then(function (getResponse) {
                    let acc = getResponse.data.data.data
                    console.log(acc);

                })

            });

        })



    })





})