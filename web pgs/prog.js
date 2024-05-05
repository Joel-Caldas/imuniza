document.addEventListener("DOMContentLoaded", function() {
  var pages1 = ['AFC-321-123', 'AFa-321-123', 'AFA-321-123', 'AFI-321-123', 'AFG-321-123'].map(id => document.getElementById(id));
  var pages2 = Array.from(document.getElementsByClassName('page2'));

  if (pages1[0]) {
      pages1[0].style.display = 'block';
  }
  if (pages2[0]) {
      pages2[0].style.display = 'block';
  }

  window.transferi = function(id) {
      pages1.forEach(page => page.style.display = 'none');
    
      var page = document.getElementById(id);
      if (page) {
        page.style.display = 'block';
      }
  } 

  window.abririnfor = function(id) {
    pages2.forEach(page => page.style.display = 'none');
  
    var page = document.getElementById(id);
    if (page) {
      page.style.display = 'block';
    } else {
      if (pages2[0]) {
        pages2[0].style.display = 'block';
      }
    }
  }
});
