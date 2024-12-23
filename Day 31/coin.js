const coins = [
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "cmc_rank": 5,
        "num_market_pairs": 500,
        "circulating_supply": 16950100,
        "total_supply": 16950100,
        "max_supply": 21000000,
        "infinite_supply": false,
        "last_updated": "2018-06-02T22:51:28.209Z",
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
            "mineable"
        ],
        "platform": null,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "quote": {
            "USD": {
                "price": 9283.92,
                "volume_24h": 7155680000,
                "volume_change_24h": -0.152774,
                "percent_change_1h": -0.152774,
                "percent_change_24h": 0.518894,
                "percent_change_7d": 0.986573,
                "market_cap": 852164659250.2758,
                "market_cap_dominance": 51,
                "fully_diluted_market_cap": 952835089431.14,
                "last_updated": "2018-08-09T22:53:32.000Z"
            },
            "BTC": {
                "price": 1,
                "volume_24h": 772012,
                "volume_change_24h": 0,
                "percent_change_1h": 0,
                "percent_change_24h": 0,
                "percent_change_7d": 0,
                "market_cap": 17024600,
                "market_cap_dominance": 12,
                "fully_diluted_market_cap": 952835089431.14,
                "last_updated": "2018-08-09T22:53:32.000Z"
            }
        }
    },
    {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 6360,
        "circulating_supply": 16950100,
        "total_supply": 16950100,
        "max_supply": 21000000,
        "infinite_supply": false,
        "last_updated": "2018-06-02T22:51:28.209Z",
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
            "mineable"
        ],
        "platform": null,
        "quote": {
            "USD": {
                "price": 1283.92,
                "volume_24h": 7155680000,
                "volume_change_24h": -0.152774,
                "percent_change_1h": -0.152774,
                "percent_change_24h": 0.518894,
                "percent_change_7d": 0.986573,
                "market_cap": 158055024432,
                "market_cap_dominance": 51,
                "fully_diluted_market_cap": 952835089431.14,
                "last_updated": "2018-08-09T22:53:32.000Z"
            },
            "ETH": {
                "price": 1,
                "volume_24h": 772012,
                "volume_change_24h": -0.152774,
                "percent_change_1h": 0,
                "percent_change_24h": 0,
                "percent_change_7d": 0,
                "market_cap": 17024600,
                "market_cap_dominance": 12,
                "fully_diluted_market_cap": 952835089431.14,
                "last_updated": "2018-08-09T22:53:32.000Z"
            }
        }
    },
    {
        "id": 1027,
        "name": "Alt",
        "symbol": "AALT",
        "slug": "alt",
        "num_market_pairs": 6360,
        "circulating_supply": 16950100,
        "total_supply": 16950100,
        "max_supply": 21000000,
        "infinite_supply": false,
        "last_updated": "2018-06-02T22:51:28.209Z",
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
            "mineable"
        ],
        "platform": null,
        "quote": {
            "USD": {
                "price": 1283.92,
                "volume_24h": 7155680000,
                "volume_change_24h": -0.152774,
                "percent_change_1h": -0.152774,
                "percent_change_24h": -1.518894,
                "percent_change_7d": 0.986573,
                "market_cap": 158055024432,
                "market_cap_dominance": 51,
                "fully_diluted_market_cap": 952835089431.14,
                "last_updated": "2018-08-09T22:53:32.000Z"
            },
            "ETH": {
                "price": 1,
                "volume_24h": 772012,
                "volume_change_24h": -0.152774,
                "percent_change_1h": 0,
                "percent_change_24h": 0,
                "percent_change_7d": 0,
                "market_cap": 17024600,
                "market_cap_dominance": 12,
                "fully_diluted_market_cap": 952835089431.14,
                "last_updated": "2018-08-09T22:53:32.000Z"
            }
        }
    }
]

const table = document.getElementById('coins')
table.innerHTML =coins?.map((i)=>{
    return `
    <tr>
      <td scope="row"><img src="./images/image.png" width="20px" alt=""></td>
      <td class="align-middle items-center"> 
            <img class="w-5 rounded-full inline-block" src="https://media.istockphoto.com/id/905413264/vector/bitcoin-symbol-illustration-logo-the-crtyptocurrency-bitcoin-is-currently-using-wide-range-of.jpg?s=612x612&w=0&k=20&c=wGL3FURi9Yvb2eDwNZ1DsU0m4Ag5r3pr4YBZNccpaDQ=" alt="">
        
        <span>${i.name}-${i.symbol}</span>
      </td>
      <td>$${i.quote.USD.price}</td>
      <td style="color:${i.quote.USD.percent_change_24h>0?"green":"red"}">${i.quote.USD.percent_change_24h}%</td>
      <td>$${i.quote.USD.volume_24h}</td>
      <td>$${i.quote.USD.market_cap}</td>
      <td><button class="btn btn-outline-dark text-xs font-medium">Trade</button></td>
    </tr>
    `;
}).join('');