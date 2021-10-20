define([''], function () {

    let mapArray = {};

    mapArray.mapNotes = async function (data) {

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
                let getResponse = Res.data.data;
                console.log(getResponse)

                let arr1 = []
                if (data == "archieve") {
                    arr1 = getResponse.filter(note => note.isArchived == true && note.isDeleted == false);
                    console.log(arr1)
                }
                else if (data == "trash") {
                    arr1 = getResponse.filter(note => note.isDeleted == true && note.isArchived == false);
                    console.log(arr1)
                }
                else if (data == "notes") {
                    arr1 = getResponse.filter(note => note.isDeleted == false && note.isArchived == false);
                    console.log(arr1)
                }

                const NotesContainer = document.getElementById('flex-container')
                NotesContainer.innerHTML = arr1.map((note) =>
                    `<div class ="note" id =${note.id} style="background-color:${note.color}"; > 
 
                
                <div class ="tDiv" id =${note.title}>
                <div>${note.title}</div>
                </div>
 
                <div class ="dDiv" id =${note.description}>
                ${note.description}
                </div>
 
                <div class ="iconDiv" id ="iii">
                <div class="ex ">
                     <i class="material-icons">notifications</i>
                 </div>
 
                 <div class="ex ">
                 <i class="material-icons">person_add</i>
                </div>
 
                 <div class="ex" id="Icolor">
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
             
      
               
 
               
                <div class="modal-container">
    <div class="modal">
    <div class="modal-head">Pin your important notes to the top</div>
    <div class="modal-input" id="modal-input"> 
        <input name="title" class="sub-note2" id="modal-title"  value = ${note.title}> 
         </input>
        </div>
 
         <div class="modal-text">
            <textarea class="content" id="modal-notes" placeholder="Take a note..."></textarea>
          </div> 
          
   <div class="modal-iconContainer">
 
    <div class ="modal-icons">
 
       <div class="reminder">
       <i class="material-icons">notifications</i>
   </div>
   <div class="collab">
       <i class="material-icons" id="collab">person_add</i>
   </div>
   <div class="colors">
       <i class="material-icons" id="color-popup">color_lens</i>
   </div>
   <div class="add-image">
       <i class="material-icons">insert_photo</i>
   </div>
   <div class="archive">
       <i class="material-icons" id="archive">archive</i>
   </div>
   <div class="more">
       <i class="material-icons">more_vert</i>   
   </div>
   
 
       </div>
 
       <div class="modal-close">
       <button type="button" class="mclose-button" id="mclose-button">Close</button>
       </div>
       
   </div>
    </div>
    </div>
 </div>
 
                
                </div>`
                ).join('');
                




            })



//         requirejs(['../service/DataService.js'], function (methods) {
//             methods.getNotes().then(function (getResponse) {
//                 let arr = getResponse.data.data.data;
//                 let arr1 = []
//                 if (data == "archieve") {
//                     arr1 = arr.filter(note => note.isArchived == true && note.isDeleted == false);
//                     console.log(arr1)
//                 }
//                 else if (data == "trash") {
//                     arr1 = arr.filter(note => note.isDeleted == true && note.isArchived == false);
//                     console.log(arr1)
//                 }
//                 else if (data == "notes") {
//                     arr1 = arr.filter(note => note.isDeleted == false && note.isArchived == false);
//                     console.log(arr1)
//                 }
//                 const NotesContainer = document.getElementById('flex-container')
//                 NotesContainer.innerHTML = arr1.map((note) =>
//                     `<div class ="note" id =${note.id} style="background-color:${note.color}"; > 
 
                
//                 <div class ="tDiv" id =${note.title}>
//                 <div>${note.title}</div>
//                 </div>
 
//                 <div class ="dDiv" id =${note.description}>
//                 ${note.description}
//                 </div>
 
//                 <div class ="iconDiv" id ="iii">
//                 <div class="ex ">
//                      <i class="material-icons">notifications</i>
//                  </div>
 
//                  <div class="ex ">
//                  <i class="material-icons">person_add</i>
//                 </div>
 
//                  <div class="ex" id="Icolor">
//                   <i class="material-icons" id =${note.id}>color_lens</i>
//                 </div>
 
//                 <div class="ex ">
//                  <i class="material-icons">insert_photo</i>
//                  </div>
 
//                 <div class="ex" id= "Iarchive">
//                     <i class="material-icons" id =${note.id}>archive</i>
//                  </div>
 
//                  <div class="ex" id="Itrash">
//                  <i class="material-icons" id =${note.id}>delete</i>
//              </div>
 
//              <div class="ex" >
//              <i class="material-icons" id =${note.id}>more_vert</i>
//           </div>
 
//                 </div>
             
      
               
 
               
//                 <div class="modal-container">
//     <div class="modal">
//     <div class="modal-head">Pin your important notes to the top</div>
//     <div class="modal-input" id="modal-input"> 
//         <input name="title" class="sub-note2" id="modal-title"  value = ${note.title}> 
//          </input>
//         </div>
 
//          <div class="modal-text">
//             <textarea class="content" id="modal-notes" placeholder="Take a note..."></textarea>
//           </div> 
          
//    <div class="modal-iconContainer">
 
//     <div class ="modal-icons">
 
//        <div class="reminder">
//        <i class="material-icons">notifications</i>
//    </div>
//    <div class="collab">
//        <i class="material-icons" id="collab">person_add</i>
//    </div>
//    <div class="colors">
//        <i class="material-icons" id="color-popup">color_lens</i>
//    </div>
//    <div class="add-image">
//        <i class="material-icons">insert_photo</i>
//    </div>
//    <div class="archive">
//        <i class="material-icons" id="archive">archive</i>
//    </div>
//    <div class="more">
//        <i class="material-icons">more_vert</i>   
//    </div>
   
 
//        </div>
 
//        <div class="modal-close">
//        <button type="button" class="mclose-button" id="mclose-button">Close</button>
//        </div>
       
//    </div>
//     </div>
//     </div>
//  </div>
 
                
//                 </div>`
//                 ).join('');



//             })

//         })
    }
    return mapArray;


})