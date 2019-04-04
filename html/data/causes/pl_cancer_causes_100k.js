// Found country Poland with code 4230
var cause_f_pl = [ 'rest', 'C50', 'C34', 'C18', 'C16', 'C56', 'C53', 'C25', 'C23', 'C22', 'C71', 'C20', 'C54', ];
var cause_m_pl = [ 'rest', 'C34', 'C16', 'C61', 'C18', 'C67', 'C25', 'C32', 'C64', 'C71', 'C15', 'C20', ];
var cause_a_pl = [ 'rest', 'C34', 'C16', 'C18', 'C50', 'C25', 'C61', 'C67', 'C22', 'C71', 'C64', 'C20', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Poland';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Poland (gender: man, number of deaths on 100k citizens):
data_array_100k_pl = [];
data_array_100k_pl['man'] = [];
data_array_100k_pl['man']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 33, 33, 35, 35, 36, 37, 36, 37, 38, 36, 36, 36, 37, 37, 38, 38, 41, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 40, 41, 42, 43, 42, 43, 43, 43, 43, 44, 42, 42, 41, 42, 42, 41, 42, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 10, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 8, 8, 9, 8, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 12, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 11, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 5, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 6, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C32'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 4, 4, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C64'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C15'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 3, 3, 3, 2, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_pl['man']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Poland (gender: fem, number of deaths on 100k citizens):
data_array_100k_pl['fem'] = [];
data_array_100k_pl['fem']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 31, 33, 33, 34, 35, 36, 36, 36, 37, 35, 36, 35, 35, 37, 36, 36, 39, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 12, 12, 12, 12, 12, 13, 13, 13, 14, 13, 13, 14, 14, 15, 15, 16, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 9, 10, 11, 11, 12, 12, 12, 13, 14, 14, 15, 16, 16, 16, 17, 19, 19, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8, 9, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C53'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 5, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C23'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_pl['fem']['C54'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Poland (gender: all, number of deaths on 100k citizens):
data_array_100k_pl['all'] = [];
data_array_100k_pl['all']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 80, 83, 84, 86, 87, 89, 89, 90, 91, 87, 88, 87, 88, 90, 90, 91, 98, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 49, 52, 53, 55, 54, 55, 56, 56, 58, 58, 58, 58, 58, 59, 59, 60, 62, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 15, 15, 15, 15, 15, 14, 14, 14, 14, 14, 13, 14, 13, 13, 13, 13, 13, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 13, 14, 15, 15, 15, 15, 16, 16, 17, 18, 18, 18, 18, 19, 18, 19, 20, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 12, 12, 12, 13, 12, 13, 13, 13, 14, 13, 13, 14, 14, 15, 15, 16, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 11, 12, 12, 13, 12, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 8, 8, 9, 8, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 12, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 10, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C64'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, Number.NaN, Number.NaN, ];
data_array_100k_pl['all']['C20'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 6, 5, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, Number.NaN, Number.NaN, ];

