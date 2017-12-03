$.mockjax({
    url: '/contacts',
    responseTime: [250, 750],
    responseText: [{
            id: 1,
            originIban: 'DE10000000000000002726',
            amount: '-987.65',
            counterPartyName: 'Petra Meyer-Meisner',
            paymentReference: 'Unterhalt',
            bookingDate: '2017-05-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 2,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-05-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 3,
            originIban: 'DE10000000000000002726',
            amount: '-29.55',
            counterPartyName: 'REWE Lieferservice',
            paymentReference: 'Wir bringen s',
            bookingDate: '2017-05-08',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 4,
            originIban: 'DE10000000000000002726',
            amount: '-13.6',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'der Inder am eck',
            bookingDate: '2017-05-10',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 5,
            originIban: 'DE10000000000000002726',
            amount: '-9.55',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'Pizza Amalfi',
            bookingDate: '2017-05-10',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 6,
            originIban: 'DE10000000000000002726',
            amount: '-400',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Barauszahlung',
            bookingDate: '2017-05-15',
            currencyCode: 'EUR'
        },
        {
            id: 7,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Stadtwerke D',
            paymentReference: 'Strom Abschlag',
            bookingDate: '2017-05-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 8,
            originIban: 'DE10000000000000002726',
            amount: '-116.16',
            counterPartyName: 'JET',
            paymentReference: 'POS MIT PIN. Die Tanke Ihrer Wahl',
            bookingDate: '2017-05-17',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 9,
            originIban: 'DE10000000000000002726',
            amount: '9000.95',
            counterPartyName: 'Meisner Enterprise',
            paymentReference: 'Gehalt',
            bookingDate: '2017-05-19',
            currencyCode: 'EUR'
        },
        {
            id: 10,
            originIban: 'DE10000000000000002726',
            amount: '-15.8',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'der Inder am eck',
            bookingDate: '2017-05-25',
            currencyCode: 'EUR'
        },
        {
            id: 11,
            originIban: 'DE10000000000000002726',
            amount: '-110',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Leben RefNr. 765488780',
            bookingDate: '2017-05-25',
            currencyCode: 'EUR'
        },
        {
            id: 12,
            originIban: 'DE10000000000000002726',
            amount: '-269.55',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-05-26',
            currencyCode: 'EUR'
        },
        {
            id: 13,
            originIban: 'DE10000000000000002726',
            amount: '-118.16',
            counterPartyName: 'JET',
            paymentReference: 'POS MIT PIN. Die Tanke Ihrer Wahl',
            bookingDate: '2017-06-04',
            currencyCode: 'EUR'
        },
        {
            id: 14,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-06-05',
            currencyCode: 'EUR'
        },
        {
            id: 15,
            originIban: 'DE10000000000000002726',
            amount: '-987.65',
            counterPartyName: 'Petra Meyer-Meisner',
            paymentReference: 'Unterhalt',
            bookingDate: '2017-06-05',
            currencyCode: 'EUR'
        },
        {
            id: 16,
            originIban: 'DE10000000000000002726',
            amount: '-310',
            counterPartyName: 'Lufthansa',
            paymentReference: 'Flug DUS-SZG & RET.',
            bookingDate: '2017-06-05',
            currencyCode: 'EUR'
        },
        {
            id: 17,
            originIban: 'DE10000000000000002726',
            amount: '-39.55',
            counterPartyName: 'REWE Lieferservice',
            paymentReference: 'Wir bringen s',
            bookingDate: '2017-06-07',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 18,
            originIban: 'DE10000000000000002726',
            amount: '-6.99',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'China 2go',
            bookingDate: '2017-06-09',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 19,
            originIban: 'DE10000000000000002726',
            amount: '-13.6',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'der Inder am eck',
            bookingDate: '2017-06-12',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 20,
            originIban: 'DE10000000000000002726',
            amount: '-350',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Barauszahlung',
            bookingDate: '2017-06-14',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 21,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Stadtwerke D',
            paymentReference: 'Strom Abschlag',
            bookingDate: '2017-06-15',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 22,
            originIban: 'DE10000000000000002726',
            amount: '-40',
            counterPartyName: 'Kitzbühel Taxi',
            paymentReference: 'POS mit PIN. Rechnung 1234346458',
            bookingDate: '2017-06-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 23,
            originIban: 'DE10000000000000002726',
            amount: '-35',
            counterPartyName: 'Steak Restaurant am Flughafen',
            paymentReference: 'POS mit PIN. Rechnungs Nr. 324543645',
            bookingDate: '2017-06-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 24,
            originIban: 'DE10000000000000002726',
            amount: '-50',
            counterPartyName: 'Lufthansa',
            paymentReference: 'POS mit PIN. Upgrade to Businessclass',
            bookingDate: '2017-06-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 25,
            originIban: 'DE10000000000000002726',
            amount: '-96.16',
            counterPartyName: 'JET',
            paymentReference: 'POS MIT PIN. Die Tanke Ihrer Wahl',
            bookingDate: '2017-06-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 26,
            originIban: 'DE10000000000000002726',
            amount: '-120',
            counterPartyName: 'Bergbahn Kitzbühel',
            paymentReference: 'POS mit PIN. Wochenkarte Rechnung 43656243',
            bookingDate: '2017-06-17',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 27,
            originIban: 'DE10000000000000002726',
            amount: '-55',
            counterPartyName: 'Sonnenalm',
            paymentReference: 'POS mit PIN. Rechnung 235573132',
            bookingDate: '2017-06-17',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 28,
            originIban: 'DE10000000000000002726',
            amount: '-122.3',
            counterPartyName: 'Take five',
            paymentReference: 'POS mit PIN. Rechnung 1234346458',
            bookingDate: '2017-06-17',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 29,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Thai Massage',
            paymentReference: 'POS mit PIN. We hope you had a gleat time',
            bookingDate: '2017-06-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 30,
            originIban: 'DE10000000000000002726',
            amount: '-24.2',
            counterPartyName: 'Kitzbüheler Apotheke',
            paymentReference: 'POS mit PIN. Rechnung 1234346458',
            bookingDate: '2017-06-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 31,
            originIban: 'DE10000000000000002726',
            amount: '9000.95',
            counterPartyName: 'Meisner Enterprise',
            paymentReference: 'Gehalt',
            bookingDate: '2017-06-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 32,
            originIban: 'DE10000000000000002726',
            amount: '-129.95',
            counterPartyName: 'Douglas',
            paymentReference: 'POS mit PIN. Rechnung 234346789',
            bookingDate: '2017-06-19',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 33,
            originIban: 'DE10000000000000002726',
            amount: '-160',
            counterPartyName: 'Chizzo',
            paymentReference: 'POS mit PIN. Bon appetit',
            bookingDate: '2017-06-20',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 34,
            originIban: 'DE10000000000000002726',
            amount: '-220',
            counterPartyName: 'Kitzbühler Krankenhaus',
            paymentReference: 'POS mit PIN. Behandlung verdrehtes Knie',
            bookingDate: '2017-06-21',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 35,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Reisch Skiverleih',
            paymentReference: 'POS mit PIN. Rennski + Stöcke',
            bookingDate: '2017-06-22',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 36,
            originIban: 'DE10000000000000002726',
            amount: '-110',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Leben RefNr. 765488780',
            bookingDate: '2017-06-24',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 37,
            originIban: 'DE10000000000000002726',
            amount: '-150',
            counterPartyName: 'Parkhaus am Flughafen',
            paymentReference: 'POS mit PIN. Parken sie bald wieder!',
            bookingDate: '2017-06-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 38,
            originIban: 'DE10000000000000002726',
            amount: '-50',
            counterPartyName: 'Lufthansa',
            paymentReference: 'POS mit PIN. Upgrade to Businessclass',
            bookingDate: '2017-06-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 39,
            originIban: 'DE10000000000000002726',
            amount: '-48.9',
            counterPartyName: 'Kitzbüheler Apotheke',
            paymentReference: 'POS mit PIN. Rechnung 1234346459',
            bookingDate: '2017-06-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 40,
            originIban: 'DE10000000000000002726',
            amount: '-269.55',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-06-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 41,
            originIban: 'DE10000000000000002726',
            amount: '-830',
            counterPartyName: 'Grand Tirolia Kitzbühel',
            paymentReference: 'Thank you for your stay with us',
            bookingDate: '2017-06-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 42,
            originIban: 'DE10000000000000002726',
            amount: '-32.15',
            counterPartyName: 'Rossmann',
            paymentReference: 'POS MIT PIN. Mein Drogeriemarkt',
            bookingDate: ' 2017-06-29',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 43,
            originIban: 'DE10000000000000002726',
            amount: '-19.15',
            counterPartyName: 'Rossmann',
            paymentReference: 'Mein Drogeriemarkt',
            bookingDate: '2017-06-29',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 44,
            originIban: 'DE10000000000000002726',
            amount: '-987.65',
            counterPartyName: 'Petra Meyer-Meisner',
            paymentReference: 'Unterhalt',
            bookingDate: '2017-07-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 45,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-07-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 46,
            originIban: 'DE10000000000000002726',
            amount: '-116.42',
            counterPartyName: 'ESSO',
            paymentReference: 'POS MIT PIN. Den Tiger im Tank',
            bookingDate: '2017-07-07',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 47,
            originIban: 'DE10000000000000002726',
            amount: '-29.35',
            counterPartyName: 'REWE Lieferservice',
            paymentReference: 'Wir bringen s',
            bookingDate: '2017-07-08',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 48,
            originIban: 'DE10000000000000002726',
            amount: '-9.55',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'Pizza Amalfi',
            bookingDate: '2017-07-12',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 49,
            originIban: 'DE10000000000000002726',
            amount: '-600',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Barauszahlung',
            bookingDate: '2017-07-15',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 50,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Stadtwerke D',
            paymentReference: 'Strom Abschlag',
            bookingDate: '2017-07-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 51,
            originIban: 'DE10000000000000002726',
            amount: '-28.65',
            counterPartyName: 'Kaisers Tengelmann',
            paymentReference: 'POS MIT PIN. DANKE FUER IHREN EINKAUF',
            bookingDate: '2017-07-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 52,
            originIban: 'DE10000000000000002726',
            amount: '9000.95',
            counterPartyName: 'Meisner Enterprise',
            paymentReference: 'Gehalt',
            bookingDate: '2017-07-19',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 53,
            originIban: 'DE10000000000000002726',
            amount: '-43.99',
            counterPartyName: 'Amazon S.a.r.L.',
            paymentReference: 'Rechnung',
            bookingDate: '2017-07-21',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 54,
            originIban: 'DE10000000000000002726',
            amount: '-110',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Leben RefNr. 765488780',
            bookingDate: '2017-07-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 55,
            originIban: 'DE10000000000000002726',
            amount: '-269.55',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-07-26',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 56,
            originIban: 'DE10000000000000002726',
            amount: '-59.22',
            counterPartyName: 'REWE Lieferservice',
            paymentReference: 'Wir bringen s',
            bookingDate: '2017-07-30',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 57,
            originIban: 'DE10000000000000002726',
            amount: '-56.67',
            counterPartyName: 'JET',
            paymentReference: 'POS MIT PIN. Die Tanke Ihrer Wahl',
            bookingDate: '2017-08-03',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 58,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-08-05',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 59,
            originIban: 'DE10000000000000002726',
            amount: '-987.65',
            counterPartyName: 'Petra Meyer-Meisner',
            paymentReference: 'Unterhalt',
            bookingDate: '2017-08-05',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 60,
            originIban: 'DE10000000000000002726',
            amount: '-40',
            counterPartyName: 'Kitzbühel Taxi',
            paymentReference: 'POS mit PIN. Rechnung 657847828',
            bookingDate: '2017-06-29',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 61,
            originIban: 'DE10000000000000002726',
            amount: '-368.16',
            counterPartyName: 'Hotel Shibo',
            paymentReference: 'POS MIT PIN. 3 nights bed & breakfast',
            bookingDate: '2017-08-09',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 62,
            originIban: 'DE10000000000000002726',
            amount: '-17.3',
            counterPartyName: 'Kitzbüheler Apotheke',
            paymentReference: 'POS mit PIN. Rechnung 1234346460',
            bookingDate: '2017-08-09',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 63,
            originIban: 'DE10000000000000002726',
            amount: '-12.44',
            counterPartyName: 'Kaisers Tengelmann',
            paymentReference: 'POS MIT PIN. DANKE FUER IHREN EINKAUF',
            bookingDate: '2017-08-15',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 64,
            originIban: 'DE10000000000000002726',
            amount: '-7600.55',
            counterPartyName: 'Join the Crew',
            paymentReference: 'Rechnung 9876667',
            bookingDate: '2017-08-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 65,
            originIban: 'DE10000000000000002726',
            amount: '9000.95',
            counterPartyName: 'Meisner Enterprise',
            paymentReference: 'Gehalt',
            bookingDate: '2017-08-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 66,
            originIban: 'DE10000000000000002726',
            amount: '-400',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Barauszahlung',
            bookingDate: '2017-08-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 67,
            originIban: 'DE10000000000000002726',
            amount: '-45.78',
            counterPartyName: 'REWE Lieferservice',
            paymentReference: 'Wir bringen s',
            bookingDate: '2017-08-19',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 68,
            originIban: 'DE10000000000000002726',
            amount: '-117.56',
            counterPartyName: 'ESSO',
            paymentReference: 'POS MIT PIN. Den Tiger im Tank',
            bookingDate: '2017-08-20',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 69,
            originIban: 'DE10000000000000002726',
            amount: '-110',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Leben RefNr. 765488780',
            bookingDate: '2017-08-24',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 70,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Stadtwerke D',
            paymentReference: 'Strom Abschlag',
            bookingDate: '2017-08-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 71,
            originIban: 'DE10000000000000002726',
            amount: '-30',
            counterPartyName: 'Steakrestaurant am Flughafen',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-08-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 72,
            originIban: 'DE10000000000000002726',
            amount: '-269.55',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-08-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 73,
            originIban: 'DE10000000000000002726',
            amount: '-22.67',
            counterPartyName: 'Duesseldorf Taxi Firma',
            paymentReference: 'POS MIT PIN. Vielen Dank',
            bookingDate: '2017-08-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 74,
            originIban: 'DE10000000000000002726',
            amount: '-578',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Withdrawl for 600HK$ at HK Airport',
            bookingDate: '2017-08-26',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 75,
            originIban: 'DE10000000000000002726',
            amount: '-10.55',
            counterPartyName: 'Duesseldorf Taxi Company',
            paymentReference: 'POS MIT PIN. Vielen Dank',
            bookingDate: '2017-08-30',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 76,
            originIban: 'DE10000000000000002726',
            amount: '-987.65',
            counterPartyName: 'Petra Meyer-Meisner',
            paymentReference: 'Unterhalt',
            bookingDate: '2017-09-05',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 77,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-09-05',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 78,
            originIban: 'DE10000000000000002726',
            amount: '-516.45',
            counterPartyName: 'Amazon S.a.r.L.',
            paymentReference: 'Rechnung',
            bookingDate: '2017-09-07',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 79,
            originIban: 'DE10000000000000002726',
            amount: '-450',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Barauszahlung',
            bookingDate: '2017-09-14',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 80,
            originIban: 'DE10000000000000002726',
            amount: '-83.21',
            counterPartyName: 'Kaisers Tengelmann',
            paymentReference: 'POS MIT PIN. DANKE FUER IHREN EINKAUF',
            bookingDate: '2017-09-15',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 81,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Stadtwerke D',
            paymentReference: 'Strom Abschlag',
            bookingDate: '2017-09-15',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 82,
            originIban: 'DE10000000000000002726',
            amount: 9000.95,
            counterPartyName: 'Meisner Enterprise',
            paymentReference: 'Gehalt',
            bookingDate: '2017-09-18',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 83,
            originIban: 'DE10000000000000002726',
            amount: '-104.16',
            counterPartyName: 'JET',
            paymentReference: 'POS MIT PIN. Die Tanke Ihrer Wahl',
            bookingDate: '2017-09-22',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 84,
            originIban: 'DE10000000000000002726',
            amount: '-110',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Leben RefNr. 765488780',
            bookingDate: '2017-09-24',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 85,
            originIban: 'DE10000000000000002726',
            amount: '-269.55',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-09-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 86,
            originIban: 'DE10000000000000002726',
            amount: '-100000.95',
            counterPartyName: 'Good Yachts Inc.',
            paymentReference: 'Rechnung',
            bookingDate: '2017-10-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 87,
            originIban: 'DE10000000000000002726',
            amount: '-987.65',
            counterPartyName: 'Petra Meyer-Meisner',
            paymentReference: 'Unterhalt',
            bookingDate: '2017-10-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 88,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-10-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 89,
            originIban: 'DE10000000000000002726',
            amount: '-256.78',
            counterPartyName: 'Amazon S.a.r.L.',
            paymentReference: 'Rechnung',
            bookingDate: '2017-10-08',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 90,
            originIban: 'DE10000000000000002726',
            amount: '-33.15',
            counterPartyName: 'Kaisers Tengelmann',
            paymentReference: 'POS MIT PIN. DANKE FUER IHREN EINKAUF',
            bookingDate: '2017-10-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 91,
            originIban: 'DE10000000000000002726',
            amount: '-80',
            counterPartyName: 'Stadtwerke D',
            paymentReference: 'Strom Abschlag',
            bookingDate: '2017-10-16',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 92,
            originIban: 'DE10000000000000002726',
            amount: '9000.95',
            counterPartyName: 'Meisner Enterprise',
            paymentReference: 'Gehalt',
            bookingDate: '2017-10-19',
            currencyCode: 'EUR'
        },
        {
            id: 93,
            originIban: 'DE10000000000000002726',
            amount: '-400',
            counterPartyName: 'Deutsche Bank',
            paymentReference: 'Barauszahlung',
            bookingDate: '2017-10-20',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 94,
            originIban: 'DE10000000000000002726',
            amount: '-113.88',
            counterPartyName: 'ESSO',
            paymentReference: 'POS MIT PIN. Den Tiger im Tank',
            bookingDate: '2017-10-21',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 95,
            originIban: 'DE10000000000000002726',
            amount: '-36.57',
            counterPartyName: 'REWE Lieferservice',
            paymentReference: 'Wir bringen s',
            bookingDate: '2017-10-22',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 96,
            originIban: 'DE10000000000000002726',
            amount: '-110',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Leben RefNr. 765488780',
            bookingDate: '2017-10-25',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 97,
            originIban: 'DE10000000000000002726',
            amount: '-269.55',
            counterPartyName: 'Allianz AG',
            paymentReference: 'Rente50 RefNr. 765488779',
            bookingDate: '2017-10-26',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 98,
            originIban: 'DE10000000000000002726',
            amount: '-9.15',
            counterPartyName: 'Rossmann',
            paymentReference: 'Mein Drogeriemarkt',
            bookingDate: '2017-10-30',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 99,
            originIban: 'DE10000000000000002726',
            amount: '-96.16',
            counterPartyName: 'ESSO',
            paymentReference: 'POS MIT PIN. Den Tiger im Tank',
            bookingDate: '2017-11-05',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 100,
            originIban: 'DE10000000000000002726',
            amount: '-65',
            counterPartyName: 'Andreas Meisner',
            paymentReference: 'Taschengeld',
            bookingDate: '2017-11-05',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 101,
            originIban: 'DE10000000000000002726',
            amount: '-1200',
            counterPartyName: 'Lufthansa',
            paymentReference: 'Thank you for your flight FRA-HKG Ret.',
            bookingDate: '2017-11-06',
            currencyCode: 'EUR',
            img: '1.png'
        },
        {
            id: 102,
            originIban: 'DE10000000000000002726',
            amount: '-16.99',
            counterPartyName: 'Lieferando.de',
            paymentReference: 'Pizza Amalfi',
            bookingDate: '2017-1-06',
            currencyCode: 'EUR',
            img: '1.png'
        }
    ]
});