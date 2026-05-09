/* Killian Lift design package - SPA with markdown/SVG/CSV rendering.
   Renders source files in place. No HTML duplication of content. */

(() => {
  'use strict';

  // ---------- AUTH ----------
  // This is a low-friction gate, not real security: anyone with the URL can
  // still fetch the source files directly. Source visibility is acceptable
  // per the project owner. Goal here is "no casual access."
  const SESSION_KEY = 'klft_unlocked';
  // Password is compared as a string. To change it, edit the literal below.
  function checkPassword(input) {
    return (input || '').trim() === 'pencil';
  }

  function isUnlocked() {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  }

  function unlock() {
    sessionStorage.setItem(SESSION_KEY, '1');
    document.getElementById('gate').style.display = 'none';
    document.getElementById('app').hidden = false;
    initApp();
  }

  function lock() {
    sessionStorage.removeItem(SESSION_KEY);
    location.reload();
  }

  // ---------- NAVIGATION MANIFEST ----------
  // Hardcoded mirror of the killian-lift/ directory. When new files are added,
  // update this list. (Single source of truth for the sidebar.)
  const NAV = [
    {
      title: 'Overview',
      items: [
        { name: 'Start Here', path: 'killian-lift/README.md' },
      ]
    },
    {
      title: '01. Design',
      items: [
        { name: 'Design Brief', path: 'killian-lift/01-design/design-brief.md' },
        { name: 'Specifications', path: 'killian-lift/01-design/specifications.md' },
        { name: 'Competitive Analysis', path: 'killian-lift/01-design/competitive-analysis.md' },
        { name: 'Pain Points Research', path: 'killian-lift/01-design/pain-points-research.md' },
      ]
    },
    {
      title: 'Drawings',
      items: [
        { name: 'Overall - Isometric', path: 'killian-lift/01-design/diagrams/overall-isometric.svg' },
        { name: 'Overall - Folded', path: 'killian-lift/01-design/diagrams/overall-folded.svg' },
        { name: 'Base / Outrigger Top Down', path: 'killian-lift/01-design/diagrams/base-top-down.svg' },
        { name: 'Mast Section', path: 'killian-lift/01-design/diagrams/mast-section.svg' },
        { name: 'Winch Assembly', path: 'killian-lift/01-design/diagrams/winch-assembly.svg' },
        { name: 'Outrigger Detail', path: 'killian-lift/01-design/diagrams/outrigger-detail.svg' },
        { name: 'Control System Block', path: 'killian-lift/01-design/diagrams/control-system-block.svg' },
        { name: 'Load Path Diagram', path: 'killian-lift/01-design/diagrams/load-path-diagram.svg' },
        { name: 'Stability Envelope', path: 'killian-lift/01-design/diagrams/stability-envelope.svg' },
        { name: 'Retrofit - Mounting', path: 'killian-lift/03-retrofit-kit/diagrams/retrofit-mounting.svg' },
        { name: 'Retrofit - Wiring', path: 'killian-lift/03-retrofit-kit/diagrams/retrofit-wiring.svg' },
      ]
    },
    {
      title: '02. Engineering',
      items: [
        { name: 'Mechanical Design', path: 'killian-lift/02-engineering/mechanical-design.md' },
        { name: 'Electrical Design', path: 'killian-lift/02-engineering/electrical-design.md' },
        { name: 'Controls and Firmware', path: 'killian-lift/02-engineering/controls-and-firmware.md' },
        { name: 'Sensors and Telemetry', path: 'killian-lift/02-engineering/sensors-and-telemetry.md' },
        { name: 'Safety and Standards', path: 'killian-lift/02-engineering/safety-and-standards.md' },
        { name: 'Load Calculations', path: 'killian-lift/02-engineering/load-calculations.md' },
        { name: 'Full Product BOM', path: 'killian-lift/02-engineering/bom-full-product.csv' },
      ]
    },
    {
      title: '03. Retrofit Kit',
      items: [
        { name: 'Kit Design', path: 'killian-lift/03-retrofit-kit/kit-design.md' },
        { name: 'Installation Guide', path: 'killian-lift/03-retrofit-kit/installation-guide.md' },
        { name: 'Retrofit Kit BOM', path: 'killian-lift/03-retrofit-kit/bom-retrofit-kit.csv' },
      ]
    },
    {
      title: '04. Manufacturing',
      items: [
        { name: 'Manufacturing Plan', path: 'killian-lift/04-manufacturing/manufacturing-plan.md' },
        { name: 'Tooling and Capex', path: 'killian-lift/04-manufacturing/tooling-and-capex.md' },
        { name: 'Quality and Testing', path: 'killian-lift/04-manufacturing/quality-and-testing.md' },
      ]
    },
    {
      title: '05. Go to Market',
      items: [
        { name: 'GTM Strategy', path: 'killian-lift/05-go-to-market/gtm-strategy.md' },
        { name: 'Target Customers', path: 'killian-lift/05-go-to-market/target-customers.md' },
        { name: 'Pricing and Margin', path: 'killian-lift/05-go-to-market/pricing-and-margin.md' },
        { name: 'Sales Channels', path: 'killian-lift/05-go-to-market/sales-channels.md' },
        { name: 'Positioning and Messaging', path: 'killian-lift/05-go-to-market/positioning-and-messaging.md' },
        { name: '90-Day Launch Plan', path: 'killian-lift/05-go-to-market/launch-plan-90-day.md' },
        { name: 'Financial Model', path: 'killian-lift/05-go-to-market/financial-model.csv' },
      ]
    },
    {
      title: '06. IP and Legal',
      items: [
        { name: 'Patent Landscape', path: 'killian-lift/06-ip-and-legal/patent-landscape.md' },
        { name: 'Patentability Assessment', path: 'killian-lift/06-ip-and-legal/patentability-assessment.md' },
        { name: 'Trademark and Naming', path: 'killian-lift/06-ip-and-legal/trademark-and-naming.md' },
      ]
    },
    {
      title: '07. Roadmap',
      items: [
        { name: 'Product Roadmap', path: 'killian-lift/07-roadmap/product-roadmap.md' },
        { name: 'Risks and Mitigations', path: 'killian-lift/07-roadmap/risks-and-mitigations.md' },
      ]
    },
  ];

  const DEFAULT_PATH = 'killian-lift/README.md';

  // ---------- ROUTING ----------
  function currentPath() {
    const hash = location.hash.replace(/^#\/?/, '');
    return hash || DEFAULT_PATH;
  }

  function navigate(path) {
    location.hash = '#/' + path;
  }

  // ---------- RENDERERS ----------

  function el(tag, attrs = {}, children = []) {
    const e = document.createElement(tag);
    for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    for (const c of [].concat(children)) {
      if (c == null) continue;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return e;
  }

  function dirOf(path) {
    const i = path.lastIndexOf('/');
    return i >= 0 ? path.slice(0, i + 1) : '';
  }

  function resolvePath(base, rel) {
    if (/^[a-z]+:/i.test(rel) || rel.startsWith('//')) return rel;
    if (rel.startsWith('#') || rel.startsWith('mailto:')) return rel;
    if (rel.startsWith('/')) return rel.slice(1);
    const parts = (dirOf(base) + rel).split('/');
    const out = [];
    for (const p of parts) {
      if (p === '..') out.pop();
      else if (p !== '.' && p !== '') out.push(p);
    }
    return out.join('/');
  }

  function renderMarkdown(text, sourcePath) {
    // Configure marked for GitHub-style basics
    marked.setOptions({ gfm: true, breaks: false, headerIds: true });
    const html = marked.parse(text);

    const wrap = el('div', { class: 'content-wrap' });
    wrap.innerHTML = html;

    // Rewrite relative links so they navigate within the SPA
    wrap.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (/^[a-z]+:/i.test(href) || href.startsWith('//') || href.startsWith('mailto:')) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        return;
      }
      if (href.startsWith('#')) return; // in-page anchor
      const resolved = resolvePath(sourcePath, href);
      a.setAttribute('href', '#/' + resolved);
    });

    // Inline-render referenced SVG diagrams when an image points to one
    wrap.querySelectorAll('img[src]').forEach(img => {
      const src = img.getAttribute('src');
      const resolved = resolvePath(sourcePath, src);
      if (resolved.toLowerCase().endsWith('.svg')) {
        const obj = el('object', { type: 'image/svg+xml', data: resolved });
        const wrapper = el('div', { class: 'svg-embed' }, [
          obj,
          el('div', { class: 'svg-actions' }, [
            el('a', { href: '#/' + resolved }, 'Open full view'),
            el('a', { href: resolved, target: '_blank', rel: 'noopener noreferrer' }, 'Open SVG in new tab'),
          ])
        ]);
        img.replaceWith(wrapper);
      } else {
        img.setAttribute('src', resolved);
      }
    });

    return wrap;
  }

  function renderSvg(path) {
    const wrap = el('div', { class: 'content-wrap' });
    const title = path.split('/').pop().replace(/\.svg$/i, '').replace(/-/g, ' ');
    wrap.appendChild(el('h1', {}, title));
    const embed = el('div', { class: 'svg-embed' }, [
      el('object', { type: 'image/svg+xml', data: path }),
      el('div', { class: 'svg-actions' }, [
        el('a', { href: path, target: '_blank', rel: 'noopener noreferrer' }, 'Open SVG in new tab'),
        el('a', { href: path, download: '' }, 'Download'),
      ])
    ]);
    wrap.appendChild(embed);
    return wrap;
  }

  // CSV parser that handles quoted fields with commas
  function parseCsv(text) {
    const rows = [];
    let row = [], field = '', inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else inQuotes = false;
        } else field += c;
      } else {
        if (c === '"') inQuotes = true;
        else if (c === ',') { row.push(field); field = ''; }
        else if (c === '\n' || c === '\r') {
          if (c === '\r' && text[i + 1] === '\n') i++;
          row.push(field); rows.push(row); row = []; field = '';
        } else field += c;
      }
    }
    if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
    return rows.filter(r => r.some(c => c.length > 0));
  }

  function renderCsv(text, path) {
    const rows = parseCsv(text);
    const wrap = el('div', { class: 'content-wrap' });
    const title = path.split('/').pop();
    wrap.appendChild(el('h1', {}, title));
    wrap.appendChild(el('p', { class: 'gate-hint' }, [
      'CSV viewer. ',
      el('a', { href: path, download: '' }, 'Download original'),
    ]));

    const viewer = el('div', { class: 'csv-viewer' });
    viewer.appendChild(el('div', { class: 'csv-viewer-header' }, [
      el('span', {}, rows.length + ' rows'),
      el('span', {}, path),
    ]));

    const table = el('table');
    if (rows.length === 0) {
      viewer.appendChild(table);
      wrap.appendChild(viewer);
      return wrap;
    }

    const header = rows[0];
    const thead = el('thead');
    const trh = el('tr');
    header.forEach(h => trh.appendChild(el('th', {}, h)));
    thead.appendChild(trh);
    table.appendChild(thead);

    const tbody = el('tbody');
    rows.slice(1).forEach(r => {
      const tr = el('tr');
      // Detect heading-ish rows (first col uppercase identifier and most fields empty)
      const first = (r[0] || '').trim();
      const filled = r.filter(c => c && c.trim()).length;
      const isSection = /^[A-Z_ ]+$/.test(first) && first.length > 1 && filled <= 2;
      if (isSection) tr.className = 'csv-section';
      r.forEach(c => tr.appendChild(el('td', {}, c)));
      // Pad short rows
      for (let j = r.length; j < header.length; j++) tr.appendChild(el('td', {}, ''));
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    viewer.appendChild(table);
    wrap.appendChild(viewer);
    return wrap;
  }

  function renderNotFound(path) {
    const wrap = el('div', { class: 'content-wrap notfound' });
    wrap.appendChild(el('h1', {}, 'Not found'));
    wrap.appendChild(el('p', {}, 'No document at: ' + path));
    wrap.appendChild(el('p', {}, [
      'Try the ',
      el('a', { href: '#/' + DEFAULT_PATH }, 'README'),
      '.'
    ]));
    return wrap;
  }

  // ---------- LOAD AND ROUTE ----------

  async function loadAndRender(path) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(el('div', { id: 'loading' }, 'Loading ' + path + '...'));

    try {
      const res = await fetch(path, { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();

      let rendered;
      const lower = path.toLowerCase();
      if (lower.endsWith('.md')) rendered = renderMarkdown(text, path);
      else if (lower.endsWith('.svg')) rendered = renderSvg(path);
      else if (lower.endsWith('.csv')) rendered = renderCsv(text, path);
      else {
        rendered = el('div', { class: 'content-wrap' });
        rendered.appendChild(el('h1', {}, path.split('/').pop()));
        rendered.appendChild(el('pre', {}, [el('code', {}, text)]));
      }

      content.innerHTML = '';
      content.appendChild(rendered);
      // Scroll to top after route change (or to anchor if present)
      const anchor = location.hash.split('#')[2];
      if (anchor) {
        const target = document.getElementById(anchor);
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
      document.title = path.split('/').pop() + ' - Killian Lift';
    } catch (err) {
      content.innerHTML = '';
      content.appendChild(renderNotFound(path));
      document.title = 'Not found - Killian Lift';
    }

    updateActiveNav(path);
  }

  function updateActiveNav(path) {
    document.querySelectorAll('.nav-item').forEach(a => {
      const target = a.getAttribute('data-path');
      if (target === path) a.classList.add('active');
      else a.classList.remove('active');
    });
  }

  // ---------- SIDEBAR BUILD ----------

  function buildSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    NAV.forEach(group => {
      const g = el('div', { class: 'nav-group' });
      g.appendChild(el('div', { class: 'nav-group-title' }, group.title));
      group.items.forEach(item => {
        const a = el('a', {
          class: 'nav-item',
          href: '#/' + item.path,
          'data-path': item.path,
        }, item.name);
        g.appendChild(a);
      });
      sidebar.appendChild(g);
    });
  }

  // ---------- INIT ----------

  function initApp() {
    buildSidebar();

    const handleRoute = () => loadAndRender(currentPath());
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    document.getElementById('signout').addEventListener('click', lock);

    const menu = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    menu.addEventListener('click', () => sidebar.classList.toggle('open'));
    sidebar.addEventListener('click', e => {
      if (e.target.classList.contains('nav-item')) sidebar.classList.remove('open');
    });
  }

  function initGate() {
    const form = document.getElementById('gate-form');
    const pwInput = document.getElementById('gate-pw');
    const msg = document.getElementById('gate-msg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      msg.textContent = '';
      if (checkPassword(pwInput.value)) unlock();
      else {
        msg.textContent = 'Incorrect password.';
        pwInput.value = '';
        pwInput.focus();
      }
    });
  }

  // Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    if (isUnlocked()) {
      document.getElementById('gate').style.display = 'none';
      document.getElementById('app').hidden = false;
      initApp();
    } else {
      initGate();
    }
  });
})();
