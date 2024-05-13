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

function addNoGoogleCalendario(vacina) {
  var detailsVacina = {
    'VacinaBCG': {
      'title': 'Vacina BCG (Dose única)',
      'location': 'Posto SUS',
      'details': 'Doenças evitadas: formas graves da tuberculose (miliar e meníngea)'
    },
    'VacinaHepatiteB': {
      'title': 'Vacina Hepatite B (recombinante HB)',
      'location': 'Posto SUS',
      'details': 'Doenças evitadas: Hepatite B'
    },
  'VacinaadsorvidaDifteriaTetanoPertussisHepatiteB' :{
    'title': 'Vacina adsorvida Difteria, Tétano, Pertussis, Hepatite B (recombinante) e Haemophilus influenzae B (conjugada) - (Penta) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: Difteria, Tétano, Coqueluche, Hepatite B e infecções causadas pelo Haemophilus influenzae B'
  },
  'VacinapoliomieliteeinativadaVIPdose': {
    'title': 'Vacina poliomielite 1, 2 e 3 (inativada) - (VIP) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: Poliomielite'
  },
  'VacinapneumococicavalenteConjugadaPneumodose': {
    'title': 'Vacina pneumocócica 10-valente (Conjugada) - (Pneumo 10) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: infecções invasivas (como meningite e pneumonia) e otite média aguda, causadas pelos 10 sorotipos de Streptococus pneumoniae'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinameningocócicaCconjugadaMeningoCdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  'VacinarotavirushumanoGPatenuadaVRHdose': {
    'title': 'Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)',
    'start': '2024-05-11T10:00:00',
    'end': '2024-05-11T12:00:00',
    'location': 'Posto SUS',
    'details': 'Doenças evitadas: diarreia por rotavírus (Gastroenterites)'
  },
  
  };

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 0) 
        month = '0' + month;
    if (day.length < 0) 
        day = '0' + day;
  
    return [year, month, day].join('') + 'T000000Z';
  }
  

  var Vacina = detailsVacina[vacina];

  // Pega a data do input
  var dataNascimento = document.getElementById('dataNascimento').value;

  // Formata a data para o formato do Google Agenda
  var formattedDate = formatDate(dataNascimento);

  var start = formattedDate;
  var end = formattedDate;

  var calendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  calendarUrl += '&text=' + encodeURIComponent(Vacina.title);
  calendarUrl += '&dates=' + start + '/' + end;
  calendarUrl += '&location=' + encodeURIComponent(Vacina.location);
  calendarUrl += '&details=' + encodeURIComponent(Vacina.details);

  window.open(calendarUrl, '_blank');
}

