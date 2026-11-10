import readline from "readline-sync";

console.log("============================");
console.log("Bem-vindo a Pizzaria DevSenai!");
console.log("Onde o sabor e versionado com sucesso!");
console.log("============================\n");

let continuar = true;

while (continuar) {
    console.log("Novo pedido de pizza:\n");

    let nome = readline.question("Qual o seu nome? ");

    let sabor = readline.question(
        `${nome}, qual sabor voce deseja? (Ex: Marguerita, Mussarela, Frango, Portuguesa): `);

console.log(`\nPerfeito! Pizza de ${sabor} saindo do forno!\n`);

let tamanho = readline.question(
    "Qual o tamanho? (P - Pequena / M - Media / G - Grande): "
).toUpperCase();

if(tamanho === "P") {
    console.log("Voce escolheu uma pizza Pequena.\n");
}else if (tamanho === "M") {
    console.log("Voce escolheu uma pizza Media.\n");
}else if(tamanho === "G") {
    console.log("Voce escolheu uma pizza Grande.\n");
}else{
    console.log("Tamanho invalido! Vamos considerar Media por padrao.\n");
}

let borda = readline.question(
    "Deseja borda recheada? (s/n): "
).toLowerCase();

if(borda === "s"){
    console.log("Adicionando borda recheada.... nivel premium ativado!\n");
}else{
    console.log("Sem borda recheada, classico raiz!\n");
}

let bebida = readline.question(
    "Deseja adicionar uma bebida? (s/n): "
).toLowerCase();

if(bebida === "s"){
    let qualBebida = readline.question(
        "Qual bebida? (Ex: Refrigerante, Suco, Agua): "
    );
    console.log(`${qualBebida} adicionada ao pedido!\n`);
}else{
    console.log("Sem bebida, foco total na pizza!\n"); 
}

console.log(`Pedido Finalizado, ${nome}! Sua pizza de ${sabor} esta sendo preparada!\n`);

let maisUm = readline.question
    ("Deseja fazer outro pedido? (s/n): ").toLowerCase(); {

if(maisUm !== "s"){
    continuar = false;
}
    }
console.log("\n----------------------------------------\n");
}
console.log("Obrigado por escolher a Pizzaria DevSenai!");
console.log("Volte sempre! Aqui a entrega é mais rápida e mais Tech!");
