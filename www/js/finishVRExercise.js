document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    $( document ).ready(function() {
        $('#resultSend').on("click", function(){
            let pin = localStorage.getItem('pin_container');
            let VRexID = localStorage.getItem('VRexID_container');
            let failed_items = $('#failed_items').val();
            let passed_items = $('#passed_items').val();
            let score = $('#score').val();
            let comments = $('#comments').val();
            if (failed_items == "" || passed_items == "" || score == "" || comments == ""){
                alert("Faltan dades por introduir");
            }else{
                $.ajax({
                    method: "POST",
                    url: "https://vrschool7.herokuapp.com/api/finish_vr_exercise",
                    data: {"PIN": pin, "autograde": {"failed_items": failed_items, "passed_items": passed_items, "score": score, "comments": comments}, "VRexerciseID": VRexID, "exerciseVersionID": 281, "performance_data":{}},
                    dataType: "json",   
                }).done(function (dades) {
                        alert("Exercici finalitzat correctament");
                    
                }).fail(function () {
                    alert("ERROR");
                });
                alert("Resultat");
            }
        });
        return false;
    });
    
}