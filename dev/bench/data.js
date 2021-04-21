window.BENCHMARK_DATA = {
  "lastUpdate": 1618997465200,
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
      }
    ]
  }
}