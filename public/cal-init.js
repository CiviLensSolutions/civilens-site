(function (C, A, L) {
  var p = function (a, ar) { a.q.push(ar); };
  var d = C.document;
  C.Cal = C.Cal || function () {
    var cal = C.Cal; var ar = arguments;
    if (!cal.loaded) {
      cal.ns = {}; cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      var api = function () { p(api, arguments); };
      var namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, [L, namespace].concat(Array.prototype.slice.call(ar, 2)));
      } else { p(cal, ar); }
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", { origin: "https://cal.com" });

Cal("inline", {
  elementOrSelector: "#cal-embed",
  calLink: "shea-civilens",
  layout: "month_view"
});

Cal("ui", {
  styles: {
    branding: { brandColor: "#c9a84c" },
    body: { background: "#f5f0e8" }
  },
  hideEventTypeDetails: false,
  layout: "month_view"
});
