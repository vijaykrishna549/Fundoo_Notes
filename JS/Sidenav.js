window.addEventListener('DOMContentLoaded', function(){
    const ShrinkSidebar = document.getElementsByClassName('shrink-sidebar')[0];
    const ExpandSidebar = document.getElementById('expand-sidebar')
    const notes = document.getElementById('shrink-notes')
    const reminders = document.getElementById('shrink-reminders')
    const labels = document.getElementById('shrink-labels')
    const archives = document.getElementById('shrink-archive')
    const trash = document.getElementById('shrink-trash')
    const enotes = document.getElementById('exnotes')
    const ereminders = document.getElementById('expand-reminders')
    const elabels = document.getElementById('expand-labels')
    const earchives = document.getElementById('archive2')
    const etrash = document.getElementById('trash2')


    // $(document).click((event) => {
    //     if (!$(event.target).closest('#takeNote1').length) {
    //         TakeNote2.style.display = "none"
    //         TakeNote1.style.display = "block"
    //       // the click occured outside '#element'
    //     }        
    //   });


      
    ShrinkSidebar.addEventListener('mouseover', function(){
        ShrinkSidebar.style.display ="none"
        ExpandSidebar.style.display = "flex"
        // console.log('hao')
    })

    ShrinkSidebar.addEventListener('mouseout', function(){
        ShrinkSidebar.style.display ="flex"
        ExpandSidebar.style.display = "none"
        ExpandSidebar.style.backgroundColor ="white"
    })


    notes.addEventListener('mouseover', function(){
        // ShrinkSidebar[0].style.display ="none"
        // ExpandSidebar.style.display = "block"
        // ExpandSidebar.style.backgroundColor = "red";
        enotes.style.backgroundColor="WhiteSmoke";
    })

    notes.addEventListener('mouseout', function(){
      
        enotes.style.backgroundColor="white"
    })

    reminders.addEventListener('mouseover', function(){
       
        ereminders.style.backgroundColor = "WhiteSmoke";
    })


    reminders.addEventListener('mouseout', function(){
     
        ereminders.style.backgroundColor="white"
    })

    labels.addEventListener('mouseover', function(){
     
        elabels.style.backgroundColor ="WhiteSmoke";
    })

    labels.addEventListener('mouseout', function(){
     
        elabels.style.backgroundColor="white"
    })

    archives.addEventListener('mouseover', function(){
    
        earchives.style.backgroundColor ="WhiteSmoke";
    })

    archives.addEventListener('mouseout', function(){
     
        earchives.style.backgroundColor="white"
    })

    trash.addEventListener('mouseover', function(){
        etrash.style.backgroundColor ="WhiteSmoke";
    })

    trash.addEventListener('mouseout', function(){

        etrash.style.backgroundColor="white"
    })


})