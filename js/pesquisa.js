/* =====================================================================
   RESULTADOS DA PESQUISA — Dados e gráficos
   Fonte: questionário "Meninas na ciência" (25 respostas, 22–25/10/2026).
   Cada pergunta tem um "n" próprio, pois nem todas foram respondidas por todos.
   Para atualizar: altere os números abaixo; os gráficos se redesenham sozinhos.
   ===================================================================== */
const PESQUISA = {
  total: 25,
  idade: { n: 25, itens: [["13 a 15 anos", 2], ["16 a 18 anos", 13], ["19 anos ou mais", 10]] },
  // P1 — quem as estudantes citam
  p1: {
    n: 22, nenhuma: 5,
    nomes: [["Marie Curie", 12], ["Tatiana Sampaio", 5], ["Ada Lovelace", 1], ["Nísia Floresta", 1],
            ["Rosalind Franklin", 1], ["Bertha Lutz", 1]]
  },
  // P2 — se imagina na ciência
  p2: { n: 24, itens: [["Sim", 3], ["Talvez", 10], ["Ainda não pensei sobre isso", 7], ["Não", 4]] },
  // P3 — desafios (múltipla escolha)
  p3: { n: 24, itens: [["Preconceito de gênero", 20], ["Pouca visibilidade das mulheres cientistas", 18],
    ["Desigualdade salarial", 17], ["Falta de oportunidades", 16],
    ["Dificuldade de conciliar trabalho e família", 12],
    ["Falta de incentivo na escola ou na família", 11], ["Outros desafios", 2]] },
  // P4 — mesmas oportunidades? (respostas abertas classificadas pela equipe)
  p4: { n: 23, itens: [["Não", 19], ["Depende", 2], ["Não sei dizer", 1], ["Sim", 1]],
    palavras: [["preconceito", 8], ["oportunidades", 8], ["desigualdade", 5], ["incentivo", 2], ["assédio", 2]] },
  // P5 — profissão ligada à ciência/tecnologia (respostas abertas classificadas pela equipe)
  p5: { n: 23, itens: [["Já pensou em uma área ou profissão", 13], ["Ainda não pensou / nunca pensou", 4], ["Não", 6]],
    areas: [["Ciências biológicas e genética", 4], ["Pesquisa e docência", 3], ["Engenharia florestal", 2],
            ["Tecnologia / Eng. de Software", 1], ["Psicologia", 1], ["Ciências contábeis", 1], ["Ciências humanas", 1]] }
};

const pct = (v, n) => Math.round(v / n * 100);

/* Gráfico de barras horizontais (HTML puro, acessível: o valor sempre aparece em texto) */
function barras(id, itens, n, opc = {}) {
  const el = document.getElementById(id); if (!el) return;
  const max = opc.max ?? Math.max(...itens.map(i => i[1]));
  el.innerHTML = itens.map(([rot, v], i) => `
    <li class="barra${opc.destaque === i ? " destaque" : ""}">
      <span class="rot">${rot}</span>
      <span class="trilha" aria-hidden="true"><span class="enche" style="--w:${(v / max * 100).toFixed(1)}%"></span></span>
      <span class="val"><b>${v}</b>${n && !opc.semPct ? ` <small>${pct(v, n)}%</small>` : ""}</span>
    </li>`).join("");
}

/* Rosca (donut) com conic-gradient + legenda em texto */
function rosca(id, legId, itens, n, cores) {
  const el = document.getElementById(id), leg = document.getElementById(legId); if (!el) return;
  let acc = 0;
  const fatias = itens.map(([, v], i) => { const a = acc; acc += v / n * 100; return `${cores[i]} ${a}% ${acc}%`; });
  el.style.background = `conic-gradient(${fatias.join(",")})`;
  el.setAttribute("aria-label", itens.map(([r, v]) => `${r}: ${v}`).join("; "));
  leg.innerHTML = itens.map(([r, v], i) => `<li><i style="background:${cores[i]}"></i><span>${r}</span><b>${v}</b> <small>${pct(v, n)}%</small></li>`).join("");
}

const P = PESQUISA;
document.querySelectorAll("[data-n]").forEach(e => e.textContent = P[e.dataset.n]?.n ?? P.total);
barras("g-idade", P.idade.itens, P.idade.n);
barras("g-p1", P.p1.nomes, P.p1.n, { destaque: 0 });
rosca("rosca-p2", "leg-p2", P.p2.itens, P.p2.n, ["#0f3d22", "#2e9e44", "#b6e63c", "#9aa59e"]);
barras("g-p3", P.p3.itens, P.p3.n, { destaque: 0 });
barras("g-p4", P.p4.itens, P.p4.n, { destaque: 0 });
barras("g-p4-pal", P.p4.palavras, null);
barras("g-p5", P.p5.itens, P.p5.n, { destaque: 0 });
barras("g-p5-areas", P.p5.areas, P.p5.itens[0][1], { semPct: true });

/* Filtro de citações */
const filtros = document.querySelectorAll(".filtro button"), cits = document.querySelectorAll(".citacao");
filtros.forEach(b => b.addEventListener("click", () => {
  filtros.forEach(x => x.setAttribute("aria-pressed", x === b));
  cits.forEach(c => c.hidden = b.dataset.tema !== "todas" && !c.dataset.temas.split(" ").includes(b.dataset.tema));
}));
