/* Utilitários */
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
// texto "preenchido": ignora null, vazio e o marcador provisório "..."
const ok = s => typeof s === "string" && s.trim() !== "" && s.trim() !== "...";
// transforma texto com várias linhas em parágrafos
const paragrafos = s => String(s).split(/\n+/).map(p => p.trim()).filter(ok).map(p => `<p>${esc(p)}</p>`).join("");
const iniciais = n => n.split(" ").filter(p => p.length > 2).slice(0, 2).map(p => p[0]).join("");

function fotoHTML(c, lazy = true) {
  return `<div class="foto" data-ini="${esc(iniciais(c.nome))}">
    <img src="${esc(c.foto)}" alt="${esc(c.fotoAlt)}" ${lazy ? 'loading="lazy"' : ""}
      onerror="this.parentNode.classList.add('sem-foto');this.remove()"></div>`;
}
const linkCientista = c => `cientista.html?c=${encodeURIComponent(c.slug)}`;

document.querySelectorAll(".ano").forEach(e => e.textContent = new Date().getFullYear());
document.querySelectorAll(".marca img").forEach(img => img.addEventListener("error", () => {
  const s = document.createElement("span"); s.className = "logo-falta"; s.textContent = "IFNMG"; img.replaceWith(s);
}));

/* ---------- Página inicial ---------- */
const trilho = document.getElementById("trilho");
if (trilho) {
  trilho.innerHTML = CIENTISTAS.map(c => `<li>
    <a class="card" href="${linkCientista(c)}">
      ${fotoHTML(c)}
      <div class="corpo-card">
        ${c.ficticia ? '<span class="aviso-ficticia">Exemplo fictício</span>' : ""}
        <h3>${esc(c.nome)}</h3>
        <p class="area">${esc(c.atuacao)}</p>
        ${ok(c.mensagemCard) ? `<p class="msg">${esc(c.mensagemCard)}</p>` : ""}
        <span class="ver">Conheça sua história</span>
      </div></a></li>`).join("");

  const ant = document.getElementById("ant"), prox = document.getElementById("prox");
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const passo = () => trilho.querySelector("li").getBoundingClientRect().width + 20;

  if (reduz) {
    /* Movimento reduzido: carrossel parado, só com setas e arraste */
    const atualiza = () => {
      ant.disabled = trilho.scrollLeft < 4;
      prox.disabled = trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
    };
    ant.onclick = () => trilho.scrollBy({ left: -passo() });
    prox.onclick = () => trilho.scrollBy({ left: passo() });
    trilho.addEventListener("scroll", atualiza, { passive: true });
    window.addEventListener("resize", atualiza);
    atualiza();
  } else {
    /* Rotação contínua e suave, em loop infinito (cards duplicados de forma invisível) */
    const originais = [...trilho.children];
    originais.forEach(li => {
      const copia = li.cloneNode(true);
      copia.setAttribute("aria-hidden", "true");
      copia.querySelector("a").tabIndex = -1;
      trilho.append(copia);
    });
    trilho.style.scrollSnapType = "none";
    const larguraSet = () => trilho.children[originais.length].offsetLeft - trilho.children[0].offsetLeft;

    const VELOCIDADE = 35; // pixels por segundo (menor = mais lento)
    let ligado = true, sobre = false, manual = false, pos = 0, ultimo = 0, tManual = 0;

    const botao = document.createElement("button");
    botao.type = "button";
    const atualizaBotao = () => {
      botao.textContent = ligado ? "❚❚" : "▶";
      botao.setAttribute("aria-label", ligado ? "Pausar rotação automática" : "Iniciar rotação automática");
    };
    botao.addEventListener("click", () => { ligado = !ligado; atualizaBotao(); });
    document.querySelector(".setas").prepend(botao);
    atualizaBotao();

    function quadro(t) {
      requestAnimationFrame(quadro);
      const dt = Math.min(t - ultimo, 64) / 1000; ultimo = t;
      const larg = larguraSet();
      if (ligado && !sobre && !manual) { pos += VELOCIDADE * dt; trilho.scrollLeft = pos; }
      else pos = trilho.scrollLeft;
      if (trilho.scrollLeft >= larg) { trilho.scrollLeft -= larg; pos = trilho.scrollLeft; }
    }
    requestAnimationFrame(t => { ultimo = t; quadro(t); });

    // setas e gestos: pausam a rotação por um instante para o movimento manual não ser cancelado
    const pausaManual = (ms = 1600) => { manual = true; clearTimeout(tManual); tManual = setTimeout(() => manual = false, ms); };
    prox.onclick = () => { pausaManual(); trilho.scrollBy({ left: passo(), behavior: "smooth" }); };
    ant.onclick = () => {
      pausaManual();
      if (trilho.scrollLeft < passo()) trilho.scrollLeft += larguraSet();
      trilho.scrollBy({ left: -passo(), behavior: "smooth" });
    };
    trilho.addEventListener("wheel", () => pausaManual(2500), { passive: true });
    ["mouseenter", "focusin", "touchstart"].forEach(ev => trilho.addEventListener(ev, () => sobre = true, { passive: true }));
    ["mouseleave", "focusout", "touchend"].forEach(ev => trilho.addEventListener(ev, () => { sobre = false; }, { passive: true }));
  }
}

