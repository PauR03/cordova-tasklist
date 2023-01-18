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
let editButton = document.getElementById("");

let liElement = "";
let inputEdit = document.getElementById("editElement");
let inputBeforeEdit = "";

$("#editSave").click(function(){
    newText = inputEdit.value;

    window.location.href = "#homePage"
    
    liElement.children().first()[0].innerHTML = newText
    let arrayObjetos = JSON.parse(localStorage.getItem("objetos"));

    let index = arrayObjetos.indexOf(inputBeforeEdit)
    if (index !== -1) {
        arrayObjetos[index] = newText;
    }
    
    OBJarrayObjetos = JSON.stringify(arrayObjetos)
    localStorage.setItem("objetos", OBJarrayObjetos);
})

function editar(){
    $(".editButton").click(function(){
        liElement = $(this).parent()
        
        window.location.href = "#editar"
        inputEdit.value = liElement.children().first()[0].innerHTML

        inputBeforeEdit = liElement.children().first()[0].innerHTML
    })
}

button.onclick = function(){
    let newTask = prompt("Add new Task: ");
    
    newTask = "<li><h1>"+newTask+"</h1><button class='editButton ui-btn ui-shadow ui-corner-all'>Editar</button><button class='borrar ui-btn ui-shadow ui-corner-all'>Borrar</button>"+"</li>";

    $("ul").append(newTask).listview( "refresh" );

    borrar()
    editar()
    addToStorage()
}

borrar()
editar()
addToStorage()
printLocalStorage()


function borrar(){
    $(".borrar").click(function(){
        $(this).parent().remove()

        let arrayObjetos = []
        $("ul>li>h1").each(function(){
            arrayObjetos.push($(this).text())
        })

        OBJarrayObjetos = JSON.stringify(arrayObjetos)
        localStorage.setItem("objetos", OBJarrayObjetos);
    })
}



function addToStorage(){
    if(JSON.parse(localStorage.getItem("objetos"))){
        let arrayObjetos = JSON.parse(localStorage.getItem("objetos"));

        $("ul>li>h1").each(function(){
            if(!arrayObjetos.includes($(this).text())){
                arrayObjetos.push($(this).text())
            }
        })
        OBJarrayObjetos = JSON.stringify(arrayObjetos)
        localStorage.setItem("objetos", OBJarrayObjetos);
    }else{
        let arrayObjetos = []
        OBJarrayObjetos = JSON.stringify(arrayObjetos)
        localStorage.setItem("objetos", OBJarrayObjetos);
    }
    
    borrar()
    editar()
}

function printLocalStorage(){
    let arrayObjetos = JSON.parse(localStorage.getItem("objetos"));

    for(let i = 0; i < arrayObjetos.length; i++){
        newTask = "<li><h1>"+arrayObjetos[i]+"</h1><button class='editButton ui-btn ui-shadow ui-corner-all'>Editar</button><button class='borrar ui-btn ui-shadow ui-corner-all'>Borrar</button>"+"</li>";
        $("ul").append(newTask) ;
    }
    borrar()
    editar()
}