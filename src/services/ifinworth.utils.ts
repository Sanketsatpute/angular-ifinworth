export interface keyValue {
    date: string;
    [key: string]: any;
  }

export interface bigmacindexdata {
    date: string;
    local_price: number;
    dollar_ex: number;
    dollar_price: number;
    dollar_ppp: number;
    dollar_valuation: number;
    dollar_adj_valuation: number;
    euro_adj_valuation: number;
    sterling_adj_valuation: number;
    yen_adj_valuation: number;
    yuan_adj_valuation: number;
}

export interface worldIndexData {
    series_id : string;
    country_name: string;
    country_code: string;
    value: string;
    year: string;
}

export const bigMacIndexpropertyNames = [
    'date',
    'local_price',
    'dollar_ex',
    'dollar_price',
    'dollar_ppp',
    'dollar_valuation',
    'dollar_adj_valuation',
    'euro_adj_valuation',
    'sterling_adj_valuation',
    'yen_adj_valuation',
    'yuan_adj_valuation',
  ];

  export const worldIndexPropertyNamesc = [
    'series_id',
    'country_code',
    'country_name',
    'year',
    'value'
  ]



  export const jsonBigMacIndex = [
    {
      "date": "2022-07-31",
      "local_price": 11,
      "dollar_ex": 4.82175,
      "dollar_price": 2.28132939285529,
      "dollar_ppp": 2.135922330097086,
      "dollar_valuation": -55.702,
      "dollar_adj_valuation": -47.556,
      "euro_adj_valuation": -49.656,
      "sterling_adj_valuation": -44.13,
      "yen_adj_valuation": -8.98,
      "yuan_adj_valuation": -39.189
    },
    {
      "date": "2022-01-31",
      "local_price": 10.6,
      "dollar_ex": 4.4119,
      "dollar_price": 2.40259298714839,
      "dollar_ppp": 1.8244406196213394,
      "dollar_valuation": -58.647000000000006,
      "dollar_adj_valuation": -36.018,
      "euro_adj_valuation": -38.186,
      "sterling_adj_valuation": -35.236000000000004,
      "yen_adj_valuation": -8.074,
      "yuan_adj_valuation": -38.923
    },
    {
      "date": "2021-07-31",
      "local_price": 10.6,
      "dollar_ex": 4.1877,
      "dollar_price": 2.53122238937842,
      "dollar_ppp": 1.8761061946902673,
      "dollar_valuation": -55.2,
      "dollar_adj_valuation": -29.004,
      "euro_adj_valuation": -34.977999999999994,
      "sterling_adj_valuation": -29.721999999999998,
      "yen_adj_valuation": -6.107,
      "yuan_adj_valuation": -28.735
    },
    {
      "date": "2021-01-31",
      "local_price": 9.9,
      "dollar_ex": 4.0089,
      "dollar_price": 2.46950535059493,
      "dollar_ppp": 1.7491166077738538,
      "dollar_valuation": -56.39999999999999,
      "dollar_adj_valuation": -29.099999999999998,
      "euro_adj_valuation": -37.1,
      "sterling_adj_valuation": -24.8,
      "yen_adj_valuation": -12.4,
      "yuan_adj_valuation": -30.8
    },
    {
      "date": "2020-07-31",
      "local_price": 9.9,
      "dollar_ex": 4.26005,
      "dollar_price": 2.32391638595791,
      "dollar_ppp": 1.7338003502626962,
      "dollar_valuation": -59.301,
      "dollar_adj_valuation": null,
      "euro_adj_valuation": null,
      "sterling_adj_valuation": null,
      "yen_adj_valuation": null,
      "yuan_adj_valuation": null
    },
    {
      "date": "2020-01-31",
      "local_price": 9.5,
      "dollar_ex": 4.2982,
      "dollar_price": 2.21022753710856,
      "dollar_ppp": 1.6754850088183444,
      "dollar_valuation": -61.019,
      "dollar_adj_valuation": null,
      "euro_adj_valuation": null,
      "sterling_adj_valuation": null,
      "yen_adj_valuation": null,
      "yuan_adj_valuation": null
    },
    {
      "date": "2019-07-31",
      "local_price": 9.3,
      "dollar_ex": 4.2192,
      "dollar_price": 2.2042093287827,
      "dollar_ppp": 1.6202090592335,
      "dollar_valuation": -61.6,
      "dollar_adj_valuation": null,
      "euro_adj_valuation": null,
      "sterling_adj_valuation": null,
      "yen_adj_valuation": null,
      "yuan_adj_valuation": null
    },
    {
      "date": "2019-01-31",
      "local_price": 9.3,
      "dollar_ex": 4.06695,
      "dollar_price": 2.2867259248331,
      "dollar_ppp": 1.6666666666667,
      "dollar_valuation": -59,
      "dollar_adj_valuation": null,
      "euro_adj_valuation": null,
      "sterling_adj_valuation": null,
      "yen_adj_valuation": null,
      "yuan_adj_valuation": null
    },
    {
      "date": "2018-07-31",
      "local_price": 9.2,
      "dollar_ex": 3.97325,
      "dollar_price": 2.315484804631,
      "dollar_ppp": 1.6696914700544,
      "dollar_valuation": -58,
      "dollar_adj_valuation": null,
      "euro_adj_valuation": null,
      "sterling_adj_valuation": null,
      "yen_adj_valuation": null,
      "yuan_adj_valuation": null
    }
  ]