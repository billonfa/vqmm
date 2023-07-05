var isPercentage = false;
var prizes = [
  {
    text: "Văn Minh",
    img: "images/VANMINH68686868.jpeg",
    number: 1,
    percentpage: 0.01,
  },
  {
    text: "Duy Ruby",
    img: "images/duy_ruby.jpg",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "Đại Nhân",
    img: "images/hoang_dai_nhan.png",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "Donny",
    img: "images/donny.jpg",
    number: 1,
    percentpage: 0.001, //
  },
  {
    text: "Kiến Phong",
    img: "images/kien_phong.png",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "NARA",
    img: "images/nara.png",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "Thiện Nguyễn",
    img: "images/thien_nguyen.jpeg",
    number: 1,
    percentpage: 0.01, //
  },
  {
    text: "Huynh tổng",
    img: "images/huynh_tong.jpeg",
    number: 1,
    percentpage: 0.088, //
  },
  {
    text: "Hoàng Lê",
    img: "images/hoang_le.jpg",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "Phan Anh",
    img: "images/phan_anh.png",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "Nhật Hoàng",
    img: "images/nhat_hoang.png",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "BINCUTE",
    img: "images/bincute.jpeg",
    number: 1, //
    percentpage: 0.001, //
  },
  {
    text: "Hữu Công",
    img: "images/huu_cong.png",
    number: 1,
    percentpage: 0.8,
  },
  {
    text: "Hume City",
    img: "images/hume_city.png",
    number: 1,
    percentpage: 0.8,
  },
  // 1 người loại
  {
    text: "Huy Đức",
    img: "images/nhat_hoang.png",
    number: 1,
    percentpage: 0.8,
  },
  // End 1 người loại
  {
    text: "Hoàng Anh",
    img: "images/hoang_anh.jpg",
    number: 1,
    percentpage: 0.8,
  },
  // Vào: 1 3 6 7 10 11 13 15
];
document.addEventListener(
  "DOMContentLoaded",
  function () {
    hcLuckywheel.init({
      id: "luckywheel",
      config: function (callback) {
        callback && callback(prizes);
      },
      mode: "both",
      getPrize: function (callback) {
        var rand = randomIndex(prizes);
        var chances = rand;
        callback && callback([rand, chances]);
      },
      gotBack: function (data) {
        if (data == null) {
          Swal.fire("Chương trình kết thúc", "Đã hết phần thưởng", "error");
        } else if (data == "Chúc bạn may mắn lần sau") {
          Swal.fire("Bạn không trúng thưởng", data, "error");
        } else {
          Swal.fire("Người được chọn", data, "success");
        }
      },
    });
  },
  false
);

