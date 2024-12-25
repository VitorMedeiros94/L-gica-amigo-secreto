let amigos = []


function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    if (nomeAmigo.value == '') {
        alert('Inclua algum nome para iniciar a lista.')
        return
    } else if (amigos.includes(nomeAmigo.value)) {
        alert('Esse nome já consta na lista.')
        return;
    } else {
    amigos.push(nomeAmigo.value);
    }
    if (listaAmigos.textContent == '')  {
                listaAmigos.textContent = nomeAmigo.value;
    } else {
                listaAmigos.textContent = listaAmigos.textContent + ', ' +nomeAmigo.value;
    }
nomeAmigo.value = '';
}
function sortear() {
    embaralhar(amigos)
    let sorteio = document.getElementById('lista-sorteio');
    if (amigos.length <= 3) {
        alert('Numero de pessoas insuficente para o amigo secreto, inclua pelo menos 4 pessoas.')
        return
    } else {
    for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
      }
    }
}

function reiniciar(){
    amigos = []
    sorteio = document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigos = document.getElementById('lista-amigos').innerHTML = '';
    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
