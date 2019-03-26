// page title
page_title_num = 'Top 10 causes of cancer deaths in Czech republic 1994 - 2018';

// chart title
chart_title_num = 'Top 10 causes of cancer (male)';
chart_title_stub_num = 'Top 10 causes of cancer';

var cause_f = [ 'rest', 'C50', 'C18', 'C34', 'C16', 'C25', 'C56', 'C23', 'C64', 'C20', 'C53', 'C54', 'C22', 'C71', ];
var cause_m = [ 'rest', 'C34', 'C18', 'C61', 'C16', 'C20', 'C64', 'C25', 'C22', 'C67', 'C19', 'C71', ];
var cause_a = [ 'rest', 'C34', 'C18', 'C50', 'C16', 'C25', 'C64', 'C20', 'C61', 'C22', 'C23', 'C56', 'C67', ];

// Development of cancer causes bettwen the years 1994 and 2018 in Czech Republic (gender: man, number of deaths):
data_array_num = [];
data_array_num['man'] = [];
data_array_num['man']['rest'] = [ 3722, 3652, 3686, 3751, 3815, 3787, 3786, 3688, 3882, 3967, 3910, 3870, 3857, 4225, 4450, 4475, 4339, 4200, 4267, 4292, 4459, 4396, 4538, ];
data_array_num['man']['C34'] = [ 4499, 4687, 4474, 4479, 4284, 4371, 4467, 4304, 4268, 4219, 4333, 4166, 4065, 4020, 3922, 3968, 3998, 3907, 3838, 3733, 3582, 3563, 3604, ];
data_array_num['man']['C18'] = [ 1294, 1214, 1255, 1308, 1354, 1389, 1437, 1467, 1415, 1488, 1414, 1414, 1397, 1263, 1284, 1284, 1271, 1154, 1190, 1179, 1128, 1162, 1183, ];
data_array_num['man']['C61'] = [ 1157, 1163, 1195, 1172, 1289, 1300, 1327, 1341, 1400, 1458, 1520, 1381, 1365, 1275, 1291, 1305, 1348, 1314, 1360, 1422, 1509, 1327, 1421, ];
data_array_num['man']['C16'] = [ 1138, 1030, 1074, 954, 915, 859, 905, 812, 832, 838, 811, 755, 755, 696, 686, 707, 750, 632, 635, 670, 631, 590, 599, ];
data_array_num['man']['C20'] = [ 750, 768, 718, 680, 729, 711, 702, 698, 763, 750, 783, 715, 689, 668, 670, 658, 652, 625, 624, 598, 613, 610, 629, ];
data_array_num['man']['C64'] = [ 735, 710, 740, 662, 698, 678, 728, 737, 751, 806, 748, 720, 683, 668, 679, 621, 660, 647, 631, 644, 613, 680, 642, ];
data_array_num['man']['C25'] = [ 734, 750, 763, 780, 770, 720, 777, 799, 832, 878, 857, 935, 886, 897, 860, 958, 971, 1037, 981, 1014, 1012, 1038, 1058, ];
data_array_num['man']['C22'] = [ 511, 588, 569, 594, 570, 558, 557, 554, 581, 629, 586, 528, 553, 497, 497, 458, 574, 490, 476, 521, 554, 514, 515, ];
data_array_num['man']['C67'] = [ 499, 507, 464, 482, 500, 471, 541, 534, 555, 536, 564, 507, 528, 502, 513, 539, 555, 507, 534, 535, 565, 571, 583, ];
data_array_num['man']['C19'] = [ 351, 338, 328, 379, 359, 333, 335, 276, 355, 332, 383, 311, 330, 304, 315, 335, 312, 296, 286, 268, 241, 267, 230, ];
data_array_num['man']['C71'] = [ 327, 299, 334, 312, 323, 305, 386, 388, 422, 375, 369, 372, 376, 320, 363, 353, 430, 370, 362, 328, 333, 376, 373, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Czech Republic (gender: fem, number of deaths):
data_array_num['fem'] = [];
data_array_num['fem']['rest'] = [ 3266, 3335, 3243, 3342, 3365, 3561, 3458, 3487, 3530, 3528, 3553, 3477, 3499, 3738, 3889, 3977, 3775, 3558, 3593, 3496, 3765, 3757, 3957, ];
data_array_num['fem']['C50'] = [ 1985, 2051, 1892, 1943, 1913, 1895, 1939, 1893, 1965, 1939, 1998, 1916, 1909, 1680, 1660, 1607, 1655, 1725, 1678, 1692, 1581, 1609, 1685, ];
data_array_num['fem']['C18'] = [ 1120, 1140, 1166, 1178, 1127, 1151, 1162, 1165, 1158, 1258, 1143, 1094, 1082, 1017, 996, 990, 987, 958, 953, 922, 909, 912, 880, ];
data_array_num['fem']['C34'] = [ 1044, 1085, 1100, 1064, 1132, 1236, 1242, 1318, 1273, 1339, 1339, 1370, 1451, 1440, 1480, 1478, 1556, 1675, 1748, 1678, 1664, 1686, 1712, ];
data_array_num['fem']['C16'] = [ 812, 871, 779, 774, 691, 679, 660, 654, 650, 602, 598, 541, 543, 521, 505, 509, 496, 460, 498, 430, 468, 450, 399, ];
data_array_num['fem']['C25'] = [ 721, 752, 725, 760, 742, 737, 789, 816, 781, 842, 854, 873, 955, 884, 903, 888, 910, 996, 904, 980, 986, 982, 1020, ];
data_array_num['fem']['C56'] = [ 700, 762, 656, 670, 698, 703, 719, 795, 727, 792, 743, 749, 764, 700, 678, 652, 640, 678, 699, 726, 718, 719, 623, ];
data_array_num['fem']['C23'] = [ 556, 499, 477, 419, 444, 398, 431, 388, 381, 353, 400, 374, 359, 342, 318, 317, 300, 292, 260, 268, 263, 219, 214, ];
data_array_num['fem']['C64'] = [ 501, 468, 415, 413, 449, 430, 457, 477, 450, 477, 450, 432, 385, 398, 388, 397, 393, 398, 436, 391, 391, 375, 349, ];
data_array_num['fem']['C20'] = [ 462, 488, 443, 467, 435, 464, 437, 447, 452, 468, 475, 430, 380, 380, 396, 350, 373, 366, 364, 321, 343, 358, 305, ];
data_array_num['fem']['C53'] = [ 429, 447, 416, 411, 407, 392, 363, 388, 399, 398, 394, 343, 366, 314, 311, 311, 342, 315, 357, 369, 310, 354, 314, ];
data_array_num['fem']['C54'] = [ 397, 364, 341, 342, 365, 362, 384, 312, 331, 302, 351, 311, 344, 309, 294, 305, 294, 335, 351, 348, 330, 296, 315, ];
data_array_num['fem']['C22'] = [ 369, 385, 373, 394, 360, 378, 379, 384, 372, 404, 373, 342, 328, 325, 296, 274, 281, 276, 303, 309, 272, 304, 314, ];
data_array_num['fem']['C71'] = [ 237, 266, 244, 267, 275, 313, 336, 325, 363, 382, 352, 316, 321, 311, 319, 330, 351, 320, 342, 300, 329, 271, 317, ];

// Development of cancer causes bettwen the years 1994 and 2018 in Czech Republic (gender: all, number of deaths):
data_array_num['all'] = [];
data_array_num['all']['rest'] = [ 8348, 8333, 8218, 8461, 8533, 8672, 8648, 8454, 8922, 8944, 8925, 8632, 8738, 9200, 9585, 9738, 9491, 9055, 9216, 9051, 9421, 9347, 9690, ];
data_array_num['all']['C34'] = [ 5543, 5772, 5574, 5543, 5416, 5607, 5709, 5622, 5541, 5558, 5672, 5536, 5516, 5460, 5402, 5446, 5554, 5582, 5586, 5411, 5246, 5249, 5316, ];
data_array_num['all']['C18'] = [ 2414, 2354, 2421, 2486, 2481, 2540, 2599, 2632, 2573, 2746, 2557, 2508, 2479, 2280, 2280, 2274, 2258, 2112, 2143, 2101, 2037, 2074, 2063, ];
data_array_num['all']['C50'] = [ 2004, 2066, 1907, 1966, 1928, 1920, 1957, 1909, 1986, 1956, 2012, 1939, 1930, 1696, 1674, 1622, 1676, 1740, 1702, 1713, 1591, 1623, 1697, ];
data_array_num['all']['C16'] = [ 1950, 1901, 1853, 1728, 1606, 1538, 1565, 1466, 1482, 1440, 1409, 1296, 1298, 1217, 1191, 1216, 1246, 1092, 1133, 1100, 1099, 1040, 998, ];
data_array_num['all']['C25'] = [ 1455, 1502, 1488, 1540, 1512, 1457, 1566, 1615, 1613, 1720, 1711, 1808, 1841, 1781, 1763, 1846, 1881, 2033, 1885, 1994, 1998, 2020, 2078, ];
data_array_num['all']['C64'] = [ 1236, 1178, 1155, 1075, 1147, 1108, 1185, 1214, 1201, 1283, 1198, 1152, 1068, 1066, 1067, 1018, 1053, 1045, 1067, 1035, 1004, 1055, 991, ];
data_array_num['all']['C20'] = [ 1212, 1256, 1161, 1147, 1164, 1175, 1139, 1145, 1215, 1218, 1258, 1145, 1069, 1048, 1066, 1008, 1025, 991, 988, 919, 956, 968, 934, ];
data_array_num['all']['C61'] = [ 1157, 1163, 1195, 1172, 1289, 1300, 1327, 1341, 1400, 1458, 1520, 1381, 1365, 1275, 1291, 1305, 1348, 1314, 1360, 1422, 1509, 1327, 1421, ];
data_array_num['all']['C22'] = [ 880, 973, 942, 988, 930, 936, 936, 938, 953, 1033, 959, 870, 881, 822, 793, 732, 855, 766, 779, 830, 826, 818, 829, ];
data_array_num['all']['C23'] = [ 745, 683, 661, 569, 607, 555, 606, 565, 522, 487, 551, 520, 475, 452, 442, 431, 419, 424, 362, 363, 371, 333, 326, ];
data_array_num['all']['C56'] = [ 700, 762, 656, 670, 698, 703, 719, 795, 727, 792, 743, 749, 764, 700, 678, 652, 640, 678, 699, 726, 718, 719, 623, ];
data_array_num['all']['C67'] = [ 672, 676, 639, 652, 698, 670, 748, 751, 753, 725, 786, 706, 746, 697, 731, 758, 767, 699, 750, 769, 793, 813, 813, ];
