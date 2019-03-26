// page title
page_title_100k = 'Top 10 causes of cancer deaths in Slovakia 1994 - 2018';

// chart title
chart_title_100k = 'Top 10 causes of cancer (male)';
chart_title_stub_100k = 'Top 10 causes of cancer';
var cause_f = [ 'rest', 'C50', 'C16', 'C34', 'C18', 'C54', 'C56', 'C53', 'C25', 'C20', 'C23', 'C22', 'C71', ];
var cause_m = [ 'rest', 'C34', 'C16', 'C18', 'C61', 'C20', 'C25', 'C32', 'C67', 'C22', 'C15', 'C64', 'C19', ];
var cause_a = [ 'rest', 'C34', 'C16', 'C50', 'C18', 'C20', 'C25', 'C61', 'C22', 'C19', 'C64', 'C71', 'C67', ];

// Development of cancer causes bettwen the years 1994 and 2018 in Slovakia (gender: man, number of deaths on 100k citizens):
data_array_100k = [];
data_array_100k['man'] = [];
data_array_100k['man']['rest'] = [ 30, 33, 33, 33, 34, 33, 32, 34, 34, 35, 35, 34, 35, 35, 35, 36, 37, 35, 40, 40, ];
data_array_100k['man']['C34'] = [ 33, 35, 33, 33, 35, 33, 34, 32, 31, 30, 30, 31, 30, 29, 29, 29, 29, 31, 31, 29, ];
data_array_100k['man']['C16'] = [ 9, 10, 9, 9, 10, 9, 9, 9, 9, 8, 8, 7, 8, 8, 7, 7, 7, 7, 7, 6, ];
data_array_100k['man']['C18'] = [ 6, 6, 7, 7, 9, 9, 8, 9, 8, 8, 10, 9, 9, 9, 9, 9, 10, 11, 12, 11, ];
data_array_100k['man']['C61'] = [ 6, 7, 8, 8, 9, 10, 9, 9, 8, 8, 8, 10, 9, 9, 9, 9, 9, 11, 11, 13, ];
data_array_100k['man']['C20'] = [ 5, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 6, ];
data_array_100k['man']['C25'] = [ 5, 4, 4, 5, 6, 5, 5, 6, 5, 6, 5, 6, 6, 7, 6, 6, 7, 7, 7, 7, ];
data_array_100k['man']['C32'] = [ 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 2, ];
data_array_100k['man']['C67'] = [ 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, ];
data_array_100k['man']['C22'] = [ 3, 3, 4, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3, 4, 4, 3, 4, 4, 5, 5, ];
data_array_100k['man']['C15'] = [ 3, 3, 4, 3, 4, 5, 4, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 4, 4, ];
data_array_100k['man']['C64'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 4, 3, 4, 4, 4, ];
data_array_100k['man']['C19'] = [ 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 3, 2, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Slovakia (gender: fem, number of deaths on 100k citizens):
data_array_100k['fem'] = [];
data_array_100k['fem']['rest'] = [ 25, 26, 24, 25, 28, 26, 26, 27, 27, 27, 27, 28, 27, 29, 29, 29, 29, 30, 32, 34, ];
data_array_100k['fem']['C50'] = [ 12, 12, 12, 13, 14, 14, 14, 14, 13, 13, 14, 13, 13, 14, 13, 13, 14, 16, 17, 16, ];
data_array_100k['fem']['C16'] = [ 6, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 4, 5, 4, 5, ];
data_array_100k['fem']['C34'] = [ 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 7, 7, 8, 8, 9, 9, 10, 10, ];
data_array_100k['fem']['C18'] = [ 5, 5, 5, 6, 6, 7, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, ];
data_array_100k['fem']['C54'] = [ 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, ];
data_array_100k['fem']['C56'] = [ 3, 4, 4, 4, 4, 5, 5, 5, 4, 4, 4, 4, 5, 4, 5, 5, 5, 5, 5, 5, ];
data_array_100k['fem']['C53'] = [ 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 4, 4, ];
data_array_100k['fem']['C25'] = [ 3, 3, 3, 4, 4, 4, 4, 5, 4, 4, 4, 5, 6, 5, 6, 6, 6, 6, 6, 7, ];
data_array_100k['fem']['C20'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, ];
data_array_100k['fem']['C23'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ];
data_array_100k['fem']['C22'] = [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ];
data_array_100k['fem']['C71'] = [ 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Slovakia (gender: all, number of deaths on 100k citizens):
data_array_100k['all'] = [];
data_array_100k['all']['rest'] = [ 71, 73, 73, 72, 78, 75, 74, 76, 74, 76, 75, 76, 75, 78, 78, 77, 79, 80, 85, 88, ];
data_array_100k['all']['C34'] = [ 38, 40, 38, 39, 41, 39, 41, 38, 37, 37, 37, 38, 37, 37, 37, 37, 38, 40, 41, 40, ];
data_array_100k['all']['C16'] = [ 15, 16, 15, 15, 16, 15, 15, 14, 14, 13, 14, 13, 13, 13, 11, 12, 12, 12, 12, 12, ];
data_array_100k['all']['C50'] = [ 13, 12, 13, 13, 14, 14, 15, 15, 14, 13, 14, 13, 13, 14, 14, 13, 14, 16, 18, 16, ];
data_array_100k['all']['C18'] = [ 12, 11, 13, 13, 16, 17, 15, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 20, 21, 20, ];
data_array_100k['all']['C20'] = [ 9, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 9, 9, 10, 10, 10, ];
data_array_100k['all']['C25'] = [ 8, 8, 8, 9, 11, 9, 10, 11, 10, 10, 10, 12, 12, 12, 13, 13, 13, 14, 13, 15, ];
data_array_100k['all']['C61'] = [ 6, 7, 8, 8, 9, 10, 9, 9, 8, 8, 8, 10, 9, 9, 9, 9, 9, 11, 11, 13, ];
data_array_100k['all']['C22'] = [ 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, ];
data_array_100k['all']['C19'] = [ 5, 4, 5, 5, 6, 6, 5, 5, 6, 5, 5, 5, 5, 5, 4, 4, 4, 4, 5, 4, ];
data_array_100k['all']['C64'] = [ 5, 5, 5, 5, 5, 5, 6, 6, 5, 6, 5, 6, 6, 5, 6, 7, 5, 7, 7, 7, ];
data_array_100k['all']['C71'] = [ 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 6, 6, 6, 5, 6, 6, 6, ];
data_array_100k['all']['C67'] = [ 4, 4, 4, 4, 5, 5, 4, 5, 4, 5, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, ];