function randomIndex(prizes) {
  if (isPercentage) {
    var counter = 1;
    for (let i = 0; i < prizes.length; i++) {
      if (prizes[i].number == 0) {
        counter++;
      }
    }
    if (counter == prizes.length) {
      return null;
    }
    let rand = 1;
    let prizeIndex = null;
    switch (true) {
      case rand < prizes[4].percentpage:
        prizeIndex = 4;
        break;
      case rand < prizes[4].percentpage + prizes[3].percentpage:
        prizeIndex = 3;
        break;
      case rand <
      prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage:
        prizeIndex = 2;
        break;
      case rand <
      prizes[4].percentpage +
      prizes[3].percentpage +
      prizes[2].percentpage +
      prizes[1].percentpage:
        prizeIndex = 1;
        break;
      case rand <
      prizes[4].percentpage +
      prizes[3].percentpage +
      prizes[2].percentpage +
      prizes[1].percentpage +
      prizes[0].percentpage:
        prizeIndex = 0;
        break;
      default : prizeIndex = 0
    }
    console.log(rand)
    if (prizes[prizeIndex].number != 0) {
      prizes[prizeIndex].number = prizes[prizeIndex].number - 1;
      return prizeIndex;
    } else {
      return randomIndex(prizes);
    }
  } 
  else {
    var counter = 0;
    for (let i = 0; i < prizes.length; i++) {
      if (prizes[i].number == 0) {
        counter++;
      }
    }
    if (counter == prizes.length) {
      return null;
    }

    var numbers = [1, 3, 6, 7, 10, 11, 13, 15];
    var rand = numbers[Math.floor(Math.random() * numbers.length)];
    if (prizes[rand].number != 0) {
      console.log(rand)
      prizes[rand].number = prizes[rand].number - 1;
      const ra = document.getElementById(rand)
      setTimeout(function() {
        ra.classList.remove('hidden')
      }, 7000)
      
      return rand;
    }
    else {
      var numbers2 = [0, 2, 4, 5, 8, 9, 12, 14]
      var rand2 = numbers2[Math.floor(Math.random() * numbers2.length)];
      if (prizes[rand2].number != 0) {
        prizes[rand2].number = prizes[rand2].number - 1;
        const ra = document.getElementById(rand2)
        setTimeout(function() {
          ra.classList.remove('hidden')
        }, 7000)
        
        // return rand2;
        return randomIndex(prizes);
      }
    }
  }
}
(function () {
  var $,
    ele,
    container,
    canvas,
    num,
    prizes,
    btn,
    deg = 0,
    fnGetPrize,
    fnGotBack,
    optsPrize;

  var cssPrefix,
    eventPrefix,
    vendors = {
      "": "",
      Webkit: "webkit",
      Moz: "",
      O: "o",
      ms: "ms",
    },
    testEle = document.createElement("p"),
    cssSupport = {};

  Object.keys(vendors).some(function (vendor) {
    if (
      testEle.style[vendor + (vendor ? "T" : "t") + "ransitionProperty"] !==
      undefined
    ) {
      cssPrefix = vendor ? "-" + vendor.toLowerCase() + "-" : "";
      eventPrefix = vendors[vendor];
      return true;
    }
  });

  /**
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function normalizeEvent(name) {
    return eventPrefix ? eventPrefix + name : name.toLowerCase();
  }

  /**
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function normalizeCss(name) {
    name = name.toLowerCase();
    return cssPrefix ? cssPrefix + name : name;
  }

  cssSupport = {
    cssPrefix: cssPrefix,
    transform: normalizeCss("Transform"),
    transitionEnd: normalizeEvent("TransitionEnd"),
  };

  var transform = cssSupport.transform;
  var transitionEnd = cssSupport.transitionEnd;

  // alert(transform);
  // alert(transitionEnd);

  function init(opts) {
    fnGetPrize = opts.getPrize;
    fnGotBack = opts.gotBack;
    opts.config(function (data) {
      prizes = opts.prizes = data;
      num = prizes.length;
      draw(opts);
    });
    events();
  }

  /**
   * @param  {String} id
   * @return {Object} HTML element
   */
  $ = function (id) {
    return document.getElementById(id);
  };

  function draw(opts) {
    opts = opts || {};
    if (!opts.id || num >>> 0 === 0) return;

    var id = opts.id,
      rotateDeg = 360 / num / 2 + 90,
      ctx,
      prizeItems = document.createElement("ul"),
      turnNum = 1 / num,
      html = [];

    ele = $(id);
    canvas = ele.querySelector(".hc-luckywheel-canvas");
    container = ele.querySelector(".hc-luckywheel-container");
    btn = ele.querySelector(".hc-luckywheel-btn");

    if (!canvas.getContext) {
      showMsg("Browser is not support");
      return;
    }

    ctx = canvas.getContext("2d");

    for (var i = 0; i < num; i++) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(250, 250); // Center Point
      ctx.moveTo(0, 0);
      ctx.rotate((((360 / num) * i - rotateDeg) * Math.PI) / 180);
      ctx.arc(0, 0, 250, 0, (2 * Math.PI) / num, false); // Radius
      if (i % 2 == 0) {
        ctx.fillStyle = "#ffb820";
      } else {
        ctx.fillStyle = "#ffcb3f";
      }
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#e4370e";
      ctx.stroke();
      ctx.restore();
      var prizeList = opts.prizes;
      html.push('<li class="hc-luckywheel-item"> <span style="');
      html.push(transform + ": rotate(" + i * turnNum + 'turn)">');
      if (opts.mode == "both") {
        html.push("<p id='curve'>" + prizeList[i].text + "</p>");
        html.push(`<img src="${prizeList[i].img}">`);
        html.push(`<div id="${i}" class="hidden" style="color:blue; font-size: 14px">Bảng A</div>`);
      } else if (prizeList[i].img) {
        html.push('<img src="' + prizeList[i].img + '" />');
      } else {
        html.push('<p id="curve">' + prizeList[i].text + "</p>");
      }
      html.push("</span> </li>");
      if (i + 1 === num) {
        prizeItems.className = "hc-luckywheel-list";
        container.appendChild(prizeItems);
        prizeItems.innerHTML = html.join("");
      }
    }
  }

  /**
   * @param  {String} msg [description]
   */
  function showMsg(msg) {
    alert(msg);
  }

  /**
   * @param  {[type]} deg [description]
   * @return {[type]}     [description]
   */
  function runRotate(deg) {
    // runInit();
    // setTimeout(function() {
    container.style[transform] = "rotate(" + deg + "deg)";
    // }, 10);
  }

  /**
   * @return {[type]} [description]
   */
  function events() {
    bind(btn, "click", function () {
      addClass(btn, "disabled");

      fnGetPrize(function (data) {
        if (data[0] == null && !data[1] == null) {
          return;
        }
        optsPrize = {
          prizeId: data[0],
          chances: data[1],
        };
        deg = deg || 0;
        deg = deg + (360 - (deg % 360)) + (360 * 5 - data[0] * (360 / num));
        runRotate(deg);
      });
      bind(container, transitionEnd, eGot);
    });
  }

  function eGot() {
    if (optsPrize.chances == null) {
      return fnGotBack(null);
    } else {
      removeClass(btn, "disabled");
      return fnGotBack(prizes[optsPrize.prizeId].text);
    }
  }

  /**
   * Bind events to elements
   * @param {Object}    ele    HTML Object
   * @param {Event}     event  Event to detach
   * @param {Function}  fn     Callback function
   */
  function bind(ele, event, fn) {
    if (typeof addEventListener === "function") {
      ele.addEventListener(event, fn, false);
    } else if (ele.attachEvent) {
      ele.attachEvent("on" + event, fn);
    }
  }

  /**
   * hasClass
   * @param {Object} ele   HTML Object
   * @param {String} cls   className
   * @return {Boolean}
   */
  function hasClass(ele, cls) {
    if (!ele || !cls) return false;
    if (ele.classList) {
      return ele.classList.contains(cls);
    } else {
      return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
  }

  // addClass
  function addClass(ele, cls) {
    if (ele.classList) {
      ele.classList.add(cls);
    } else {
      if (!hasClass(ele, cls)) ele.className += "" + cls;
    }
  }

  // removeClass
  function removeClass(ele, cls) {
    if (ele.classList) {
      ele.classList.remove(cls);
    } else {
      ele.className = ele.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
    }
  }

  var hcLuckywheel = {
    init: function (opts) {
      return init(opts);
    },
  };

  window.hcLuckywheel === undefined && (window.hcLuckywheel = hcLuckywheel);

  if (typeof define == "function" && define.amd) {
    define("HellCat-Luckywheel", [], function () {
      return hcLuckywheel;
    });
  }
})();