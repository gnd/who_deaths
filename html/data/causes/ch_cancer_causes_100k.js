// Found country Switzerland with code 4300
var cause_f_ch = [ 'rest', 'C50', 'C34', 'C18', 'C25', 'C56', 'C16', 'C85', 'C54', 'C20', 'C71', 'C90', 'C22', 'C67', ];
var cause_m_ch = [ 'rest', 'C34', 'C61', 'C18', 'C16', 'C25', 'C67', 'C22', 'C15', 'C97', 'C85', 'C20', 'C71', ];
var cause_a_ch = [ 'rest', 'C34', 'C50', 'C61', 'C18', 'C25', 'C16', 'C85', 'C67', 'C22', 'C71', 'C56', 'C15', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in Switzerland';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in Switzerland (gender: man, number of deaths on 100k citizens):
data_array_100k_ch = [];
data_array_100k_ch['man'] = [];
data_array_100k_ch['man']['rest'] = [ Number.NaN, 29, 30, 29, 30, 30, 30, 30, 29, 30, 31, 31, 31, 31, 31, 30, 31, 33, 33, 32, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C34'] = [ Number.NaN, 27, 27, 27, 28, 26, 28, 28, 26, 26, 26, 27, 26, 26, 27, 24, 26, 25, 24, 24, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C61'] = [ Number.NaN, 18, 18, 18, 17, 18, 18, 18, 17, 17, 17, 17, 17, 16, 17, 16, 18, 17, 15, 16, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C18'] = [ Number.NaN, 8, 8, 8, 8, 8, 9, 8, 7, 8, 7, 8, 8, 8, 7, 8, 8, 8, 7, 7, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C16'] = [ Number.NaN, 5, 5, 5, 5, 4, 4, 5, 4, 4, 4, 4, 3, 4, 4, 3, 3, 4, 4, 4, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C25'] = [ Number.NaN, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 5, 6, 6, 6, 7, 6, 7, 7, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C67'] = [ Number.NaN, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C22'] = [ Number.NaN, 4, 4, 4, 4, 4, 4, 5, 5, 4, 5, 4, 5, 5, 5, 5, 5, 5, 6, 6, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C15'] = [ Number.NaN, 3, 3, 3, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C97'] = [ Number.NaN, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C85'] = [ Number.NaN, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C20'] = [ Number.NaN, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 2, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['man']['C71'] = [ Number.NaN, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Switzerland (gender: fem, number of deaths on 100k citizens):
data_array_100k_ch['fem'] = [];
data_array_100k_ch['fem']['rest'] = [ Number.NaN, 30, 29, 29, 28, 28, 29, 28, 28, 28, 27, 27, 27, 29, 27, 27, 27, 26, 28, 27, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C50'] = [ Number.NaN, 22, 19, 20, 18, 17, 18, 18, 18, 18, 18, 17, 17, 16, 18, 18, 18, 17, 17, 16, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C34'] = [ Number.NaN, 8, 8, 8, 9, 10, 10, 9, 10, 11, 11, 11, 13, 13, 12, 13, 13, 14, 14, 14, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C18'] = [ Number.NaN, 8, 7, 8, 7, 7, 7, 7, 7, 8, 7, 7, 6, 7, 6, 7, 6, 7, 7, 6, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C25'] = [ Number.NaN, 6, 5, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 7, 6, 7, 7, 7, 7, 7, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C56'] = [ Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 5, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C16'] = [ Number.NaN, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C85'] = [ Number.NaN, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1, 1, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C54'] = [ Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C20'] = [ Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C71'] = [ Number.NaN, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C90'] = [ Number.NaN, 1, 2, 1, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C22'] = [ Number.NaN, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['fem']['C67'] = [ Number.NaN, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 1, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Switzerland (gender: all, number of deaths on 100k citizens):
data_array_100k_ch['all'] = [];
data_array_100k_ch['all']['rest'] = [ Number.NaN, 72, 72, 69, 70, 70, 71, 69, 68, 68, 69, 68, 70, 71, 68, 68, 66, 66, 69, 67, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C34'] = [ Number.NaN, 36, 36, 36, 37, 36, 39, 38, 36, 38, 37, 39, 39, 39, 39, 38, 40, 40, 38, 39, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C50'] = [ Number.NaN, 22, 20, 20, 18, 17, 18, 18, 18, 19, 18, 17, 17, 16, 18, 18, 18, 17, 17, 16, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C61'] = [ Number.NaN, 18, 18, 18, 17, 18, 18, 18, 17, 17, 17, 17, 17, 16, 17, 16, 18, 17, 15, 16, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C18'] = [ Number.NaN, 17, 16, 16, 15, 16, 17, 16, 15, 16, 15, 15, 14, 16, 14, 15, 15, 15, 14, 14, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C25'] = [ Number.NaN, 11, 11, 11, 12, 12, 12, 11, 13, 12, 12, 12, 12, 13, 13, 14, 15, 14, 14, 15, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C16'] = [ Number.NaN, 9, 9, 9, 9, 8, 7, 8, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 7, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C85'] = [ Number.NaN, 6, 6, 6, 6, 6, 6, 6, 5, 5, 4, 5, 4, 3, 4, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C67'] = [ Number.NaN, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 5, 6, 5, 6, 5, 6, 6, 6, 6, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C22'] = [ Number.NaN, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 7, 7, 8, 8, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C71'] = [ Number.NaN, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 5, 5, 6, 5, 6, 5, 6, 6, 6, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C56'] = [ Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 5, 4, 5, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_ch['all']['C15'] = [ Number.NaN, 5, 4, 4, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, Number.NaN, Number.NaN, Number.NaN, Number.NaN, ];

