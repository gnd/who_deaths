// Found country Sweden with code 4290
var cause_f_se = [ 'rest', 'C50', 'C34', 'C18', 'C25', 'C56', 'C16', 'C85', 'C22', 'C20', 'C64', 'C71', 'C90', 'C43', ];
var cause_m_se = [ 'rest', 'C61', 'C34', 'C18', 'C25', 'C16', 'C67', 'C20', 'C22', 'C64', 'C85', 'C71', 'C15', ];
var cause_a_se = [ 'rest', 'C34', 'C61', 'C18', 'C50', 'C25', 'C16', 'C22', 'C85', 'C20', 'C64', 'C67', 'C56', 'C71', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Sweden';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Sweden (gender: man, number of deaths on 100k citizens):
data_array_100k_se = [];
data_array_100k_se['man'] = [];
data_array_100k_se['man']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, 30, 32, 31, 32, 32, 31, 32, 31, 32, 32, 30, 30, 32, 31, 32, 33, 32, 33, 33, 33, Number.NaN, ];
data_array_100k_se['man']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, 27, 28, 28, 28, 27, 26, 29, 28, 27, 27, 27, 26, 26, 25, 25, 25, 24, 24, 24, 23, Number.NaN, ];
data_array_100k_se['man']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, 20, 20, 20, 19, 20, 19, 20, 20, 21, 20, 19, 20, 19, 20, 20, 19, 19, 18, 18, 18, Number.NaN, ];
data_array_100k_se['man']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, 8, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, Number.NaN, ];
data_array_100k_se['man']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 6, 6, 7, 7, 7, 7, 7, 7, 8, 7, 8, 7, 7, 8, 8, 8, 8, 8, 8, Number.NaN, ];
data_array_100k_se['man']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, Number.NaN, ];
data_array_100k_se['man']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 4, 5, 5, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 4, 4, 4, Number.NaN, ];
data_array_100k_se['man']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, ];
data_array_100k_se['man']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, 4, 3, 3, 3, 3, 4, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 4, 4, 4, 4, Number.NaN, ];
data_array_100k_se['man']['C64'] = [ Number.NaN, Number.NaN, Number.NaN, 4, 4, 3, 4, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, ];
data_array_100k_se['man']['C85'] = [ Number.NaN, Number.NaN, Number.NaN, 4, 4, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, Number.NaN, ];
data_array_100k_se['man']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 2, 3, 3, 3, Number.NaN, ];
data_array_100k_se['man']['C15'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Sweden (gender: fem, number of deaths on 100k citizens):
data_array_100k_se['fem'] = [];
data_array_100k_se['fem']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, 37, 37, 38, 38, 40, 38, 38, 37, 38, 37, 37, 35, 35, 36, 37, 37, 37, 35, 38, 36, Number.NaN, ];
data_array_100k_se['fem']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, 16, 17, 16, 17, 16, 16, 16, 17, 17, 16, 16, 16, 14, 14, 14, 15, 15, 14, 14, 14, Number.NaN, ];
data_array_100k_se['fem']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, 12, 12, 13, 13, 15, 15, 14, 16, 17, 17, 18, 17, 17, 17, 18, 17, 18, 19, 18, 18, Number.NaN, ];
data_array_100k_se['fem']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, 10, 9, 9, 10, 10, 10, 9, 10, 9, 10, 10, 10, 9, 10, 10, 9, 9, 10, 9, 9, Number.NaN, ];
data_array_100k_se['fem']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 8, 9, 9, 8, 8, 9, 9, 9, 9, 9, Number.NaN, ];
data_array_100k_se['fem']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 6, 6, 7, 7, 7, 6, 6, 6, 6, 6, 6, 7, 6, 5, 6, 5, 5, 5, 5, Number.NaN, ];
data_array_100k_se['fem']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, 4, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, Number.NaN, ];
data_array_100k_se['fem']['C85'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, Number.NaN, ];
data_array_100k_se['fem']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 3, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, ];
data_array_100k_se['fem']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, ];
data_array_100k_se['fem']['C64'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, Number.NaN, ];
data_array_100k_se['fem']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, ];
data_array_100k_se['fem']['C90'] = [ Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, ];
data_array_100k_se['fem']['C43'] = [ Number.NaN, Number.NaN, Number.NaN, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Sweden (gender: all, number of deaths on 100k citizens):
data_array_100k_se['all'] = [];
data_array_100k_se['all']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, 73, 74, 74, 74, 77, 74, 76, 74, 77, 75, 74, 72, 73, 73, 75, 77, 76, 75, 77, 76, Number.NaN, ];
data_array_100k_se['all']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, 33, 32, 33, 33, 35, 34, 35, 36, 38, 38, 37, 38, 37, 38, 38, 37, 37, 37, 37, 37, Number.NaN, ];
data_array_100k_se['all']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, 27, 28, 28, 28, 27, 26, 29, 28, 27, 27, 27, 26, 26, 25, 25, 25, 24, 24, 24, 23, Number.NaN, ];
data_array_100k_se['all']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, 18, 18, 19, 19, 20, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 18, Number.NaN, ];
data_array_100k_se['all']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, 17, 17, 16, 17, 16, 16, 16, 17, 17, 16, 16, 16, 15, 14, 15, 15, 15, 14, 14, 14, Number.NaN, ];
data_array_100k_se['all']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, 15, 15, 15, 16, 15, 16, 15, 16, 16, 17, 16, 17, 16, 16, 16, 17, 17, 18, 18, 17, Number.NaN, ];
data_array_100k_se['all']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, 11, 10, 10, 9, 9, 9, 9, 9, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 5, 5, Number.NaN, ];
data_array_100k_se['all']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 6, 6, 5, 6, 6, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, Number.NaN, ];
data_array_100k_se['all']['C85'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 8, 7, 6, 6, 6, 6, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, Number.NaN, ];
data_array_100k_se['all']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 7, 7, 8, 7, 8, 7, 7, 7, 8, 8, 8, 8, 7, 8, 7, 8, 8, 8, 8, Number.NaN, ];
data_array_100k_se['all']['C64'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 7, 6, 7, 6, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, Number.NaN, ];
data_array_100k_se['all']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, 6, 6, 7, 7, 6, 7, 7, 6, 7, 7, 7, 6, 6, 7, 7, 7, 7, 7, 6, 6, Number.NaN, ];
data_array_100k_se['all']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, 7, 6, 6, 7, 7, 7, 6, 6, 6, 6, 6, 6, 7, 6, 5, 6, 5, 5, 5, 5, Number.NaN, ];
data_array_100k_se['all']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, 6, 5, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, Number.NaN, ];

