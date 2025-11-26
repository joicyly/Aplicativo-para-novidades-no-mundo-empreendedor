<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
<link rel="stylesheet" href="styles.css">
<title>EducaEmpreende</title>
</head>

<body>

<div class="app">

    <!-- Tela Home -->
    <section id="home" class="tela ativa">
        <h1 class="titulo">📱 EducaEmpreende</h1>
        <p class="sub">Aprenda a empreender • ODS 8</p>

        <button class="btn" tela="conteudo">📚 Trilhas de Aprendizado</button>
        <button class="btn" tela="quiz">📝 Quiz de Empreendedorismo</button>
        <button class="btn" tela="sobre">ℹ Sobre o Aplicativo</button>
    </section>


    <!-- Tela Conteúdo -->
    <section id="conteudo" class="tela">
        <button class="voltar" tela="home">← Voltar</button>
        <h2>Módulo 1 — Empreender na Prática</h2>

        <div class="card">
            <h3>🧩 O que é empreender?</h3>
            <p>Entenda os passos para iniciar seu negócio.</p>
            <button class="mini-btn" onclick="abrirPDF(material.pdf)">📄 Acessar Conteúdo</button>
           
        </div>

        <div class="card">
            <h3>💰 MEI sem segredos!</h3>
            <p>Controle de caixa, gastos e precificação.</p>
            <button class="mini-btn">Abrir módulo</button>
        </div>
        <div class="card">
            <h3>✨ Fique por dentro de todas as novidades que impulsionam o seu negócio a crescer!</h3>
            <p> </p>
            <button class="mini-btn">Abra sua empresa</button>
        </div>
    </section>


    <!-- Tela Quiz -->
    <section id="quiz" class="tela">
        <button class="voltar" tela="home">← Voltar</button>
        <h2>Quiz Rápido 📊</h2>

        <div id="pergunta"></div>
        <div id="opcoes"></div>
        <button id="confirmar" class="btn">Responder</button>

        <p class="pontosp">Pontos: <span id="pontos">0</span></p>
    </section>


    <!-- Tela Sobre -->
    <section id="sobre" class="tela">
        <button class="voltar" tela="home">← Voltar</button>
        <h2>Sobre o App</h2>
        <p>Aplicativo educativo voltado ao ODS 8 para estimular
        o empreendedorismo, renda e geração de negócios.
        <p5>Empreendedor, já se atualizou sobre a Reforma Tributária? Isso pode mudar o futuro do seu negócio. Com a ALLDAX Contabilidade, você acompanha todas as atualizações em tempo real e mantém sua empresa sempre à frente. Nosso compromisso é antecipar impactos, orientar decisões estratégicas e garantir que o seu negócio esteja preparado para o futuro.
Informação confiável. Atualização constante. Resultados reais. Porque na ALLDAX nós não apenas cuidamos da contabilidade — cuidamos do crescimento da sua empresa.</p5>
    </section>

</div>

<script src="app.js"></script>
</body>
</html>