/* ---------- Página individual ---------- */
const alvo = document.getElementById("cientista");
if (alvo) {
  const c = getCientista(new URLSearchParams(location.search).get("c"));
  if (!c) {
    alvo.innerHTML = `<div class="wrap sem-pagina"><h1>Cientista não encontrada</h1>
      <p>O endereço não corresponde a nenhuma cientista cadastrada.</p>
      <a class="btn" href="index.html#cientistas">Voltar para as cientistas</a></div>`;
  } else {
    document.title = `${c.nome} — Mulheres na Ciência`;
    const { anterior, proxima } = getVizinhas(c.slug);
    const d = c.desafios || {}, m = c.mensagemMotivacao || {};
    const datas = [c.nacionalidade, c.nascimento ? `Nascimento: ${c.nascimento}` : "", c.falecimento ? `Falecimento: ${c.falecimento}` : ""].filter(ok);
    const trajetoria = (c.trajetoria || []).filter(ok);
    const textoDesafios = ok(d.texto) ? d.texto : "";
    const fontes = (c.fontes || []).filter(f => f && ok(f.titulo));
    const mostraCredito = ok(c.fotoCredito) && c.fotoCredito !== c.nome;

    alvo.innerHTML = `
    <div class="wrap">
      <nav class="migalhas" aria-label="Você está em"><a href="index.html">Início</a> &gt; <a href="index.html#cientistas">Cientistas</a> &gt; <span aria-current="page">${esc(c.nome)}</span></nav>
      <section class="perfil" aria-labelledby="nome">
        <div>${fotoHTML(c, false)}${mostraCredito ? `<p class="credito">${esc(c.fotoCredito)}</p>` : ""}</div>
        <div>
          ${c.ficticia ? '<span class="aviso-ficticia">Conteúdo fictício de teste</span>' : ""}
          <h1 id="nome">${esc(c.nome)}</h1>
          <p class="area">${esc(c.atuacao)}</p>
          ${datas.length ? `<ul class="dados">${datas.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          ${ok(c.apresentacao) ? `<p class="texto">${esc(c.apresentacao)}</p>` : ""}
          ${ok(c.atuacaoDetalhada) ? `<p class="texto">${esc(c.atuacaoDetalhada)}</p>` : ""}
        </div>
      </section>

      <section class="bloco"><h2>Trajetória</h2>
        <div class="texto">${trajetoria.length ? trajetoria.map(paragrafos).join("") : "<p>Informações em breve.</p>"}</div></section>

      ${textoDesafios || ok(d.analiseContextual) ? `<section class="bloco"><h2>Desafios</h2><div class="texto">
        ${textoDesafios ? paragrafos(textoDesafios) : ""}
        ${ok(d.declaracao) ? `<blockquote><p>“${esc(d.declaracao)}”</p>${ok(d.declaracaoFonte) ? `<footer>${esc(d.declaracaoFonte)}</footer>` : ""}</blockquote>` : ""}
        ${ok(d.analiseContextual) ? paragrafos(d.analiseContextual) : ""}
      </div></section>` : ""}

      ${ok(m.texto) ? `<section class="bloco"><div class="motiva"><h2>Mensagem de motivação</h2>
        <p>${esc(m.texto)}</p>
        ${m.tipo === "sintese-do-projeto" ? "<small>Reflexão da equipe Matrix inspirada na trajetória; não é citação da cientista.</small>" : ""}</div></section>` : ""}

      ${fontes.length ? `<section class="bloco"><h2>Fontes e referências</h2>
        <ul class="texto">${fontes.map(f => `<li>${f.url && f.url !== "#" ? `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a>` : esc(f.titulo)}</li>`).join("")}</ul></section>` : ""}

      <nav class="nav-cient" aria-label="Navegar entre cientistas">
        ${anterior ? `<a class="btn sec" href="${linkCientista(anterior)}">Anterior: ${esc(anterior.nome)}</a>` : "<span></span>"}
        <a class="btn" href="index.html#cientistas">Todas as cientistas</a>
        ${proxima ? `<a class="btn sec" href="${linkCientista(proxima)}">Próxima: ${esc(proxima.nome)}</a>` : "<span></span>"}
      </nav>
    </div>`;
  }
}