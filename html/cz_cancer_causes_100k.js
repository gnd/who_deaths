// page title
page_title_100k = 'Top 10 causes of cancer deaths in Czech republic 1994 - 2018';

// chart title
chart_title_100k = 'Top 10 causes of cancer (male)';
chart_title_stub_100k = 'Top 10 causes of cancer';

var cause_f = [ 'rest', 'C50', 'C18', 'C34', 'C16', 'C25', 'C56', 'C23', 'C64', 'C20', 'C53', 'C54', 'C22', 'C71', ];
var cause_m = [ 'rest', 'C34', 'C18', 'C61', 'C16', 'C20', 'C64', 'C25', 'C22', 'C67', 'C19', 'C71', ];
var cause_a = [ 'rest', 'C34', 'C18', 'C50', 'C16', 'C25', 'C64', 'C20', 'C61', 'C22', 'C23', 'C56', 'C67', ];

// Development of cancer causes bettwen the years 1994 and 2018 in Czech Republic (gender: man, number of deaths on 100k citizens):
data_array_100k = [];
data_array_100k['man'] = [];
data_array_100k['man']['rest'] = [ 36, 35, 36, 36, 37, 37, 37, 36, 38, 39, 38, 38, 37, 41, 42, 42, 41, 40, 40, 41, 42, 41, 43, ];
data_array_100k['man']['C34'] = [ 43, 45, 43, 43, 41, 42, 43, 41, 41, 41, 42, 40, 39, 38, 37, 37, 38, 37, 36, 35, 34, 33, 34, ];
data_array_100k['man']['C18'] = [ 12, 11, 12, 12, 13, 13, 14, 14, 13, 14, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 10, 11, 11, ];
data_array_100k['man']['C61'] = [ 11, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 13, 13, 12, 12, 12, 12, 12, 12, 13, 14, 12, 13, ];
data_array_100k['man']['C16'] = [ 11, 9, 10, 9, 8, 8, 8, 7, 8, 8, 7, 7, 7, 6, 6, 6, 7, 6, 6, 6, 5, 5, 5, ];
data_array_100k['man']['C20'] = [ 7, 7, 6, 6, 7, 6, 6, 6, 7, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, ];
data_array_100k['man']['C64'] = [ 7, 6, 7, 6, 6, 6, 7, 7, 7, 7, 7, 7, 6, 6, 6, 5, 6, 6, 6, 6, 5, 6, 6, ];
data_array_100k['man']['C25'] = [ 7, 7, 7, 7, 7, 6, 7, 7, 8, 8, 8, 9, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 10, ];
data_array_100k['man']['C22'] = [ 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, 4, 4, 4, 5, 4, 4, 4, 5, 4, 4, ];
data_array_100k['man']['C67'] = [ 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 5, 4, 4, 5, 5, 4, 5, 5, 5, 5, 5, ];
data_array_100k['man']['C19'] = [ 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, ];
data_array_100k['man']['C71'] = [ 3, 2, 3, 3, 3, 2, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Czech Republic (gender: fem, number of deaths on 100k citizens):
data_array_100k['fem'] = [];
data_array_100k['fem']['rest'] = [ 31, 32, 31, 32, 32, 34, 33, 34, 34, 34, 35, 34, 34, 36, 37, 38, 36, 34, 34, 33, 36, 35, 37, ];
data_array_100k['fem']['C50'] = [ 19, 19, 18, 18, 18, 18, 18, 18, 19, 19, 19, 18, 18, 16, 15, 15, 15, 16, 15, 16, 15, 15, 15, ];
data_array_100k['fem']['C18'] = [ 10, 11, 11, 11, 10, 11, 11, 11, 11, 12, 11, 10, 10, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, ];
data_array_100k['fem']['C34'] = [ 10, 10, 10, 10, 10, 12, 12, 12, 12, 13, 13, 13, 14, 13, 14, 14, 14, 15, 16, 15, 15, 15, 16, ];
data_array_100k['fem']['C16'] = [ 7, 8, 7, 7, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, ];
data_array_100k['fem']['C25'] = [ 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 9, 8, 8, 8, 8, 9, 8, 9, 9, 9, 9, ];
data_array_100k['fem']['C56'] = [ 6, 7, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, ];
data_array_100k['fem']['C23'] = [ 5, 4, 4, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, ];
data_array_100k['fem']['C64'] = [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, ];
data_array_100k['fem']['C20'] = [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, ];
data_array_100k['fem']['C53'] = [ 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 2, ];
data_array_100k['fem']['C54'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 2, 2, ];
data_array_100k['fem']['C22'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, ];
data_array_100k['fem']['C71'] = [ 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Czech Republic (gender: all, number of deaths on 100k citizens):
data_array_100k['all'] = [];
data_array_100k['all']['rest'] = [ 81, 80, 80, 82, 83, 84, 84, 82, 87, 87, 87, 84, 85, 89, 92, 93, 90, 86, 87, 86, 89, 88, 91, ];
data_array_100k['all']['C34'] = [ 53, 55, 54, 53, 52, 54, 55, 54, 54, 54, 55, 54, 53, 52, 51, 51, 52, 53, 53, 51, 49, 49, 50, ];
data_array_100k['all']['C18'] = [ 23, 22, 23, 24, 24, 24, 25, 25, 25, 26, 25, 24, 24, 22, 21, 21, 21, 20, 20, 19, 19, 19, 19, ];
data_array_100k['all']['C50'] = [ 19, 20, 18, 19, 18, 18, 19, 18, 19, 19, 19, 18, 18, 16, 16, 15, 15, 16, 16, 16, 15, 15, 16, ];
data_array_100k['all']['C16'] = [ 18, 18, 17, 16, 15, 14, 15, 14, 14, 14, 13, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 9, 9, ];
data_array_100k['all']['C25'] = [ 14, 14, 14, 14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 16, 17, 17, 19, 17, 18, 19, 19, 19, ];
data_array_100k['all']['C64'] = [ 11, 11, 11, 10, 11, 10, 11, 11, 11, 12, 11, 11, 10, 10, 10, 9, 10, 9, 10, 9, 9, 10, 9, ];
data_array_100k['all']['C20'] = [ 11, 12, 11, 11, 11, 11, 11, 11, 11, 11, 12, 11, 10, 10, 10, 9, 9, 9, 9, 8, 9, 9, 8, ];
data_array_100k['all']['C61'] = [ 11, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 13, 13, 12, 12, 12, 12, 12, 12, 13, 14, 12, 13, ];
data_array_100k['all']['C22'] = [ 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 9, 8, 8, 7, 7, 6, 8, 7, 7, 7, 7, 7, 7, ];
data_array_100k['all']['C23'] = [ 7, 6, 6, 5, 5, 5, 5, 5, 5, 4, 5, 5, 4, 4, 4, 4, 3, 4, 3, 3, 3, 3, 3, ];
data_array_100k['all']['C56'] = [ 6, 7, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, ];
data_array_100k['all']['C67'] = [ 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 6, 7, 6, 7, 7, 7, 6, 7, 7, 7, 7, 7, ];
