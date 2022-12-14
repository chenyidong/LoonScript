#!name= 91会员破解token
#!desc= 软件版本：7.0.1 下载地址：https://shrtm.nu/91porn
#!author= Hausd0rff
#!homepage= 
#!icon= 

var headers = $request.headers;
headers[$1X-AUTH-TOKEN] = "eyJhbGciOiJIUzUxMiIsImlhdCI6MTY3MDg0MTYwMSwiZXhwIjoxNjg2MzkzNjAxfQ.eyJpZCI6MTEyNDM1MTY0fQ.cDXTx14EaNf1TJzihOxOoIB4lyfwKnNNSrXbDiBj43kXzkzkqfftQRAqE23WTCuxQ45VYB-1IadrwxG_t3QoNA$2"
$done({
   headers
});
