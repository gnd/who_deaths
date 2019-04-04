// Found country Croatia with code 4038
var cause_f_cr = [ 'rest', 'C50', 'C16', 'C34', 'C18', 'C20', 'C56', 'C25', 'C55', 'C22', 'C71', 'C23', 'C53', ];
var cause_m_cr = [ 'rest', 'C34', 'C16', 'C61', 'C18', 'C20', 'C32', 'C25', 'C22', 'C67', 'C71', 'C15', 'C64', ];
var cause_a_cr = [ 'rest', 'C34', 'C16', 'C50', 'C18', 'C20', 'C25', 'C22', 'C61', 'C71', 'C32', 'C67', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Croatia';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Croatia (gender: man, number of deaths on 100k citizens):
data_array_100k_cr = [];
data_array_100k_cr['man'] = [];
data_array_100k_cr['man']['rest'] = [ Number.NaN, 30, 29, 30, 29, 32, 34, 33, 36, 36, 38, 37, 35, 37, 39, 38, 38, 40, 40, 41, 43, 43, 42, Number.NaN, ];
data_array_100k_cr['man']['C34'] = [ Number.NaN, 38, 43, 44, 46, 45, 45, 48, 47, 47, 47, 46, 48, 48, 48, 48, 47, 47, 49, 48, 48, 49, 50, Number.NaN, ];
data_array_100k_cr['man']['C16'] = [ Number.NaN, 13, 13, 13, 13, 13, 13, 12, 13, 13, 13, 12, 12, 13, 11, 12, 11, 12, 11, 11, 10, 11, 10, Number.NaN, ];
data_array_100k_cr['man']['C61'] = [ Number.NaN, 7, 9, 9, 10, 10, 10, 10, 10, 13, 13, 14, 13, 14, 14, 15, 16, 17, 17, 17, 17, 19, 18, Number.NaN, ];
data_array_100k_cr['man']['C18'] = [ Number.NaN, 6, 8, 8, 8, 9, 10, 9, 10, 12, 10, 13, 13, 13, 13, 14, 15, 16, 16, 17, 18, 17, 19, Number.NaN, ];
data_array_100k_cr['man']['C20'] = [ Number.NaN, 6, 6, 6, 8, 7, 8, 7, 8, 8, 8, 8, 8, 7, 8, 7, 8, 8, 8, 8, 9, 9, 9, Number.NaN, ];
data_array_100k_cr['man']['C32'] = [ Number.NaN, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 3, 4, 4, 4, 4, Number.NaN, ];
data_array_100k_cr['man']['C25'] = [ Number.NaN, 4, 5, 4, 5, 6, 6, 6, 6, 7, 6, 7, 6, 7, 8, 8, 7, 7, 9, 8, 7, 8, 9, Number.NaN, ];
data_array_100k_cr['man']['C22'] = [ Number.NaN, 4, 4, 5, 5, 5, 4, 5, 5, 5, 6, 5, 5, 5, 6, 6, 7, 7, 8, 8, 6, 7, 9, Number.NaN, ];
data_array_100k_cr['man']['C67'] = [ Number.NaN, 3, 3, 4, 4, 4, 5, 4, 4, 5, 4, 5, 5, 5, 6, 6, 5, 6, 7, 6, 7, 8, 7, Number.NaN, ];
data_array_100k_cr['man']['C71'] = [ Number.NaN, 3, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 5, 4, 5, 4, 5, 5, 5, Number.NaN, ];
data_array_100k_cr['man']['C15'] = [ Number.NaN, 3, 3, 4, 3, 3, 4, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 4, 4, 3, 4, 3, 3, Number.NaN, ];
data_array_100k_cr['man']['C64'] = [ Number.NaN, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 4, 5, 6, 6, 5, 6, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Croatia (gender: fem, number of deaths on 100k citizens):
data_array_100k_cr['fem'] = [];
data_array_100k_cr['fem']['rest'] = [ Number.NaN, 23, 24, 25, 29, 26, 30, 30, 34, 33, 34, 34, 35, 33, 35, 37, 40, 39, 40, 40, 42, 44, 45, Number.NaN, ];
data_array_100k_cr['fem']['C50'] = [ Number.NaN, 16, 15, 16, 17, 18, 19, 18, 18, 18, 18, 20, 18, 19, 20, 20, 22, 20, 24, 23, 25, 24, 23, Number.NaN, ];
data_array_100k_cr['fem']['C16'] = [ Number.NaN, 8, 9, 8, 8, 7, 8, 8, 8, 8, 8, 7, 7, 7, 8, 7, 7, 7, 7, 8, 7, 7, 7, Number.NaN, ];
data_array_100k_cr['fem']['C34'] = [ Number.NaN, 7, 9, 8, 10, 9, 10, 10, 11, 11, 11, 12, 12, 13, 13, 14, 14, 16, 15, 16, 17, 17, 17, Number.NaN, ];
data_array_100k_cr['fem']['C18'] = [ Number.NaN, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 10, 10, 11, 10, 11, 11, 12, 12, 12, 13, 13, 13, Number.NaN, ];
data_array_100k_cr['fem']['C20'] = [ Number.NaN, 4, 5, 4, 5, 5, 6, 5, 5, 5, 5, 5, 6, 5, 6, 6, 5, 5, 6, 6, 5, 5, 6, Number.NaN, ];
data_array_100k_cr['fem']['C56'] = [ Number.NaN, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 7, 7, 7, 7, Number.NaN, ];
data_array_100k_cr['fem']['C25'] = [ Number.NaN, 4, 5, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 7, 8, 9, 9, Number.NaN, ];
data_array_100k_cr['fem']['C55'] = [ Number.NaN, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, Number.NaN, ];
data_array_100k_cr['fem']['C22'] = [ Number.NaN, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 3, 3, Number.NaN, ];
data_array_100k_cr['fem']['C71'] = [ Number.NaN, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 4, 4, 5, 4, 4, 4, 4, 4, Number.NaN, ];
data_array_100k_cr['fem']['C23'] = [ Number.NaN, 1, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, ];
data_array_100k_cr['fem']['C53'] = [ Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Croatia (gender: all, number of deaths on 100k citizens):
data_array_100k_cr['all'] = [];
data_array_100k_cr['all']['rest'] = [ Number.NaN, 71, 71, 74, 76, 77, 84, 84, 89, 89, 90, 91, 90, 91, 95, 97, 100, 100, 103, 104, 108, 107, 109, Number.NaN, ];
data_array_100k_cr['all']['C34'] = [ Number.NaN, 45, 52, 53, 56, 54, 56, 58, 58, 59, 59, 59, 61, 61, 61, 62, 62, 63, 65, 65, 66, 66, 68, Number.NaN, ];
data_array_100k_cr['all']['C16'] = [ Number.NaN, 21, 22, 22, 22, 21, 22, 21, 21, 22, 21, 20, 19, 20, 19, 19, 18, 20, 18, 19, 18, 19, 18, Number.NaN, ];
data_array_100k_cr['all']['C50'] = [ Number.NaN, 17, 16, 17, 18, 19, 19, 19, 18, 18, 19, 20, 19, 19, 20, 20, 22, 20, 24, 23, 25, 25, 24, Number.NaN, ];
data_array_100k_cr['all']['C18'] = [ Number.NaN, 12, 14, 16, 16, 17, 19, 18, 19, 20, 19, 23, 23, 24, 24, 25, 26, 29, 29, 30, 31, 30, 33, Number.NaN, ];
data_array_100k_cr['all']['C20'] = [ Number.NaN, 11, 12, 11, 13, 13, 14, 12, 14, 14, 14, 14, 15, 13, 14, 14, 13, 14, 14, 14, 14, 15, 15, Number.NaN, ];
data_array_100k_cr['all']['C25'] = [ Number.NaN, 8, 10, 9, 11, 11, 11, 12, 12, 12, 12, 13, 13, 14, 16, 15, 15, 15, 17, 16, 15, 18, 18, Number.NaN, ];
data_array_100k_cr['all']['C22'] = [ Number.NaN, 8, 7, 8, 8, 8, 8, 9, 9, 9, 10, 8, 9, 9, 10, 10, 10, 11, 12, 12, 11, 11, 12, Number.NaN, ];
data_array_100k_cr['all']['C61'] = [ Number.NaN, 7, 9, 9, 10, 10, 10, 10, 10, 13, 13, 14, 13, 14, 14, 15, 16, 17, 17, 17, 17, 19, 18, Number.NaN, ];
data_array_100k_cr['all']['C71'] = [ Number.NaN, 5, 7, 7, 7, 8, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10, 9, 9, Number.NaN, ];
data_array_100k_cr['all']['C32'] = [ Number.NaN, 5, 4, 6, 6, 6, 6, 5, 5, 4, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, ];
data_array_100k_cr['all']['C67'] = [ Number.NaN, 4, 5, 5, 6, 6, 7, 6, 6, 7, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 10, Number.NaN, ];

