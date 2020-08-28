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

    for (var [name, value] of formData.entries()) {
        var liNode = document.createElement("li");
        var textNode = document.createTextNode(value);
        liNode.appendChild(textNode);
        sidebarTarget.appendChild(liNode);
    }
}

document.querySelectorAll(".next").forEach(nextBtn => {
    nextBtn.addEventListener("click", event => {
        var editBtn = nextBtn.closest(".card").querySelector(".edit-btn");
        editBtn.classList.remove("d-none");

        var nextContent = document.querySelector(nextBtn.getAttribute("data-target"));
        var nextCard = nextContent.closest(".card").querySelector(".card-header");
        nextCard.classList.remove("disabled");
        nextCard.setAttribute("data-toggle", "collapse");

        var forms = nextBtn.closest(".card").querySelectorAll("form");

        forms.forEach(form => {
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
