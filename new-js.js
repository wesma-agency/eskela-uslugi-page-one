document.addEventListener(
	"DOMContentLoaded",
	function () {
		let arrProvideItem = Array.prototype.slice.call(document.querySelectorAll(".provide-item"));
		let wrapProvide = document.querySelector(".section-service-provide__group");

		if (arrProvideItem.length > 10) {
			arrProvideItem.forEach((element, index) => {
				index > 9 ? element.classList.add("--hidden") : null;
			});

			let buttonAll = document.createElement("div");
			buttonAll.classList.add("section-service-provide__all", "--show");
			buttonAll.textContent = "Показать все";

			buttonAll.addEventListener("click", function (e) {
				e.preventDefault();
				arrProvideItem.forEach((element, index) => {
					if (index > 9) {
						if (element.classList.contains("--hidden")) {
							element.classList.remove("--hidden");
							buttonAll.textContent = "Скрыть";
						} else {
							element.classList.add("--hidden");
							buttonAll.textContent = "Показать все";
						}
					}
				});
			});

			wrapProvide ? wrapProvide.append(buttonAll) : null;
		}

		let arrTagItem = Array.prototype.slice.call(document.querySelectorAll(".provide-tag-item"));

		if (arrTagItem.length > 11) {
			arrTagItem.forEach((element, index) => {
				index > 10 ? element.classList.add("--hidden") : null;
			});

			let buttonAll = document.createElement("div");
			buttonAll.classList.add("section-service-tag__all", "--show");
			buttonAll.textContent = "Показать все";

			buttonAll.addEventListener("click", function (e) {
				e.preventDefault();
				arrTagItem.forEach((element, index) => {
					if (index > 10) {
						if (element.classList.contains("--hidden")) {
							element.classList.remove("--hidden");
							buttonAll.textContent = "Скрыть";
						} else {
							element.classList.add("--hidden");
							buttonAll.textContent = "Показать все";
						}
					}
				});
			});

			arrTagItem[0].parentNode ? arrTagItem[0].parentNode.append(buttonAll) : null;
		}
	},
	false
);
