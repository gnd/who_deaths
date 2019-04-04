// Found country Denmark with code 4050
var cause_f_dn = [ 'rest', 'C34', 'C50', 'C18', 'C56', 'C25', 'C20', 'C16', 'C53', 'C67', 'C85', 'C64', 'C71', 'C54', 'C78', 'C22', 'C76', ];
var cause_m_dn = [ 'rest', 'C34', 'C61', 'C18', 'C67', 'C20', 'C25', 'C16', 'C15', 'C64', 'C71', 'C85', 'C22', ];
var cause_a_dn = [ 'rest', 'C34', 'C18', 'C50', 'C61', 'C25', 'C67', 'C20', 'C16', 'C56', 'C15', 'C71', 'C22', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Denmark';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Denmark (gender: man, number of deaths on 100k citizens):
data_array_100k_dn = [];
data_array_100k_dn['man'] = [];
data_array_100k_dn['man']['rest'] = [ 40, 37, 35, 37, 37, 36, 37, 36, 36, 35, 36, 36, 34, 37, 35, 33, 33, 35, 35, 35, 35, 36, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C34'] = [ 40, 41, 39, 37, 36, 36, 37, 36, 34, 35, 36, 35, 38, 33, 35, 33, 34, 32, 35, 34, 34, 33, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C61'] = [ 19, 20, 19, 18, 19, 19, 20, 21, 21, 19, 20, 20, 21, 19, 19, 21, 21, 22, 20, 21, 20, 20, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C18'] = [ 13, 13, 12, 11, 12, 12, 11, 12, 12, 12, 12, 12, 12, 11, 11, 12, 12, 11, 11, 11, 12, 11, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C67'] = [ 8, 8, 8, 7, 8, 8, 7, 6, 6, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C20'] = [ 6, 6, 6, 7, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C25'] = [ 6, 6, 6, 6, 7, 6, 7, 5, 6, 6, 7, 7, 8, 7, 7, 7, 8, 8, 9, 8, 8, 8, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C16'] = [ 5, 5, 5, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C15'] = [ 4, 4, 4, 4, 5, 5, 5, 5, 6, 5, 5, 5, 5, 4, 4, 4, 5, 5, 5, 5, 5, 5, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C64'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C71'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 4, 4, 3, 4, 3, 4, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C85'] = [ 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, ];
data_array_100k_dn['man']['C22'] = [ 3, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 4, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Denmark (gender: fem, number of deaths on 100k citizens):
data_array_100k_dn['fem'] = [];
data_array_100k_dn['fem']['rest'] = [ 38, 36, 34, 35, 34, 35, 37, 35, 36, 34, 33, 32, 34, 34, 33, 31, 28, 29, 31, 30, 30, 30, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C34'] = [ 25, 25, 24, 26, 25, 26, 26, 27, 27, 27, 29, 30, 31, 28, 31, 31, 31, 31, 31, 31, 30, 31, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C50'] = [ 24, 28, 25, 26, 25, 25, 24, 24, 25, 23, 23, 23, 22, 22, 21, 21, 21, 21, 20, 19, 19, 18, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C18'] = [ 14, 14, 14, 14, 14, 15, 14, 13, 13, 13, 12, 14, 14, 12, 13, 12, 12, 13, 12, 11, 10, 11, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C56'] = [ 8, 8, 9, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 6, 7, 6, 6, 6, 6, 6, 5, 6, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C25'] = [ 7, 7, 6, 6, 7, 8, 7, 7, 6, 7, 7, 7, 7, 8, 8, 8, 7, 7, 8, 8, 9, 8, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C20'] = [ 4, 4, 4, 5, 4, 4, 4, 5, 4, 4, 4, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C16'] = [ 3, 3, 3, 3, 3, 3, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C53'] = [ 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C67'] = [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C85'] = [ 3, 3, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C64'] = [ 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C71'] = [ 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C54'] = [ 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C78'] = [ 0, 0, 0, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 0, 0, 0, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C22'] = [ 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, ];
data_array_100k_dn['fem']['C76'] = [ 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Denmark (gender: all, number of deaths on 100k citizens):
data_array_100k_dn['all'] = [];
data_array_100k_dn['all']['rest'] = [ 98, 93, 87, 91, 90, 90, 90, 89, 86, 84, 83, 83, 81, 87, 79, 75, 75, 76, 79, 77, 79, 79, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C34'] = [ 65, 66, 64, 64, 61, 63, 64, 64, 61, 63, 66, 66, 69, 62, 66, 65, 66, 64, 66, 65, 65, 64, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C18'] = [ 27, 27, 26, 26, 26, 27, 26, 26, 25, 25, 25, 26, 26, 23, 25, 25, 25, 25, 23, 23, 22, 23, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C50'] = [ 24, 28, 26, 27, 25, 25, 25, 25, 26, 24, 23, 23, 23, 22, 21, 21, 21, 21, 20, 19, 19, 18, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C61'] = [ 19, 20, 19, 18, 19, 19, 20, 21, 21, 19, 20, 20, 21, 19, 19, 21, 21, 22, 20, 21, 20, 20, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C25'] = [ 13, 13, 12, 12, 14, 14, 14, 13, 13, 13, 15, 14, 15, 15, 16, 15, 16, 15, 17, 16, 17, 16, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C67'] = [ 11, 11, 11, 10, 11, 12, 11, 10, 9, 10, 10, 9, 10, 9, 8, 8, 9, 8, 9, 8, 8, 8, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C20'] = [ 11, 11, 11, 13, 11, 11, 10, 11, 9, 9, 10, 9, 10, 9, 9, 9, 9, 9, 9, 8, 7, 8, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C16'] = [ 9, 9, 9, 8, 7, 7, 6, 7, 6, 7, 6, 7, 7, 7, 7, 6, 7, 6, 7, 6, 7, 6, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C56'] = [ 8, 8, 9, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 6, 7, 6, 6, 6, 6, 6, 5, 6, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C15'] = [ 6, 6, 6, 6, 6, 7, 7, 7, 8, 7, 7, 7, 7, 7, 6, 6, 6, 7, 8, 6, 7, 6, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C71'] = [ 6, 5, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, Number.NaN, Number.NaN, ];
data_array_100k_dn['all']['C22'] = [ 5, 5, 5, 4, 4, 5, 4, 5, 4, 4, 4, 5, 5, 4, 5, 5, 6, 6, 7, 7, 8, 7, Number.NaN, Number.NaN, ];

