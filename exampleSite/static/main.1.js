var chart = c3.generate({
    bindto: '#chart',
    data: {
      x: 'x',
      columns: [
        ['x', 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005 ],
        ['primaria', 220, 254, 299, 206, 194, 121, 127, 64, 57, 55, 58, 80, 84 ],
        ['secundaria',  123,  173,  281,  224,  182,  159,  93,  87,  143,  167,  206,  208,  133, ]
      ]
    }
});