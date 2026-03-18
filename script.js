setBg(document.body);

function setBg(element) {
  const weblink = `${window.location.protocol}//${window.location.hostname}`;
  /* for (let index = 0; index < webList.length; index++) {
    if (webList.includes(weblink)) {
      element.classList.add("custom-background-color-for-body");
      let closeAd = document.getElementsByClassName("floating_content_close_button");
      console.log(closeAd);
      for (let indexC = 0; indexC < closeAd.length; indexC++) {
        closeAd[indexC].addEventListener("click", function () {
          closeAd[indexC].parentElement.style.display = "none";
        });
        setTimeout(() => {
          closeAd[indexC].click();
        }, 500);
      }
      break;
    }
  } */
  const list = {
    scroll: () => {
      scroll();
    },
    a: () => {
      element.classList.add("custom-background-color-for-body");
      let closeAd = document.getElementsByClassName(
        "floating_content_close_button"
      );
      let header = document.getElementsByClassName(
        "c-sub-header-nav with-border"
      );
      const footer = document.getElementsByClassName("site-footer");
      if (header[0]) header[0].style.zIndex = -999;
      if (footer[0]) footer[0]?.parentNode.removeChild(footer[0]);
      // if (header[0]) header[0].style.animation = "eFadeIn 0s";
      if (document.getElementById("custom_html-29"))
        document.getElementById("custom_html-29").style.display = "none";
      else if (document.getElementById("custom_html-9"))
        document.getElementById("custom_html-9").style.display = "none";
      else if (document.getElementById("custom_html-39"))
        document.getElementById("custom_html-39").style.display = "none";
      for (let indexC = 0; indexC < closeAd.length; indexC++) {
        closeAd[indexC].addEventListener("click", function () {
          closeAd[indexC].parentElement.style.display = "none";
        });
        closeAd[indexC].click();
      }
    },
    b: () => {
      // element.classList.add("custom-background-color-for-body");
      let ad1 = document.getElementsByClassName("ads-float");
      let ad2 = document.getElementsByClassName("ads");

      if (ad1[0]) ad1[0].style.display = "none";
      ad2[0].style.display = "none";
    },
    c: () => {
      let ad1 = document.getElementsByClassName("dessert-frame");
      let ad2 = document.getElementsByClassName("w-bnn-left");
      let ad3 = document.getElementsByClassName("w-bnn-right");
      let ad4 = document.getElementsByClassName("w-bnn-bottom");
      let ad5 = document.getElementById("ads_fox_bottom");
      let ad6 = document.getElementsByClassName("dessert-frame");
      let ad7 = document.getElementsByClassName("ads");
      let ad8 = document.getElementsByClassName("center_gomanga");
      let ad9 = document.getElementById('sticky-bottom');
      let ad10 = document.getElementById('sticky-bottom2');
      let ad11 = document.getElementById('sticky-bottom3');
      let ad12 = document.getElementById('i1zw2bi765');

      if (ad1[0]) ad1[0].style.display = "none";
      if (ad2[0]) ad2[0].style.display = "none";
      if (ad3[0]) ad3[0].style.display = "none";
      if (ad4[0]) ad4[0].style.display = "none";
      if (ad6[0]) ad6[0].style.display = "none";
      if (ad7[0]) ad7[0].style.display = "none";
      if (ad9) ad9.style.display = "none";
      if (ad10) ad10.style.display = "none";
      if (ad11) ad11.style.display = "none";
      if (ad12) ad12.style.display = "none";
      for (let i = 0; i < ad8.length; i++) {
        ad8[i].style.display = "none";
      }
      // if (ad5 !== undefined && ad5?.style?.display) ad5?.style?.display = "none";

      // element.classList.add("custom-background-color-for-body");
    },
    d: () => {
      let ad1 = document.getElementsByClassName("body-wrapper");
      const ad2 = document.getElementsByClassName("header-ads-section");

      if (ad1[0]) ad1[0].parentNode.removeChild(ad1[0]);
      if (ad2[0]) ad2[0].parentNode.removeChild(ad2[0]);

      const ad3 = document.getElementsByClassName("blox mlb kln");
      if (ad3[0]) ad3[0].parentNode.removeChild(ad3[0]);
    },
    e: () => {
      setTimeout(() => {

        document
          .getElementById("SITE_PAGES_TRANSITION_GROUP")
          .classList.add("custom-background-color-for-body");
      }, 2000);
    },

    /* Web anime */
    f: () => {
      document.getElementById("animekimiads1").style.display = "none";
    },
    g: () => {
      element.classList.add("custom-background-color-for-body");
    },
    h: () => {
      let ad1 = document.getElementsByClassName("header-ads-section");
      if (ad1[0]) ad1[0].style.display = "none";
    },
    i: () => {
      document
        .getElementById("content")
        ?.classList?.add("custom-background-color-for-body");
    },
    j: () => {
      const ad = document.querySelectorAll(".elementor-element.ads.e-flex.e-con-boxed.e-con.e-parent");
      const ad2 = document.querySelectorAll(".elementor-element.elementor-widget.elementor-widget-shortcode");
      const ad3 = document.querySelectorAll(".readercontent .wrapper");
      const ad4 = document.querySelectorAll(".widget_text.widget__inner.widget_custom_html__inner.c-widget-wrap");
      if (ad[0]) ad[0].parentNode.removeChild(ad[0]);
      if (ad2[0]) ad2[0].parentNode.removeChild(ad2[0]);
      if (ad3[0]) ad3[0].parentNode.removeChild(ad3[0]);
      if (ad4[0]) ad4[0].parentNode.removeChild(ad4[0]);

      setTimeout(() => {
        document.head.appendChild(style);
      }, 1500);


    },
    k: () => {
      // get element by tag name main
      const main = document.getElementsByTagName("main");
      main[0].classList.add("custom-background-color-for-body");
    },
    l: () => {
      // get element by tag name main
      const ad = document.querySelector(".container-fluid .article__header center");
      if (ad) ad.style.display = "none";
      const adPopup = document.getElementsByClassName('wbnn')
      // remove ad popup all
      for (let index = 0; index < adPopup.length; index++) {
        adPopup[index].style.display = "none";
      }
    }
  };

  switch (weblink) {
    case "https://mangafin.me":
    case "https://mangafins.com":
    case "https://mangafins.net":
    case "https://www.kuro-manga.com":
      list.a();
      break;
    case "https://www.manhuathai.com":
    case "https://www.manhuakey.com":
      list.b();
      break;
    case "https://manga168.com":
    case "https://manga1688.com":
    case "https://manga168.net":
    case "https://manga689.com":
    case "https://manga-1668.com":
    case "https://www.manga-1668.com":
    case "https://www2.manga1688.com":
    case "https://fcmanga.com":
    case "https://fcmanga.net":
    case "https://1668manga.com":
    case "https://www.sing-manga.com":
      list.c();
      list.scroll();
      break;
    case "https://www.manhuabug.com":
      list.d();
      break;
    case "https://www.xn--l3c0azab5a2gta.com":
      list.b();
      list.scroll();
      break;
    case "https://www.kongkangtoon.com":
      list.e();
      list.scroll();
      break;
    case "https://toomtam-manga.com":
    case "https://manga-za.net":
      list.d();
      list.scroll();
      break;
    case "https://skoiiz-manga.com":
      list.g();
      list.scroll();
      break;
    case "https://www.inu-manga.com":
    case "https://www.nabee-manga.com":
    case "https://mafia-manga.com":
      list.h();
      list.scroll();
      break;
    case "https://www.niceoppai.net":
    case "https://www.mangathai.com":
    case "https://www.dragon-manga.com":
    case "https://www.go-manga.com":
      list.c();
      list.scroll();
      break;
    case "https://mynovel.co":
      list.i();
      list.scroll();
      break;
    case "https://mangathailand.com":
    case "https://asurahunter.com":
    case "https://kuromanga.com":
      list.j();
      list.scroll();
      break;
    case "https://readrealm.co":
      list.k();
      list.scroll();
      break;
    case "https://www.reborntrans.com":
      list.l();
      list.scroll();
      break;
    case "https://readtoon.com":
      list.scroll();
      break;
    case "https://speed-manga.net":
      list.c();
      list.scroll();
  }

  function scroll() {
    if (window.__initSmoothScroll) {
      window.__initSmoothScroll();
    }
  }
}


// create class style
const style = document.createElement("style");
style.innerHTML = `
  .c-sub-header-nav.with-border.sticky{
    position: initial !important;
  }`


