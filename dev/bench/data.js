window.BENCHMARK_DATA = {
  "lastUpdate": 1618833509722,
  "repoUrl": "https://github.com/StephenSmith25/dissolve",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "56431339+StephenSmith25@users.noreply.github.com",
            "name": "StephenSmith25",
            "username": "StephenSmith25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ff4b9cef2eff8392104ee4d6cb6126e021af28b",
          "message": "Update benchmark_linux.yml",
          "timestamp": "2021-04-19T12:38:45+01:00",
          "tree_id": "4b99fa2e897ff1b3da2da190bf33245a1aad656d",
          "url": "https://github.com/StephenSmith25/dissolve/commit/4ff4b9cef2eff8392104ee4d6cb6126e021af28b"
        },
        "date": 1618833508713,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemSize::Small, Method::SimpleMethod>/iterations:5",
            "value": 16.904369599978963,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.8948046 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Small, Method::CellsMethod>/iterations:5",
            "value": 25.90105119998043,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.8988558 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Medium, Method::SimpleMethod>/iterations:5",
            "value": 412.55768920000264,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 412.4581416 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Medium, Method::CellsMethod>/iterations:5",
            "value": 588.7832588000038,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 588.7268394 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Large, Method::SimpleMethod>/iterations:5",
            "value": 1504.298152399997,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1503.6716756 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Large, Method::CellsMethod>/iterations:5",
            "value": 2133.147187600025,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2132.9980852 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 7.796112667243829,
            "unit": "ns/iter",
            "extra": "iterations: 91200065\ncpu: 7.796131713283294 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 7.590829016465813,
            "unit": "ns/iter",
            "extra": "iterations: 92937382\ncpu: 7.589778255212725 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 16.099065260241325,
            "unit": "ns/iter",
            "extra": "iterations: 41809177\ncpu: 16.09803938498954 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.779130070127835,
            "unit": "ns/iter",
            "extra": "iterations: 39713799\ncpu: 17.777454884132343 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 11.957314447115099,
            "unit": "ns/iter",
            "extra": "iterations: 59541691\ncpu: 11.956467779862045 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.009091353507095,
            "unit": "ns/iter",
            "extra": "iterations: 59587497\ncpu: 12.00864689785512 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.393715575043569,
            "unit": "ns/iter",
            "extra": "iterations: 58168918\ncpu: 12.392604328655484 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.239604974342106,
            "unit": "ns/iter",
            "extra": "iterations: 52546359\ncpu: 13.239015247469432 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 14.11608232704775,
            "unit": "ns/iter",
            "extra": "iterations: 51393999\ncpu: 14.113629453119621 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.546547409848207,
            "unit": "ns/iter",
            "extra": "iterations: 51464507\ncpu: 12.545516155435122 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 12.794762759826023,
            "unit": "ns/iter",
            "extra": "iterations: 56101227\ncpu: 12.792661112385309 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.319484719766567,
            "unit": "ns/iter",
            "extra": "iterations: 50948277\ncpu: 13.318079137396523 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 14.284325221924822,
            "unit": "ns/iter",
            "extra": "iterations: 47099863\ncpu: 14.284369298484064 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 15.673840600864214,
            "unit": "ns/iter",
            "extra": "iterations: 42811098\ncpu: 15.672482051266234 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.855769966232131,
            "unit": "ns/iter",
            "extra": "iterations: 44948010\ncpu: 15.854979608663426 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 15.769136396015531,
            "unit": "ns/iter",
            "extra": "iterations: 45223066\ncpu: 15.767127576002824 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 16.008044205619985,
            "unit": "ns/iter",
            "extra": "iterations: 39613607\ncpu: 16.006730894260606 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 16.70716975728092,
            "unit": "ns/iter",
            "extra": "iterations: 37498480\ncpu: 16.70480702151132 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 17.45587383842059,
            "unit": "ns/iter",
            "extra": "iterations: 32981704\ncpu: 17.454631028160392 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 24.59918536080686,
            "unit": "ns/iter",
            "extra": "iterations: 29530865\ncpu: 24.595002008914918 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 24.612632363078458,
            "unit": "ns/iter",
            "extra": "iterations: 28636574\ncpu: 24.610260151930127 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 23.61352071439727,
            "unit": "ns/iter",
            "extra": "iterations: 29272684\ncpu: 23.61124999675484 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 23.873203798749774,
            "unit": "ns/iter",
            "extra": "iterations: 28908161\ncpu: 23.870983145555293 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 24.248314092911038,
            "unit": "ns/iter",
            "extra": "iterations: 29426147\ncpu: 24.244565691865873 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 23.76480958926191,
            "unit": "ns/iter",
            "extra": "iterations: 28571471\ncpu: 23.762916127069357 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 25.452974386488332,
            "unit": "ns/iter",
            "extra": "iterations: 29076803\ncpu: 25.449791471228842 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 24.1762324371782,
            "unit": "ns/iter",
            "extra": "iterations: 29065092\ncpu: 24.174331634663513 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 24.976446384096,
            "unit": "ns/iter",
            "extra": "iterations: 27719608\ncpu: 24.97022389349813 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.22543824096189,
            "unit": "ns/iter",
            "extra": "iterations: 27322982\ncpu: 26.22377579431127 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 30.159636232112533,
            "unit": "ns/iter",
            "extra": "iterations: 23101654\ncpu: 30.156591861344637 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 29.9483158229302,
            "unit": "ns/iter",
            "extra": "iterations: 24073983\ncpu: 29.945338417826296 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 31.08407964787273,
            "unit": "ns/iter",
            "extra": "iterations: 22004909\ncpu: 31.080607649866014 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 29.04558171847423,
            "unit": "ns/iter",
            "extra": "iterations: 22189883\ncpu: 29.043877293088766 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 35.21093149982647,
            "unit": "ns/iter",
            "extra": "iterations: 21386123\ncpu: 35.207259024929456 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 36.0298429693484,
            "unit": "ns/iter",
            "extra": "iterations: 19875100\ncpu: 36.025608474925924 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 36.17432397295524,
            "unit": "ns/iter",
            "extra": "iterations: 19099014\ncpu: 36.17032083436341 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 33.928897615455604,
            "unit": "ns/iter",
            "extra": "iterations: 21195562\ncpu: 33.92640817922164 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 35.89419381050588,
            "unit": "ns/iter",
            "extra": "iterations: 20542664\ncpu: 35.89198406788907 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 37.258365809862234,
            "unit": "ns/iter",
            "extra": "iterations: 19077621\ncpu: 37.2530660924647 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 36.46671639706861,
            "unit": "ns/iter",
            "extra": "iterations: 18711556\ncpu: 36.464362931655735 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 34.58900086380976,
            "unit": "ns/iter",
            "extra": "iterations: 20354162\ncpu: 34.58722722163672 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 35.704358313743676,
            "unit": "ns/iter",
            "extra": "iterations: 20506922\ncpu: 35.70444574763599 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 36.996145034279444,
            "unit": "ns/iter",
            "extra": "iterations: 19504713\ncpu: 36.99320682134604 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 42.44678416741105,
            "unit": "ns/iter",
            "extra": "iterations: 16500719\ncpu: 42.444784860586445 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 45.27114095085201,
            "unit": "ns/iter",
            "extra": "iterations: 15857896\ncpu: 45.268259862468184 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 42.473364331380125,
            "unit": "ns/iter",
            "extra": "iterations: 16819345\ncpu: 42.46980515590839 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 43.1464860202549,
            "unit": "ns/iter",
            "extra": "iterations: 15196317\ncpu: 43.144762773769514 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 44.357595728156205,
            "unit": "ns/iter",
            "extra": "iterations: 13590593\ncpu: 44.35445281894558 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 47.77579435338791,
            "unit": "ns/iter",
            "extra": "iterations: 12233724\ncpu: 47.77457706255239 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 76.15778355663737,
            "unit": "ns/iter",
            "extra": "iterations: 9142106\ncpu: 76.14837489305118 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 270.4901102845263,
            "unit": "ns/iter",
            "extra": "iterations: 2540973\ncpu: 270.47254811443815 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 950.6080678344525,
            "unit": "ns/iter",
            "extra": "iterations: 751949\ncpu: 950.5551373829769 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 3933.8285503749394,
            "unit": "ns/iter",
            "extra": "iterations: 173707\ncpu: 3933.656329336213 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 25248.214417223033,
            "unit": "ns/iter",
            "extra": "iterations: 28244\ncpu: 25247.34375442542 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 221050.72341125025,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 221041.43200526776 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1109340.2034703104,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1109242.8627760168 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 4817050.052631537,
            "unit": "ns/iter",
            "extra": "iterations: 133\ncpu: 4811313.578947337 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 420.1436600446494,
            "unit": "ns/iter",
            "extra": "iterations: 1638521\ncpu: 420.1244640746133 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1687.5530007693624,
            "unit": "ns/iter",
            "extra": "iterations: 419909\ncpu: 1687.4726071601 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7006.5768724825275,
            "unit": "ns/iter",
            "extra": "iterations: 98826\ncpu: 7006.312842774153 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 27560.144081517916,
            "unit": "ns/iter",
            "extra": "iterations: 25319\ncpu: 27558.04909356556 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 112079.48737738549,
            "unit": "ns/iter",
            "extra": "iterations: 6219\ncpu: 112075.56922334917 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 479670.6503244487,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 479655.3287671258 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2070084.9219656184,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2070068.997109816 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 8447973.724138325,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 8447605.011494277 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 780.9793498722343,
            "unit": "ns/iter",
            "extra": "iterations: 889825\ncpu: 780.9614654566928 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3193.996911598588,
            "unit": "ns/iter",
            "extra": "iterations: 222769\ncpu: 3193.8874035435547 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 10591.755673614094,
            "unit": "ns/iter",
            "extra": "iterations: 67197\ncpu: 10591.784112385983 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 49452.32213552299,
            "unit": "ns/iter",
            "extra": "iterations: 13842\ncpu: 49450.22164427063 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 213539.92448922683,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 213536.20728457224 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 909276.062893181,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 909203.3396226448 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 3794545.679144227,
            "unit": "ns/iter",
            "extra": "iterations: 187\ncpu: 3794460.096256665 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 14889466.608698731,
            "unit": "ns/iter",
            "extra": "iterations: 46\ncpu: 14888944.239130376 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}