import { Injectable } from '@angular/core';
    
@Injectable()
export class NodeService {
    getFileSystemNodesData() {
        return {
            "cols": [
              {
                "field": "tipus",
                "header": "Típus"
              },
              {
                "field": "megnev",
                "header": "Megnevezés"
              },
              {
                "field": "pont",
                "header": "Pont"
              },
              {
                "field": "szazalek",
                "header": "%"
              }
            ],
            "tableData": [
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy Sándor; anyja neve: Molnár Andrea; születési idő: 1977.05.14; születési hely: Ózd (10038)",
                  "pont": "61.000",
                  "szazalek": "100.00",
                  "entitas_az": "10038",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": "dr. Tóth János, ezredes (212)",
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "Sándor",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "születési hely",
                          "megnev": "Ózd",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_kereszt_nev [X]",
                          "megnev": "Andrea",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_vezetek_nev [X]",
                          "megnev": "Molnár",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy Sándor; anyja neve: Molnár Andrea; születési idő: 1977.05.14; születési hely: Ózd",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1977.05.14.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: keresztnév = sandor",
                          "megnev": "adattár: keresztnév = sandor",
                          "pont": "16.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: születési hely = ózd",
                          "megnev": "adattár: születési hely = ózd",
                          "pont": "15.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tagolatlan",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy Sándor; születési idő: 1975.12.23; születési hely: Kecskemét (10146)",
                  "pont": "46.000",
                  "szazalek": "75.41",
                  "entitas_az": "10146",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": "dr. Tóth János, ezredes (212)",
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "Sándor",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "születési hely",
                          "megnev": "Kecskemét",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy Sándor; születési idő: 1975.12.23; születési hely: Kecskemét",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "nemzeti_azon_jel [X]",
                          "megnev": "28001082393",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1975.12.23.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: keresztnév = sandor",
                          "megnev": "adattár: keresztnév = sandor",
                          "pont": "16.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy Erzsébet; anyja neve: Pál Krisztina; születési idő: 1978.01.20; születési hely: Ózd (10562)",
                  "pont": "45.000",
                  "szazalek": "73.77",
                  "entitas_az": "10562",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": "dr. Tóth János, ezredes (212)",
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "Erzsébet",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "születési hely",
                          "megnev": "Ózd",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_kereszt_nev [X]",
                          "megnev": "Krisztina",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_vezetek_nev [X]",
                          "megnev": "Pál",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy Erzsébet; anyja neve: Pál Krisztina; születési idő: 1978.01.20; születési hely: Ózd",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "nemzeti_azon_jel [X]",
                          "megnev": "240091885710",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1978.01.20.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: születési hely = ózd",
                          "megnev": "adattár: születési hely = ózd",
                          "pont": "15.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tagolatlan",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy Anna; anyja neve: Molnár Ibolya; születési idő: 1981.11.30 (11088)",
                  "pont": "37.200",
                  "szazalek": "60.98",
                  "entitas_az": "11088",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": null,
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "Anna",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_kereszt_nev [X]",
                          "megnev": "Ibolya",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_vezetek_nev [X]",
                          "megnev": "Molnár",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy Anna; anyja neve: Molnár Ibolya; születési idő: 1981.11.30",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "nemzeti_azon_jel [X]",
                          "megnev": "14906167874",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1981.11.30.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: keresztnév = aca",
                          "megnev": "adattár: keresztnév = ana",
                          "pont": "7.200",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "nbh_fonetikus",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy Anna; anyja neve: Oláh Eszter; születési idő: 1971.06.24; születési hely: Dunakeszi (12393)",
                  "pont": "37.200",
                  "szazalek": "60.98",
                  "entitas_az": "12393",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": "dr. Tóth János, ezredes (212)",
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "Anna",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "születési hely",
                          "megnev": "Dunakeszi",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_kereszt_nev [X]",
                          "megnev": "Eszter",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_vezetek_nev [X]",
                          "megnev": "Oláh",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy Anna; anyja neve: Oláh Eszter; születési idő: 1971.06.24; születési hely: Dunakeszi",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "nemzeti_azon_jel [X]",
                          "megnev": "11712046812",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1971.06.24.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: keresztnév = aca",
                          "megnev": "adattár: keresztnév = ana",
                          "pont": "7.200",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "nbh_fonetikus",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy Anna; születési idő: 1990.02.03 (13467)",
                  "pont": "37.200",
                  "szazalek": "60.98",
                  "entitas_az": "13467",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": "Magyar Norbert, ezredes (21)",
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "Anna",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy Anna; születési idő: 1990.02.03",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "nemzeti_azon_jel [X]",
                          "megnev": "12207011481",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1990.02.03.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: keresztnév = aca",
                          "megnev": "adattár: keresztnév = ana",
                          "pont": "7.200",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "nbh_fonetikus",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "data": {
                  "tipus": "Személy",
                  "megnev": "Nagy András; anyja neve: Balogh Melinda; születési idő: 1997.02.05 (14105)",
                  "pont": "38.640",
                  "szazalek": "63.34",
                  "entitas_az": "14105",
                  "entitas_tipus": "szemely"
                },
                "children": [
                  {
                    "data": {
                      "tipus": "Adatlapgazda",
                      "megnev": "Magyar Norbert, ezredes (21)",
                      "pont": "",
                      "szazalek": ""
                    }
                  },
                  {
                    "data": {
                      "tipus": "Jellemzők",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "vezetéknév",
                          "megnev": "Nagy",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "keresztnév",
                          "megnev": "András",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_kereszt_nev [X]",
                          "megnev": "Melinda",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "anyja_vezetek_nev [X]",
                          "megnev": "Balogh",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "megnev [X]",
                          "megnev": "Nagy András; anyja neve: Balogh Melinda; születési idő: 1997.02.05",
                          "pont": "",
                          "szazalek": ""
                        }
                      },
                      {
                        "data": {
                          "tipus": "szul_datum_tol [X]",
                          "megnev": "1997.02.05.",
                          "pont": "",
                          "szazalek": ""
                        }
                      }
                    ]
                  },
                  {
                    "data": {
                      "tipus": "Technikai részletek",
                      "megnev": "",
                      "pont": "",
                      "szazalek": ""
                    },
                    "children": [
                      {
                        "data": {
                          "tipus": "input: vezetéknév = nagy",
                          "megnev": "adattár: vezetéknév = nagy",
                          "pont": "30.000",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      },
                      {
                        "data": {
                          "tipus": "input: keresztnév = alexandras",
                          "megnev": "adattár: keresztnév = andras",
                          "pont": "8.640",
                          "szazalek": ""
                        },
                        "children": [
                          {
                            "data": {
                              "tipus": "illesztes",
                              "megnev": "tisztitott",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "szinonima?",
                              "megnev": "igen",
                              "pont": "",
                              "szazalek": ""
                            }
                          },
                          {
                            "data": {
                              "tipus": "komplex?",
                              "megnev": "nem",
                              "pont": "",
                              "szazalek": ""
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
    }

    getFilesystem() {
        return Promise.resolve(this.getFileSystemNodesData());
    }
    
};