var express = require('express'); /* server anayapısı için gerekli */
var app = express(); /* çağırdığımız express yapısını ayağa kaldırıyoruz.  */
var path = require('path'); /*  */

/* Aşağıdaki kodda eğer app diye çağırdığımız serverimizin "/" dizinine get metodu ile çağırma gerçekleşirse ne yapacağımızı söylüyoruz. */
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

/* Gelen istekleri hangi kapı ile karşılayacağımızı söylüyoruz. (İnternetteki bütün istekler bilgisayarların belirli kapılarından geçer. Örneğin normal bir chrome tarayıcı işlemleri 80 portundan gelir gider gibi.) */
var port = 8000;
app.listen(port, () => {
    console.log("Listening on 8000 port now...");
});
