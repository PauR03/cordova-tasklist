/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

let button = document.getElementById("button");
let editButton = document.getElementById("editButton");

let liElement = "";
let inputEdit = document.getElementById("editElement");
editButton.onclick = function(){

    li = $(this).parent()
    
    window.location.href = "#editar"
    inputEdit.value = liElement.children().first()[0].innerHTML
    
}

$("#editSave").click(function(){
    newText = inputEdit.value;

    window.location.href = "#homePage"
    
    li.children().first()[0].innerHTML = newText

})


    


button.onclick = function(){
    let newTask = prompt("Add new Task: ");
    
    newTask = "<li>"+newTask+"<button class='borrar ui-btn ui-shadow ui-corner-all'>Borrar</button>"+"</li>";

    $("ul").append(newTask).listview( "refresh" );

    //$("li").last().append("");

    //$("ul").listview("refresh")

    borrar()
}

let list = $("ul");

list.each(function() {
    $( this ).children().append("<button class='borrar'>Borrar</button>");
});

borrar()


function borrar(){
    $(".borrar").click(function(){
        console.log("pulsa")

    
        $(this).parent().remove()
    
    })
}
