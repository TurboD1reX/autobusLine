var select = document.getElementById('select');
select.addEventListener('change', function() {
    var selectedOption = this.value;

    const busData = {
        "76": {
          "bus": "ulubiony",
          "liniaBusa": "Ulubiony autobus",
          "busNumber": "76",
          "descriptionBus": "Opis ulubionego autobusu"
        },
        "218": {
          "bus": "126",
          "liniaBusa": "Trynek Toruńska",
          "busNumber": "218",
          "descriptionBus": "Autobusy są jednoczęściowe i posiadają moduł WiFi, umożliwiający pasażerom dostęp do internetu w trakcie podróży. Ich jednostka centralna, klasy czwórki, zapewnia wysoką wydajność, co przekłada się na komfortową podróż. Dodatkowo, autobusy posiadają ładowarki, choć nie są zasilane bezpośrednio elektrycznie, co czyni je wygodnym środkiem transportu w różnych warunkach.",
          "typ": "danger"
        },
        "336": {
          "bus": "71",
          "liniaBusa": "Pyskowice Szpitalna",
          "busNumber": "336",
          "descriptionBus": "Autobusy nie posiadają funkcji WiFi ani ładowarek, co może ograniczyć wygodę podróżujących. Są dwuczęściowe i wyposażone w jednostkę centralną o wydajności klasy trzy czwórki, co gwarantuje stabilną pracę. Pomimo braku zasilania elektrycznego, mogą być wygodnym środkiem transportu.",
          "typ": "danger"
        },
        "48": {
          "bus": "126",
          "liniaBusa": "Trynek Toruńska",
          "busNumber": "48",
          "descriptionBus": "Autobusy nie posiadają funkcji WiFi ani ładowarek. Są dwuczęściowe i wyposażone w dwie jednostki centralne klasy czwórki. Brak ładowarki może być niedogodnością w podróży, jednak ich nieelektryczny charakter zapewnia pewną niezależność.",
          "typ": "danger"
        },
        "322": {
          "bus": "M104",
          "liniaBusa": "Stanica Kościół",
          "busNumber": "322",
          "descriptionBus": "Autobusy na linii M104 posiadają funkcję WiFi i jednostkę centralną klasy czwórki, zapewniającą stabilną pracę. Dodatkowo, wyposażone są w ładowarki, co zwiększa komfort podróży. Ich nieelektryczny charakter pozwala na niezależność od infrastruktury energetycznej.",
          "typ": "danger"
        },
        "212": {
          "bus": "259",
          "liniaBusa": "Os. Waryńskiego",
          "busNumber": "212",
          "descriptionBus": "Autobusy na linii 259 są jednoczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają jednostkę centralną klasy czwórki, co zapewnia stabilną pracę. Ich brak ładowarki i zasilania elektrycznego może być ograniczeniem w niektórych sytuacjach.",
          "typ": "danger"
        },
        "87": {
          "bus": "32",
          "liniaBusa": "Gliwice Łabedy Huta",
          "busNumber": "87",
          "descriptionBus": "Autobusy na linii 32 są dwuczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają trzy jednostki centralne klasy czwórki, co zapewnia wyższą wydajność. Ich nieelektryczny charakter sprawia, że są niezależne od zasilania.",
          "typ": "danger"
        },
        "88": {
          "bus": "126",
          "liniaBusa": "Trynek Toruńska",
          "busNumber": "88",
          "descriptionBus": "Autobusy na linii 126 są dwuczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają trzy jednostki centralne klasy czwórki. Ich nieelektryczny charakter sprawia, że mogą być bardziej niezawodne w różnych sytuacjach.",
          "typ": "danger"
        },
        "57": {
          "bus": "6",
          "liniaBusa": "Katowice Mickiewicza",
          "busNumber": "57",
          "descriptionBus": "Autobusy na linii 6 są dwuczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają dwie jednostki centralne klasy czwórki, co zapewniają solidną pracę. Ich brak zasilania elektrycznego może być korzystny w pewnych sytuacjach.",
          "typ": "danger"
        },
        "411": {
          "bus": "250",
          "liniaBusa": "Gliwice Centrum Przesiadkowe",
          "busNumber": "411",
          "descriptionBus": "Autobusy na linii 250 są jednoczęściowe i posiadają funkcję WiFi oraz ładowarki, co zapewnia pasażerom wygodę w podróży. Mają dwie jednostki centralne klasy czwórki. Ich brak zasilania elektrycznego sprawia, że są bardziej niezależne.",
          "typ": "danger"
        },
        "180": {
          "bus": "197",
          "liniaBusa": "Brzezinka Przemyska",
          "busNumber": "180",
          "descriptionBus": "Autobusy na linii 197 są jednoczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają cztery jednostki centralne klasy czwórki, co zapewnia wyższą wydajność. Ich nieelektryczny charakter sprawia, że są bardziej niezależne od infrastruktury energetycznej.",
          "typ": "danger"
        },
        "71": {
          "bus": "126",
          "liniaBusa": "Trynek Toruńska",
          "busNumber": "71",
          "descriptionBus": "Autobusy na linii 126 posiadają dwie jednostki centralnej"
        },
        "64": {
          "bus": "71",
          "liniaBusa": "Gliwice Centrum Przesiadkowe",
          "busNumber": "64",
          "descriptionBus": "Autobusy na linii 71 CP są jednoczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają dwie jednostki centralne klasy czwórki, co zapewnia pewną wydajność. Ich brak zasilania elektrycznego sprawia, że są bardziej niezależne od infrastruktury energetycznej.",
          "typ": "danger"
        },
        "318": {
          "bus": "287 , 32 ",
          "liniaBusa": "287 Gliwice Centrum Przesiadkowe, 32 Łabędy Huta",
          "busNumber": "318",
          "descriptionBus": "Autobusy na linii 287 CP i 32 Łabędy Huta są jednoczęściowe i posiadają funkcję WiFi oraz ładowarki, co zapewnia pasażerom wygodę w podróży. Mają jednostkę centralną klasy czwórki. Ich nieelektryczny charakter sprawia, że są bardziej niezależne od infrastruktury energetycznej.",
          "typ": "danger"
        },
        "333": {
          "bus": "M104",
          "liniaBusa": "Żerniki Osiedle",
          "busNumber": "333",
          "descriptionBus": "Autobusy na linii M104 Żerniki Osiedle są jednoczęściowe i nie posiadają funkcji WiFi ani ładowarek. Mają jednostkę centralną klasy czwórki, co zapewnia pewną wydajność. Ich brak zasilania elektrycznego sprawia, że są bardziej niezależne od infrastruktury energetycznej.",
          "typ": "danger"
        },
          "6122": {
            "bus": "M14",
            "liniaBusa": "Siedliska Cargo",
            "busNumber": "6122",
            "descriptionBus": "Autobusy na linii M14 Siedliska Cargo posiadają dwie jednostki centralne klasy czwórki oraz ładowarki. Są jednoczęściowe, wyposażone w funkcję WiFi i działające na zasilanie elektryczne.",
            "typ": "danger"
          },
          "738": {
            "bus": "671",
            "liniaBusa": "Chuj Wie Gdzie",
            "busNumber": "738",
            "descriptionBus": "Autobusy na linii 671 Chuj Wie Gdzie są jednoczęściowe, posiadają jedną jednostkę centralną klasy czwórki i nie mają ładowarek ani funkcji WiFi. Działają nieelektrycznie.",
            "typ": "danger"
          },
          "6108": {
            "bus": "M14 ",
            "liniaBusa": "Gliwice Centrum Przesiadkowe",
            "busNumber": "6108",
            "descriptionBus": "Autobusy na linii M14 Gliwice CP są jednoczęściowe, mają jedną jednostkę centralną klasy czwórki, nie posiadają ładowarek, ale funkcja WiFi jest dostępna z ograniczeniami. Działają nieelektrycznie.",
            "typ": "danger"
          },
          "61": {
            "bus": "32 , 197 ",
            "liniaBusa": "32 Łabędy Huta, 197 Brzezinka",
            "busNumber": "61",
            "descriptionBus": "Autobusy na linii 32 Łabędy Huta, 197 Brzezinka są dwuczęściowe, nie posiadają ładowarek ani funkcji WiFi. Mają dwie jednostki centralne klasy czwórki i działają nieelektrycznie.",
            "typ": "danger"
          },
          "75": {
            "bus": "71",
            "liniaBusa": "Sośnica Zespół Szkół",
            "busNumber": "75",
            "descriptionBus": "Autobusy na linii 71 Sośnica Zespół Szkół posiadają dwie jednostki centralne klasy czwórki, nie mają ładowarek ani funkcji WiFi. Są jednoczęściowe i działają nieelektrycznie.",
            "typ": "danger"
          },
          "179": {
            "bus": "197",
            "liniaBusa": "Brzezinka Przemyska",
            "busNumber": "179",
            "descriptionBus": "Autobusy na linii 197 Brzezinka Przemyska są jednoczęściowe, posiadają cztery jednostki centralne klasy czwórki, nie mają ładowarek ani funkcji WiFi. Działają nieelektrycznie.",
            "typ": "danger"
          },
          "197": {
            "bus": "280",
            "liniaBusa": "Młodego Górnika Kopalnia",
            "busNumber": "197",
            "descriptionBus": "Autobusy na linii 280 Młodego Górnika Kopalnia są dwuczęściowe, posiadają trzy jednostki centralne klasy czwórki oraz ładowarki. Nie mają funkcji WiFi i działają nieelektrycznie.",
            "typ": "danger"
          }
        
        
    };
    var container = document.querySelector('.container-bus-card');

    var selectedBusData = busData[selectedOption];

    if (selectedBusData) {
    
      container.innerHTML = `
          <div class="bus-card col-sm-12 col-md-5 mx-auto">
            <div class="title-bus">Autobus <span class="bus text-danger">${selectedBusData.bus}</span></div>
            <div class="bus-line">Linia autobusu - "${selectedBusData.liniaBusa}"</div>
            <div class="bus-number bg-${selectedBusData.typ} rounded">${selectedBusData.busNumber}</div>
            <img src="imgBus/realbus1.jpg" class="img-fluid bus-img rounded">
            <div class="title-escription">Opis zawartości autobusu <span class="bus text-danger">${selectedBusData.bus}</span></div>
            <div class="description-bus">${selectedBusData.descriptionBus}</div>
          </div>`;
    } else {
      console.log("Brak danych dla wybranej opcji");
    }
  });