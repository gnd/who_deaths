// Found country Germany with code 4085
var cause_f_de = [ 'rest', 'C50', 'C18', 'C34', 'C16', 'C25', 'C56', 'C20', 'C71', 'C85', 'C22', ];
var cause_m_de = [ 'rest', 'C34', 'C61', 'C18', 'C16', 'C25', 'C20', 'C67', 'C22', 'C64', 'C15', ];
var cause_a_de = [ 'rest', 'C34', 'C18', 'C50', 'C16', 'C25', 'C61', 'C20', 'C56', 'C67', 'C22', 'C71', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Germany';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Germany (gender: man, number of deaths on 100k citizens):
data_array_100k_de = [];
data_array_100k_de['man'] = [];
data_array_100k_de['man']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 38, 38, 38, 38, 38, 39, 39, 40, 41, 41, 42, 43, 44, 44, 45, 46, 46, 47, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 34, 34, 35, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 35, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 13, 13, 13, 13, 13, 13, 13, 13, 14, 13, 14, 14, 15, 16, 15, 16, 16, 17, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 10, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 8, 8, 8, 7, 8, 7, 7, 7, 7, 7, 7, 7, 7, 6, 7, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 7, 6, 7, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C64'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_de['man']['C15'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Germany (gender: fem, number of deaths on 100k citizens):
data_array_100k_de['fem'] = [];
data_array_100k_de['fem']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 45, 44, 43, 42, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 43, 43, 44, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 21, 21, 21, 21, 21, 20, 21, 21, 20, 20, 20, 20, 21, 21, 21, 22, 21, 22, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 14, 14, 13, 13, 13, 12, 12, 12, 11, 11, 11, 10, 10, 10, 10, 10, 10, 9, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 11, 11, 12, 12, 12, 13, 14, 14, 15, 15, 15, 16, 17, 17, 18, 19, 19, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 5, 4, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 10, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C85'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, ];
data_array_100k_de['fem']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Germany (gender: all, number of deaths on 100k citizens):
data_array_100k_de['all'] = [];
data_array_100k_de['all']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 89, 88, 86, 85, 84, 84, 86, 87, 87, 88, 90, 91, 93, 92, 93, 96, 95, 97, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 46, 45, 47, 46, 47, 47, 48, 49, 49, 50, 51, 51, 52, 53, 54, 55, 55, 55, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 25, 25, 24, 24, 24, 24, 23, 23, 22, 21, 21, 21, 20, 21, 21, 21, 20, 20, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 21, 21, 21, 21, 21, 21, 21, 21, 21, 20, 21, 21, 21, 21, 21, 22, 21, 22, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 16, 16, 15, 15, 15, 14, 13, 13, 13, 12, 12, 12, 12, 12, 12, 11, 11, 11, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 14, 14, 14, 15, 15, 15, 15, 16, 16, 17, 18, 18, 18, 19, 19, 20, 20, 20, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 13, 13, 13, 13, 13, 13, 13, 13, 14, 13, 14, 14, 15, 16, 15, 16, 16, 17, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 6, 7, 7, 7, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, Number.NaN, Number.NaN, ];
data_array_100k_de['all']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, Number.NaN, Number.NaN, ];

