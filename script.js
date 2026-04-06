(function () {
  const weblink = `${window.location.protocol}//${window.location.hostname}`;

  // Helpers — batch DOM changes to minimize reflows
  function injectCSS(css) {
    const s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
  }

  function hideBySelector(selector) {
    document.querySelectorAll(selector).forEach(el => el.style.display = "none");
  }

  function removeBySelector(selector) {
    document.querySelectorAll(selector).forEach(el => el.remove());
  }

  function addBgClass(selector) {
    const el = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (el) el.classList.add("custom-background-color-for-body");
  }

  function initScroll() {
    if (window.__initSmoothScroll) {
      window.__initSmoothScroll();
    }
  }

  const handlers = {
    a() {
      addBgClass(document.body);
      const closeAds = document.getElementsByClassName("floating_content_close_button");
      const header = document.querySelector(".c-sub-header-nav.with-border");
      if (header) header.style.zIndex = -999;
      removeBySelector(".site-footer");
      const customHtml = document.getElementById("custom_html-29")
        || document.getElementById("custom_html-9")
        || document.getElementById("custom_html-39");
      if (customHtml) customHtml.style.display = "none";
      for (const ad of closeAds) {
        ad.addEventListener("click", () => { ad.parentElement.style.display = "none"; });
        ad.click();
      }
    },

    b() {
      injectCSS(".ads-float, .ads { display: none !important; }");
    },

    c() {
      injectCSS(`
        .dessert-frame, .w-bnn-left, .w-bnn-right, .w-bnn-bottom,
        .ads, .center_gomanga,
        #sticky-bottom, #sticky-bottom2, #sticky-bottom3, #i1zw2bi765 {
          display: none !important;
        }
      `);
    },

    d() {
      removeBySelector(".body-wrapper, .header-ads-section, .blox.mlb.kln");
    },

    e() {
      addBgClass("#SITE_PAGES_TRANSITION_GROUP");
    },

    f() {
      hideBySelector("#animekimiads1");
    },

    g() {
      addBgClass(document.body);
    },

    h() {
      hideBySelector(".header-ads-section");
    },

    i() {
      addBgClass("#content");
    },

    j() {
      removeBySelector([
        ".elementor-element.ads.e-flex.e-con-boxed.e-con.e-parent",
        ".elementor-element.elementor-widget.elementor-widget-shortcode",
        ".readercontent .wrapper",
        ".widget_text.widget__inner.widget_custom_html__inner.c-widget-wrap",
      ].join(","));
      injectCSS(".c-sub-header-nav.with-border.sticky { position: initial !important; }");
    },

    k() {
      const main = document.querySelector("main");
      if (main) main.classList.add("custom-background-color-for-body");
    },

    l() {
      hideBySelector(".container-fluid .article__header center");
      injectCSS(".wbnn { display: none !important; }");
    },
  };

  // Site → [handler keys, useScroll]
  const siteMap = {
    "https://mangafin.me":              [["a"]],
    "https://mangafins.com":            [["a"]],
    "https://mangafins.net":            [["a"]],
    "https://www.kuro-manga.com":       [["a"]],
    "https://www.manhuathai.com":       [["b"]],
    "https://www.manhuakey.com":        [["b"]],
    "https://manga168.com":             [["c"], true],
    "https://manga1688.com":            [["c"], true],
    "https://manga168.net":             [["c"], true],
    "https://manga689.com":             [["c"], true],
    "https://manga-1668.com":           [["c"], true],
    "https://www.manga-1668.com":       [["c"], true],
    "https://www2.manga1688.com":       [["c"], true],
    "https://fcmanga.com":              [["c"], true],
    "https://fcmanga.net":              [["c"], true],
    "https://1668manga.com":            [["c"], true],
    "https://www.sing-manga.com":       [["c"], true],
    "https://www.manhuabug.com":        [["d"]],
    "https://www.xn--l3c0azab5a2gta.com": [["b"], true],
    "https://www.kongkangtoon.com":     [["e"], true],
    "https://toomtam-manga.com":        [["d"], true],
    "https://manga-za.net":             [["d"], true],
    "https://skoiiz-manga.com":         [["g"], true],
    "https://www.inu-manga.com":        [["h"], true],
    "https://www.nabee-manga.com":      [["h"], true],
    "https://mafia-manga.com":          [["h"], true],
    "https://www.niceoppai.net":        [["c"], true],
    "https://www.mangathai.com":        [["c"], true],
    "https://www.dragon-manga.com":     [["c"], true],
    "https://www.go-manga.com":         [["c"], true],
    "https://mynovel.co":               [["i"], true],
    "https://mangathailand.com":        [["j"], true],
    "https://asurahunter.com":          [["j"], true],
    "https://kuromanga.com":            [["j"], true],
    "https://readrealm.co":            [["k"], true],
    "https://www.reborntrans.com":      [["l"], true],
    "https://readtoon.com":             [[], true],
    "https://speed-manga.net":          [["c"], true],
  };

  const match = siteMap[weblink];
  if (!match) return;

  const [keys, useScroll] = match;
  keys.forEach(k => handlers[k]());
  // if (useScroll) initScroll();
})();


