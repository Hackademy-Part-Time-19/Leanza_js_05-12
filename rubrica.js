function apriModale() {
    document.getElementById('containerPopup').style.display = 'flex';
}

function chiudiModale() {
    document.getElementById('containerPopup').style.display = 'none';
}

indiceContatto = 0;
let listaContatti = []
function aggiungiContatto() {

    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let telefono = document.getElementById('telefono').value;

    if (!nome || !cognome || !telefono) {

        if (!nome) {
            document.getElementById("inputNomePopup").style.border = "1px solid red";
        }

        if (!cognome) {
            document.getElementById("inputCognomePopup").style.border = "1px solid red";
        }

        if (!telefono) {
            document.getElementById("inputNumeroPopup").style.border = "1px solid red";
        }
        return;
    }



    let nuovoContatto = {
        nome: nome,
        cognome: cognome,
        telefono: telefono,
        indice: indiceContatto
    }




    listaContatti.push(nuovoContatto);

    chiudiModale();

    document.getElementById("sezioneContatti").innerHTML +=
        `<div id="contatto-${indiceContatto}-rubrica" class="contattoRubrica">
    <div class="nomeContatto">
        <h5 id="${indiceContatto}-nome">${nome}</h5>
        <h5 id="${indiceContatto}-cognome"style="margin-left: 10px;">${cognome}</h5>
    </div>
    <div class="numeroContatto">
        <h5 id="${indiceContatto}-telefono">${telefono}</h5>
    </div>
    <div class="sezioneButtonContatti">
        <div onclick="modificaContatto(${indiceContatto})"class="buttonEdit">
            edit
        </div>
        <div onclick="rimuoviContatto(${indiceContatto})" class="buttonDelete">
            <i class="fa fa-remove"></i>
        </div>
    </div>
</div>
    <div id="div-${indiceContatto}-modifica-contatto" class="contattoRubrica" style="display: none;">
        <div class="nominativoContattoEdit">
            <div class="inputNomeEdit">
                <input id="${indiceContatto}-input-nome" class="inputSearch" style="font-size: 14px;" type="text" placeholder="Nome">
            </div>
            <div class="inputCognomeEdit">
                <input id="${indiceContatto}-input-cognome"class="inputSearch" style="font-size: 14px;" type="text" placeholder="Cognome">
            </div>
        </div>
        <div class="areaNumeroContatto">
            <div class="numeroContattoEdit">
                <input id="${indiceContatto}-input-telefono"class="inputSearch" style="font-size: 14px;" type="text" placeholder="Numero">
            </div>
        </div>
        <div class="sezioneButtonSave">
            <div onclick="annullaModifica(${indiceContatto})" class="buttonAnnulla">
                Annulla
            </div>
            <div onclick="salvaModifiche(${indiceContatto})" class="buttonSaveEdit">
                Save
            </div>
        </div>
    </div>
`

    indiceContatto++;

    nome = document.getElementById('nome').value = "";
    cognome = document.getElementById('cognome').value = "";
    telefono = document.getElementById('telefono').value = "";

}

function modificaContatto(indice) {
    document.getElementById(`contatto-${indice}-rubrica`).style.display = "none";
    document.getElementById(`div-${indice}-modifica-contatto`).style.display = "flex";

    let nome = document.getElementById(`${indice}-nome`).innerHTML;
    let cognome = document.getElementById(`${indice}-cognome`).innerHTML;
    let numero = document.getElementById(`${indice}-telefono`).innerHTML;

    document.getElementById(`${indice}-input-nome`).value = nome;
    document.getElementById(`${indice}-input-cognome`).value = cognome;
    document.getElementById(`${indice}-input-telefono`).value = numero;
}

function annullaModifica(indice) {
    document.getElementById(`contatto-${indice}-rubrica`).style.display = "flex";
    document.getElementById(`div-${indice}-modifica-contatto`).style.display = "none";
}

function salvaModifiche(indice) {
    let nome = document.getElementById(`${indice}-input-nome`).value;
    let cognome = document.getElementById(`${indice}-input-cognome`).value;
    let numero = document.getElementById(`${indice}-input-telefono`).value;

    document.getElementById(`${indice}-nome`).innerHTML = nome;
    document.getElementById(`${indice}-cognome`).innerHTML = cognome;
    document.getElementById(`${indice}-telefono`).innerHTML = numero;

    document.getElementById(`contatto-${indice}-rubrica`).style.display = "flex";
    document.getElementById(`div-${indice}-modifica-contatto`).style.display = "none";
}

function rimuoviContatto(indice) {
    document.getElementById(`contatto-${indice}-rubrica`).remove();
}

function cercaContatto() {
    let ricerca = document.getElementById("inputSearch").value.toLowerCase();

    let nessunaCorrispondenza = true;

    listaContatti.forEach((contatto, indice) => {
        let elementoContatto = document.getElementById(`contatto-${indice}-rubrica`);

        let nomeMinuscolo = contatto.nome.toLowerCase();
        let cognomeMinuscolo = contatto.cognome.toLowerCase();
        let telefonoMinuscolo = contatto.telefono.toLowerCase();

        if (nomeMinuscolo.includes(ricerca) || cognomeMinuscolo.includes(ricerca) || telefonoMinuscolo.includes(ricerca)) {
            elementoContatto.style.display = "flex";
            nessunaCorrispondenza = false;
        } else {
            elementoContatto.style.display = "none";
        }
    });

    if (nessunaCorrispondenza) {
        document.getElementById("notFound").style.display = "flex";
    } else {
        document.getElementById("notFound").style.display = "none";
    }
}





