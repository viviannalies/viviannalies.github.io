"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var billingCheckbox = document.getElementById("billingCheck");

function clearChildren(parent) {
  if (parent != null) {
    var firstChild = parent.firstElementChild;

    while (firstChild) {
      firstChild.remove();
      firstChild = parent.firstElementChild;
    }
  }
}

function fillSidebarData(sidebarTargetId, formData) {
  var sidebarTarget = document.querySelector("#" + sidebarTargetId);
  clearChildren(sidebarTarget);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          name = _step$value[0],
          value = _step$value[1];

      var liNode = document.createElement("li");
      var textNode = document.createTextNode(value);
      liNode.appendChild(textNode);
      sidebarTarget.appendChild(liNode);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

document.querySelectorAll(".next").forEach(function (nextBtn) {
  nextBtn.addEventListener("click", function (event) {
    var editBtn = nextBtn.closest(".card").querySelector(".edit-btn");
    editBtn.classList.remove("d-none");
    var nextContent = document.querySelector(nextBtn.getAttribute("data-target"));
    var nextCard = nextContent.closest(".card").querySelector(".card-header");
    nextCard.classList.remove("disabled");
    nextCard.setAttribute("data-toggle", "collapse");
    var forms = nextBtn.closest(".card").querySelectorAll("form");
    forms.forEach(function (form) {
      var formData = new FormData(form);
      var sidebarTargetId = form.getAttribute("data-sidebar");
      fillSidebarData(sidebarTargetId, formData);
    });
  });
});
billingCheckbox.addEventListener('change', function () {
  var billingAddress = document.getElementById("billing-address");
  billingAddress.classList.toggle("d-none");
});