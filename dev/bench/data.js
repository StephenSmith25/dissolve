window.BENCHMARK_DATA = {
  "lastUpdate": 1619434362570,
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
      },
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
          "id": "b77b0823fea8c18e8252c4935a0629b8d9bffafd",
          "message": "Merge pull request #3 from StephenSmith25/add_github_actions\n\nAdd GitHub actions",
          "timestamp": "2021-04-21T10:11:24+01:00",
          "tree_id": "d719ca18643b2ece2be3dffc5c9c43ae2fbf3edd",
          "url": "https://github.com/StephenSmith25/dissolve/commit/b77b0823fea8c18e8252c4935a0629b8d9bffafd"
        },
        "date": 1618997463993,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemSize::Small, Method::SimpleMethod>/iterations:5",
            "value": 17.286863600020297,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.286862199999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Small, Method::CellsMethod>/iterations:5",
            "value": 26.942635400018844,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.942630599999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Medium, Method::SimpleMethod>/iterations:5",
            "value": 426.63196359999347,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 426.6010298 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Medium, Method::CellsMethod>/iterations:5",
            "value": 637.1667702000195,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 637.1288686 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Large, Method::SimpleMethod>/iterations:5",
            "value": 1674.9958750000133,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1674.9021670000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemSize::Large, Method::CellsMethod>/iterations:5",
            "value": 2389.1051973999765,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2388.9399666 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.898517394698382,
            "unit": "ns/iter",
            "extra": "iterations: 77100021\ncpu: 8.897784295026316 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.646723788345408,
            "unit": "ns/iter",
            "extra": "iterations: 79582160\ncpu: 8.64606778705177 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 17.738312959781506,
            "unit": "ns/iter",
            "extra": "iterations: 36122897\ncpu: 17.73689430280192 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.88153305864844,
            "unit": "ns/iter",
            "extra": "iterations: 38129996\ncpu: 17.88133615330027 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.732254613221553,
            "unit": "ns/iter",
            "extra": "iterations: 53486225\ncpu: 12.732002978336899 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.774098832018419,
            "unit": "ns/iter",
            "extra": "iterations: 54090526\ncpu: 12.773517602694413 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 14.095387989772691,
            "unit": "ns/iter",
            "extra": "iterations: 50483431\ncpu: 14.094126665043825 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.847850120096895,
            "unit": "ns/iter",
            "extra": "iterations: 55169291\ncpu: 12.847173131153715 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.699225471024896,
            "unit": "ns/iter",
            "extra": "iterations: 54835521\ncpu: 12.698601404735442 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.977808184627733,
            "unit": "ns/iter",
            "extra": "iterations: 54017798\ncpu: 12.977510875211962 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.401489197872184,
            "unit": "ns/iter",
            "extra": "iterations: 53132899\ncpu: 13.401515490430835 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.186482657101362,
            "unit": "ns/iter",
            "extra": "iterations: 51944691\ncpu: 13.185511277755015 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.399211381474236,
            "unit": "ns/iter",
            "extra": "iterations: 52574215\ncpu: 13.398470961477921 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 13.945569126050072,
            "unit": "ns/iter",
            "extra": "iterations: 52138608\ncpu: 13.944216059623205 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.229414883762365,
            "unit": "ns/iter",
            "extra": "iterations: 45211683\ncpu: 15.227846793493617 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.416909086394934,
            "unit": "ns/iter",
            "extra": "iterations: 39788773\ncpu: 17.415241304374923 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.650743884367483,
            "unit": "ns/iter",
            "extra": "iterations: 39318275\ncpu: 17.64895540305372 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 18.800376045794582,
            "unit": "ns/iter",
            "extra": "iterations: 37130584\ncpu: 18.798934592571914 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 30.082679338126805,
            "unit": "ns/iter",
            "extra": "iterations: 23802162\ncpu: 29.992156510824557 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 25.358944611074975,
            "unit": "ns/iter",
            "extra": "iterations: 26987473\ncpu: 25.35642410832617 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.651756296728486,
            "unit": "ns/iter",
            "extra": "iterations: 27715163\ncpu: 25.650030237960333 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 25.372001403017904,
            "unit": "ns/iter",
            "extra": "iterations: 27552052\ncpu: 25.37036657015604 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.27044420161151,
            "unit": "ns/iter",
            "extra": "iterations: 27664690\ncpu: 25.26907256144933 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 25.98089721854978,
            "unit": "ns/iter",
            "extra": "iterations: 27526515\ncpu: 25.978623483575674 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 25.836252414326307,
            "unit": "ns/iter",
            "extra": "iterations: 27236426\ncpu: 25.834582554994483 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 25.561516291961194,
            "unit": "ns/iter",
            "extra": "iterations: 27274035\ncpu: 25.559351889077018 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.782938240015024,
            "unit": "ns/iter",
            "extra": "iterations: 26960677\ncpu: 25.781122669879437 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 25.62613655190475,
            "unit": "ns/iter",
            "extra": "iterations: 27263933\ncpu: 25.623889737405268 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 25.40092345893363,
            "unit": "ns/iter",
            "extra": "iterations: 27171755\ncpu: 25.399366952926073 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 27.188449112107268,
            "unit": "ns/iter",
            "extra": "iterations: 25822292\ncpu: 27.18620357170455 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 30.06657210206699,
            "unit": "ns/iter",
            "extra": "iterations: 23421027\ncpu: 30.065119988120077 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 32.734230995550774,
            "unit": "ns/iter",
            "extra": "iterations: 21968397\ncpu: 32.73091040734546 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 36.702400655996044,
            "unit": "ns/iter",
            "extra": "iterations: 13751408\ncpu: 36.698230755716075 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 49.99324880398792,
            "unit": "ns/iter",
            "extra": "iterations: 11352507\ncpu: 49.98831826309393 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.1852388456249,
            "unit": "ns/iter",
            "extra": "iterations: 18242286\ncpu: 38.18279748492065 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.68940479637972,
            "unit": "ns/iter",
            "extra": "iterations: 18059870\ncpu: 38.685438876359626 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 38.664033501428904,
            "unit": "ns/iter",
            "extra": "iterations: 18070394\ncpu: 38.662104379129694 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.67783956452624,
            "unit": "ns/iter",
            "extra": "iterations: 18453076\ncpu: 38.67522943058381 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 38.42503471591176,
            "unit": "ns/iter",
            "extra": "iterations: 18140817\ncpu: 38.425113874418834 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 38.67946186631445,
            "unit": "ns/iter",
            "extra": "iterations: 18196668\ncpu: 38.67714875052956 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.26094432185728,
            "unit": "ns/iter",
            "extra": "iterations: 18331949\ncpu: 38.26042708279428 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 38.09720735233422,
            "unit": "ns/iter",
            "extra": "iterations: 18148154\ncpu: 38.09537239985987 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 38.44556331780301,
            "unit": "ns/iter",
            "extra": "iterations: 18199061\ncpu: 38.44271262127214 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 38.5953366494448,
            "unit": "ns/iter",
            "extra": "iterations: 17916174\ncpu: 38.59330669594979 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 39.39898706362517,
            "unit": "ns/iter",
            "extra": "iterations: 17826786\ncpu: 39.39427847509964 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 42.56925790984846,
            "unit": "ns/iter",
            "extra": "iterations: 16473187\ncpu: 42.56664918573502 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 43.41757615331046,
            "unit": "ns/iter",
            "extra": "iterations: 15726729\ncpu: 43.41459842030738 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 50.90404882509942,
            "unit": "ns/iter",
            "extra": "iterations: 13527307\ncpu: 50.904201479274434 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 57.43321882351004,
            "unit": "ns/iter",
            "extra": "iterations: 9856213\ncpu: 57.43071045644009 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 109.11205167842782,
            "unit": "ns/iter",
            "extra": "iterations: 6729154\ncpu: 109.10570140020612 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 406.6667977274737,
            "unit": "ns/iter",
            "extra": "iterations: 1686240\ncpu: 406.63289685928595 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1617.7330325188009,
            "unit": "ns/iter",
            "extra": "iterations: 449890\ncpu: 1617.651261419445 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 6331.060790946765,
            "unit": "ns/iter",
            "extra": "iterations: 108174\ncpu: 6330.663736202839 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 25103.584859538823,
            "unit": "ns/iter",
            "extra": "iterations: 27410\ncpu: 25053.915724188595 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 120319.56552194814,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 120310.25183666426 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1084195.6232338224,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1084112.6483516402 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6080861.106195385,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 6080278.380530864 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 420.15544038638444,
            "unit": "ns/iter",
            "extra": "iterations: 1662483\ncpu: 420.1354413849628 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1634.8791764127236,
            "unit": "ns/iter",
            "extra": "iterations: 412974\ncpu: 1634.7838919641467 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6654.4666524667655,
            "unit": "ns/iter",
            "extra": "iterations: 103291\ncpu: 6654.264679400935 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 28138.03596235435,
            "unit": "ns/iter",
            "extra": "iterations: 24331\ncpu: 28136.8302576961 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 113026.07656688934,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 113019.93004795809 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 461232.19631100853,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 461189.305006592 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2463981.371527603,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2463833.4652777873 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 10183147.136362176,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 10182869.787878659 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 865.670895050261,
            "unit": "ns/iter",
            "extra": "iterations: 839249\ncpu: 865.6313215744109 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3519.578040572308,
            "unit": "ns/iter",
            "extra": "iterations: 201171\ncpu: 3519.442325186075 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11795.250059891934,
            "unit": "ns/iter",
            "extra": "iterations: 58438\ncpu: 11794.653256442838 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 55721.200755821716,
            "unit": "ns/iter",
            "extra": "iterations: 12966\ncpu: 55717.75736541746 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 228373.6169447199,
            "unit": "ns/iter",
            "extra": "iterations: 3057\ncpu: 228359.12921164307 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 889996.7567220152,
            "unit": "ns/iter",
            "extra": "iterations: 781\ncpu: 889936.3905249776 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4488636.54140238,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 4488392.961783354 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 19353789.11428935,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 19352021.02857139 ns\nthreads: 1"
          }
        ]
      },
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
          "id": "6a19eaac5b9bb63db8ab6b09f6babdcd15a2f9d7",
          "message": "Update energy_benchmark.cpp",
          "timestamp": "2021-04-23T10:51:05+01:00",
          "tree_id": "824ed00ffd51fa283cd99731558279b25382a27b",
          "url": "https://github.com/StephenSmith25/dissolve/commit/6a19eaac5b9bb63db8ab6b09f6babdcd15a2f9d7"
        },
        "date": 1619172847141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.545599000004586,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.539061 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 25.749325800006773,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.663698600000004 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 403.4316912000122,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 403.3794491999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 625.6086974000027,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 625.5220562000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1617.2047223999925,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1616.900029 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2372.626699600005,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2372.4302126 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 9.050659153300074,
            "unit": "ns/iter",
            "extra": "iterations: 80484843\ncpu: 9.050442752308062 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.519123792243146,
            "unit": "ns/iter",
            "extra": "iterations: 83495312\ncpu: 8.51843315466622 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.363452983589468,
            "unit": "ns/iter",
            "extra": "iterations: 36380978\ncpu: 18.362298754035674 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 18.021727052193413,
            "unit": "ns/iter",
            "extra": "iterations: 38902148\ncpu: 18.021129938634747 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.66413771522983,
            "unit": "ns/iter",
            "extra": "iterations: 52161144\ncpu: 13.66244463503329 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 13.414506124427815,
            "unit": "ns/iter",
            "extra": "iterations: 50474019\ncpu: 13.414025401860634 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.911544241354155,
            "unit": "ns/iter",
            "extra": "iterations: 54442131\ncpu: 12.910740892930958 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.501144459623895,
            "unit": "ns/iter",
            "extra": "iterations: 54712721\ncpu: 12.49972433284763 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.052074636982502,
            "unit": "ns/iter",
            "extra": "iterations: 54958386\ncpu: 13.05157378530012 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.347514086749426,
            "unit": "ns/iter",
            "extra": "iterations: 55565877\ncpu: 13.346233786609616 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.998362111441475,
            "unit": "ns/iter",
            "extra": "iterations: 51755658\ncpu: 13.997854147656668 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 14.488160701587985,
            "unit": "ns/iter",
            "extra": "iterations: 44276948\ncpu: 14.486856004618906 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 15.9323977313751,
            "unit": "ns/iter",
            "extra": "iterations: 46740532\ncpu: 15.931195498587872 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 17.352053452572154,
            "unit": "ns/iter",
            "extra": "iterations: 42807295\ncpu: 17.342159928582312 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 17.36306236977777,
            "unit": "ns/iter",
            "extra": "iterations: 40560301\ncpu: 17.36161344068912 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.473242990836418,
            "unit": "ns/iter",
            "extra": "iterations: 40921016\ncpu: 17.472034296509186 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.76974838980172,
            "unit": "ns/iter",
            "extra": "iterations: 39937332\ncpu: 17.769182302914057 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.805652420973736,
            "unit": "ns/iter",
            "extra": "iterations: 40173724\ncpu: 17.80450804112659 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 26.412119386161265,
            "unit": "ns/iter",
            "extra": "iterations: 29467301\ncpu: 26.410301065577602 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.209599564808126,
            "unit": "ns/iter",
            "extra": "iterations: 26268795\ncpu: 26.203570852793245 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.233103304631626,
            "unit": "ns/iter",
            "extra": "iterations: 28318496\ncpu: 25.232356619504277 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.633304802751237,
            "unit": "ns/iter",
            "extra": "iterations: 26483862\ncpu: 26.62935764428915 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.804080741915328,
            "unit": "ns/iter",
            "extra": "iterations: 27503136\ncpu: 25.803210077570796 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.50457646893484,
            "unit": "ns/iter",
            "extra": "iterations: 27433596\ncpu: 26.501537968263396 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 25.415890234900473,
            "unit": "ns/iter",
            "extra": "iterations: 26974038\ncpu: 25.41483981745704 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 31.243630265164363,
            "unit": "ns/iter",
            "extra": "iterations: 25822896\ncpu: 31.240924100844307 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 24.326560483123288,
            "unit": "ns/iter",
            "extra": "iterations: 25267944\ncpu: 24.325322432248388 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 25.68291859365936,
            "unit": "ns/iter",
            "extra": "iterations: 26390450\ncpu: 25.681585080966652 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 27.460106524200047,
            "unit": "ns/iter",
            "extra": "iterations: 23991918\ncpu: 27.45870897024562 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 30.687874680152763,
            "unit": "ns/iter",
            "extra": "iterations: 23028308\ncpu: 30.684862517906236 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 28.284227406873995,
            "unit": "ns/iter",
            "extra": "iterations: 24596970\ncpu: 28.2831703254506 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 31.138812439336697,
            "unit": "ns/iter",
            "extra": "iterations: 20394714\ncpu: 31.135224499838653 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 32.2954124482526,
            "unit": "ns/iter",
            "extra": "iterations: 21348860\ncpu: 32.29229443633027 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 41.12579936372685,
            "unit": "ns/iter",
            "extra": "iterations: 17172408\ncpu: 41.12399233700958 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 34.657440618907216,
            "unit": "ns/iter",
            "extra": "iterations: 19450257\ncpu: 34.65549257266868 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 35.80088311245596,
            "unit": "ns/iter",
            "extra": "iterations: 16863311\ncpu: 35.79930062370324 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 35.56065027600759,
            "unit": "ns/iter",
            "extra": "iterations: 20015993\ncpu: 35.55758847437579 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 37.712528837901026,
            "unit": "ns/iter",
            "extra": "iterations: 18062170\ncpu: 37.71124781795382 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 37.82690819925082,
            "unit": "ns/iter",
            "extra": "iterations: 18543530\ncpu: 37.824630100094836 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 36.62482486775864,
            "unit": "ns/iter",
            "extra": "iterations: 19244743\ncpu: 36.622671968131364 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.03777027889475,
            "unit": "ns/iter",
            "extra": "iterations: 18057505\ncpu: 38.03573489250041 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 39.085923467412776,
            "unit": "ns/iter",
            "extra": "iterations: 17815680\ncpu: 39.08132560755524 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.00317640430107,
            "unit": "ns/iter",
            "extra": "iterations: 17726018\ncpu: 39.00141921327146 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 44.2055911198664,
            "unit": "ns/iter",
            "extra": "iterations: 16148679\ncpu: 44.20176783500404 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 47.181434009762235,
            "unit": "ns/iter",
            "extra": "iterations: 15463242\ncpu: 47.17863589019684 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 40.85273328280516,
            "unit": "ns/iter",
            "extra": "iterations: 16905843\ncpu: 40.84908330214566 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 43.51736226654437,
            "unit": "ns/iter",
            "extra": "iterations: 14959510\ncpu: 43.513617692023445 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 42.52592238817667,
            "unit": "ns/iter",
            "extra": "iterations: 13829725\ncpu: 42.52250192972061 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 47.34096640272234,
            "unit": "ns/iter",
            "extra": "iterations: 11638088\ncpu: 47.33933735507149 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 75.43488376987713,
            "unit": "ns/iter",
            "extra": "iterations: 10212715\ncpu: 75.43050227094407 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 260.08643486793,
            "unit": "ns/iter",
            "extra": "iterations: 2813043\ncpu: 260.081268931903 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1061.6474333499923,
            "unit": "ns/iter",
            "extra": "iterations: 681959\ncpu: 1061.5639312627109 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4592.476296320462,
            "unit": "ns/iter",
            "extra": "iterations: 154765\ncpu: 4592.320905889601 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 29270.750035180376,
            "unit": "ns/iter",
            "extra": "iterations: 21315\ncpu: 29268.11836734676 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 251617.50512182465,
            "unit": "ns/iter",
            "extra": "iterations: 2831\ncpu: 251610.04909925847 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1219961.1751316816,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1219795.22767077 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5962396.399999783,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 5962061.342857185 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 454.67581526706596,
            "unit": "ns/iter",
            "extra": "iterations: 1506715\ncpu: 454.65798508676716 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1831.2336297559436,
            "unit": "ns/iter",
            "extra": "iterations: 392908\ncpu: 1830.8354703900002 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7741.769998810627,
            "unit": "ns/iter",
            "extra": "iterations: 92543\ncpu: 7741.526674086579 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 29792.82024784427,
            "unit": "ns/iter",
            "extra": "iterations: 24289\ncpu: 29789.630079460178 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 121795.5303271406,
            "unit": "ns/iter",
            "extra": "iterations: 5655\ncpu: 121782.00176834702 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 520931.0278571268,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 520912.8392857159 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2200968.2698411318,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2200781.860317474 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9945038.831169946,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9944396.844155839 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 916.8485144976036,
            "unit": "ns/iter",
            "extra": "iterations: 761426\ncpu: 916.741105504661 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3805.3610619178435,
            "unit": "ns/iter",
            "extra": "iterations: 186907\ncpu: 3805.138336177871 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12483.976986066693,
            "unit": "ns/iter",
            "extra": "iterations: 56053\ncpu: 12483.336699195219 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 59350.63948992048,
            "unit": "ns/iter",
            "extra": "iterations: 12155\ncpu: 59348.52085561484 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 247590.98512007084,
            "unit": "ns/iter",
            "extra": "iterations: 2957\ncpu: 247571.14913764055 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 1007996.7191488179,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1007944.3872340391 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4249079.379518202,
            "unit": "ns/iter",
            "extra": "iterations: 166\ncpu: 4248785.674698786 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 17480216.30769122,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17478186.871794574 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 3962.08192636333,
            "unit": "ns/iter",
            "extra": "iterations: 176976\ncpu: 3961.8972572551893 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 16.875853820155953,
            "unit": "ns/iter",
            "extra": "iterations: 41653678\ncpu: 16.868051579982907 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 76.74904942296943,
            "unit": "ns/iter",
            "extra": "iterations: 9077907\ncpu: 76.7474897021972 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.6801693019417708,
            "unit": "ms/iter",
            "extra": "iterations: 1030\ncpu: 0.6800901262135801 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.40044366481066707,
            "unit": "ms/iter",
            "extra": "iterations: 1796\ncpu: 0.40042507238307057 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 358.08829120001064,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 358.06715539999914 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 363.0485884000336,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 363.01806859999886 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 15.673930102039023,
            "unit": "ns/iter",
            "extra": "iterations: 45863743\ncpu: 15.672411364244848 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 34.14968785893663,
            "unit": "ns/iter",
            "extra": "iterations: 21186735\ncpu: 34.1458186926864 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 79.07110191338005,
            "unit": "ns/iter",
            "extra": "iterations: 8451826\ncpu: 79.06384797793943 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 4.106361600000155,
            "unit": "ms/iter",
            "extra": "iterations: 165\ncpu: 4.105818551515182 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 16.16152918605029,
            "unit": "ms/iter",
            "extra": "iterations: 43\ncpu: 16.160056441860373 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 3103.5697423999864,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3103.3189460000017 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 3094.2548632000126,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3094.0603788000035 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "stephen.smith@stfc.ac.uk",
            "name": "Stephen",
            "username": "StephenSmith25"
          },
          "distinct": true,
          "id": "482d5807372f7f63104d3365ea41c1d04057b22a",
          "message": "Fix hexane benchmark files.",
          "timestamp": "2021-04-26T11:33:16+01:00",
          "tree_id": "c39ff85a388ea0f6b88d29850b1e19938456e8df",
          "url": "https://github.com/StephenSmith25/dissolve/commit/482d5807372f7f63104d3365ea41c1d04057b22a"
        },
        "date": 1619434361006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.080510400001003,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.076338800000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 26.098920599997655,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.0930818 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 410.00962359998994,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 409.89406119999995 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 635.0540376000026,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 634.9710120000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1637.6952410000285,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1637.6153956000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2386.856714600026,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2386.7295738 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.691805531690685,
            "unit": "ns/iter",
            "extra": "iterations: 80117486\ncpu: 8.691838995047831 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.822095323154361,
            "unit": "ns/iter",
            "extra": "iterations: 79522693\ncpu: 8.821515727592406 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.904689320962365,
            "unit": "ns/iter",
            "extra": "iterations: 39276113\ncpu: 18.904118083171788 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 18.492712735626704,
            "unit": "ns/iter",
            "extra": "iterations: 37971931\ncpu: 18.491819338868993 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.634887426124582,
            "unit": "ns/iter",
            "extra": "iterations: 56035071\ncpu: 12.626248729121782 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.550199818971052,
            "unit": "ns/iter",
            "extra": "iterations: 56247912\ncpu: 12.549230965231244 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.685566871165397,
            "unit": "ns/iter",
            "extra": "iterations: 51344418\ncpu: 13.684588536966135 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.555027207364342,
            "unit": "ns/iter",
            "extra": "iterations: 55991275\ncpu: 12.554017139277578 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.543235419399695,
            "unit": "ns/iter",
            "extra": "iterations: 56018654\ncpu: 12.542727909885208 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.645622378845157,
            "unit": "ns/iter",
            "extra": "iterations: 55400180\ncpu: 12.64467999923467 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.071807362628777,
            "unit": "ns/iter",
            "extra": "iterations: 53737860\ncpu: 13.07105366681893 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.047125049319225,
            "unit": "ns/iter",
            "extra": "iterations: 53178321\ncpu: 13.046525650932159 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.055949064473923,
            "unit": "ns/iter",
            "extra": "iterations: 53214098\ncpu: 13.055509124668449 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 13.46199794970795,
            "unit": "ns/iter",
            "extra": "iterations: 51797600\ncpu: 13.46137129905637 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 14.489846991986731,
            "unit": "ns/iter",
            "extra": "iterations: 48324004\ncpu: 14.489635709822375 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 16.46407598452747,
            "unit": "ns/iter",
            "extra": "iterations: 42598356\ncpu: 16.43105191665148 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.131794328690123,
            "unit": "ns/iter",
            "extra": "iterations: 40721168\ncpu: 17.131275139259287 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.962259417868033,
            "unit": "ns/iter",
            "extra": "iterations: 39580921\ncpu: 17.961226167526526 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 19.44976674053452,
            "unit": "ns/iter",
            "extra": "iterations: 32962006\ncpu: 19.449410330184218 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 24.972812295669673,
            "unit": "ns/iter",
            "extra": "iterations: 27916958\ncpu: 24.97140265067573 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 24.406389784023958,
            "unit": "ns/iter",
            "extra": "iterations: 27822161\ncpu: 24.405327393511822 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 23.473927827769817,
            "unit": "ns/iter",
            "extra": "iterations: 29546349\ncpu: 23.473000031239106 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 23.073034144720165,
            "unit": "ns/iter",
            "extra": "iterations: 29693755\ncpu: 23.072428394455265 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 23.46286308916331,
            "unit": "ns/iter",
            "extra": "iterations: 29805764\ncpu: 23.46191713119671 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 23.196009859123357,
            "unit": "ns/iter",
            "extra": "iterations: 28469471\ncpu: 23.195137205043107 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 23.69265172826242,
            "unit": "ns/iter",
            "extra": "iterations: 30423698\ncpu: 23.691581772866563 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 24.300098305439597,
            "unit": "ns/iter",
            "extra": "iterations: 30106168\ncpu: 24.29952772468424 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 25.261364634824126,
            "unit": "ns/iter",
            "extra": "iterations: 27713099\ncpu: 25.26020287373858 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 25.818586965961043,
            "unit": "ns/iter",
            "extra": "iterations: 26700022\ncpu: 25.817682247602644 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 26.17947765328037,
            "unit": "ns/iter",
            "extra": "iterations: 26671365\ncpu: 26.178206739699927 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 29.041142662016135,
            "unit": "ns/iter",
            "extra": "iterations: 24007659\ncpu: 29.03769647011371 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 29.934593924500234,
            "unit": "ns/iter",
            "extra": "iterations: 23517326\ncpu: 29.931377785042585 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 30.252292264309798,
            "unit": "ns/iter",
            "extra": "iterations: 22637769\ncpu: 30.251618876400745 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 35.19445857569031,
            "unit": "ns/iter",
            "extra": "iterations: 20040299\ncpu: 35.191289311601444 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 37.66443297951395,
            "unit": "ns/iter",
            "extra": "iterations: 18387087\ncpu: 37.66194340626109 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 37.55113024206488,
            "unit": "ns/iter",
            "extra": "iterations: 18722892\ncpu: 37.54936806771107 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 37.60303478910483,
            "unit": "ns/iter",
            "extra": "iterations: 18759722\ncpu: 37.602112493990894 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 37.12731095039661,
            "unit": "ns/iter",
            "extra": "iterations: 18762086\ncpu: 37.12617776083092 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 37.37197351119292,
            "unit": "ns/iter",
            "extra": "iterations: 18763699\ncpu: 37.37058972220804 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 37.30583853757209,
            "unit": "ns/iter",
            "extra": "iterations: 18742553\ncpu: 37.30427743755078 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 37.274479960973345,
            "unit": "ns/iter",
            "extra": "iterations: 18712346\ncpu: 37.273508997749296 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 37.31328147119579,
            "unit": "ns/iter",
            "extra": "iterations: 18705744\ncpu: 37.311634918129926 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 37.392221729086344,
            "unit": "ns/iter",
            "extra": "iterations: 18670062\ncpu: 37.389200314385846 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 37.50866738752486,
            "unit": "ns/iter",
            "extra": "iterations: 18730269\ncpu: 37.50723510698092 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 37.99474440416836,
            "unit": "ns/iter",
            "extra": "iterations: 18512078\ncpu: 37.993488251292014 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 40.00104850468971,
            "unit": "ns/iter",
            "extra": "iterations: 17530680\ncpu: 39.998821152402165 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 40.6673961180032,
            "unit": "ns/iter",
            "extra": "iterations: 17008674\ncpu: 40.66658570797504 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 43.29125699819438,
            "unit": "ns/iter",
            "extra": "iterations: 13524554\ncpu: 43.28906498506338 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 51.50709570545393,
            "unit": "ns/iter",
            "extra": "iterations: 10773136\ncpu: 51.50270487627713 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 70.98437350018365,
            "unit": "ns/iter",
            "extra": "iterations: 9813714\ncpu: 70.97960659949952 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 259.9612820928367,
            "unit": "ns/iter",
            "extra": "iterations: 2709289\ncpu: 259.9428425686592 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1014.4148482921249,
            "unit": "ns/iter",
            "extra": "iterations: 691460\ncpu: 1014.3812859746097 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4340.557584709983,
            "unit": "ns/iter",
            "extra": "iterations: 162465\ncpu: 4340.242526082538 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 23297.304808529345,
            "unit": "ns/iter",
            "extra": "iterations: 29822\ncpu: 23295.95831936144 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 126020.10098832643,
            "unit": "ns/iter",
            "extra": "iterations: 5565\ncpu: 126006.44797843782 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1039758.651851554,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1039709.4740740706 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5937248.821429161,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 5936674.3303570505 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 380.13220594113943,
            "unit": "ns/iter",
            "extra": "iterations: 1844138\ncpu: 380.1141281183947 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1493.4293802488896,
            "unit": "ns/iter",
            "extra": "iterations: 466994\ncpu: 1493.323284667454 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6188.111340862049,
            "unit": "ns/iter",
            "extra": "iterations: 113166\ncpu: 6187.627237862919 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 24699.235206842044,
            "unit": "ns/iter",
            "extra": "iterations: 28307\ncpu: 24697.8743067083 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 100305.95690638358,
            "unit": "ns/iter",
            "extra": "iterations: 7008\ncpu: 100301.91581050152 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 404099.2482639499,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 404069.2899305556 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2350750.4915823573,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 2350644.2020201725 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9603473.471429424,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 9603068.342857212 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 845.0226674717084,
            "unit": "ns/iter",
            "extra": "iterations: 831544\ncpu: 844.9861414429155 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3461.4590978256,
            "unit": "ns/iter",
            "extra": "iterations: 203730\ncpu: 3461.3246011879087 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11719.842553048835,
            "unit": "ns/iter",
            "extra": "iterations: 59709\ncpu: 11719.341439314014 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 54064.684397997924,
            "unit": "ns/iter",
            "extra": "iterations: 12915\ncpu: 54060.381726673615 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 224690.53897765523,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 224676.26964856454 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 865655.662145491,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 865624.0986436495 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4322624.372672061,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 4322456.086956518 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 18309250.3684209,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18308474.18421057 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 3829.264774989851,
            "unit": "ns/iter",
            "extra": "iterations: 178325\ncpu: 3829.0374316556286 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 24.03476202606611,
            "unit": "ns/iter",
            "extra": "iterations: 37345119\ncpu: 24.034497386392108 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 73.10408898225766,
            "unit": "ns/iter",
            "extra": "iterations: 9596789\ncpu: 73.10214322728245 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.5912994648369728,
            "unit": "ms/iter",
            "extra": "iterations: 1166\ncpu: 0.5912895368782197 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3773804313513628,
            "unit": "ms/iter",
            "extra": "iterations: 1850\ncpu: 0.37736253729729535 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 365.33696659998895,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 365.31189320000124 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 366.7143183999997,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 366.7002396000015 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 18.5691158900597,
            "unit": "ns/iter",
            "extra": "iterations: 37377331\ncpu: 18.56891526042888 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 73.13135070603674,
            "unit": "ns/iter",
            "extra": "iterations: 9662095\ncpu: 73.12842742697018 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 165.43591676281142,
            "unit": "ns/iter",
            "extra": "iterations: 4244113\ncpu: 165.4280903925044 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.8767663152181897,
            "unit": "ms/iter",
            "extra": "iterations: 184\ncpu: 3.876701804347805 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 23.684158862069722,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 23.683140793103274 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2844.848232200002,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2844.695924200002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2872.426455799996,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2872.281771400003 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}