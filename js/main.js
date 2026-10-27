const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
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
        <p class="msg">${esc(c.mensagemCard)}</p>
        <span class="ver">Conheça sua história</span>
      </div></a></li>`).join("");

  const ant = document.getElementById("ant"), prox = document.getElementById("prox");
  const passo = () => trilho.querySelector("li").getBoundingClientRect().width + 20;
  const atualiza = () => {
    ant.disabled = trilho.scrollLeft < 4;
    prox.disabled = trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
  };
  ant.onclick = () => trilho.scrollBy({ left: -passo() });
  prox.onclick = () => trilho.scrollBy({ left: passo() });
  trilho.addEventListener("scroll", atualiza, { passive: true });
  window.addEventListener("resize", atualiza);
  atualiza();
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
    document.title = `${c.nome} — Nossa Cientista`;
    const { anterior, proxima } = getVizinhas(c.slug);
    const d = c.desafios, m = c.mensagemMotivacao;
    const datas = [c.nacionalidade, c.nascimento ? `Nascimento: ${c.nascimento}` : "", c.falecimento ? `Falecimento: ${c.falecimento}` : ""].filter(Boolean);
    alvo.innerHTML = `
    <div class="wrap">
      <nav class="migalhas" aria-label="Você está em"><a href="index.html">Início</a> &gt; <a href="index.html#cientistas">Cientistas</a> &gt; <span aria-current="page">${esc(c.nome)}</span></nav>
      <section class="perfil" aria-labelledby="nome">
        <div>${fotoHTML(c, false)}<p class="credito">${esc(c.fotoCredito || "")}</p></div>
        <div>
          ${c.ficticia ? '<span class="aviso-ficticia">Conteúdo fictício de teste</span>' : ""}
          <h1 id="nome">${esc(c.nome)}</h1>
          <p class="area">${esc(c.atuacao)}</p>
          <ul class="dados">${datas.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
          <p class="texto">${esc(c.apresentacao)}</p>
          <p class="texto">${esc(c.atuacaoDetalhada)}</p>
        </div>
      </section>

      <section class="bloco"><h2>Trajetória</h2>
        <div class="texto">${c.trajetoria.map(p => `<p>${esc(p)}</p>`).join("")}</div></section>

      <section class="bloco"><h2>Principais descobertas e contribuições</h2>
        <div class="grade">${c.contribuicoes.map(x => `<article class="caixa"><h3>${esc(x.titulo)}</h3>
          <p>${esc(x.resumo)}</p><p><b>Contexto:</b> ${esc(x.contexto)}</p><p><b>Impacto:</b> ${esc(x.impacto)}</p></article>`).join("")}</div></section>

      <section class="bloco"><h2>Linha do tempo</h2>
        <ol class="linha">${c.linhaDoTempo.map(t => `<li><strong>${esc(t.periodo)}</strong>${esc(t.evento)}</li>`).join("")}</ol></section>

      <section class="bloco"><h2>Desafios</h2><div class="texto">
        <p>${esc(d.texto)}</p>
        ${d.declaracao ? `<blockquote><p>“${esc(d.declaracao)}”</p><footer>${esc(d.declaracaoFonte || "")}</footer></blockquote>`
          : `<p>${esc(d.analiseContextual)}</p>`}
      </div></section>

      <section class="bloco"><h2>Legado</h2><p class="texto">${esc(c.legado)}</p></section>

      ${c.curiosidades?.length ? `<section class="bloco"><h2>Curiosidades</h2><ul class="texto">${c.curiosidades.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}

      <section class="bloco"><div class="motiva"><h2>Para quem quer seguir a ciência:</h2>
        <p>"${esc(m.texto)}"</p>
        <small>${m.tipo === "sintese-do-projeto" ? "Reflexão da equipe Matrix inspirada na trajetória; não é citação da cientista." : "Declaração da cientista."}</small></div></section>

      <section class="bloco"><h2>Fontes e referências</h2>
        <ul class="texto">${c.fontes.map(f => `<li>${f.url && f.url !== "#" ? `<a href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.titulo)}</a>` : esc(f.titulo)}</li>`).join("")}</ul></section>

      <nav class="nav-cient" aria-label="Navegar entre cientistas">
        ${anterior ? `<a class="btn sec" href="${linkCientista(anterior)}">Anterior: ${esc(anterior.nome)}</a>` : "<span></span>"}
        <a class="btn" href="index.html#cientistas">Todas as cientistas</a>
        ${proxima ? `<a class="btn sec" href="${linkCientista(proxima)}">Próxima: ${esc(proxima.nome)}</a>` : "<span></span>"}
      </nav>
    </div>`;
  }
}
