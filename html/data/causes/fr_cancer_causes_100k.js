// Found country France with code 4080
var cause_f_fr = [ 'rest', 'C50', 'C18', 'C34', 'C56', 'C25', 'C16', 'C85', 'C22', 'C55', 'C71', ];
var cause_m_fr = [ 'rest', 'C34', 'C61', 'C18', 'C22', 'C25', 'C15', 'C67', 'C16', 'C76', 'C39', ];
var cause_a_fr = [ 'rest', 'C34', 'C18', 'C50', 'C61', 'C25', 'C22', 'C16', 'C67', 'C15', ];

// page title
page_title_100k = 'Development of cancer causes bettwen the years 1994 and 2018 in France';
// chart title
chart_title_100k = 'Cancer causes (all)';
chart_title_stub_100k = 'Cancer causes';

// Development of cancer causes bettwen the years 1994 and 2018 in France (gender: man, number of deaths on 100k citizens):
data_array_100k_fr = [];
data_array_100k_fr['man'] = [];
data_array_100k_fr['man']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 55, 55, 54, 53, 51, 52, 51, 51, 51, 51, 49, 49, 49, 48, 50, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 34, 35, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 15, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C15'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 5, 6, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C76'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['man']['C39'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 3, 3, Number.NaN, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in France (gender: fem, number of deaths on 100k citizens):
data_array_100k_fr['fem'] = [];
data_array_100k_fr['fem']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 40, 40, 40, 40, 39, 40, 39, 38, 39, 40, 39, 39, 39, 39, 40, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 7, 8, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C56'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 5, 5, 6, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C85'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C55'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['fem']['C71'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, Number.NaN, Number.NaN, Number.NaN, ];

// Development of cancer causes bettwen the years 1994 and 2018 in France (gender: all, number of deaths on 100k citizens):
data_array_100k_fr['all'] = [];
data_array_100k_fr['all']['rest'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 111, 111, 110, 109, 105, 107, 105, 104, 105, 105, 103, 102, 103, 101, 103, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C34'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 42, 42, 43, 43, 44, 45, 45, 46, 46, 47, 47, 47, 48, 47, 48, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C18'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 20, 20, 20, 20, 20, 20, 19, 19, 20, 20, 19, 19, 19, 19, 19, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C50'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 18, 18, 19, 18, 18, 18, 18, 18, 18, 18, 19, 18, 18, 18, 18, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C61'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 15, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C25'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C22'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 11, 11, 11, 11, 11, 12, 12, 11, 12, 12, 12, 12, 12, 12, 12, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C16'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C67'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 7, 8, Number.NaN, Number.NaN, Number.NaN, ];
data_array_100k_fr['all']['C15'] = [ Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, Number.NaN, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, Number.NaN, Number.NaN, Number.NaN, ];
