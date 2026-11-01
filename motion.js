// Site motion: scroll reveals, counters, and the two story loops.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  // Scroll reveal for text sections, once.
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      revealIO.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));

  // Counters: count up once and land on the exact design text.
  const ease = (k) => 1 - Math.pow(1 - k, 3);
  const counters = [...document.querySelectorAll('.facts dt')].map((el) => {
    const m = el.textContent.match(/^(\D*)(\d+)(.*)$/);
    return m && { el, text: el.textContent, pre: m[1], n: +m[2], post: m[3] };
  }).filter(Boolean);
  if (!reduced && counters.length) {
    const grid = document.querySelector('.facts');
    const countIO = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      countIO.disconnect();
      const t0 = performance.now();
      const frame = (now) => {
        let done = true;
        counters.forEach((c, i) => {
          const k = Math.min(1, Math.max(0, (now - t0 - i * 80) / 1100));
          if (k < 1) done = false;
          c.el.textContent = k >= 1 ? c.text : c.pre + Math.round(c.n * ease(k)) + c.post;
        });
        if (!done) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }, { threshold: 0.3 });
    countIO.observe(grid);
  }

  // A story runs on a clock that only advances while its section is on screen.
  function story(root, period, draw, rest) {
    if (!root) return;
    if (reduced) { rest(); return; }
    let visible = false, started = false, t = 0, last = 0;
    const tick = (now) => {
      if (!visible) return;
      t += Math.min(0.1, (now - last) / 1000);
      last = now;
      draw(t % period, Math.floor(t / period));
      requestAnimationFrame(tick);
    };
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) {
        if (!started) { started = true; t = 0; }
        last = performance.now();
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 }).observe(root);
  }

  // Pinned pipeline: the step in the middle of the screen lights its node.
  const steps = [...document.querySelectorAll('.pin-steps li')];
  const nodes = [...document.querySelectorAll('.pin .flow li')];
  if (steps.length && nodes.length) {
    const setStep = (k) => {
      steps.forEach((s, i) => s.classList.toggle('on', i === k));
      nodes.forEach((n, i) => {
        n.classList.toggle('lit', i < k);
        n.classList.toggle('current', i === k);
        n.classList.toggle('sent', i === k && i === nodes.length - 1 && !reduced);
      });
    };
    const stepIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setStep(steps.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach((s) => stepIO.observe(s));
    setStep(0);
  }

  // Videos play only while on screen; reduced motion gets controls instead.
  document.querySelectorAll('video[muted]').forEach((v) => {
    if (reduced) { v.controls = true; return; }
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) v.play().catch(() => {}); else v.pause();
    }, { threshold: 0.4 }).observe(v);
  });

  // Home hero: one draft clears both gates, the next is blocked at the draft gate.
  const heroFlow = document.querySelector('.hero-flow');
  if (heroFlow) {
    const nodes = [...heroFlow.querySelectorAll('.flow li')];
    const cap = heroFlow.querySelector('.hero-cap');
    const rest = cap.dataset.rest;
    const lines = [
      'A sourced draft clears both gates and waits for me to send it.',
      'Blocked at the draft gate: a number with no source behind it.',
    ];
    let shown = rest;
    const say = (text) => {
      if (text === shown) return;
      shown = text;
      cap.classList.add('swap');
      setTimeout(() => { cap.textContent = text; cap.classList.remove('swap'); }, 300);
    };
    const STEP = 0.45, GATE = 3;
    story(heroFlow, 7, (t, run) => {
      const blocked = run % 2 === 1;
      const stop = blocked ? GATE : nodes.length - 1;
      const reached = Math.floor((t - 0.6) / STEP);
      const resting = t < 0.6 || t > 5.8;
      nodes.forEach((n, i) => {
        n.classList.toggle('lit', !resting && i <= Math.min(reached, stop));
        n.classList.toggle('blocked', !resting && blocked && i === GATE && reached >= GATE);
        n.classList.toggle('sent', !resting && !blocked && i === nodes.length - 1 && reached >= stop);
        n.classList.toggle('dim', !resting && blocked && i > GATE && reached >= GATE);
      });
      say(resting ? rest : reached >= stop ? lines[blocked ? 1 : 0] : rest);
    }, () => {});
  }

  // MCP batch: priced, confirmed, shots go ready. Then a batch over the cap is refused.
  const term = document.querySelector('.term');
  if (term) {
    const runs = [...term.querySelectorAll('.run')];
    const final = () => runs.forEach((r, i) => {
      r.hidden = i !== 0;
      r.querySelectorAll('.ln').forEach((l) => l.classList.add('on'));
      r.querySelectorAll('.shot').forEach((s) => s.classList.add('ready'));
    });
    story(term, 7, (t, run) => {
      const r = run % runs.length;
      runs.forEach((el, i) => { el.hidden = i !== r; });
      const el = runs[r];
      const out = t > 6.3;
      el.querySelectorAll('.ln').forEach((l, i) => l.classList.toggle('on', !out && t > 0.3 + i * 0.7));
      el.querySelectorAll('.shot').forEach((s, i) => s.classList.toggle('ready', !out && t > 3.2 + i * 0.3));
    }, final);
  }
})();
