// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC9vj118_A5rNLLI7gnCAzDpBOZsPtG-3g",
    authDomain: "atividade-bd3.firebaseapp.com",
    projectId: "atividade-bd3",
    storageBucket: "atividade-bd3.appspot.com",
    messagingSenderId: "227134231993",
    appId: "1:227134231993:web:a3cc215950028f23ef1268"
};

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const listaAlunos = document.querySelector('#listaAlunos');

function renderList(doc) {
    let li = document.createElement('li');
    let nome = document.createElement('span');
    let cpf = document.createElement('span');
    let rg = document.createElement('span');
    let telefone = document.createElement('span');
    let telefone_responsavel = document.createElement('span');
    let email = document.createElement('span');
    let data_nascimento = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    nome.textContent = doc.nome;
    cpf.textContent = doc.cpf;
    rg.textContent = doc.rg;
    telefone.textContent = doc.telefone_aluno;
    telefone_responsavel.textContent = doc.telefone_responsavel;
    email.textContent = doc.email;
    data_nascimento.textContent = doc.data_nascimento;

    li.appendChild(nome);
    li.appendChild(cpf);
    li.appendChild(rg);
    li.appendChild(telefone);
    li.appendChild(telefone_responsavel);
    li.appendChild(email);
    li.appendChild(data_nascimento);

    listStudent.appendChild(li);
}

db.collection('BD3-NoSQL-FireStore')
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log("Tá indo")
            renderList(doc.data());
        });
    });

const form = document.querySelector('#form-estudante');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    db.collection('BD3-NoSQL-FireStore').add({
        nome: form.nome.value,
        cpf: form.cpf.value,
        rg: form.rg.value,
        telefone_aluno: form.telefone.value,
        telefone_responsavel: form.telefone_responsavel.value,
        email: form.email.value,
        data_nascimento: form.data_nascimento.value
    }).then(() => {
        form.reset();
        window.location.reload();
    });
});

