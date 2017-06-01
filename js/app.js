/*
 * Archivo principal de funcionalidad de JS
 */
 (function main(){
	var boxes = Array.from(document.getElementsByClassName("imagenes"));
	var work = document.getElementById("work");

	var modal, bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal = document.createElement("div");
			modal.classList.add("box-services-modal");
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "assets/images/close.png");
			close.appendChild(img);
			modal.appendChild(close);
			work.appendChild(modal);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();