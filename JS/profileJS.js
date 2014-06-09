function createArticle () {
	var mask=document.getElementById("mask");
	var newArticle=document.getElementById("newArticle");  
	mask.style.display="block";  
	newArticle.style.display="block";
	
	var bodyDiv=document.getElementById("bodyDiv");
	bodyDiv.style.overflowY= "hidden";
}
function readArticle () {
	var mask=document.getElementById("mask");
	var openArticle=document.getElementById("openArticle");
	mask.style.display="block";  
	openArticle.style.display="block";
	  

	var mainDiv=document.getElementById("wrapper");
	mainDiv.style.position="fixed";
	var footer=document.getElementById("foot");
	footer.style.display="none";

}
function createDiscussion () {
	var mask=document.getElementById("mask");
	var newDiscussion=document.getElementById("newDiscussion");
	mask.style.display="block";  
	newDiscussion.style.display="block";
	
	var bodyDiv=document.getElementById("bodyDiv");
	bodyDiv.style.overflowY= "hidden";
}
function closeDialog() {
	var mask=document.getElementById("mask");
	var newArticle=document.getElementById("newArticle");
	var openArticle=document.getElementById("openArticle");
	var newDiscussion=document.getElementById("newDiscussion");  
	mask.style.display="none";  
	newArticle.style.display="none";
	openArticle.style.display="none";
	newDiscussion.style.display="none";

	var mainDiv=document.getElementById("wrapper");
	mainDiv.style.position="relative";
	var footer=document.getElementById("foot");
	footer.style.display="block";
	
	
	var bodyDiv=document.getElementById("bodyDiv");
	bodyDiv.style.overflowY= "auto";
}
function holderOnDrop(e) {
	this.className = '';
	  e.preventDefault();
	  holder.innerHTML="";
	  var file = e.dataTransfer.files[0],
	      reader = new FileReader();
	  reader.onload = function (event) {
	    console.log(event.target);
	    holder.style.background = 'url(' + event.target.result + ') no-repeat center';
	    holder.style.backgroundSize="cover";
	  };
	  console.log(file);
	  reader.readAsDataURL(file);
	
	  return false;
}
function assignEvents() {

	var holder = document.getElementById('holder'); 
	holder.ondragover = function () { this.className = 'hover'; return false; };
	holder.ondragend = function () {  this.className = ''; return false; };
	holder.ondrop = holderOnDrop;
	
	var mask = document.getElementById("mask");
	mask.onclick=closeDialog;

	var createArticleLink = document.getElementById("createArticle");
	createArticleLink.onclick=createArticle;

	var articleImages = document.getElementsByClassName("articleImg");
	for ( var i = 0; i < articleImages.length; i++) {
		articleImages[i].onclick=readArticle;	
	}

	var newDiscussionButton = document.getElementById("newDiscussionButton");
	newDiscussionButton.onclick=createDiscussion;

	var newDocumentButton = document.getElementById("newDocumentButton");
	newDocumentButton.onclick=createDiscussion;
	
}