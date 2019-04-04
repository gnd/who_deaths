// Found country Serbia with code 4273
var cause_f_rs = [ 'rest', 'C50', 'C34', 'C16', 'C53', 'C18', 'C20', 'C25', 'C56', 'C22', 'C76', 'C71', ];
var cause_m_rs = [ 'rest', 'C34', 'C16', 'C61', 'C18', 'C20', 'C22', 'C25', 'C32', 'C67', 'C71', ];
var cause_a_rs = [ 'rest', 'C34', 'C50', 'C16', 'C18', 'C20', 'C25', 'C22', 'C61', 'C71', 'C67', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Serbia';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Serbia (gender: man, number of deaths on 100k citizens):
data_array_100k_rs = [];
data_array_100k_rs['man'] = [];
data_array_100k_rs['man']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 34, 33, 36, 36, 37, 38, 38, 39, 39, 42, 42, 42, 44, 45, 44, 45, 47, 47, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 39, 39, 41, 41, 43, 43, 45, 47, 49, 49, 51, 51, 52, 50, 51, 53, 53, 53, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 10, 10, 10, 10, 10, 10, 10, 10, 8, 9, 9, 10, 9, 9, 9, 8, 8, 8, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 8, 7, 7, 9, 10, 10, 11, 12, 12, 12, 13, 14, 15, 14, 13, 13, 15, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 6, 7, 7, 8, 7, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 12, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 8, 9, 9, 8, 9, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 6, 5, 6, 6, 5, 5, 6, 6, 6, 6, 5, 6, 5, 5, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 6, 6, 6, 6, 7, 6, 7, 7, 7, 7, 7, 8, 8, 8, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C32'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 4, 5, 4, 4, 5, 4, 4, 5, 4, 5, 4, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 5, 4, 5, 5, 5, 5, 5, 6, 6, 5, 6, 5, 6, 7, 6, 6, 7, Number.NaN, Number.NaN, ];
data_array_100k_rs['man']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 4, 4, 4, 3, 4, 4, 4, 4, 5, 4, 4, 5, 4, 5, 5, 5, 4, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Serbia (gender: fem, number of deaths on 100k citizens):
data_array_100k_rs['fem'] = [];
data_array_100k_rs['fem']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 29, 30, 30, 31, 32, 33, 33, 34, 36, 35, 36, 36, 38, 37, 39, 38, 42, 37, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 18, 19, 19, 19, 18, 20, 20, 21, 21, 21, 21, 22, 22, 22, 23, 22, 23, 23, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 9, 10, 11, 11, 12, 12, 13, 13, 15, 14, 15, 17, 17, 18, 18, 19, 19, 20, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 5, 6, 5, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C53'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 5, 5, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 6, 6, 7, 8, 7, 7, 8, 8, 7, 8, 7, 7, 7, 8, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 5, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 4, 5, 5, 6, 5, 6, 6, 6, 7, 6, 7, 6, 6, 7, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 3, 4, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C76'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 4, 3, 3, 3, 3, 3, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, ];
data_array_100k_rs['fem']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 4, 4, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Serbia (gender: all, number of deaths on 100k citizens):
data_array_100k_rs['all'] = [];
data_array_100k_rs['all']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 81, 81, 83, 86, 87, 89, 89, 91, 92, 94, 95, 95, 98, 98, 99, 100, 104, 101, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 49, 49, 52, 52, 55, 56, 58, 60, 65, 64, 67, 68, 69, 68, 70, 72, 73, 74, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 18, 19, 19, 19, 19, 20, 21, 21, 21, 22, 21, 22, 23, 23, 23, 23, 23, 24, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 16, 15, 16, 15, 15, 16, 17, 16, 14, 15, 14, 15, 14, 14, 14, 13, 13, 12, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 12, 12, 13, 12, 14, 13, 16, 17, 16, 17, 18, 19, 18, 18, 19, 19, 19, 20, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 11, 12, 12, 12, 12, 12, 14, 13, 13, 13, 15, 15, 13, 15, 15, 14, 14, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 9, 10, 9, 10, 11, 11, 11, 13, 12, 13, 14, 13, 14, 14, 15, 14, 14, 15, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 9, 9, 10, 9, 10, 10, 10, 9, 10, 10, 10, 11, 9, 10, 10, 10, 10, 10, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 8, 7, 7, 9, 10, 10, 11, 12, 12, 12, 13, 14, 15, 14, 13, 13, 15, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, Number.NaN, Number.NaN, ];
data_array_100k_rs['all']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 6, 6, 6, 7, 6, 7, 6, 8, 8, 7, 8, 7, 8, 9, 8, 9, 9, Number.NaN, Number.NaN, ];

