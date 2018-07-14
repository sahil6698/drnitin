var acneBtn= document.getElementById('acneBtn');
var cellulitisBtn=document.getElementById('cellulitisBtn');
var chickenPoxBtn= document.getElementById('chickenPoxBtn');
var folliculitisBtn=document.getElementById('folliculitisBtn');
var fungalInfectionsBtn= document.getElementById('fungalInfectionsBtn');
var impetigoBtn=document.getElementById('impetigoBtn');
var melasmaBtn= document.getElementById('melasmaBtn');
var psorasisBtn=document.getElementById('psorasisBtn');
var pyodermaBtn= document.getElementById('pyodermaBtn');
var ringwormBtn=document.getElementById('ringwormBtn');
var shinglesBtn= document.getElementById('shinglesBtn');
var vitiligoBtn=document.getElementById('vitiligoBtn');



/*
  video div variables
 */
var acne= document.getElementById('acne');
var cellulitis=document.getElementById('cellulitis');
var chickenPox= document.getElementById('chickenPox');
var folliculitis=document.getElementById('folliculitis');
var fungalInfections= document.getElementById('fungalInfections');
var impetigo=document.getElementById('impetigo');
var melasma= document.getElementById('melasma');
var psorasis=document.getElementById('psorasis');
var pyoderma= document.getElementById('pyoderma');
var ringworm=document.getElementById('ringworm');
var shingles= document.getElementById('shingles');
var vitiligo=document.getElementById('vitiligo');

acneBtn.addEventListener("click", function () {
    displayVideo(acne);
});

cellulitisBtn.addEventListener("click", function () {
    displayVideo(cellulitis);
});

chickenPoxBtn.addEventListener("click", function () {
    displayVideo(chickenPox);
});

folliculitisBtn.addEventListener("click", function () {
    displayVideo(folliculitis);
});

fungalInfectionsBtn.addEventListener("click", function () {
    displayVideo(fungalInfections);
});

impetigoBtn.addEventListener("click", function () {
    displayVideo(impetigo);
});

melasmaBtn.addEventListener("click", function () {
    displayVideo(melasma);
});

psorasisBtn.addEventListener("click", function () {
    displayVideo(psorasis);
});

pyodermaBtn.addEventListener("click", function () {
    displayVideo(pyoderma);
});

ringwormBtn.addEventListener("click", function () {
    displayVideo(ringworm);
});
shinglesBtn.addEventListener("click", function () {
    displayVideo(shingles);
});
vitiligoBtn.addEventListener("click", function () {
    displayVideo(vitiligo);
});

function displayVideo(selectedDiv) {
    acne.style.display="none";
    cellulitis.style.display="none";
    chickenPox.style.display="none";
    folliculitis.style.display="none";
    fungalInfections.style.display="none";
    impetigo.style.display="none";
    melasma.style.display="none";
    psorasis.style.display="none";
    pyoderma.style.display="none";
    ringworm.style.display="none";
    shingles.style.display="none";
    vitiligo.style.display="none";


    selectedDiv.style.display="block";

}



